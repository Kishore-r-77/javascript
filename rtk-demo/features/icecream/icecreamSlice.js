const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

//state
const initialState = {
  numOfIceCreams: 20,
};

//slice
const icecreamSlice = createSlice({
  name: "Ice Cream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--;
    },
    restocked: (state, actions) => {
      if (!actions.payload) {
        actions.payload = 1;
      }
      state.numOfIceCreams += actions.payload;
    },
  },
  // extraReducers: {
  //   ["cake/ordered"]: (state) => {
  //     state.numOfIceCreams--;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIceCreams--;
    });
  },
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
