import React, { useEffect } from 'react';
import { useMachine } from '@xstate/react';
import bookingMachine from '../Machines/bookingMachine';

//import components that should be inside the container
import { CurrentContent } from '../utils/currentContent';

import { Nav } from '../components/Nav'

const BaseLayout = () => {
    const [ state, send ] = useMachine(bookingMachine);

    console.log(state.context)

    return (
        <React.Fragment>

            <Nav state={state} send={send}/>

            <div className='App__container'>
                <CurrentContent state={state} send={send} />
            </div>

        </React.Fragment>
    );
};

export { BaseLayout }