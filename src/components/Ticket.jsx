import React from 'react'

const Ticket = ({ state }) => {

    return (
        <div className='ticket'>
            <div className='ticket__loading'></div>

            <div className='ticket__example'>
                <div className='ticket__example-destiny'>
                    <p>{state.context.selectedCountry}</p>
                </div>
                <div className='ticket__example-passengers'>
                    {state.context.passengers.map(person => <span key={person}>{person}</span>)}
                </div>
            </div>

            <h2 className='ticket__title'>Completed</h2>
        </div>
    )
};

export { Ticket }
