import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from "./home/home";
import Post from "./post/post";
import Read from "./post/read";
import Header from "./layout/header";
import Footer from "./layout/footer";


function App() {
  return (
    <div>
      <Header/>
      <div>
        <main ClassName="body">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/blog" element={<Post/>} />
            <Route path="/blog/:fileName" element={<Read/>} />
          </Routes>
        </main>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
