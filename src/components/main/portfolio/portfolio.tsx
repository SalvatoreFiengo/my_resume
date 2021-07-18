import { FC, useEffect, useRef, MutableRefObject } from 'react';
import { InfoElementWrapper, Circle } from '../../../styles/styles';
import EcommerceImg from '../../../images/E-commerce.png';
import LeaveReqMgr from '../../../images/lrqmanager.png';

type PortfolioProps = {
    setHeight: (value: number) => void,
    animation: boolean
}

const Portfolio:FC<PortfolioProps> = ({setHeight, animation})=>{
    const divHeight = useRef() as MutableRefObject<HTMLDivElement>;

    useEffect(()=>{
        const svgHeightHandler = ()=>{
            setHeight(divHeight.current.clientHeight - 50)
        };

        svgHeightHandler();

        window.addEventListener('resize',svgHeightHandler)
        return ()=>window.removeEventListener('resize',svgHeightHandler)
    },[setHeight]);

    return(
        <div ref={ divHeight } className='row'>
            <div className="col-12 col-md-6">
                <InfoElementWrapper direction='left' className='card'>
                    <img src={EcommerceImg} alt='None' className='card-img-top'/>
                    <div className='card-body'>
                        <h5 className='card-title'>My E-commerce</h5>
                        <p className='card-text'>developed with Django 1.11.24, Bootstrap 3, JQuery and hosted in Heroku</p>
                        <a href='https://my-django-ecommerce.herokuapp.com/products/' className='btn btn-primary' target='_blank' rel='noreferrer'>Check it out</a>
                    </div>
                    <Circle direction={ 'left' } className='d-none d-md-block'></Circle>
                </InfoElementWrapper>
            </div>
            <div className="col-12 col-md-6">
                <InfoElementWrapper direction='right' className='card'>
                    <img src={LeaveReqMgr} alt='None' className='card-img-top'/>
                    <div className='card-body'>
                        <h5 className='card-title'>Annual Leave requests manager app</h5>
                        <p className='card-text'>developed in Python, Flask, Jinja, using Bootstrap4 and MongoDB</p>
                        <a href='http://leave-requests-manager-app.herokuapp.com/dashboard' className='btn btn-primary' target='_blank' rel='noreferrer'>Check it out</a>
                    </div>
                    <Circle direction={ 'right' } className='d-none d-md-block'></Circle>
                </InfoElementWrapper>
            </div>
        </div>
    )
}
export default Portfolio;