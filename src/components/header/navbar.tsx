import { FC, MouseEvent, useState, useEffect } from 'react'

type ChildProps = {
    cvPosition: number,
    skillPosition: number,
    workHistoryPos: number,
    educationPos: number
}

const Navbar:FC<ChildProps> = ({ cvPosition, skillPosition,workHistoryPos, educationPos })=>{
    const [mobileNavDisplay, setMobileNavDisplay] = useState('d-none')
    const [navBackground, setNabBackground] = useState('nav-relative bg-transparent')
    const [pos,setPos]=useState(0);

    const handleNavButton = (e: MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        mobileNavDisplay === 'd-none'? setMobileNavDisplay('d-block') : setMobileNavDisplay('d-none');
    };
    
    const handleSpyScroll = ()=>{
        if (pos){
        switch(pos){
            case 1:
                window.scrollTo(0,cvPosition-60);              
                break;
            case 2:
                window.scrollTo(0,skillPosition-60);
                break;
            case 3:
                window.scrollTo(0,educationPos-60);
                break;
            case 4:
                window.scrollTo(0,workHistoryPos-60);
                break;
            default:
                window.scrollTo(0,0);
                break;
        };
        setMobileNavDisplay('d-none');
    }
        setPos(0);
    };

    useEffect(()=>{
        const handleNavBackgroundChange = ()=>{
            if(window.pageYOffset>25){
                setNabBackground('fixed-top text-dimgrey');
            }else{
                setNabBackground('nav-relative bg-transparent');
            }
        }
        window.addEventListener('scroll',handleNavBackgroundChange);
        return ()=>window.removeEventListener('scroll',handleNavBackgroundChange);
    },[]);

    useEffect(handleSpyScroll);

    return(
        <nav className={['w-100 pt-2 animated', navBackground].join(' ')}>
            <div>
                <div className='row'>
                    <div className='col-4 col-md-3'>
                        <button className="anchor navbar-brand ms-3 ms-md-5 pt-0" onClick={()=>setPos(0)}>My Resume</button>
                    </div>
                    <div className='d-block d-md-none col-8 text-end'>
                        <button className="border mb-1 me-5 bg-transparent" type="button" onClick={(e)=>handleNavButton(e)}>
                            <i className="fa fa-2x fa-bars" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className='col-4 col-md-7'>
                        <ul className={['nav-list d-md-inline mr-3 mt-md-2 mb-1',mobileNavDisplay].join(' ')}>
                            <li className="d-md-inline me-md-3">
                                <button className='anchor' onClick={()=>setPos(1)}>Presentation</button>
                            </li>
                            <li className="d-md-inline me-md-3">
                                <button className='anchor' onClick={()=>setPos(2)}>Skills</button>
                            </li>
                            <li className="d-md-inline me-md-3">
                                <button className='anchor' onClick={()=>setPos(3)}>Education</button>
                            </li>
                            <li className="d-md-inline">
                                <button className='anchor' onClick={()=>setPos(4)}>Work History</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
};
export default Navbar;