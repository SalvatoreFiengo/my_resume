
import Header from './components/header';
import CvCard from './components/cvCard';
import Presentation from './components/presentation';
import Skills from './components/skills';
import WorkHistory from './components/workHistory';
function App() {
  return (
    <div>
      <Header/>
      <div className='content'>
        <CvCard/>
        <Presentation/>
        <Skills/>
      </div>
    </div>
  );
}

export default App;
