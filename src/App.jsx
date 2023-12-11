import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CryptoHome from './page/CryptoHome';
import CryptoDetail from './page/CryptoDetail';
import Navbar from './component/navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CryptoHome />} />
        <Route path="/coin/:id" element={<CryptoDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
