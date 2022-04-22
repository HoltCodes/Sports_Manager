import './App.css';
import React from 'react';
import { ReactDOM } from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import IndexView from './views/IndexView';
import CreateView from './views/CreateView';
import DetailView from './views/DetailView';
import EditView from './views/EditView';

function App() {
  return (
    <div className="App">
      <Router>
          <IndexView path="/" />
          <CreateView path="/create" />
          <DetailView path="/:id" />
          <EditView path="/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
