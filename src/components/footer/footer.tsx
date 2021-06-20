import { FC } from 'react';
import { linksAndEdu } from '../../mock-data/data';
import { FooterWrapper } from '../../styles/styles';

const Footer:FC = () => (
    <FooterWrapper>
        <div className="attributions">
            <p className='p-0 m-0'>
                <strong>Attributions:</strong>
            </p>
            <p className='p-0 m-0'>
                <small>
                    <a className='me-1' href='https://www.maxpixel.net/Rome-Italy-Colosseum-Roman-Coliseum-City-2030643'>
                    Rome's photo from MaxPixel
                    </a>
                    /
                    <a className='ms-1' href='https://creativecommons.org/publicdomain/zero/1.0/deed.en'>
                        CC 010
                    </a>
                </small>
            </p>
            <p className='p-0 m-0'><small>
                    <a className='me-1' href='https://freepngimg.com/png/17607-resume-png-image/icon'>
                    Ico image from Freepngimg
                    </a>
                    /
                    <a className='ms-1' href='https://creativecommons.org/licenses/by-nc/4.0/'>
                        CC BY-NC 4.0
                    </a>
                </small>
            </p>
        </div>
        <div className='d-flex text-center justify-content-center'>
            <a 
                className='me-2 mt-3' 
                href={ linksAndEdu.gitHub } 
                target='_blank' rel='noreferrer' 
                aria-label='Github link here'>
                <i className='fa fa-2x fa-github' aria-hidden='true'></i> 
            </a>
            <a 
                className='ms-2 mt-3' 
                href={ linksAndEdu.linkedin } 
                target='_blank' 
                rel="noreferrer" 
                aria-label='Linkedin Profile link here'>
                <i className='fa fa-2x fa-linkedin-square' aria-hidden='true'></i>
            </a>
        </div>
    </FooterWrapper>
);
export default Footer;