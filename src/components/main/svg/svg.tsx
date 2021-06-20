import { FC } from 'react';
import { SVG } from '../../../styles/styles';

type SvgProps = {
    height: string;
}

const Svg:FC<SvgProps>=({ height})=>(
    <SVG>
        <svg
            height={`${height}px`}   
            xmlns="http://www.w3.org/2000/svg">
            <line x1="50%" y1="2%" x2="50%" y2="100%"
                style={ { stroke: '#63a184', strokeWidth:'3' } }/>
        </svg>
    </SVG>
);
export default Svg;