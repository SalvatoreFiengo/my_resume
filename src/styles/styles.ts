import { keyframes, css } from 'styled-components';
import styled from 'styled-components';
/* animations */

export const showUp = keyframes`
    0% { opacity: 0; transform: translateY(-20px); }
    100% { opacity: 1; transform: translateY(0); }
`
export const showUpLeft = keyframes`
    from { opacity: 0; transform: translateX(-20px); }
    to { opacity: 1; transform: translateX(0); }
`
export const showUpRight = keyframes`
    from { opacity: 0; transform: translateX(20px); }
    to { opacity: 1; transform: translateX(0); }
`

export const Animated = styled.div`
    opacity: 1;
    animation: ${showUp} 1.5s normal;
`
/* Header styles */

export const HeaderWrapper = styled.div`
    padding-bottom: 20px;
    position: relative;
    height: 58px;
`
export const HeaderImg = styled.div`
    height: 415px;
    background-size: cover;
    background-color: #242832;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    &:before {
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: rgba(44, 51, 64, 0.7);
    }
`

/* Navbar styles */

export const ButtonLink = styled.button`
    border: none;
    background-color: inherit;
    width: 100%;

    @media screen and (min-width:768px){
        width: auto;
    }
`

export const Nav = styled(Animated)`

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
export const NavList = styled.ul`
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

/* CvCard styles */



export const Profile = styled.div`
    img {
        max-width: 200px;
    }

    .custom-bottom-border {
        border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    }

    >p {
        line-height: 0.8;
    }

    .profile-title{
        > span {
            font-weight: lighter;
        }
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;

        p:not(.detail) {
        display: block;
        width: 120px;
        float: left;
        color: #333333;
        font-size: 12px;
        font-weight: 700;
        line-height: 20px;
        text-transform: uppercase;
        margin: 0;
      }

      .detail {
        font-size: 15px;
        font-weight: 400;
        line-height: 20px;
        color: #9da0a7;
        }
    }

`

export const CardFooter = styled.div`
    margin-left: -1px;
    margin-right: -1px;
    margin-bottom: -1px;
    padding: 0;

    a {
        i.fa {
            height: 2.2rem;
            width: 2.2rem;

            :hover{
                border-radius: 50%;
                background-color: #63a184;
                line-height: 1.1;
              }
        }
    }
`
/* Education styles */
type AnimationProps = {
    animation : boolean,
    direction : string
}

const animationBasedOnDirection = css`
    ${(props: AnimationProps) => props.animation?css`
    opacity: 1;
    animation: ${(props: AnimationProps) => props.direction === 'left'? showUpLeft : showUpRight} 1s normal;
    `: ''}

    :after{
        content: " ";
        position: absolute;
        right: ${ (props: AnimationProps) => props.direction === 'left'? '-15px;' : 'auto;' }
        left: ${ (props: AnimationProps) => props.direction === 'right'? '-15px;' : 'auto;' }
        top: 15px;
        border-top: 15px solid transparent;
        border-right: ${ (props: AnimationProps) => props.direction === 'left'? 'none;' : '15px solid #fff;' }
        border-left: ${ (props: AnimationProps) => props.direction === 'left'? '15px solid #fff;' : 'none;' }
        border-bottom: 15px solid transparent;
    }

}
`
export const EducationWrapper = styled(Animated)`
    margin-top: ${ (props: AnimationProps) => props.direction === 'left'?' 3rem;' : '5rem;' }
    margin-left: ${ (props: AnimationProps) => props.direction === 'right'? '1rem;' : 'auto;' }
    margin-right: ${ (props: AnimationProps) => props.direction === 'left'?' 1rem;' : 'auto;' }
    border-top: 4px solid #198754;
    color: #757575;
    box-shadow: 0 1px 6px rgb(0 0 0 / 12%), 0 1px 4px rgb(0 0 0 / 24%);
    @media screen and (min-width:768px){
        ${animationBasedOnDirection}
    }
`

/* Generic styles */

export const CustomCardAnimated = styled(Animated)`
    max-width: 960px;
    width: 75%;
    box-shadow: 0 1px 6px rgb(0 0 0 / 12%), 0 1px 4px rgb(0 0 0 / 24%);
`

export const CustomCard = styled.div`
    max-width: 960px;
    width: 75%;
`

/* Work History -> as accepts animationBasedOnDirection then pass props to component based on odd or even*/
export const JobWrapper = styled(Animated)`
    margin-top: 3rem;
    @media screen and (min-width:768px){
        margin-right: ${( props: AnimationProps )=> props.direction === 'left'? '1rem;':'auto;'}
        margin-left: ${( props: AnimationProps )=> props.direction === 'right'? '1rem;':'auto;'}
        margin-top: ${( props: AnimationProps )=> props.direction === 'right'? '5rem;':'3rem;'}
        ${animationBasedOnDirection}
    }
`