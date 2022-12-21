import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home'
import { Start } from './pages/Start';



function App() {
  return (

    <BrowserRouter>

      <Header />
      
      

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/Start' element={<Start />} />
        {/* <a className='start' href="#">Start Legacy 650</a> */}

      </Routes>



    </BrowserRouter>

  );
}

export default App;
