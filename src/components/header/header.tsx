import { FC } from 'react';
import Navbar from './navbar';
import Background from '../../images/MaxPixel.net-Rome-Italy-Colosseum-Roman-Coliseum-City-2030643.jpg';
import styled from 'styled-components';

type ChildProps = {
    cvPosition: number,
    skillPosition: number,
    workHistoryPos: number,
    educationPos: number
}

const Header: FC<ChildProps>= ( { cvPosition, skillPosition, workHistoryPos, educationPos } ) => {
    return(
        <div className='header mb-5'>
            <Navbar cvPosition={ cvPosition } skillPosition={ skillPosition } workHistoryPos={ workHistoryPos } educationPos={ educationPos }/>
            <HeaderImg className='header-img' style={ { backgroundImage: `url(${Background})`} }>
            </HeaderImg>
        </div>
    )
}
const HeaderImg = styled.div`
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
export default Header