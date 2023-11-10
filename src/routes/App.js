import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './home/Homepage';
import CreateTodoPage from './create/CreateTodoPage';
import EditTodoPage from './edit/EditTodoPage';

function App() {
  
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/create' element={<CreateTodoPage />}/>
        <Route path='/edit/:id' element={<EditTodoPage />}/>
        <Route path='*' element={<p>Not Found</p>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
