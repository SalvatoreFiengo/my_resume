import {useState, useEffect} from 'react';
import {personalInfo} from '../mock-data/data';

const CvCard = ()=>{
    
    const [time,gettime]= useState('Good morning')
    useEffect(()=>{
        gettime(()=>{
            if(parseInt(new Date().getHours())<12){
                return 'Good Morning'
            }else if(parseInt(new Date().getHours())<19){
                return 'Good Afternoon'
            }else{
                return 'Good Evening'
            }
        })
    },[time])

    return(
        <div className='card mx-auto mt-5 mb-5 cv-card-shadow custom-card'>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-12 col-lg-6 col-xl-4'>
                        <img className='w-100 d-block profile-img ps-3' src='https://media-exp1.licdn.com/dms/image/C5603AQHUrpA5rZ0-pA/profile-displayphoto-shrink_200_200/0/1550091903426?e=1625097600&v=beta&t=d-W-EDMy0rn1y-i4OIwIue8-mjbF6MtrUqfxY_Yf2xk' alt='Salvatore Fiengo'></img>
                    </div> 
                    <div className='col-12 col-lg-6 col-xl-8'>
                        <div className='profile mb-2 mt-3'>
                            <h1 className='profile-title mt-2 mb-2'><p>{time}</p><span>I'm</span> {personalInfo[0].name}</h1>
                            <p className='mb-2'> {personalInfo[0].role}</p>
                        </div>
                        <div className=''>
                            <ul className='profile-list '>
                                <li>
                                    <div className='row'>
                                        <div className='col-12 col-lg-3'>
                                            <p>Address</p>
                                        </div>
                                        <div className='col-12 col-lg-9'>
                                            <p className='detail'> {personalInfo[0].address}</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='row'>
                                        <div className='col-12 col-lg-3'>
                                            <p>Email</p>
                                        </div>
                                        <div className='col-12 col-lg-9'>
                                            <p className='detail'> {personalInfo[0].email}</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='row'>
                                        <div className='col-12 col-lg-3'>
                                            <p>Phone</p>
                                        </div>
                                        <div className='col-12 col-lg-9'>
                                            <p className='detail'> {personalInfo[0].phone}</p> 
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* <div className='d-flex justify-content-evenly'>
                            <div className='card code-institute '>
                                <a 
                                    href='https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/15065319' 
                                    target='_blank' 
                                    rel='noreferrer'>
                                    <img 
                                        className='' 
                                        src='https://media-exp1.licdn.com/dms/image/C510BAQGMQMWodJcvEQ/company-logo_100_100/0/1519903480042?e=1629331200&v=beta&t=nEZPmYweZW-SEpki2g0UylUQolmuGfA3ycsJkRS9ThY' 
                                        alt='code institute'>
                                    </img>
                                </a>
                                <div className='card-body'>
                                    <h5 className='card-title'>Code Institute</h5>
                                    <div className='card-text'>Diploma in Software Development, Full Stack Web Development, First Class Honours</div>
                                </div>
                            </div>
                            <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="da6eb3c2-2569-4c79-8881-85e821879690" data-share-badge-host="https://www.credly.com"></div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='card-footer bg-success text-center'>
                <div>
                    <a className='m-3' href='https://github.com/SalvatoreFiengo/my_resume.git' target='_blank' rel='noreferrer' aria-label='Github link here'>
                        <i className='fa fa-2x fa-github text-white' aria-hidden='true'></i> 
                    </a>
                    <a className='m-3' href='https://www.linkedin.com/in/salvatorefiengo' target='_blank' rel="noreferrer" aria-label='Linkedin Profile link here'>
                        <i className='fa fa-2x fa-linkedin-square text-white' aria-hidden='true'></i>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default CvCard;