import { FC, MouseEvent, useState, useEffect } from 'react'
import { keyframes } from 'styled-components';
import styled from 'styled-components';

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
        <Nav className={['w-100 pt-2', navBackground].join(' ')}>
            <div>
                <div className='row'>
                    <div className='col-4 col-md-3'>
                        <ButtonLink className="navbar-brand ms-3 ms-md-5 pt-0" onClick={()=>setPos(0)}>My Resume</ButtonLink>
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
                                <ButtonLink onClick={()=>setPos(3)}>Education</ButtonLink>
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

const showUp = keyframes`
    0% { opacity: 0; transform: translateY(-20px); }
    100% { opacity: 1; transform: translateY(0); }
`
const ButtonLink = styled.button`
    border: none;
    background-color: inherit;
    width: 100%;

    @media screen and (min-width:768px){
        width: auto;
    }
`

const Nav = styled.nav`
    opacity: 1;
    animation: ${showUp} 1.5s normal;
    &.fixed-top{
        background-color: #63a184;
        outline: 1px solid #242832;
        outline-offset: -1px;
        button {
            color: #fff;
            background-color: transparent;
            &:hover{
                background-color: #efefef;
                color: #242832; 
            }
        }
        & ul {
            background-color: #63a184;
            border:1px solid #242832;
            border-top:0;

        }
    }
    &.nav-relative{
        z-index: 2;
        position: relative;
        button {
            color: #fff;
            background-color: transparent;
            &:hover{
                background-color: #63a184;
                color: #242832;
            }
        }
        & ul{
            background-color: #efefef !important;
            border:1px solid #fff;
            button {
                color: #242832; 
                &:hover{
                    background-color: #63a184;
                    color: #fff;
                }
            }
        }
        
    }
    @media screen and (min-width:768px){
        &.fixed-top{
            & ul {
                background-color: #63a184;
                border:0;
            }
        }
        &.nav-relative{
            z-index: 2;
            position: relative;
                & ul{
                    background-color: transparent !important;
                    border:0;
                    button {
                        color: #fff;
                        &:hover {
                            color: #242832;
                        }
                    }
                }
            }
        }
    }
    
`
const NavList = styled.ul`
    list-style: none;
    padding: 0;
    position: absolute;
    right: 1rem;
    z-index: 2;
    box-shadow: 0 1px 6px rgb(0 0 0 / 12%), 0 1px 4px rgb(0 0 0 / 24%);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;

    @media screen and (min-width:768px){
        position: initial;
        display: block;
        float: right;
        box-shadow: unset;
        border: 0;
        border-radius: unset;
    }
`


export default Navbar;