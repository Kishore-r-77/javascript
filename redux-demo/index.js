const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

//constant
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICE_ORDERED = "ICE_ORDERED";
const ICE_RESTOCKED = "ICE_RESTOCKED";

//Action Creater
function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

function orderIceCream() {
  return {
    type: ICE_ORDERED,
    payload: 1,
  };
}

function restockIceCream(qty = 1) {
  return {
    type: ICE_RESTOCKED,
    payload: qty,
  };
}

//state
const cakeState = {
  numOfCakes: 10,
};

const iceCreamState = {
  numOfIceCreams: 20,
};

//reducer
const cakeReducer = (state = cakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = iceCreamState, action) => {
  switch (action.type) {
    case ICE_ORDERED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    case ICE_RESTOCKED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};

//combine Reducers
const rootReducers = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

//store
const store = createStore(rootReducers, applyMiddleware(logger));

console.log("initial State", store.getState());

const unsubscribe = store.subscribe(() => {});

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restock(3));

const actions = bindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);

actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);

actions.orderIceCream();
actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(5);

unsubscribe();
