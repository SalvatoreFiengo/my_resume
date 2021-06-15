import { FC } from 'react';
import Navbar from './navbar';
import Background from '../../images/MaxPixel.net-Rome-Italy-Colosseum-Roman-Coliseum-City-2030643.jpg';
import { HeaderWrapper, HeaderImg } from '../../styles/styles';

type ChildProps = {
    cvPosition: number,
    skillPosition: number,
    workHistoryPos: number,
    educationPos: number
}

const Header: FC<ChildProps> = ( { cvPosition, skillPosition, workHistoryPos, educationPos } ) => {
    return(
        <HeaderWrapper className='mb-5'>
            <Navbar cvPosition={ cvPosition } skillPosition={ skillPosition } workHistoryPos={ workHistoryPos } educationPos={ educationPos }/>
            <HeaderImg className='header-img' style={ { backgroundImage: `url(${ Background })`} }>
            </HeaderImg>
        </HeaderWrapper>
    )
}

export default Header