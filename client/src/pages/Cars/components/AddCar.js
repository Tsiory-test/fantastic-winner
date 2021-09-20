import React from 'react';
import { useForm } from 'react-hook-form';

const AddCar = ({ setCar }) => {
    // const [car, setCar] = React.useState(null);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        setCar({
            marque: data.marque,
            photo: data.photo[0].name
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="border w-1/2 mx-auto my-10 rounded shadow">
                <h2 className="text-center m-2 font-bold">Ajouter une nouvelle voiture</h2>
                <div className="grid grid-cols-1 m-4">
                    <label className="md:text-sm text-xs text-gray-500 text-light font-semibold">Marque de la voiture
                    </label>
                    <input
                        type="text"
                        {...register('marque', { required: true })}
                        className="px-3 rounded border-2 border-none bg-gray-200 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-b-transparent"
                    />
                </div>
                <div className="grid grid-cols-1 m-4">
                    <label className="md:text-sm text-xs text-gray-500 text-light font-semibold">Insérer une photo
                    </label>
                    <input
                        type="file"
                        {...register('photo', { required: true })}
                        className="px-3 rounded border-2 border-none bg-gray-200 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-b-transparent"
                    />
                </div>
                <div className="flex items-center justify-center md:gap-8 gap-4 py-2">
                    <button
                        type="submit"
                        className="w-auto bg-blue-500 hover:bg-blue-700 rounded shadow-xl font-medium text-white p-1 focus:outline-none ">Valider
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddCar;