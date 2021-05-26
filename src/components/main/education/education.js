import { useRef, useEffect } from 'react';
import { linksAndEdu } from '../../../mock-data/data';

const Education = ({setHeight})=>{
    const divHeight = useRef();
    const certHtmlData = ()=>{return {__html: linksAndEdu.cert.certdata}}
    useEffect(()=>{
        const svgHeightHandler = ()=>{
            setHeight(divHeight.current.clientHeight - 50)
        };
        svgHeightHandler()
        window.addEventListener('resize',svgHeightHandler)
        return ()=>window.removeEventListener('resize',svgHeightHandler)
    },[setHeight]);

    return(
        <div ref={divHeight} className='row'>
            <div className='col-12 col-md-6'>
                <div className='card description-border-top cv-card-shadow mt-md-3 me-md-3 arrow-right'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-12 col-md-4'>
                                <a
                                    href={linksAndEdu.college.certdata} 
                                    target='_blank' 
                                    rel='noreferrer'>
                                    <img 
                                        className='' 
                                        src={linksAndEdu.college.imgSrc} 
                                        alt='code institute'>
                                    </img>
                                </a>
                            </div>
                            <div className='col-12 col-md-8'>
                                <h5 className='card-title border-bottom border-dark pb-3 mb-0'>{linksAndEdu.college.name}</h5>
                                <div className='row mb-3'>
                                    <div className='col-12 col-md-7'>
                                        <small className=''>{linksAndEdu.college.place}</small>
                                    </div>
                                    <div className='col-12 col-md-5'>
                                        <small className='text-muted date'>{linksAndEdu.college.date}</small>
                                    </div>
                                </div>
                                <div className='card-text'>
                                    {linksAndEdu.college.description.map((description, i)=>(
                                        <p key={i} className='text-item'>{description}</p>
                                    ))}
                                    <div className='d-none d-md-block circle left'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-6'>
                <div className='card description-border-top cv-card-shadow mt-3 mt-md-5 ms-md-3 arrow-left'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-12 col-md-4'>
                                <div dangerouslySetInnerHTML={certHtmlData()}></div>
                            </div>
                            <div className='col-12 col-md-8'>
                                <h5 className='card-title border-bottom border-dark pb-3 mb-0'>{linksAndEdu.cert.name}</h5>
                                <div className='row mb-3'>
                                    <div className='col-12 col-md-7'>
                                        <small className=''>{linksAndEdu.cert.place}</small>
                                    </div>
                                    <div className='col-12 col-md-5'>
                                        <small className='text-muted date'>{linksAndEdu.cert.date}</small>
                                    </div>
                                </div>
                                <div className='card-text'>
                                    {linksAndEdu.cert.description.map((description, i)=>(
                                        <p key={i} className='text-item'>{description}</p>
                                    ))}
                                    <div className='d-none d-md-block circle right'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Education;