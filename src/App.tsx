/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer';
import Browse from './layouts/browse/Browse';
import SOYULI_ROUTES from './routes/route';
import ProtectedRoute from './routes/ProtectedRoute';
import Payment from './pages/payment';
import News from './pages/news';

export default function App() {
  const [cond, setCond] = useState<boolean>(
    window.location.pathname === '/auth/login' ||
      window.location.pathname === '/register'
  );
  const location = useLocation();
  useEffect(() => {
    const cond =
      location.pathname === '/auth/login' || location.pathname === '/register';
    cond ? setCond(true) : setCond(false);
  }, [location]);
  const [value, setValue] = useState<string>('');
  const onSelect = (value: string) => {
    setValue(value);
  };
  const onChange = (data: string) => {
    setValue(data);
  };
  const onSearch = () => {
    console.log(1);
  };
  return (
    <div>
      <Helmet>
        <title>Soyuli Order</title>
      </Helmet>
      {!cond && (
        <Header
          onSearch={onSearch}
          onChange={onChange}
          value={value}
          onSeclect={onSelect}
        />
      )}

      <div>
        <Routes>
          {SOYULI_ROUTES.map((e) => (
            <Route path={e.path} element={e.element} />
          ))}
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/payment" element={<News />} />
            <Route path="/news" element={<Payment />} />
          </Route>
        </Routes>
        {/* <Browse/> */}
      </div>
      <Footer />
    </div>
  );
}
