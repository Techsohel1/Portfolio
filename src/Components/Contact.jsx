import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';


const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit =async data => {
    const userInfo= {
        name:data.name,
        email:data.email,
        messsage:data.message
    }
    try{
       await axios.post("https://getform.io/f/agddnrkb",userInfo);
       toast.success("Your message has been sent");
    }catch(error){
        console.log(error);
        toast.error("Something went wrong");

    }
  }

  return (
    <>
        <div name="Contacts" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
            <h1 className='text-3xl font-bold mb-4'>Contact me</h1>
            <span>Please fill out the form below to contact me</span>
            <div className='flex flex-col justify-center items-center mt-5'>
                <form onSubmit={handleSubmit(onSubmit)} 
                className='bg-slate-200 w-96 px-8 py-6 rounded-xl' 
                // action="https://getform.io/f/agddnrkb" method="POST"
                >
                
                <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>FullName</label>
                        <input {...register("name", { required: true })} 
                        type="text" placeholder='enter your fullname ' id='name' name='name' className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus-outline'/>
                    {errors.name && <span>This field is required</span>}
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>Email Address</label>
                        <input {...register("email", { required: true })} 
                        type="text" placeholder='email address' id='email' name='email' className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus-outline'/>
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>Message`</label>
                        <textarea {...register("message", { required: true })} 
                        type="text" placeholder='email address' id='message' name='message' className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus-outline'/>
                        {errors.message && <span>This field is required</span>}
                    </div>
                    <button type='submit' className='bg-black text-white rounded px-3 py-2 hover:bg-slate-700 duration'>Send</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Contact
