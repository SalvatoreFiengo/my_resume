import { shallow, mount, render } from '../../enzyme';
import Footer from '../footer/footer';

describe('footer', ()=>{
    it('renders the footer without crashing',()=>{
        shallow(<Footer/>)
    })
})