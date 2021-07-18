import { FC } from 'react';
import Navbar from './navbar';
import Background from '../../images/MaxPixel.net-Rome-Italy-Colosseum-Roman-Coliseum-City-2030643.jpg';
import { HeaderWrapper, HeaderImg } from '../../styles/styles';

type ChildProps = {
    cvPosition: number,
    skillPosition: number,
    workHistoryPos: number,
    educationPos: number,
    portfolioPos: number
}

const Header: FC<ChildProps> = ( { cvPosition, skillPosition, workHistoryPos, educationPos, portfolioPos } ) => {
    return(
        <HeaderWrapper className='mb-5'>
            <Navbar cvPosition={ cvPosition } skillPosition={ skillPosition } workHistoryPos={ workHistoryPos } educationPos={ educationPos } portfolioPos={ portfolioPos }/>
            <HeaderImg className='header-img' style={ { backgroundImage: `url(${ Background })`} }>
            </HeaderImg>
        </HeaderWrapper>
    )
}

export default Header