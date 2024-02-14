
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { About } from './pages/About/about';
import { Contact } from './pages/Contact/contact';
function App() {
  return (

    <>
    <Headers/>
    
    <Routes>

    <Route path="/" element={<HomePage/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>

    </Routes>

    </>
    
  );
}
export default App;
