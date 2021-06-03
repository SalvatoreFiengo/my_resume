import { FC, MutableRefObject, useState, useEffect, useRef } from 'react';
import { personalInfo, linksAndEdu } from '../../../mock-data/data';

type CvCardProps = {
    setCvPosition: (spyscroll:number)=>void
};

const CvCard:FC<CvCardProps>= ({setCvPosition})=>{
    
    const [time,gettime]= useState('Good morning');   
    const spyScroll = useRef() as MutableRefObject<HTMLDivElement>;

    const handleSpyScroll = ()=>{
        const position:number = spyScroll.current.offsetTop;
        if(position){
            setCvPosition(position);
        } 
    };

    useEffect(()=>{
        gettime(()=>{
            const hours:number = new Date().getHours();

            if(hours<12){
                return 'Good Morning'
            }else if(hours <19){
                return 'Good Afternoon'
            }else{
                return 'Good Evening'
            };
        });
    },[time])

    useEffect(handleSpyScroll);

    return(
        <div ref={spyScroll} className='card mx-auto mb-5 cv-card-shadow custom-card animated'>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-12 col-lg-6 col-xl-4'>
                        <img 
                            className='w-100 d-block profile-img ps-3' 
                            src={ personalInfo[0].linkedinPicLink } 
                            alt='Salvatore Fiengo'>
                        </img>
                    </div> 
                    <div className='col-12 col-lg-6 col-xl-8'>
                        <div className='profile mb-2 mt-3'>
                            <h1 className='profile-title mt-2 mb-2'><p>{ time }</p><span>I'm</span> { personalInfo[0].name }</h1>
                            <p className='mb-2'> { personalInfo[0].role }</p>
                        </div>
                        <div className=''>
                            <ul className='profile-list '>
                                <li>
                                    <div className='row'>
                                        <div className='col-12 col-lg-3'>
                                            <p>Address</p>
                                        </div>
                                        <div className='col-12 col-lg-9'>
                                            <p className='detail'> { personalInfo[0].address }</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='row'>
                                        <div className='col-12 col-lg-3'>
                                            <p>Email</p>
                                        </div>
                                        <div className='col-12 col-lg-9'>
                                            <p className='detail'> { personalInfo[0].email }</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='row'>
                                        <div className='col-12 col-lg-3'>
                                            <p>Phone</p>
                                        </div>
                                        <div className='col-12 col-lg-9'>
                                            <p className='detail'> { personalInfo[0].phone }</p> 
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card-footer bg-success text-center d-flex justify-content-center'>
                <a className='social m-2' href={linksAndEdu.gitHub} target='_blank' rel='noreferrer' aria-label='Github link here'>
                    <i className='fa fa-2x fa-github text-white' aria-hidden='true'></i> 
                </a>
                <a className='social m-2' href={linksAndEdu.linkedin} target='_blank' rel="noreferrer" aria-label='Linkedin Profile link here'>
                    <i className='fa fa-2x fa-linkedin-square text-white' aria-hidden='true'></i>
                </a>
            </div>
        </div>
    );
};
export default CvCard;