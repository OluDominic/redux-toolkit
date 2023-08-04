const redux = require('redux');
const createStore = redux.createStore;
const bindActionsCreator = redux.bindActionCreators

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

function orderCake() {
 return {
    type: CAKE_ORDERED,
    payload: 1,
 }
}

function restockCake(qty=1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty,
    }
}

function orderIceCream(qty=1) {
    return {
        type: ICECREAM_ORDERED,
        payload: qty
    }
}

function restockIceCream(qty=1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty,
    }
}

const initialCakeState = {
    numOfCakes: 10,
}

const initialIceCreamState = {
    numOfIceCream: 20,
}


//(previousState, action) => newState

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCake: state.numOfCakes - 1
            }
        case CAKE_RESTOCKED: 
        return {
            ...state,
            numOfCakes: state.numOfCakes + action.payload
        };
    
        default:
            return state;
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED: 
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - 1
            }
            
        case ICECREAM_RESTOCKED: 
            return {
                ...state,
                numOfIceCream: state.numOfIceCream + action.payload
            };

        default:
            return state;
    }
}

const store = createStore(reducer);
console.log('Initial state: ', store.getState());

const unsubscribe = store.subscribe(()=> {
    console.log('Updated state: ', store.getState())
});

const actions = bindActionsCreator({ orderCake, restockCake, orderIceCream, restockIceCream}, store.dispatch);
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(3)
actions.orderIceCream()
actions.orderIceCream()
actions.restockIceCream(2)

unsubscribe();
