import resume from '../../../resume/Resume.pdf';
import {personalInfo} from '../../../mock-data/data';

const Presentation = ()=>(
    <div className='mt-3'>
        <div className='text-center'>
            <a className='btn btn-primary text-light' href={resume} download>Download Resume</a>
        </div>
        <div className='custom-card mx-auto mt-5'>
            <p>
                {personalInfo[0].presentation}
            </p>
        </div>
    </div>
);
export default Presentation;