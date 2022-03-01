
import './App.css';

import NavBar from './components/NavBar/navBar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {originals,action} from './urls'
function App() {
 
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netfix Originals" />
      <RowPost url={action} title="Action" isSmall />

    </div>
  );
}

export default App;











