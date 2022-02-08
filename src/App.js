import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Comidas from './pages/Comidas';
import Login from './pages/Login';
import Bebidas from './pages/Bebidas';
import Explorar from './pages/Explorar';
import Perfil from './pages/Perfil';
import ReceitasFeitas from './pages/ReceitasFeitas';
import ReceitasFavoritas from './pages/ReceitasFavoritas';
import ExplorarIngBebidas from './pages/ExplorarIngBebidas';
import ExplorarIngComidas from './pages/ExplorarIngComidas';
import ExplorarBebidas from './pages/ExplorarBebidas';
import ExplorarComidas from './pages/ExplorarComidas';
import ExplorarAreaBebidas from './pages/ExplorarAreaBebidas';
import ExplorarAreaComidas from './pages/ExplorarAreaComidas';
import ReceitaEmProcesso from './pages/ReceitaEmProcesso';
import DetalhesReceita from './pages/DetalhesReceita';
import ComidasProvider from './context/ComidasProvider';

function App() {
  return (
    <ComidasProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Comidas } />
        <Route exact path="/bebidas" component={ Bebidas } />
        <Route exact path="/explorar" component={ Explorar } />
        <Route exact path="/perfil" component={ Perfil } />
        <Route exact path="/receitas-feitas" component={ ReceitasFeitas } />
        <Route exact path="/receitas-favoritas" component={ ReceitasFavoritas } />
        <Route exact path="/explorar/bebidas" component={ ExplorarBebidas } />
        <Route exact path="/explorar/comidas" component={ ExplorarComidas } />
        <Route exact path="/explorar/comidas/area" component={ ExplorarAreaComidas } />
        <Route exact path="/explorar/bebidas/area" component={ ExplorarAreaBebidas } />
        <Route exact path="/bebidas/:idBebida" component={ DetalhesReceita } />
        <Route exact path="/comidas/:idComida" component={ DetalhesReceita } />
        <Route
          exact
          path="/bebidas/:idBebida/in-progress"
          component={ ReceitaEmProcesso }
        />
        <Route
          exact
          path="/comidas/:idComida/in-progress"
          component={ ReceitaEmProcesso }
        />
        <Route
          exact
          path="/explorar/bebidas/ingredientes"
          component={ ExplorarIngBebidas }
        />
        <Route
          exact
          path="/explorar/comidas/ingredientes"
          component={ ExplorarIngComidas }
        />
      </Switch>
    </ComidasProvider>
  );
}

export default App;
