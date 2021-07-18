import { FC } from 'react';
import { InfoElementWrapper, JobList, Circle } from '../../../styles/styles';

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
            <InfoElementWrapper animation={ animation } direction={ index%2 === 0? 'left' : 'right' } className='card'>
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
                        <JobList className='ms-1'>
                        {data.description.map((description, index)=>(
                            <li key={ index }>
                                <p>{ description }</p>   
                            </li>
                        ))}
                        </JobList>
                        <Circle direction={ index%2 === 0? 'left' : 'right' } className='d-none d-md-block'></Circle>  
                    </div>
                </div>
            </InfoElementWrapper>
        </div>
    )
}
export default Job;