import { FC, useState } from 'react';
import Header from './components/header/header';
import CvCard from './components/main/cvCard/cvCard';
import Presentation from './components/main/cvCard/presentation';
import Skills from './components/main/skills/skills';
import InfoSection from './components/main/infoSection';
import Education from './components/main/education/education';
import Portfolio from './components/main/portfolio/portfolio';
import WorkHistoryList from './components/main/workHistory/workHistoryList';
import Footer from './components/footer/footer';


const App:FC = () => {
  const [cvPosition,setCvPosition] = useState(0); 
  const [skillPosition,setSkillPosition] = useState(0);
  const [portfolioPos,setPortfolioPos] = useState(0);
  const [workHistoryPos,setWorkHistoryPos] = useState(0);
  const [educationPos,setEducaitonPos] = useState(0);
   
  return (
    <div>
      <Header cvPosition={cvPosition} skillPosition={skillPosition} workHistoryPos={workHistoryPos} educationPos={educationPos} portfolioPos={portfolioPos}/>
      <div className='content'>
        <CvCard setCvPosition = {setCvPosition}/>
        <Presentation/>
        <Skills setSkillPosition = {setSkillPosition} />
        <InfoSection setPos = {setPortfolioPos} list = {Portfolio} text={'Portfolio'}/>
        <InfoSection setPos = {setEducaitonPos} list={Education} text={'Education'}/>
        <InfoSection setPos = {setWorkHistoryPos} list={WorkHistoryList} text={'Work History'}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
