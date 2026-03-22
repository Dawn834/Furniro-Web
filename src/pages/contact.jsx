import PageHero from "../components/pageHero";
import ServiceFeatures from "../components/serviceFeatures";
import addressIcon from "../assets/img/icon/address.svg";
import phoneIcon from "../assets/img/icon/phone.svg";
import timeIcon from "../assets/img/icon/time.svg";

function Contact() {
  return (
    <main className="contact-page">
      <PageHero title="Contact" currentPage="Contact" />
      
      <div className="contact-container">
        <div className="contact-intro">
          <h2>Get In Touch With Us</h2>
          <p>
            For More Information About Our Product & Services. Please Feel Free To Drop Us <br />
            An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <img src={addressIcon} alt="Address" />
              </div>
              <div className="info-text">
                <h3>Address</h3>
                <p>236 5th SE Avenue, New <br />York NY10000, United <br />States</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <img src={phoneIcon} alt="Phone" />
              </div>
              <div className="info-text">
                <h3>Phone</h3>
                <p>Mobile: +(84) 546-6789 <br />Hotline: +(84) 456-6789</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <img src={timeIcon} alt="Working Time" />
              </div>
              <div className="info-text">
                <h3>Working Time</h3>
                <p>Monday-Friday: 9:00 - 22:00 <br />Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <label>Your name</label>
              <input type="text" placeholder="Abc" />
            </div>
            
            <div className="form-group">
              <label>Email address</label>
              <input type="email" placeholder="Abc@def.com" />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="This is an optional" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Hi! i'd like to ask about"></textarea>
            </div>

            <button type="submit" className="btn btn--primary submit-btn">Submit</button>
          </form>
        </div>
      </div>

      <ServiceFeatures />
    </main>
  );
}

export default Contact;