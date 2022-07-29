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
          <Route exact path="/" element={<News  key="General"category="General"  page={1}/>} />
          <Route exact path="/Business" element={<News key="Business" category="Business" page={1} />} />
          <Route exact path="/Entertainment" element={<News key="Entertainment" category="Entertainment" page={1} />} />
          <Route exact path="/Health" element={<News key="Health" category="Health" page={1} />} />
          <Route exact path="/Science" element={<News key="Science" category="Science" page={1} />} />
          <Route exact path="/Sports" element={<News key="Sports" category="Sports" page={1} />} />
          <Route exact path="/Technology" element={<News key="Technology" category="Technology" page={1} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
