import React from "react";
import Brain from '../../media/brain.png'
import Tilt from 'react-parallax-tilt';


const Navigation = () => {
    
    return(
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop:'30px'
            }}>
            <Tilt scale = {1.2}>
                <img className = 'pl4' src ={Brain} alt = "brain" width = '100'/>
            </Tilt>
            <p className = 'f3 white pr4 link dim pointer'>Sign out</p>
        </nav>
    )
}

export default Navigation;