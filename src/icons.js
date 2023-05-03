import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const FooterIcon = () => {
    return (
        <div className="footer-icons">
            <div className="footer-icons-sphere">
                <a aria-label="Email Amy" href="mailto:amy.spencerproject@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
            <div className="footer-icons-sphere-drk">
                <a aria-label="View Amy on GitHub" href="https://github.com/amyspencerproject" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
            <div className="footer-icons-sphere">
                <a aria-label="View Amy on LinkedIn" href="https://www.linkedin.com/in/amyspencercodes/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
        </div> 
    )
}

export default FooterIcon


