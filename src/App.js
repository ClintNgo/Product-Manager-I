import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './Main.js';
import Product from './Product.js';

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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
