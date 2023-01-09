import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.js';
// import ListScreen from './screens/ListScreen';
import Header from './components/Header.js';
import AltrenateTable from './screens/AlternateTable.js';
import EditScreen from './screens/EditScreen.js';
import NewEmployeeForm from './components/NewEmployeeForm.js';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/list" element={<AltrenateTable />} />
        {/* <Route path="/newemployee" element={<NewEmployeeForm />} /> */}
        <Route path="/list/:id" element={<EditScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
