
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { About } from './pages/About/about';
import { Contact } from './pages/Contact/contact';
import { Header } from './layouts/header';
import { Footerr } from './layouts/footer';
import { Shoporiginal } from './pages/Shop/shoporiginal';
import { ContextPovider } from './utils/ContextPovider';
import { Productpage } from './pages/product/productpage';
import { FirstSectionComponent } from './pages/loginform/components/login';
import { Formm } from './pages/loginform/form';
import { Formtest } from './pages/formtest/form';
import { Profile } from './pages/Profile/profile';
import { useState } from 'react';
import Cart from './pages/cartpage/cart';
function App() {
  
  const [profile, setProfile] = useState([
    {
      userName: "a",
      userEmail: "a",
      password: "a",
      image: "image", // Include the image in the user object
    }
  ])
  return (

    <>
    <ContextPovider>
    <Header/>
    
    <Routes>

    <Route path="/home" element={<HomePage/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/shop" element={<Shoporiginal/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/product" element={<Productpage/>}/>
    <Route path="/" element={<Formm profile={profile} setProfile={setProfile} />}/>
    <Route path="/register" element={<Formtest profile={profile} setProfile={setProfile} />}/>

    </Routes>
    <Footerr/>
    </ContextPovider>
    </>
    
  );
}
export default App;
