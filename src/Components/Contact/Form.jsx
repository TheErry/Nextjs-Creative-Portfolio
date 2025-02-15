"use client"
import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-md w-full flex flex-col items-center justify-center space-y-4' >
      <input type="text" placeholder="Name" {...register("name", {required: true})} 
      className='w-full p-2 text-foreground rounded-md shadow-lg focus:outline-hidden focus:ring-2 focus:ring-accent/50 custom-bg'/>
      <input type="email" placeholder="Email" {...register("email", {required: true})} 
      className='w-full p-2 text-foreground rounded-md shadow-lg focus:outline-hidden focus:ring-2 focus:ring-accent/50 custom-bg'/>
      <textarea placeholder='Message' {...register("message", {required: true, max: 256, min: 10})} 
      className='w-full p-2 text-foreground rounded-md shadow-lg focus:outline-hidden focus:ring-2 focus:ring-accent/50 custom-bg'/>

      <input 
      value="Send message"
      classname="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid
      hover:shadow-glass-sm backdrop-blur-xs text-foreground focus:outline-hidden focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize" 
      type="submit" />
    </form>
  );
}