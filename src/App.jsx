import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import About from './pages/About';
import NoPage from './pages/NoPage';
import Blogs from './pages/Blogs';
import BlogsDetail from './pages/BlogsDetail';
import PlacesRoute from './pages/PlacesRoute';
import Home from './pages/Home';
import AOS from 'aos';
import 'aos/dist/aos.css'


const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogsDetail />} />
          <Route path="/places" element={<PlacesRoute />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
