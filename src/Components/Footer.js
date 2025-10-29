function Footer() {
  return (
    <footer>
      <section className="footer-top">
        <div className="footer-logo">
          <img src="/logo192.png" alt="Little Lemon Footer Logo" />
        </div>
        <div className="footer-nav-links">
          <h3>Little Lemon</h3>
          <ul>
            <li><a href="#home-section">Home</a></li>
            <li><a href="#about-section">About</a></li>
            <li><a href="#menu-section">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="#menu-section">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>123 Main Street, Anytown, CHICAGO</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: littlelemon@yahoo.com</p>
        </div>
        <div className="social-media">
          <h3>Follow Us</h3>
          <a href="https://www.facebook.com/littlelemon" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com/littlelemon" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.twitter.com/littlelemon" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </section>
      <section className="footer-bottom">
        <p>&copy; 2025 Capstone Project. All rights reserved.</p>
        <p>Created with React by Evangelia Alevrakis</p>
      </section>
    </footer>
  );
}

export default Footer;