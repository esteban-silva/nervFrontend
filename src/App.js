import './assets/css/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Importo componentes
import ListarTicketComponent from './components/ListarTicketComponent.js';

function App() {
  return (

      // Menu
      <Router>    
          <Switch>
            <Route path='/' exact component={ListarTicketComponent} />
          </Switch>
      </Router> 
  );
}

export default App;
