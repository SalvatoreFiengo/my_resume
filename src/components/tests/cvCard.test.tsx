import CvCard from "../main/cvCard/cvCard";
import { shallow, mount } from '../../enzyme';

describe('cvCard',()=>{
    it('renders cvCard component without crashing',()=>{
        const setCvPosition = jest.fn();
        const cvCardShallowComponent = shallow(<CvCard setCvPosition={setCvPosition}/>);
        /*using getElements as html method gives error with styled components tags */
        expect(cvCardShallowComponent.getElements()).toMatchSnapshot();
    });
    it('Greets accordingly to current hour of the day',()=>{
        const setCvPosition = jest.fn();
        const cvCardShallowComponent = mount(<CvCard setCvPosition={setCvPosition}/>);
        const greeting = ()=>{
            const now = new Date().getHours();
            if(now < 12){
                return 'Good Morning'
            }
            else if(now < 19){
                return 'Good Afternoon'
            }
            else{
                return 'Good Evening'
            };
        };
        const greetingNode = cvCardShallowComponent.find('.custom-bottom-border > h1 > p');
        expect(greetingNode.text()).toEqual(greeting());
    });
    it('has ref once mounted',()=>{
        const setCvPosition = jest.fn();

        const cvCardShallowComponent = mount(<CvCard setCvPosition={setCvPosition}/>);
        const card=cvCardShallowComponent.find('div.card');
    });
})