import {useState, useEffect, useRef} from 'react';
import Svg from './svg/svg';

const InfoSection = ({setPos, list:List, text})=>{

    const [height, setHeight] = useState(100)

    const spyScroll = useRef();

    const handleSpyScroll = ()=>{
        setPos(spyScroll.current.offsetTop);
    };

    useEffect(handleSpyScroll);

    return(
        <div ref={spyScroll} className='mt-5'>
            <h3 className='text-center'>
                {text}
            </h3>
            <div className='custom-card mx-auto'>
                <Svg height={height}/>
                <List setHeight={setHeight}/>
            </div>
        </div>
        
    );
};
export default InfoSection;