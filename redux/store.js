import { configureStore } from '@reduxjs/toolkit';

const exampleReducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    case 'increment':
      return { value: state.value + 1 };
    case 'decrement':
      return { value: state.value - 1 };
    default:
      return state;
  }
};

// Configure the store with reducers
export const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});

