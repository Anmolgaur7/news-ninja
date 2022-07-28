import './App.css';
import Navbar from "./components/Navbar";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className='mt-4'>

        </div>
        <Routes>
          <Route exact path="/" element={<News  key="General"category="General" />} />
          <Route exact path="/Business" element={<News key="Business" category="Business" />} />
          <Route exact path="/Entertainment" element={<News key="Entertainment" category="Entertainment" />} />
          <Route exact path="/Health" element={<News key="Health" category="Health" />} />
          <Route exact path="/Science" element={<News key="Science" category="Science" />} />
          <Route exact path="/Sports" element={<News key="Sports" category="Sports" />} />
          <Route exact path="/Technology" element={<News key="Technology" category="Technology" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
