import React from "react";
import CommentsForm from "./Comments.Form";

const Comments = () => {
    const [comments, setComment] = React.useState(null);
    return (
        <>
            <div className="flex items-center pb-5 px-5 bg-gray-100 h-full overflow-y-auto">
                <div className="flex flex-col">
                    <div className="text-sm">
                        <p className="ml-2 underline cursor-pointer hover:text-gray-500">51 commentaires</p>
                    </div>
                    <div className="my-2">
                        <h3>Nom </h3>
                        <p>lorem ipsum</p>
                    </div>
                </div>
            </div>
            <CommentsForm setComment={setComment} />
        </>
    )
}

export default Comments