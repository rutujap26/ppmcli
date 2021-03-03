import './App.css';
import Dashboard from './components/Dashboard';
import HeaderComponent from './components/layout/HeaderComponent';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProject from './components/projects/AddProject';
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <HeaderComponent />
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route path="/addProject" component={AddProject} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
