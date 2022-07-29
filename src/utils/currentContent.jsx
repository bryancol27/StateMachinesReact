import React from 'react';

import { Welcome } from '../components/Welcome';
import { Search } from '../components/Search';
import { Passengers } from '../components/Passengers';
import { Ticket } from '../components/Ticket';


const CurrentContent = ({ state, send }) => {

    if(state.matches('inicial')){
        return (<Welcome send={send}/> )
    }

    else if(state.matches('search')){
        return <Search state={state} send={send}/>
    }

    else if(state.matches('passengers')){
        return <Passengers state={state} send={send}/>
    }

    else if(state.matches('ticket')){
        return <Ticket state={state}/>
    }
};

export { CurrentContent }