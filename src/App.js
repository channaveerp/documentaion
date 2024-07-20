import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import GettingStarted from './pages/GettingStarted';
import Installation from './pages/Installation';
import Usage from './pages/Usage';
// import API from './pages/API';
// import Authentication from './pages/Authentication';
// import Endpoints from './pages/Endpoints';
// import Examples from './pages/Examples';

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/getting-started' element={<GettingStarted />} />
        <Route
          path='/getting-started/installation'
          element={<Installation />}
        />
        <Route path='/getting-started/usage' element={<Usage />} />
        {/* <Route path='/api' element={<API />} />
        <Route path='/api/authentication' element={<Authentication />} />
        <Route path='/api/endpoints' element={<Endpoints />} />
        <Route path='/examples' element={<Examples />} /> */}
      </Routes>
    </Layout>
  </Router>
);

export default App;
