import { FC, MutableRefObject, useEffect, useRef } from 'react';
import SkillList from './skillList'
import { cardTitles, frontEnd, backEnd, game } from '../../../mock-data/data';
import { CustomCardAnimated, Animated } from '../../../styles/styles';

type SkillsProp= {
    setSkillPosition: (pos:number)=>void
}

const Skills:FC<SkillsProp> = ({ setSkillPosition })=>{
    const spyScroll = useRef()as MutableRefObject<HTMLDivElement>;
    const handleSpyScroll = ()=>{
        const pos = spyScroll.current.offsetTop
        setSkillPosition(pos);
    };

    useEffect(handleSpyScroll);
    
    return(
        <Animated ref={ spyScroll }>
            <h3 className='text-center mt-5 mb-3'>Programming Skills</h3>
            <CustomCardAnimated className='card mx-auto'>
                <div className='card-body'>
                    
                    <div className='row flex-column flex-md-row'>
                        <div className='col'>
                            <SkillList cardTitle={ cardTitles[0] } skills={ frontEnd }></SkillList>
                        </div>

                        <div className='col'>
                            <SkillList cardTitle={ cardTitles[1] } skills={ backEnd }></SkillList>
                        </div>

                        <div className='col'>
                            <SkillList cardTitle={ cardTitles[2] } skills={ game }></SkillList>
                        </div>
                    </div>
                </div>
            </CustomCardAnimated>
        </Animated>
        
    )
};
export default Skills;