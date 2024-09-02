// components/Footer.js
import Image from 'next/image';
import styles from './style.css'; // CSS modülü

const Footer = () => (
  <div className="container">
    <div className="sections">
      <div style={{ marginLeft: '-150px' }}>
        <Image
          src="https://cdn.discordapp.com/attachments/1276252220165197908/1280187037613428779/d07a109d-4180-4d90-b10e-8a6a613fc62b.png?ex=66d72a96&is=66d5d916&hm=7443a43748a2b94bea3e75ac6a794d45442b1a52c0a21a8d6aa6332e21b47373&"
          alt="Logo"
          width={150}
          height={50}
          className="logo"
        />
        <p>description</p>
        <div className="info">
          <a href="mailto:info@example.com">example@gmail.com</a>
        </div>
        <div className="info">
          <a href="tel:+1888253145148">(888) 253 145 148</a>
        </div>
      </div>
      <div className="section">
        <h3>Company</h3>
        <ul>
          <li><a href="#" target="_blank" rel="noopener noreferrer">Services</a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer">About Us</a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer">Careers</a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer">Works</a></li>
        </ul>
      </div>
      <div className="section">
        <h3>Services</h3>
        <ul>
          <li><a href="#" target="_blank" rel="noopener noreferrer">Mobile App Development</a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer">Web Development</a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer">UI/UX Design</a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer">Quality Assurance</a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer">Full-Stack development</a></li>
        </ul>
      </div>
      <div className="section">
        <h3>Resources</h3>
        <ul>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Help center</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </div>
      <div className="section">
        <h3>Get in Touch</h3>
        <div className="social">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" width={30} height={25} alt="YouTube" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" width={25} height={30} alt="Facebook" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png" width={25} height={30} alt="Instagram" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png" width={25} height={30} alt="WhatsApp" />
          </a>
        </div>
      </div>
    </div>
    <hr />
    <div className="footer">
      <span>2024 © cruxestack GmbH - Zoyotheme.com</span>
      <div style={{ textAlign: 'end', marginTop: '-20px' }}>
        <a href="#">Terms Conditions & Policy</a>
      </div>
    </div>
  </div>
);

export default Footer;
