import './App.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react'
import {Form, Input } from 'antd';
function App() {  
  const { register, handleSubmit, formState: { errors }} = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div className="app">
      <form onSubmit={handleSubmit(onSubmit)} className='form'>
        <label>First name</label>
        <input pattern="[A-Za-z]+" {...register('firstName',{required:true})} type='text' name='firstName'/>
        {errors.firstName && <span style={{color:'red'}}>First name is required!</span>}
        <label>Last name</label>
        <input {...register('lastName',{required:true, maxLength: 20 })} type='text' name='lastName'/>
        {errors.lastName && <span style={{color:'red'}}>Last name is required!</span>}
        <label>Email</label>
        <input {...register('email',{required:true})} type='email' name='email'/>
        {errors.email && <span style={{color:'red'}}>Email is required!</span>}
        <label>Phone number</label>
        <input {...register('phoneNumber',{required:true })} type='text' name='phoneNumber'/>
        {errors.phoneNumber && <span style={{color:'red'}}>Phone number is required!</span>}
        <input className='submit' type='submit' value='submit'/>
      </form>
    </div>
  );
}

export default App;
