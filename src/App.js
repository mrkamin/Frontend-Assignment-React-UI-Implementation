import { useSelector, useDispatch } from 'react-redux';
import Navbar from './components/Navbar';

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INC' });
  };
  const decrement = () => {
    dispatch({ type: 'DEC' });
  };

  return (
    <div>
      <Navbar />
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
      <button type="button" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

export default App;
