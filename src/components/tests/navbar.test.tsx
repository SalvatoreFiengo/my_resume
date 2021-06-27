import { shallow, render, mount } from '../../enzyme';
import Navbar from '../header/navbar';

type TestProps = {
    cvPosition: number;
    skillPosition: number;
    workHistoryPos:number; 
    educationPos:number
};

describe('navbar', ()=>{
    it('renders without crashing',()=>{
        const props:TestProps = {cvPosition: 60, skillPosition: 80, workHistoryPos: 100, educationPos: 120};
        const navbarComponent = shallow(<Navbar {...props}/>);
        expect(navbarComponent.getElements()).toMatchSnapshot();
    })
    it('navlist has class d-none in screen sizes over medium and d-block when burger menu is clicked',()=>{
        const props:TestProps = {cvPosition: 60, skillPosition: 80, workHistoryPos: 100, educationPos: 120};
        const navbarComponent = mount(<Navbar {...props}/>);
        const navBurgerMenu = navbarComponent.find('button.border');
        const listIsHidden = navbarComponent.find('ul.d-none');
        // before click      
        expect(listIsHidden).toHaveLength(1);
        
        global.innerWidth = 300;
        expect(navBurgerMenu).toHaveLength(1);
        navBurgerMenu.simulate('click');
        // after click
        const listIsShowing = navbarComponent.find('ul.d-block');
        expect(listIsShowing).toHaveLength(1)

    })
})