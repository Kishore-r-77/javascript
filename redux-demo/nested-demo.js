var redux = require("redux");
var createStore = redux.createStore;
var produce = require("immer").produce;

//constants
const UPDATE_STREET = "UPDATE_STREET";

//state
const personState = {
  name: "Kishore",
  address: {
    street: "Alwarpet",
    state: "Tamil Nadu",
  },
};

//action creators
const updateStreet = (street) => {
  return {
    type: UPDATE_STREET,
    payload: street,
  };
};

//reducer

const updateStreetReducer = (state = personState, action) => {
  switch (action.type) {
    case UPDATE_STREET:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

const store = createStore(updateStreetReducer);

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(updateStreet("Bedford"));

unsubscribe();
