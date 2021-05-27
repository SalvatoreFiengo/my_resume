const Svg=({height, animation})=>(
    <div className={['svg-position', animation?'animated-svg': null].join(' ')}>
        <svg 
            width="100%" 
            height={height+'px'} 
            xmlns="http://www.w3.org/2000/svg">
            <line x1="50%" y1="2%" x2="50%" y2="100%"
                style={{stroke: '#63a184',strokeWidth:'3'}}/>
        </svg>
    </div>
);
export default Svg;