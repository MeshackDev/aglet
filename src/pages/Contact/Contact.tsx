import './Contact.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

export const Contact: React.FC = () => {
  return (
    <div className="contact">
      <img className='contact-image' src="/contact-image.jpg" alt="contact-us" />

      <h2 className='contact-title'>hello</h2>

      <div className='contact-content'>
        <div className='contact-content-box'>
          <p className='contact-paragraph'>my name is <strong>Meshack Thubana</strong></p>
          <p className='contact-paragraph'>and I am currently watching</p>
          <p className='contact-paragraph'>a series called <strong>Series Name</strong></p>
        </div>
        
        <div className='contact-content-box'>
          <p className='contact-paragraph'>you can reach me on:</p>
          <a className='contact-paragraph' href="tel: 0659959352"><strong>tel: </strong>065 995 9352</a>
          <a className='contact-paragraph' href="mailto: nm.thubana@gmail.com"><strong>tel: </strong>nm.thubana@gmail.com</a>
        </div>

        <div className='contact-share-box'>
          <span className='contact-share'>share</span>
          <FacebookIcon sx={{ color: '#fff', marginRight: '20px' }} />
          <TwitterIcon sx={{ color: '#fff', marginRight: '20px' }} />
          <GoogleIcon sx={{ color: '#fff', marginRight: '20px' }} />
        </div>
      </div>
    </div>
  )
};