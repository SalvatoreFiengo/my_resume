import {useState} from 'react';
import Header from './components/header/header';
import CvCard from './components/main/cvCard/cvCard';
import Presentation from './components/main/cvCard/presentation';
import Skills from './components/main/skills/skills';
import InfoSection from './components/main/infoSection';
import Education from './components/main/education/education';
import WorkHistoryList from './components/main/workHistory/workHistoryList';
import Footer from './components/footer/footer';

function App() {
  const [cvPosition,setCvPosition] = useState(0); 
  const [skillPosition,setSkillPosition] = useState(0);
  const [WorkHistoryPos,setWorkHistoryPos] = useState(0);
  const [EducationPos,setEducaitonPos] = useState(0)
  return (
    <div>
      <Header cvPosition={cvPosition} skillPosition={skillPosition} WorkHistoryPos={WorkHistoryPos} EducationPos={EducationPos}/>
      <div className='content'>
        <CvCard setCvPosition = {setCvPosition}/>
        <Presentation/>
        <Skills setSkillPosition = {setSkillPosition} />
        <InfoSection setPos = {setEducaitonPos} list={Education} text={'Education'}/>
        <InfoSection setPos = {setWorkHistoryPos} list={WorkHistoryList} text={'Work History'}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
