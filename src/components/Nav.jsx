import React from 'react'

//import img logo
import log from '../assets/zyro-image.png'

export const Nav = ({ state, send }) => {

    const handleClick = () =>{
        send('CANCEL')
    };

    return (
        <div className='nav'>
            <img src={log} alt="AirPlane Icon" 
            className='nav__logo'/>
            
            {(!state.matches('inicial') && !state.matches('ticket')) && 
                <button
                    onClick={handleClick}
                    className="nav__cancel"
                    >
                    Cancel
                </button>}
        </div>
    )
}
