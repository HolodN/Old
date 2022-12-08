import { useForm } from "react-hook-form"
import React from "react"
import style from "./form.module.css"

export default function Form(){

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    
return(

<div>
<form onSubmit={handleSubmit(onSubmit)}>
    <h1>Заполните заявку на обратный звонок</h1>
    <div>
    <div>
    <input
                     {...register("lastName", {
                            required: true,
                            maxLength: 50,
                            pattern: /^[А-Яа-я]+$/i 
                     })}
                        placeholder ="Фамилия"
                     />
    </div>
    </div>
</form>
    
</div>


)


}