/**
 * @jest-environment jsdom
 */

import { ReactWrapper } from 'enzyme';
import { shallow, mount } from '../../enzyme';
import Navbar from '../header/navbar';

type TestProps = {
    cvPosition: number;
    skillPosition: number;
    workHistoryPos:number; 
    educationPos:number;
    portfolioPos:number
};

describe('navbar', ()=>{
    it('renders Navbar component without crashing',()=>{
        const props:TestProps = {cvPosition: 60, skillPosition: 80, workHistoryPos: 100, educationPos: 120, portfolioPos:160};
        const navbarShallowComponent = shallow(<Navbar {...props}/>);
        /*using getElements as html method gives error with styled components tags */
        expect(navbarShallowComponent.getElements()).toMatchSnapshot();
    });

    let navbarComponent:ReactWrapper<any,Readonly<{}>>;

    beforeEach(()=>{
        const props:TestProps = {cvPosition: 60, skillPosition: 80, workHistoryPos: 100, educationPos: 120, portfolioPos:160};
        navbarComponent = mount(<Navbar {...props}/>);
    });

    afterEach(()=>{
        navbarComponent.unmount();
        jest.clearAllMocks();
    });

    it('renders navlist only for small screens when burger menu is clicked',()=>{

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
    });

    it('scrolls to top when "Presentation" link is clicked',()=>{ 
        window.scrollTo = jest.fn();
        const presentationButton = navbarComponent.findWhere(node=>node.type()==='button' && node.text()==='Presentation');
        presentationButton.simulate('click');
        expect(window.scrollTo).toBeCalledWith(0,0);
    });

    it('scrolls to skill section when "Skills" link is clicked',()=>{
        window.scrollTo = jest.fn();
        const SkillsButton = navbarComponent.findWhere(node=>node.type()==='button' && node.text()==='Skills');
        SkillsButton.simulate('click');
        expect(window.scrollTo).toBeCalledWith(0,20);
    });

    it('scrolls to education section "Education" link is clicked',()=>{
        window.scrollTo = jest.fn();
        const EducationButton = navbarComponent.findWhere(node=>node.type()==='button' && node.text()==='Education');
        EducationButton.simulate('click');
        expect(window.scrollTo).toBeCalledWith(0,60);
    });

    it('scrolls to Work History section "Work History" link is clicked',()=>{
        window.scrollTo = jest.fn();
        const WorkHistoryButton = navbarComponent.findWhere(node=>node.type()==='button' && node.text()==='Work History');
        WorkHistoryButton.simulate('click');
        expect(window.scrollTo).toBeCalledWith(0,40);
    });
})