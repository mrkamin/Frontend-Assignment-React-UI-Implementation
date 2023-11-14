// Import necessary React libraries and components
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// Import global styles
import './index.css';

// Import the main App component and the Redux store
import App from './App';
import store from './redux/store';

// Create a React root for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped with Redux Provider in StrictMode
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
