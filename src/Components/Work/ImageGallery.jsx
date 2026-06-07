"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const ImageGallery = ({ images, className = "" }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const isOpen = selectedIndex !== null;

  const close = useCallback(() => setSelectedIndex(null), []);

  const goPrev = useCallback(() => {
    setSelectedIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const goNext = useCallback(() => {
    setSelectedIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

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

  if (!images?.length) return null;

  const selected = isOpen ? images[selectedIndex] : null;

  return (
    <>
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 w-full mt-4 ${className}`}
      >
        {images.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-accent/30 hover:border-accent/60 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={`View ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 50vw, 200px"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {isOpen && selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-8"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={selected.alt}
          >
            <button
              type="button"
              onClick={close}
              className="absolute top-4 right-4 z-10 p-2 rounded-full border border-accent/30 text-foreground hover:border-accent/60 hover:text-accent transition-colors"
              aria-label="Close gallery"
            >
              <X size={24} />
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                  className="absolute left-2 sm:left-6 z-10 p-2 rounded-full border border-accent/30 text-foreground hover:border-accent/60 hover:text-accent transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                  }}
                  className="absolute right-2 sm:right-6 z-10 p-2 rounded-full border border-accent/30 text-foreground hover:border-accent/60 hover:text-accent transition-colors"
                  aria-label="Next image"
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
              className="relative max-w-[min(100%,1200px)] max-h-[85vh] w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selected.src}
                alt={selected.alt}
                width={1200}
                height={800}
                className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg"
                priority
              />
            </motion.div>

            {images.length > 1 && (
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-muted font-light">
                {selectedIndex + 1} / {images.length}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGallery;
