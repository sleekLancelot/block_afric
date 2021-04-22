import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './css/App.css';
import Navbar from './component/layout/Navbar';
import Home from './component/pages/Home';
import Dummy from './component/pages/Dummy';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' children={<Home />} />
          <Route path='/(activity|wallet|market|earn|profile|notification)/' component={Dummy} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
