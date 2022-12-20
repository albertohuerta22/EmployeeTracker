import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/list" element={<ListScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
