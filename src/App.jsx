import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Screens/HomePage';
import Header from './components/boundary/Header';
import Footer from './components/boundary/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
