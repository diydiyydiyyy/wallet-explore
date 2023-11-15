// import { configureStore, createSlice } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux';

// // Buat slice untuk mengelola state
// const todosSlice = createSlice({
//   name: 'todos',
//   initialState: [],
//   reducers: {
//     setTodos: (state, action) => {
//       return action.payload;
//     },
//   },
// });

// // Export action creators dari slice
// export const { setTodos } = todosSlice.actions;

// // Buat store Redux
// export const store = configureStore({
//   reducer: {
//     todos: todosSlice.reducer,
//   },
// });

// // Export useDispatch hook
// export const useAppDispatch = () => useDispatch();

// // Setup Redux DevTools Extension
// if (process.env.NODE_ENV === 'development' && module.hot) {
//   module.hot.accept('./redux', () => {
//     const newRootReducer = require('./redux').default;
//     store.replaceReducer(newRootReducer);
//   });
// }
