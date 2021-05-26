import {useRef, useEffect} from 'react';
import Job from './job'; 
import {jobs} from '../../../mock-data/data';

const WorkHistoryList= ({setHeight})=>{ 
    
    const divHeight = useRef()

    useEffect(()=>{
        const svgHeightHandler = ()=>{
            setHeight(divHeight.current.clientHeight - 200)
        };
        svgHeightHandler()
        window.addEventListener('resize',svgHeightHandler)
        return ()=>window.removeEventListener('resize',svgHeightHandler)
    },[setHeight]);

    return(
        <div ref={divHeight} className='row'>
            {jobs.map((job,index)=>(
                <Job key={job.id} index={index} data={job} />
            ))}
        </div>
    )
}
export default WorkHistoryList;