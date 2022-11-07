
//Functionalty using useState hook

// import React, { useState } from 'react';
// import './style.css';
// import buttons from './buttons';

// export default function App() {
//   const [result, setResult] = useState('');

//   const onClickHandler = (e) => {
//     setResult(result + e.target.value);
//   };

//   const clear = (e) => {
//     setResult(result.substr(0, result.length - 1));
//   };

//   const reset = (e) => {
//     setResult('');
//   };

//   const evaluation = (e) => {
//     try {
//       setResult(
//         String(eval(result)).length > 3 && String(eval(result)).includes('.')
//           ? String(eval(result).toFixed(4))
//           : String(eval(result))
//       );
//     } catch (err) {
//       setResult('C');
//     }
//   };

//   return (
//     <div className="container">
//       <div className="calc">
//         <input type="text" value="input" value={result} readOnly />

//         <div className="btn-grid">
//           <button value="AC" onClick={reset} className="operator">
//             AC
//           </button>
//           <button value="clear" onClick={clear} className="operator">
//             Clear
//           </button>
//           <button value="%" onClick={onClickHandler} className="operator">
//             %
//           </button>
//           <button value="/" onClick={onClickHandler} className="operator">
//             /
//           </button>
//           {buttons.map((button) => {
//             return (
//               <button
//                 value={button}
//                 onClick={onClickHandler}
//                 className="btn-num"
//                 key={button}
//               >
//                 {button}
//               </button>
//             );
//           })}
//           <button value="*" onClick={onClickHandler} className="operator">
//             *
//           </button>
//           <button value="-" onClick={onClickHandler} className="operator">
//             -
//           </button>
//           <button value="+" onClick={onClickHandler} className="operator">
//             +
//           </button>
//           <button value="." onClick={onClickHandler} className="operator">
//             .
//           </button>
//           <button value="=" onClick={evaluation} className="operator equal">
//             =
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useReducer } from 'react';
import './style.css';
import buttons from './buttons';

export default function App() {
  function reducer(state, action) {
    switch (action.type) {
      case 'click':
        return { ...state, result: state.result + action.payload };
        break;
      case 'del':
        return {
          ...state,
          result: state.result.substr(0, state.result.length - 1),
        };
        break;
      case 'reset':
        return { ...state, result: '' };
        break;
      case 'evaluation':
        return {
          ...state,
          result:
            String(eval(state.result)).length > 3 &&
            String(eval(state.result)).includes('.')
              ? String(eval(state.result).toFixed(4))
              : String(eval(state.result)),
        };
        break;
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, { result: ' ' });

  const onClickHandler = (event) => {
    dispatch({ type: 'click', payload: event.target.value });
  };

  const del = (event) => {
    dispatch({ type: 'del', payload: event.target.value });
  };

  const reset = (event) => {
    dispatch({ type: 'reset' });
  };

  const evaluation = (event) => {
    dispatch({ type: 'evaluation', payload: event.target.value });
  };

  return (
    <div className="container">
      <div className="calc">
        <input type="text" value="input" value={state.result} readOnly />

        <div className="btn-grid">
          <button value="AC" onClick={reset} className="operator">
            AC
          </button>
          <button value="del" onClick={del} className="operator">
            DEL
          </button>
          <button value="%" onClick={onClickHandler} className="operator">
            %
          </button>
          <button value="/" onClick={onClickHandler} className="operator">
            /
          </button>
          {buttons.map((button) => {
            return (
              <button
                value={button}
                onClick={onClickHandler}
                className="btn-num"
                key={button}
              >
                {button}
              </button>
            );
          })}
          <button value="*" onClick={onClickHandler} className="operator">
            *
          </button>
          <button value="-" onClick={onClickHandler} className="operator">
            -
          </button>
          <button value="+" onClick={onClickHandler} className="operator">
            +
          </button>
          <button value="." onClick={onClickHandler} className="operator">
            .
          </button>
          <button value="=" onClick={evaluation} className="operator equal">
            =
          </button>
        </div>
      </div>
    </div>
  );
}
