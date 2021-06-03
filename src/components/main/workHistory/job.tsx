import { FC } from 'react';

type JobProps = {
    data:{
        id: string,
        name: string
        place: string,
        date: string,
        description: string[]
    },
    index: number,
    animation: Boolean
} 
const Job: FC<JobProps> = ({ data, index, animation })=>{

    const leftRightMarginAndArrow= index%2===0? 'me-md-3 mt-3 arrow-right' : 'ms-md-3 mt-3 mt-md-5 arrow-left';

    const animated = ()=>{
        if( animation ){
            if( index%2===0 ){
                return 'animated-left-item';
            }else{
                return 'animated-right-item';
            }
        };
    };
    
        
    return(
        <div className='col-12 col-md-6' key={ data.id }>
            <div className={ ['card description-border-top cv-card-shadow', leftRightMarginAndArrow, animated() ].join(' ') }>
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
            </div>
        </div>
    )
}
export default Job;