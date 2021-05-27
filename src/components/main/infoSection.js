import {useState, useEffect, useRef} from 'react';
import Svg from './svg/svg';

const InfoSection = ({setPos, list:List, text})=>{

    const [height, setHeight] = useState(100)
    const [animation, toggleAnimation] = useState(false)
    
    const spyScroll = useRef();
    
    const handleSpyScroll = ()=>{
        setPos(spyScroll.current.offsetTop);
    };

    useEffect(handleSpyScroll);

    useEffect(()=>{
        const topPosition = spyScroll.current.getBoundingClientRect().top;
        const handleAnimationEffectOnScroll = ()=>{
            const scrollPosition = window.scrollY + window.innerHeight
            if(topPosition < scrollPosition){
                toggleAnimation(true);
            }else if(topPosition > scrollPosition){
                toggleAnimation(false);
            }          
        };

        window.addEventListener('scroll',handleAnimationEffectOnScroll);
        return ()=>window.removeEventListener('scroll',handleAnimationEffectOnScroll);
    },[]);

    return(
        <div ref={spyScroll} className='mt-5 mb-lg-3'>
            <h3 className='text-center'>
                {text}
            </h3>
            <div className='custom-card mx-auto'>
                <Svg height={height}/>
                <List setHeight={setHeight} animation={animation}/>
            </div>
        </div>
        
    );
};
export default InfoSection;