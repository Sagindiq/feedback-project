import { Route, Routes } from 'react-router-dom';
import './App.css';
import Feedback from './components/feedback/feedback';
import Main from './components/main/main';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/feedback' element={<Feedback />} />
    </Routes>
  );

}

export default App;
