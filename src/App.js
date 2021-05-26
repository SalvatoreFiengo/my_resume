import {useState} from 'react';
import Header from './components/header/header';
import CvCard from './components/main/cvCard/cvCard';
import Presentation from './components/main/cvCard/presentation';
import Skills from './components/main/skills/skills';
import WorkHistory from './components/main/workHistory/workHistory';

function App() {
  const [cvPosition,setCvPosition] = useState(0) 
  const [skillPosition,setSkillPosition] = useState(0)
  const [WorkHistoryPos,setWorkHistoryPos] = useState(0)
  return (
    <div>
      <Header cvPosition={cvPosition} skillPosition={skillPosition} WorkHistoryPos={WorkHistoryPos}/>
      <div className='content'>
        <CvCard setCvPosition = {setCvPosition}/>
        <Presentation/>
        <Skills setSkillPosition = {setSkillPosition} />
        <WorkHistory setWorkHistoryPos = {setWorkHistoryPos}/>
      </div>
    </div>
  );
}

export default App;
