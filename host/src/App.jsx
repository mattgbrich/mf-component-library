import React from "react";
import ReactDOM from "react-dom";

const Remote1 = React.lazy(() => import('remote1/App'));
const Remote2 = React.lazy(() => import('remote2/App'));
import "./index.css";

const App = () => (
  <div className="container">
    <h1>Host App</h1>
    <React.Suspense fallback="Loading Remote1...">
      <Remote1 />
    </React.Suspense>
    <React.Suspense fallback="Loading Remote2...">
      <Remote2 />
    </React.Suspense>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
