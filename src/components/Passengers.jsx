import React, { useState } from 'react'

const Passengers = ({ state, send }) => {

    const [ passenger, setPassenger ] = useState(''); 

    const pushPassengers = (e) => {
        setPassenger(e.target.value)
    };
    
    const handleClickAdd = () => {
        if(passenger){
            send('ADD', { passenger })
            document.getElementById('namePassengers').value =''
        }
    };

    const handleClickTicket = () => {
        send('CHECKOUT')
    };

    

    return (
        <div className='passengers'>
            
            {state.context.passengers.map(person => <span key={person}>{person}</span>)}
            
            <form action="">
                <label htmlFor="">Put the name here: </label>
                <input
                    onChange={pushPassengers}
                    type="text" name='name' id='namePassengers'/>
            </form>
            
            <div className='passengers__container'>
                <button
                    onClick={handleClickAdd}
                    className='passengers__container-btn1'
                    >
                    add
                </button>
                
                <button
                    className='passengers__container-btn2'
                    onClick={handleClickTicket}
                >
                    NextStep
                </button>
            </div>

        </div>
    )
};

export { Passengers }
