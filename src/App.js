import React from 'react';
import { Route, Routes, BrowserRouter} from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import CreatePage from './pages/CreatePage.jsx';
import DetailsPage from './pages/DetailsPage.jsx';
import EditPage from './pages/EditPage.jsx';

function App() {
  return (
    <div className="App">
        <BrowserRouter>        
          <Routes>
              <Route path="/" element={<HomePage />}  />
          </Routes>
          <Routes>
              <Route path="/details/:id" element={<DetailsPage />}  />
          </Routes>
          <Routes>
              <Route path="/create" element={<CreatePage />}  />
          </Routes>
          <Routes>
              <Route path="/edit" element={<EditPage />}  />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


