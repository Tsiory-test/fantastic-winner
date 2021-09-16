import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import CarList from "./pages/Cars/CarList";
import HomePage from "./pages/HomePage/HomePage";
import AddCar from "./pages/Cars/components/AddCar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cars" component={CarList} />
          <Route exact path="/add-car" component={AddCar} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
