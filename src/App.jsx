import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AddBookForm from './components/AddBookForm'; // We’ll create this next
import './App.css'; // Import global styles

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-book" element={<AddBookForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
