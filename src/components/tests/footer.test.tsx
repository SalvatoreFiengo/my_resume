import { shallow } from '../../enzyme';
import Footer from '../footer/footer';

describe('footer', ()=>{
    it('renders the footer without crashing',()=>{
        const footer = shallow(<Footer/>);
        expect(footer.getElements()).toMatchSnapshot()
    })
})