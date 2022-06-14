import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritePage from './pages/Favorite';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div>
      <Layout>
       <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
      </Routes>
      </Layout>
    </div> 
  );  
}

export default App;
