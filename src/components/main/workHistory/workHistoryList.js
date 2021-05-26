import {useRef, useState, useEffect} from 'react';
import Job from './job'; 
import {jobs} from '../../../mock-data/data';

const WorkHistoryList= ({setWorkHistoryPos})=>{ 
    const [height, setHeight] = useState(100)
    const divHeight = useRef()
    const spyScroll = useRef();

    const handleSpyScroll = ()=>{
        setWorkHistoryPos(spyScroll.current.offsetTop);
    };

    const svgHeightHandler = ()=>{
        setHeight(divHeight.current.clientHeight - 200)
    };

    useEffect(()=>{
        svgHeightHandler()
        window.addEventListener('resize',svgHeightHandler)
        return ()=>window.removeEventListener('resize',svgHeightHandler)
    },[]);

    useEffect(handleSpyScroll);

    return(
        <div ref={spyScroll} className='custom-card mx-auto'>
            <div className='svg-position'>
                <svg 
                    width="100%" 
                    height={height+'px'} 
                    xmlns="http://www.w3.org/2000/svg">
                    <line x1="50%" y1="2%" x2="50%" y2="100%"
                        style={{stroke: '#63a184',strokeWidth:'3'}}/>
                </svg>
            </div>
            <div ref={divHeight} className='row'>
                {jobs.map((job,index)=>(
                    <Job key={job.id} index={index} data={job} />
                ))}
            </div>
        </div>
    )
}
export default WorkHistoryList