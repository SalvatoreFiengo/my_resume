import { FC, useRef, useEffect, MutableRefObject} from 'react';
import Job from './job'; 
import {jobs} from '../../../mock-data/data';

type WorkHistoryListProps = {
    setHeight: (value: number) => void,
    animation: Boolean
}
const WorkHistoryList: FC<WorkHistoryListProps>= ( { setHeight, animation } )=>{ 
    
    const divHeight = useRef() as MutableRefObject<HTMLDivElement>

    useEffect(()=>{

        const svgHeightHandler = ()=>{
            setHeight(divHeight.current.clientHeight - 200)
        };
        svgHeightHandler();

        window.addEventListener('resize',svgHeightHandler);
        return ()=>window.removeEventListener('resize',svgHeightHandler);

    },[setHeight]);

    return(
        <div ref={divHeight} className='row'>
            {jobs.map((job,index)=>(
                <Job key={ job.id } index={ index } data={ job } animation={ animation } />
            ))}
        </div>
    )
}
export default WorkHistoryList;