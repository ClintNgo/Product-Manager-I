import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './Main.js';
import Product from './Product.js';
import Update from './Update.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Main></Main>
          </Route>
          <Route exact path='/product/:id'>
            <Product></Product>
          </Route>
          <Route path="/product/edit/:id">
            <Update></Update>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
