import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
import Header from './components/Header';
import AltrenateTable from './screens/AlternateTable';
import EditScreen from './screens/EditScreen';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/list" element={<AltrenateTable />} />
        <Route path="/list/:id" element={<EditScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
