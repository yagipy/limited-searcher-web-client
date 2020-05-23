import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import {AppRouter} from "../router";
import RootWithRouter from "../features/location";

function App() {
  return (
    <div className="App">
      <Router>
        <RootWithRouter>
          <AppRouter/>
        </RootWithRouter>
      </Router>
    </div>
  );
}

export default App;
