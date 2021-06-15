import { FC, useRef, useEffect, MutableRefObject } from 'react';
import  EducationCard  from './educationCard';
 
type EducationProps = {
    setHeight:(value: number) => void,
    animation: boolean
}
const Education: FC<EducationProps> = ( { setHeight, animation } )=>{
    const divHeight = useRef() as MutableRefObject<HTMLDivElement>;

    useEffect(()=>{
        const svgHeightHandler = ()=>{
            setHeight(divHeight.current.clientHeight - 50)
        };
        svgHeightHandler()
        window.addEventListener('resize',svgHeightHandler)
        return ()=>window.removeEventListener('resize',svgHeightHandler)
    },[setHeight]);

    return(
        <div ref={ divHeight } className='row'>
            <div className='col-12 col-md-6'>
                <EducationCard animation = {animation} direction = 'left'/>
            </div>
            <div className='col-12 col-md-6'>
                <EducationCard animation = {animation} direction = 'right'/>
            </div>
        </div>
    );
};
export default Education; 