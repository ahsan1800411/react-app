import React, { useReducer, createContext } from 'react';
import './App.css';
// import FetchingOne from './components/FetchingOne';
import FetchingTwo from './components/FetchingTwo';
// import CounterContext from './components/CounterContext';
// import CounterThree from './components/CounterThree';
// import CounterOne from './components/CounterOne';
// import CounterTwo from './components/CounterTwo';

// const initialState = {
//   count: 0,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };

//     case 'decrement':
//       return { count: state.count - 1 };

//     case 'reset':
//       return { count: 0 };

//     default:
//       return state;
//   }
// };

// export const CountContext = createContext();

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      {/* <CountContext.Provider value={{ state, dispatch }}>
        <CounterContext />
      </CountContext.Provider> */}
      {/* <FetchingOne /> */}
      <FetchingTwo />
    </>
  );
}

export default App;
