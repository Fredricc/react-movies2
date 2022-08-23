import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Menu from './Menu';
import routes from './Movies/RouteComponents/RouteConfig';
import configureValidations from './Validations';

configureValidations();

function App() {
  

  return(
    <BrowserRouter>
    <Menu />
    <div className='container'>
      <Switch>
        {routes.map(route =>
          <Route key={route.path} path={route.path} exact={route.exact}>
            <route.component />
          </Route>
          )}
      </Switch>
    </div>
    <footer className='bd-footer py-p mt-5 bg-light'>
      <div className='container'>
        <div className='mb-10'>
        React Movies {new Date().getFullYear().toString()}
        <div className="card-group">
  <div className="card">
    
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div className="card">
    
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div className="card">
    
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
        </div>
      </div>
    </footer>
    </BrowserRouter>
  )
}

export default App;

