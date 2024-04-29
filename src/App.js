import logo from './logo.svg';
import './App.css';
import Layout from './Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';

function App() {
  return (
    <div className="App">
      <Layout>

        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>} />
        </Routes>
        </BrowserRouter>

      </Layout>
    </div>
  );
}

export default App;
