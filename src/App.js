
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Booking from './Pages/Booking/Booking';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';



function App() {
  return (
    <div className="App">
      
     <AuthProvider>
     <BrowserRouter>
     <Header></Header>
     <Routes>
       <Route path="/" element={<Home></Home>} > </Route>
       <Route path="/home" element={<Home></Home>} ></Route>
       <Route path="/login" element={<Login></Login>} ></Route>
       <Route path="/Services"element={<Services></Services>} ></Route>
       <Route path="/booking/:serviceId"element={<Booking></Booking>} ></Route>
       <Route path="*"element={<NotFound></NotFound>} ></Route>
     </Routes>
     </BrowserRouter>
      
     </AuthProvider>
     
    </div>
  );
}

export default App;
