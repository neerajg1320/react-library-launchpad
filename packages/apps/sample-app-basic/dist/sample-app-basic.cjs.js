'use strict';

var React = require('react');
var require$$0 = require('react-dom');

var createRoot;

var m = require$$0;
if (process.env.NODE_ENV === 'production') {
  createRoot = m.createRoot;
  m.hydrateRoot;
} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  createRoot = function (c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}

var App = function App() {
  return /*#__PURE__*/React.createElement("h1", null, "App");
};

var root = createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(App, null));
