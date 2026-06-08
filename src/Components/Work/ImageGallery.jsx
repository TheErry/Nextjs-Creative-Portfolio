"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";

const getYoutubeVideoId = (src) => {
  const embedMatch = src.match(/youtube\.com\/embed\/([^?&/]+)/);
  if (embedMatch) return embedMatch[1];

  const watchMatch = src.match(/[?&]v=([^&]+)/);
  if (watchMatch) return watchMatch[1];

  const shortMatch = src.match(/youtu\.be\/([^?&/]+)/);
  if (shortMatch) return shortMatch[1];

  return null;
};

const getYoutubeThumbnail = (src) => {
  const id = getYoutubeVideoId(src);
  return id ? `https://img.youtube.com/vi/${id}/mqdefault.jpg` : null;
};

const withAutoplay = (src) => {
  const separator = src.includes("?") ? "&" : "?";
  return `${src}${separator}autoplay=1`;
};

const normalizeMedia = (media, images) => {
  const raw = media?.length
    ? media
    : images?.length
      ? images
      : [];

  return raw.map((item) => ({ ...item, type: item.type ?? "image" }));
};

const ImageGallery = ({ media, images, className = "" }) => {
  const items = useMemo(() => normalizeMedia(media, images), [media, images]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [mounted, setMounted] = useState(false);
  const isOpen = selectedIndex !== null;

  useEffect(() => {
    setMounted(true);
  }, []);

  const close = useCallback(() => setSelectedIndex(null), []);

  const goPrev = useCallback(() => {
    setSelectedIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  }, [items.length]);

  const goNext = useCallback(() => {
    setSelectedIndex((i) => (i === items.length - 1 ? 0 : i + 1));
  }, [items.length]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close, goPrev, goNext]);

  if (!items.length) return null;

  const selected = isOpen ? items[selectedIndex] : null;

  return (
    <>
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 w-full mt-4 ${className}`}
      >
        {items.map((item, index) => (
          <button
            key={`${item.type}-${item.src}-${index}`}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-accent/30 hover:border-accent/60 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={`View ${item.alt}`}
          >
            {item.type === "video" ? (
              <>
                {(item.thumbnail ?? getYoutubeThumbnail(item.src)) ? (
                  // eslint-disable-next-line @next/next/no-img-element -- external YouTube thumbnails
                  <img
                    src={item.thumbnail ?? getYoutubeThumbnail(item.src)}
                    alt={item.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-background/60" aria-hidden />
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/60 rounded-full p-3">
                    <Play size={24} className="text-white fill-white" />
                  </div>
                </div>
              </>
            ) : (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, 200px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            )}
          </button>
        ))}
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && selected && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 pt-16 pb-12 sm:p-8 sm:pt-20 sm:pb-16"
                onClick={close}
                role="dialog"
                aria-modal="true"
                aria-label={selected.alt}
              >
                <button
                  type="button"
                  onClick={close}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full border border-accent/30 bg-black/50 text-foreground hover:border-accent/60 hover:text-accent transition-colors"
                  aria-label="Close gallery"
                >
                  <X size={24} />
                </button>

                {items.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        goPrev();
                      }}
                      className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full border border-accent/30 bg-black/50 text-foreground hover:border-accent/60 hover:text-accent transition-colors"
                      aria-label="Previous item"
                    >
                      <ChevronLeft size={28} />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        goNext();
                      }}
                      className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full border border-accent/30 bg-black/50 text-foreground hover:border-accent/60 hover:text-accent transition-colors"
                      aria-label="Next item"
                    >
                      <ChevronRight size={28} />
                    </button>
                  </>
                )}

                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-full h-full max-w-[min(100%,1200px)] max-h-[calc(100dvh-8rem)] flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  {selected.type === "video" ? (
                    <iframe
                      src={withAutoplay(selected.src)}
                      title={selected.alt}
                      className="w-full aspect-video max-h-[calc(100dvh-8rem)] rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <Image
                      src={selected.src}
                      alt={selected.alt}
                      width={1200}
                      height={800}
                      className="w-auto h-auto max-w-full max-h-[calc(100dvh-8rem)] object-contain rounded-lg"
                      priority
                    />
                  )}
                </motion.div>

                {items.length > 1 && (
                  <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-muted font-light">
                    {selectedIndex + 1} / {items.length}
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};

export default ImageGallery;
