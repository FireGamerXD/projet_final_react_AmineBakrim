
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { About } from './pages/About/about';
import { Contact } from './pages/Contact/contact';
import { Header } from './layouts/header';
import { Footerr } from './layouts/footer';
function App() {
  return (

    <>
    <Header/>
    
    <Routes>

    <Route path="/" element={<HomePage/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>

    </Routes>
    <Footerr/>
    </>
    
  );
}
export default App;
