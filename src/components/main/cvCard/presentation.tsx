import { personalInfo } from '../../../mock-data/data';
import { CustomCard } from '../../../styles/styles';


const Presentation = ()=>(
    <div className='mt-3'>
        <div className='text-center'>
            <a className='btn btn-primary text-light' href='/resume/Resume.pdf' download>Download Resume</a>
        </div>
        <CustomCard className='mx-auto mt-5'>
            <p>
                { personalInfo[0].presentation }
            </p>
        </CustomCard>
    </div>
);
export default Presentation;