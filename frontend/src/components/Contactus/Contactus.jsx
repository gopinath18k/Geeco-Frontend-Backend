import './Contactus.css'
import { FaArrowUp } from 'react-icons/fa';

export const Contactus = () => {
    
  return (
    <div>
         <div className="containerfluid contact-first-container">
            <div className="contact-first-inner-container">
                <h1 className='contact-first-head'>Love To Hear From You,</h1>
                <h1 className='contact-first-head'>Get In Touch .</h1>
                <form action="" className='mt-5'>
                    <div className="row contact-first-row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                            <label htmlFor="Name" className='contact-label-field'>Your Name</label><br />
                            <input className='contact-input-box' type="text" placeholder="" style={{ width: '90%', height: '40px', fontSize: '18px' }}/>
                        </div>
                        <div className="col">
                             <label htmlFor="Number" className='contact-label-field'>Your Phone Number</label><br />
                            <input className='contact-input-box' type="text" placeholder="" style={{ width: '90%', height: '40px', fontSize: '18px' }}/>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <label htmlFor="Message" className='contact-label-field'>Message</label><br />
                            <input className='contact-input-box' type="text" placeholder="" style={{ width: '95%', height: '100px', fontSize: '18px' }}/>
                            <button className='contact-submit-btn mt-5'>Send Message <FaArrowUp /></button>
                        </div>
                    </div>
                </form>  
            </div>
         </div>
{/* .................................................. Second Containtainer ............................. */}

    <div className="container-fluid contact-second-container">
        <div className="contact-second-inner-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.904057534263!2d76.94486877402082!3d11.045819754168987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85890a92ae4a3%3A0x2b6f73cfc4a56468!2sGeeco%20Pumps!5e0!3m2!1sen!2sin!4v1754027796482!5m2!1sen!2sin" className='contact-map' width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Map'></iframe>
        </div>
    </div>

{/* ...................................................... Third Container ....................................... */}

    <div className="container-fluid contact-third-container">
        <div className="contact-third-inner-container">
            <div className="row contact-third-row">
                <div className="col contact-third-col"> 
                    <h3>Phone Number</h3>
                    <a href="tel:+919876543210">+91 98765 43210</a><br />
                    <a href="tel:+919876543210">+91 98765 43210</a>
                </div>
                <div className="col contact-third-col">
                    <h3>Mail us</h3>
                    <a href="mailto:geecopumps@gmail.com">geecopumps@gmail.com</a><br />
                    <p></p>
                </div>
                <div className="col contact-third-col">
                    <h3>Address</h3>
                    <p>1/42, Venkateswara Nagar,
                    Koundampalayam, Coimbatore,
                    Tamil Nadu 641030</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
