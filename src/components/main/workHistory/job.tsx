import { FC } from 'react';
import { JobWrapper } from '../../../styles/styles';

type JobProps = {
    data:{
        id: string,
        name: string
        place: string,
        date: string,
        description: string[]
    },
    index: number,
    animation: boolean
} 
const Job: FC<JobProps> = ({ data, index, animation })=>{

    return(
        <div className='col-12 col-md-6' key={ data.id }>
            <JobWrapper animation={animation} direction={ index%2 === 0? 'left' : 'right' } className='card description-border-top cv-card-shadow'>
                <div className='card-body'>
                    <h5 className='mb-2 text-center'>{ data.name }</h5>
                    <div className='row border-top border-dark m-3'>
                        <div className='col-12 col-md-7'>
                            <small className=''>{ data.place }</small>
                        </div>
                        <div className='col-12 col-md-5'>
                            <small className='text-muted date'>{ data.date }</small>
                        </div>
                    </div>
                    <div className='card-text m-1'>
                        <ul className='job-text-list ms-1'>
                        {data.description.map((description, index)=>(
                            <li key={ index }><p className='text-item'>{ description }</p>
                                
                            </li>
                        ))}
                        </ul>
                        <div className={ ['d-none d-md-block circle', index%2===0?'left':'right'].join(' ') }></div>  
                    </div>
                </div>
            </JobWrapper>
        </div>
    )
}
export default Job;