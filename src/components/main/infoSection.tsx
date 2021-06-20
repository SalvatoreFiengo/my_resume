import { FC, useState, useEffect, useRef, MutableRefObject, ElementType } from 'react';
import Svg from './svg/svg';
import { CustomCard } from '../../styles/styles';

type InfoSectionProps = {
    setPos : ( value:number )=> void,
    list : ElementType,
    text : string
}

const InfoSection:FC<InfoSectionProps> = ({setPos, list:List, text})=>{

    const [height, setHeight] = useState('100');
    const [animation, toggleAnimation] = useState(false);
    
    const spyScroll = useRef() as MutableRefObject<HTMLDivElement>;
    
    const handleSpyScroll = ()=>{
        setPos(spyScroll.current.offsetTop);
    };

    useEffect(handleSpyScroll);

    useEffect(()=>{
        const topPosition = spyScroll.current.getBoundingClientRect().top;
        const handleAnimationEffectOnScroll = ()=>{
            const scrollPosition = window.scrollY + window.innerHeight;

            if( topPosition < scrollPosition ){
                toggleAnimation(true);
            }else if( topPosition > scrollPosition ){
                toggleAnimation(false);
            };          
        };

        window.addEventListener('scroll',handleAnimationEffectOnScroll);
        return ()=>window.removeEventListener('scroll',handleAnimationEffectOnScroll);
    },[]);

    return(
        <div ref={ spyScroll } className='mt-5 mb-lg-3'>
            <h3 className='text-center'>
                { text }
            </h3>
            <CustomCard className='mx-auto'>
                <Svg height={ height }/>
                <List setHeight={ setHeight } animation={ animation }/>
            </CustomCard>
        </div>
        
    );
};
export default InfoSection;