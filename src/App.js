import { Route, Routes } from 'react-router-dom';
import './App.css';
import PostProvider from './components/contexts/data';
import Feedback from './screen/feedback/feedback';
import Main from './screen/main/main';
import "./sass/main.scss";

function App() {

  return (
        <PostProvider>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/feedback/:id' element={<Feedback />} />
         </Routes>
    </PostProvider>
  );

}

export default App;