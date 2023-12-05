import { createSlice } from '@reduxjs/toolkit';

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    result: 0,
    isFirst:true
  },
  reducers: {
    toplama: (state, action) => {
      state.isFirst ? state.result = action.payload : state.result += action.payload
      state.isFirst = false
    },
    cixma: (state, action) => {
      state.result -= action.payload;
    },
    vurma: (state, action) => {
      state.isFirst ? state.result = action.payload : state.result *= action.payload
      state.isFirst = false
    },
    bolme: (state, action) => {
      state.result /= action.payload;
    },
    reset: (state) => {
      state.isFirst = true
      state.result = 0;
    },
  },
});

export const { toplama, cixma, vurma, bolme, reset } = calculatorSlice.actions;

export default calculatorSlice.reducer;
