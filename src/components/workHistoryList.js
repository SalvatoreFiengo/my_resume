import {useState} from 'react';
import {jobs} from '../mock-data/data';

const WorkHistoryList= ()=>{
    const [jobSelector,setJobSelector] = useState(0);
    

    return(
        <div className='row mt-3'>
            <div className='col-sm-4'>
                <div className='list-group'>
                    {jobs.map(({id, name})=>(
                        <div key={id} 
                            className={[parseInt(id)===jobSelector?'job-list-selected':'','list-group-item job-list-item'].join(' ')} 
                            onClick={()=>setJobSelector(parseInt(id))}
                            >
                            <p>{name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='col'>
                <div className='card ms-3 me-3 h-100'>
                    <div className='card-body'>
                        <h5 className='card-title text-center mb-2'>
                            {jobs[jobSelector].name}
                        </h5>
                        <div className='card-text'>
                            <dl className=''>
                                {jobs[jobSelector].description.map((description,index) =>(
                                    <dd key={index}>{description}</dd>
                                ))}
                          </dl>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}
export default WorkHistoryList