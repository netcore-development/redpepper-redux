import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./store";


// Componentes
import Personas from './components/Personas';
import NuevaPersona from './components/NuevaPersona';
import EditarPersona from './components/EditarPersona';
import Header from "./components/Header";


function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Personas} />
            <Route exact path="/personas/nueva" component={NuevaPersona}/>
            <Route exact path="/personas/editar/:id" component={EditarPersona} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
