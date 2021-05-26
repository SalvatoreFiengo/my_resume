import {useState, useEffect} from 'react'

const Navbar = ({cvPosition, skillPosition,WorkHistoryPos})=>{
    const [navBackground, setNabBackground] = useState('nav-relative bg-transparent')
    const [pos,setPos]=useState(null);
    
    const handleSpyScroll = ()=>{
        if (cvPosition){
        switch(pos){
            case 1:
                window.scrollTo(0,cvPosition-60);
                break;
            case 2:
                window.scrollTo(0,skillPosition-60);
                break;
            case 3:
                window.scrollTo(0,WorkHistoryPos-60);
                break;
            default:
                window.scrollTo(0,0);
                break;
        }}
    };

    useEffect(()=>{
        const handleNavBackgroundChange = ()=>{
            if(window.pageYOffset>50){
                setNabBackground('fixed-top text-dimgrey')
            }else{
                setNabBackground('nav-relative bg-transparent')
            }
        }
        window.addEventListener('scroll',handleNavBackgroundChange)
        return ()=>window.removeEventListener('scroll',handleNavBackgroundChange)
    },[]);

    useEffect(handleSpyScroll);

    return(
        <nav className={['w-100', navBackground].join(' ')}>
            <div className='mt-3'>
                <div className='row'>
                    <div className='col-xs-6 col-3'>
                        <button className="anchor navbar-brand ms-5 pt-0" onClick={()=>setPos('default')}>My Resume</button>
                        <button className="navbar-toggler" type="button">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className='d-none d-md-block col-7'>
                        <ul className="d-inline float-end mr-3 mt-2 mb-1">
                            <li className="d-inline me-3">
                                <button className='anchor' onClick={()=>setPos(1)}>Presentation</button>
                            </li>
                            <li className="d-inline me-3">
                                <button className='anchor' onClick={()=>setPos(2)}>Skills</button>
                            </li>
                            <li className="d-inline">
                                <button className='anchor' onClick={()=>setPos(3)}>Work History</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
};
export default Navbar;