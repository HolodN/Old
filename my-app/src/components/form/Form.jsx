import { useForm } from "react-hook-form";
import React from "react";
import style from "./form.module.css"


export default function Form(){

    const { register, handleSubmit, formState:{errors} } = useForm();
    const onSubmit = data => console.log(data);

    return(
        <div className={style.form}>
            <form id="form" onSubmit={handleSubmit(onSubmit)}>
            <h1>Заполните заявку на обратный звонок</h1>
            <div>
                <div className="input-group mb-3"> 
                     <input
                     {...register("lastName", {
                            required: true,
                            maxLength: 50,
                            pattern: /^[А-Яа-я]+$/i 
                     })}
                     type="text"
                     className="form-control"
                     placeholder="Фамилия"
                    />
                </div>
                {errors?.lastName?.type === "required" &&(
                    <p>Поле Фамилия обязательно для заполнения</p>
                )}
                {errors?.lastName?.type === "maxLength" &&(
                    <p>Фамилия не может содержать более 50 символов</p>
                )}
                {errors?.lastName?.type === "pattern" &&(
                    <p>Поле заполненно некорректно</p>
                )}
                
            </div>
            <div>
                <input className="btn btn-outline-primary" type="submit"/>
            </div>
            </form>
        </div>
    )
}