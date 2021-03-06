import React from 'react';
import AddCar from './components/AddCar';
import Comments from './components/Comments/Comments';

const CarList = () => {
    const [show, setShow] = React.useState(false);
    const [cars, setCar] = React.useState(null);

    return (
        <>
            <span className="mt-10 flex justify-center">
                <b className="cursor-pointer bg-green-500 text-white hover:bg-green-700 rounded p-1"
                    onClick={() => setShow(!show)}>Ajouter une nouvelle voiture
                </b>
            </span>
            {show ? <AddCar setCar={setCar} /> : null}

            <h1 className="text-center font-bold text-2xl mt-10 uppercase">Liste des voitures disponibles</h1>
            <div className="flex flex-wrap justify-around">
                <div className="rounded overflow-hidden shadow-lg bg-white w-1/4 h-96 m-8 flex flex-col items-between">
                    <div className="w-full">
                        <img src="http://source.unsplash.com/ugo3jZ_qtKo/604x253" alt=" " className="w-full h-full" />
                    </div>
                    <div className="p-2">
                        <h1 className="text-2xl text-center justify-between font-bold">Nom de la voiture</h1>
                    </div>

                    <Comments />
                </div>
                <div className="rounded overflow-hidden shadow-lg bg-white w-1/4 h-96 m-8 flex flex-col items-between">
                    <div className="w-full">
                        <img src="http://source.unsplash.com/ugo3jZ_qtKo/604x253" alt=" " className="w-full h-full" />
                    </div>
                    <div className="p-2">
                        <h1 className="text-2xl text-center justify-between font-bold">Nom de la voiture</h1>
                    </div>
                    <div className="flex items-center pb-5 px-5 bg-gray-100 h-full overflow-y-auto">
                        <div className="flex flex-col">
                            <div className="text-sm">
                                <p className="ml-2 underline cursor-pointer hover:text-white">51 commentaires</p>
                            </div>
                            <div className="my-2">
                                <h3>Nom </h3>
                                <p>lorem ipsum</p>
                            </div>
                            <div className="my-2">
                                <h3>Nom </h3>
                                <p>lorem ipsum</p>
                            </div>
                            <div className="my-2">
                                <h3>Nom </h3>
                                <p>lorem ipsum</p>
                            </div>
                            <div className="my-2">
                                <h3>Nom </h3>
                                <p>lorem ipsum</p>
                            </div>
                        </div>
                    </div>
                    <div className="m-2 flex items-center">
                        <input type="text" placeholder="Commenter" className="w-full focus:outline-none p-2 bg-gray-300 rounded" />
                        <span className="m-1">
                            <button className="bg-blue-500 p-1 text-sm text-white rounded">Valider</button>
                        </span>
                    </div>
                </div>
                <div className="rounded overflow-hidden shadow-lg bg-white w-1/4 h-96 m-8 flex flex-col items-between">
                    <div className="w-full">
                        <img src="http://source.unsplash.com/ugo3jZ_qtKo/604x253" alt=" " className="w-full h-full" />
                    </div>
                    <div className="p-2">
                        <h1 className="text-2xl text-center justify-between font-bold">Nom de la voiture</h1>
                    </div>
                    <div className="flex items-center pb-5 px-5 bg-gray-100 h-full overflow-y-auto">
                        <div className="flex flex-col">
                            <div className="text-sm">
                                <p className="ml-2 underline cursor-pointer hover:text-white">51 commentaires</p>
                            </div>
                            <div className="my-2">
                                <h3>Nom </h3>
                                <p>lorem ipsum</p>
                            </div>
                            <div className="my-2">
                                <h3>Nom </h3>
                                <p>lorem ipsum</p>
                            </div>
                            <div className="my-2">
                                <h3>Nom </h3>
                                <p>lorem ipsum</p>
                            </div>
                            <div className="my-2">
                                <h3>Nom </h3>
                                <p>lorem ipsum</p>
                            </div>
                        </div>
                    </div>
                    <div className="m-2 flex items-center">
                        <input type="text" placeholder="Commenter" className="w-full focus:outline-none p-2 bg-gray-300 rounded" />
                        <span className="m-1">
                            <button className="bg-blue-500 p-1 text-sm text-white rounded">Valider</button>
                        </span>
                    </div>
                </div>
                <div className="rounded overflow-hidden shadow-lg bg-white w-1/4 h-96 m-8 flex flex-col items-between">
                    <div className="w-full">
                        <img src="http://source.unsplash.com/ugo3jZ_qtKo/604x253" alt=" " className="w-full h-full" />
                    </div>
                    <div className="p-2">
                        <h1 className="text-2xl text-center justify-between font-bold">Nom de la voiture</h1>
                    </div>
                    <div className="flex items-center pb-5 px-5 bg-gray-100 h-full overflow-y-auto">
                        <div className="flex flex-col">
                            <div className="text-sm">
                                <p className="ml-2 underline cursor-pointer hover:text-white">51 commentaires</p>
                            </div>
                            <div className="my-2">
                                <h3>Nom </h3>
                                <p>lorem ipsum</p>
                            </div>
                            <div className="my-2">
                                <h3>Nom </h3>
                                <p>lorem ipsum</p>
                            </div>
                            <div className="my-2">
                                <h3>Nom </h3>
                                <p>lorem ipsum</p>
                            </div>
                            <div className="my-2">
                                <h3>Nom </h3>
                                <p>lorem ipsum</p>
                            </div>
                        </div>
                    </div>
                    <div className="m-2 flex items-center">
                        <input type="text" placeholder="Commenter" className="w-full focus:outline-none p-2 bg-gray-300 rounded" />
                        <span className="m-1">
                            <button className="bg-blue-500 p-1 text-sm text-white rounded">Valider</button>
                        </span>
                    </div>
                </div>
                <div className="rounded overflow-hidden shadow-lg bg-white w-1/4 h-96 m-8 flex flex-col items-between">
                    <div className="w-full">
                        <img src="http://source.unsplash.com/ugo3jZ_qtKo/604x253" alt=" " className="w-full h-full" />
                    </div>
                    <div className="p-2">
                        <h1 className="text-2xl text-center justify-between font-bold">Nom de la voiture</h1>
                    </div>
                    <div className="flex items-center pb-5 px-5 bg-gray-100 h-full overflow-y-auto">
                        <div className="flex flex-col">
                            <div className="text-sm">
                                <p className="ml-2 underline cursor-pointer hover:text-white">51 commentaires</p>
                            </div>
                            <div className="my-2">
                                <h3>Nom </h3>
                                <p>lorem ipsum</p>
                            </div>
                            <div className="my-2">
                                <h3>Nom </h3>
                                <p>lorem ipsum</p>
                            </div>
                            <div className="my-2">
                                <h3>Nom </h3>
                                <p>lorem ipsum</p>
                            </div>
                            <div className="my-2">
                                <h3>Nom </h3>
                                <p>lorem ipsum</p>
                            </div>
                        </div>
                    </div>
                    <div className="m-2 flex items-center">
                        <input type="text" placeholder="Commenter" className="w-full focus:outline-none p-2 bg-gray-300 rounded" />
                        <span className="m-1">
                            <button className="bg-blue-500 p-1 text-sm text-white rounded">Valider</button>
                        </span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CarList;