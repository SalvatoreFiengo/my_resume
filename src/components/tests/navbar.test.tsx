/**
 * @jest-environment jsdom
 */

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
    it('renders navlist with class d-none in screen sizes over medium breakpoint, d-block when burger menu is clicked',()=>{
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
        navbarComponent.unmount();
    })
    it('scrolls to a specific seciton when nav button is clicked',()=>{ 
        window.scrollTo = jest.fn();
        const props:TestProps = {cvPosition: 60, skillPosition: 80, workHistoryPos: 100, educationPos: 120};
        const navbarComponent = mount(<Navbar {...props}/>);

        const presentationButton = navbarComponent.findWhere(node=>node.type()==='button' && node.text()==='Presentation');
        presentationButton.simulate('click');
        expect(window.scrollTo).toBeCalledWith(0,0);

        const SkillsButton = navbarComponent.findWhere(node=>node.type()==='button' && node.text()==='Skills');
        SkillsButton.simulate('click');
        expect(window.scrollTo).toBeCalledWith(0,20);

        const EducationButton = navbarComponent.findWhere(node=>node.type()==='button' && node.text()==='Education');
        EducationButton.simulate('click');
        expect(window.scrollTo).toBeCalledWith(0,60);

        const WorkHistoryButton = navbarComponent.findWhere(node=>node.type()==='button' && node.text()==='Work History');
        WorkHistoryButton.simulate('click');
        expect(window.scrollTo).toBeCalledWith(0,40);

        navbarComponent.unmount();
        jest.clearAllMocks();
    })
})