import React from "react";


const ImageHolder = ({imageUrl, imageError, boundingBox}) => {

    const regions = boundingBox.map((region, i) => {
        return (
            <div
            key = {i}
            style = {{
                position: 'absolute',
                backgroundColor: 'red',
                top:`${region.top_row * 100}%`,
                bottom:`${100 - (region.bottom_row * 100)}%`,
                left:`${region.left_col * 100}%`,
                right:`${100 - (region.right_col * 100)}%`,
                backgroundColor: 'rgba(0,250,50,0.5)',
                border:'3px solid rgb(0,250, 50)',
                borderRadius: '10px'
                }}
        >
        <p style = {{
            position:'absolute',
            width:'100px',
            color:'rgb(0,250,50)',
            top:'-20px',
            fontWeight:'600',
            fontSize:'8px'
            }}>Face: {i+1}</p>
        </div>
        )
    })

    
    return(
        <>
            <div className = 'flex justify-center'>
                <div
                    className = 'w-60 mt4  absolute'>
                    <img
                        style = {{width:'100%'}}
                        id = 'imageForDetect'
                        src = {imageUrl} alt = 'image-for-detect'
                        onError={imageError}
                        >
                    </img>
                    {regions}
                    <p
                        style = {{bottom:'-40px', fontWeight:'500'}}
                        className = 'absolute'>
                    There are <span className = "f3">{boundingBox.length}</span> faces detected.
                    </p>
                </div>
                
            </div>
        </>
    )
}

export default ImageHolder;