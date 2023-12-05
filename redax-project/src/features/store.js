import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './calculator/CalculatorSlice'
import todosSlice from './todo/todoSlice'
import counterReducer from './Counter/CounterSlice'
import  todo2Slice  from './todo2/Todo2Slice';
const store = configureStore({
  reducer: {
    todos:todosSlice,
    calculator: calculatorReducer,
    counter:counterReducer,
    todo2:todo2Slice,
  },
});

export default store;
