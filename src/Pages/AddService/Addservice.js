import React from 'react';
import { useForm } from "react-hook-form";

const Addservice = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h1>This is Add Service pages</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("Name", { required: true, maxLength: 20 })} placeholder="Name" />
            <textarea {...register("description")} placeholder="description" />
            <input type="number" {...register("price")} placeholder="price" />
            <input  {...register("img")} placeholder="img"/>
            <input type="submit" />
           </form>
        </div>
    );
};

export default Addservice;