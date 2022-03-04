import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter, Route, Routes, Link,
} from 'react-router-dom';
import Home from './components/Home';
import PracticeMode from './components/PracticeMode';
import TimedMode from './components/TimedMode';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
    
          <Route path="/" element={<Home />} />
          <Route path="/practice-mode" element={<PracticeMode />} />
          <Route path="/timed-mode" element={<TimedMode />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
