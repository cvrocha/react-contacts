import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter, Form} from "react-router-dom";
import './css/style.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/HomePage.jsx';
import DetailsPage from './pages/DetailsPage.jsx';
import CreatePage from './pages/CreatePage.jsx';
import EditPage from './pages/EditPage.jsx'
import List from './model/list';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <>
    <div className="App">
        <BrowserRouter>        
          <Routes>
              <Route path="/" element={<HomePage element={List}/>}  />
          </Routes>
          <Routes>
              <Route path="/details/:id" element={<DetailsPage />}  />
          </Routes>
          <Routes>
              <Route path="/edit/:id" element={<EditPage />}  />
          </Routes>
          <Routes>
              <Route path="/create" element={<CreatePage />}  />
          </Routes>
      </BrowserRouter>
    </div>
  </>
  
);
reportWebVitals();
