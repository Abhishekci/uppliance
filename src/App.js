import React from 'react';
import Counter from './components/Counter'; // Adjust the import path according to your project structure
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import RichTextEditor from './components/RichTextEditor';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/editor' element={<RichTextEditor/>} />
        <Route path='/counter' element={<Counter/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
