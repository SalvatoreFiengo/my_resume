import {useState, useEffect} from 'react'

const Navbar = ()=>{
    const [navBackground, setNabBackground] = useState('nav-relative bg-transparent')

    useEffect(()=>{
        const handleNavBackgroundChange = ()=>{
            if(window.pageYOffset>50){
                setNabBackground('fixed-top bg-light text-dimgrey')
            }else{
                setNabBackground('nav-relative bg-transparent')
            }
        }
        window.addEventListener('scroll',handleNavBackgroundChange)
    },[])

    return(
        <nav className={['w-100', navBackground].join(' ')}>
            <div className='mt-3'>
                <div className='row'>
                    <div className='col-xs-6 col-3'>
                        <a className="navbar-brand ms-5 text-light" href="#">My Resume</a>
                        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button> */}
                    </div>
                    <div className='col-xs-6 col-7'>
                        <ul className="d-inline float-end mr-3 text-light">
                            <li className="d-inline me-3">
                                <a>link</a>
                            </li>
                            <li className="d-inline me-3">
                                <a>link</a>
                            </li>
                            <li className="d-inline">
                                <a>link</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
};
export default Navbar;