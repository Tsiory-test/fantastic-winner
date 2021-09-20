import React from "react";
import { useForm } from "react-hook-form";

const CommentsForm = ({ setComment }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (value) => {
        setComment(value)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="m-2 flex items-center">
            <input
                {...register('content', { required: true })}
                type="text"
                placeholder="Commenter"
                className="w-full focus:outline-none p-2 bg-gray-300 rounded" />
            <span className="m-1">
                <button className="bg-blue-500 p-1 text-sm text-white rounded">Valider</button>
            </span>
        </form>
    )
}
export default CommentsForm