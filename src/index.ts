import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    React.createElement(React.StrictMode, null, React.createElement(App))
  );
} else {
  console.error("Elemento 'root' não encontrado no DOM.");
}
