import resume from '../resume/Resume.pdf';

const Presentation = ()=>(
    <div className='mt-3'>
        <div className='text-center'>
            <a className='btn btn-primary text-light' href={resume} download>Download Resume</a>
        </div>
        <div className='custom-card mx-auto mt-3'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
        </div>
    </div>
);
export default Presentation;