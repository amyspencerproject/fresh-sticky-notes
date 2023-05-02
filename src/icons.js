import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const FooterIcon = () => {
    return (
        <div className="footer-icons">
            <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faLinkedinIn} />
        </div> 
    )
}

export default FooterIcon


