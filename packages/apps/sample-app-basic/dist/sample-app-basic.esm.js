import React from 'react';
import { createRoot } from 'react-dom/client';

var App = function App() {
  return /*#__PURE__*/React.createElement("h1", null, "App");
};

var root = createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(App, null));
console.log("Root should be rendered");
