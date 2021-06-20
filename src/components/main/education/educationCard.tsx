import { FC } from 'react';
import { linksAndEdu } from '../../../mock-data/data';
import { EducationWrapper, Circle } from '../../../styles/styles';

export type EducationProps = {
    animation: boolean,
    direction: string
};
const EducationCard:FC<EducationProps> = ({ animation, direction })=>{

    const certHtmlData = () => ( { __html: linksAndEdu.cert.certdata } )

    const educationData = direction === 'left'? linksAndEdu.college : linksAndEdu.cert; 

    return(
        <EducationWrapper direction= {direction} animation= {animation} className='card'>
            <div className='card-body'>
                <div className='row'>
                    {direction === 'left'?(
                        <div className='col-12 col-md-4'>
                            <a
                                href={ linksAndEdu.college.certdata } 
                                target='_blank' 
                                rel='noreferrer'>
                                <img 
                                    className='' 
                                    src={ linksAndEdu.college.imgSrc } 
                                    alt='code institute'>
                                </img>
                            </a>
                        </div>
                        ) : (
                        <div className='col-12 col-md-4'>
                            <div dangerouslySetInnerHTML={ certHtmlData() }></div>
                        </div>
                        )
                    }
                    
                    <div className='col-12 col-md-8'>
                        <h5 className='card-title border-bottom border-dark pb-3 mb-0'>{ educationData.name }</h5>
                        <div className='row mb-3'>
                            <div className='col-12 col-md-7'>
                                <small className=''>{ educationData.place  }</small>
                            </div>
                            <div className='col-12 col-md-5'>
                                <small className='text-muted date'>{ educationData.date }</small>
                            </div>
                        </div>
                        <div className='card-text'>
                            { educationData.description.map(( description, i ) => (
                                <p key={ i } className='text-item'>{ description }</p>
                            ))}
                            <Circle direction={ direction } className='d-none d-md-block'></Circle>
                        </div>
                    </div>
                </div>
            </div>
        </EducationWrapper>
    );
}
export default EducationCard;