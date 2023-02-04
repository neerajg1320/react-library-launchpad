'use strict';

var React = require('react');
var client = require('react-dom/client');

var App = function App() {
  return /*#__PURE__*/React.createElement("h1", null, "App");
};

var root = client.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(App, null));
console.log("Root should be rendered");
