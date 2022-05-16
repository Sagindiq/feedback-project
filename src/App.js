import { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FeedbackPosts from './components/feedback-posts/feedback-posts';
import Feedback from './components/feedback/feedbacks';
import Main from './components/main/main';
import "./sass/main.scss";

export const PostContext = createContext();

function App() {

    const [ PostArray, setFeedback ] = useState(null);


  useEffect(() => {

        fetch('/data.json')
            .then(response => response.json())
            .then(data => setFeedback(data))

    }, []);

    if (!PostArray) {
      return null;
    }

  return (
        <PostContext.Provider value={{PostArray, setFeedback}}>
            <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/feedback/:id' element={<Feedback />} />
         </Routes>
    </PostContext.Provider>
  );

}

export default App;
