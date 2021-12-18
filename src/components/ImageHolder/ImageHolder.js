import React from "react";


const ImageHolder = ({imageUrl, imageError}) => {
    return(
        <div className = 'flex justify-center shadow'>
            <img
                className = 'w-60 mt4 pa3 shadow-4'
                src = {imageUrl} alt = 'image-for-detect'
                onError={imageError}
                />
        </div>
    )
}

export default ImageHolder;