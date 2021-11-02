
import './App.css';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import About from './components/About/About';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import DoctorDetails from './components/DoctorDetails/DoctorDetails';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/services/:id">
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute path="/doctorDetail/:key">
              <DoctorDetails></DoctorDetails>
            </PrivateRoute>
            <Route path="/blog">
              <Blogs></Blogs>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>


    </div>
  );
}

export default App;
