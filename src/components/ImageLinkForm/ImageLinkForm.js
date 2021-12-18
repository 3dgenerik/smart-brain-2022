import React from 'react';

const ImageLinkForm = ({inputChange, buttonSubmit}) => {
    const style = {
        outline: 'none'
    }
    return(
        <div className = 'pt4'>
            <p className = 'tc f4 black'>This Magic brain will detect faces in your pictures. Try it now.</p>
            <div className = 'flex justify-center'>
                <form className = 'w-80 ba b--white-40 br3 flex justify-center pa3'>
                    <input
                        style = {style}
                        className = 'w-80 pa3'
                        type='search'
                        name = 'detectSearch'
                        placeholder='type url for detection'
                        onChange = {inputChange}
                        />
                        
                    <input
                        className = 'w-20 pointer'
                        type='submit'
                        name = 'detectButton'
                        value = 'detect'
                        onClick={buttonSubmit}
                        />
                </form>
            </div>
        </div>
    )
}
export default ImageLinkForm;