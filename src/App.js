import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import About from './components/About/About';
import BookAppointments from './components/BookAppointments/BookAppointments';
import Detail from './components/Detail/Detail';
import Doctors from './components/Doctors/Doctors';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Services from './components/Services/Services';
import AuthProvider from './context/AuthProvider';
import initializeAuthentication from './Firebase/firebase.init';

initializeAuthentication();

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'><Home></Home></Route>
            <Route path='/home'><Home></Home></Route>
            <Route path='/about'><About></About></Route>
            <Route path='/doctors'><Doctors></Doctors></Route>
            <Route path='/services'><Services></Services></Route>

            <PrivateRoute path='/details/:detailsId'><Detail></Detail></PrivateRoute>
            <PrivateRoute path='/bookings'><BookAppointments></BookAppointments></PrivateRoute>

            <Route path='/login'><Login></Login></Route>
            <Route path='*'><NotFound></NotFound></Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
