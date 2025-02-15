"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const sendEmail = (params) => {

    const toastId = toast.loading('Sending message, please wait...')
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID, 
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 5000, // so you can't send more than 1 email/5sec
          }
        }
      )
      .then(
        () => {
          toast.success('Message sent successfully!', {id: toastId});
        },
        (error) => {
          toast.error('An error occurred, please try again later.', {id: toastId});
        },
      );
  };

  const onSubmit = data => {
    const templateParams = {
      to_name: 'Erry',
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    }

    sendEmail(templateParams);
  }
  
  return (
    <>
      <Toaster richColors={true} />
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-md w-full flex flex-col items-center justify-center space-y-4' >
      <input type="text" placeholder="Name" {...register("name", {required: "This field is required", 
      minLength:{
        value: 2,
        message: "The name should be at least 2 characters long"
      } })} 
      className='w-full p-2 text-foreground rounded-md shadow-lg focus:outline-hidden focus:ring-2 focus:ring-accent/50 custom-bg'/>
      {errors.name && <span className='inline-block self-start text-accent'>{errors.name.message}</span>}

      <input type="email" placeholder="Email" {...register("email", {required: "This field is required"})} 
      className='w-full p-2 text-foreground rounded-md shadow-lg focus:outline-hidden focus:ring-2 focus:ring-accent/50 custom-bg'/>
      {errors.email && <span className='inline-block self-start text-accent'>{errors.email.message}</span>}
      
      <textarea placeholder='Message' {...register("message", {required: "This field is required", maxLength: {
        value: 500,
        message: "The message should be at most 500 characters long"
      }, minLength: {
        value: 10,
        message: "The message should be at least 10 characters long"
      }})} 
      className='w-full p-2 text-foreground rounded-md shadow-lg focus:outline-hidden focus:ring-2 focus:ring-accent/50 custom-bg'/>
      {errors.message && <span className='inline-block self-start text-accent'>{errors.message.message}</span>}

      <input 
      value="Send message"
      className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid
      hover:shadow-glass-sm backdrop-blur-xs text-foreground focus:outline-hidden focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize" 
      type="submit" />
    </form>
  </>
  );
}