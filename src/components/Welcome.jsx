import React from 'react'

const Welcome = ({ send }) => {
    
    const handleClick = () => {
        send('START')
    };

    return (
        <div className='welcome'>
            <h1
                className='welcome__title'
            >
                ¡Welcome!, continue buying that ticket.
            </h1>
            
            <button
                className='welcome__btn'
                onClick={handleClick}
            >Let's Fly</button>
        </div>
    )
}

export { Welcome }