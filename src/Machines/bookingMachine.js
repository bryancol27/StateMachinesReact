import { assign, createMachine } from 'xstate';
import { fetchCountries } from '../utils/api';

const initialContext = {
    passengers: [],
    selectedCountry: '',
    countries: [],
    error: '',
}

const CANCEL = {
    target: 'inicial',
    actions: assign({
        ...initialContext
    })
};

const fillCountries = {
    initial: "loading",
    states: {
        loading: {
            invoke: {
                id: 'getCountries',
                src: () => fetchCountries(),
                onDone: {
                    target: 'success',
                    actions: assign({ countries: (context, event) => event.data })
                },
                onError: {
                    target: 'failure',
                    actions: assign({
                        error : 'fallo en el request'
                    })
                }
            }
        },
        success: {},
        failure: {
            on: {
                RETRY: {
                    target: "loading"
                }
            }
        }
    }
};

const bookingMachine = createMachine(
    {
        id: 'Booking of a airplane',

        initial: 'inicial',

        context: {
            ...initialContext
        },

        states: {
            inicial: {
                on: {
                    START: {
                        target: 'search',
                    }
                }
            },
            search: {
                on:{
                    SELECT: {
                        target: 'search',
                        actions: assign({
                            selectedCountry: (context, event )  => event.selectedCountry
                        }),
                    },
                    NEXT: {
                        target: 'passengers',
                        cond: 'oneCountrySelected'
                    },
                    CANCEL
                },
                ...fillCountries
            },
            passengers: {
                on: {
                    ADD: {
                        target: 'passengers',
                        actions: assign({
                            passengers: (context, event) => [...context.passengers, event.passenger]
                        })
                    },
                    CHECKOUT: {
                        target: 'ticket',
                        cond: 'morenThanOnePassenger',
                    },
                    CANCEL
                }
            },
            ticket: {
                after:{
                    4000:{
                        target: 'inicial',
                        actions: CANCEL.actions
                    }
                },
                on: {
                    CONFIRM: CANCEL
                }
            },
        },
    },
    {
        actions: {
            imprimirInicio: () => console.log('imprimir inicio'),
            imprimirEntrada: () => console.log('entrando a search'),
            imprimirSalida: () => console.log('Saliendo de search'),
            sayHelloSearch: () => console.log('Hola Search soy estado loading')
        },
        guards:{
            morenThanOnePassenger: (context) => {
                return (context.passengers.length > 0)
            },
            oneCountrySelected: (context) => {
                return (context.selectedCountry)
            },
        }
    }
);

export default bookingMachine;


