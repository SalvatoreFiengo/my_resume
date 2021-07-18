import { FC, MouseEvent, useState, useEffect } from 'react'
import { Nav, NavList, ButtonLink } from '../../styles/styles'

type ChildProps = {
    cvPosition: number,
    skillPosition: number,
    workHistoryPos: number,
    educationPos: number,
    portfolioPos: number
}

const Navbar:FC<ChildProps> = ({ cvPosition, skillPosition,workHistoryPos, educationPos, portfolioPos })=>{
    const [mobileNavDisplay, setMobileNavDisplay] = useState('d-none')
    const [navBackground, setNabBackground] = useState('nav-relative bg-transparent')
    const [pos,setPos] = useState(0);

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
                window.scrollTo(0,portfolioPos-60);
                break;
            case 4:
                window.scrollTo(0,educationPos-60);
                break;
            case 5:
                window.scrollTo(0,workHistoryPos-60);
                break;
            default:
                window.scrollTo(0,0);
                break;
        };
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
        <Nav className={['w-100 pt-2', navBackground].join(' ')}>
            <div>
                <div className='row'>
                    <div className='col-4 col-md-3'>
                        <ButtonLink className="navbar-brand ms-3 ms-md-5 pt-0" onClick={()=>setPos(5)}>My Resume</ButtonLink>
                    </div>
                    <div className='d-block d-md-none col-8 text-end'>
                        <button className="border mb-1 me-5" type="button" onClick={(e)=>handleNavButton(e)}>
                            <i className="fa fa-2x fa-bars" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className='col-4 col-md-7'>
                        <NavList className={['d-md-inline mr-3 mt-md-2 mb-1',mobileNavDisplay].join(' ')}>
                            <li className="d-md-inline me-md-3">
                                <ButtonLink onClick={()=>setPos(1)}>Presentation</ButtonLink>
                            </li>
                            <li className="d-md-inline me-md-3">
                                <ButtonLink onClick={()=>setPos(2)}>Skills</ButtonLink>
                            </li>
                            <li className="d-md-inline me-md-3">
                                <ButtonLink onClick={()=>setPos(3)}>Portfolio</ButtonLink>
                            </li>
                            <li className="d-md-inline me-md-3">
                                <ButtonLink onClick={()=>setPos(4)}>Education</ButtonLink>
                            </li>
                            <li className="d-md-inline">
                                <ButtonLink onClick={()=>setPos(4)}>Work History</ButtonLink>
                            </li>
                        </NavList>
                    </div>
                </div>
            </div>
        </Nav>
    )
};



export default Navbar;