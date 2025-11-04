function About() {
  return (
    <section id="about-section">
        <div className="about-container">
          <div className="about-content">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
             Welcome to Little Lemon Restaurant, a family-owned restaurant created by brothers Adrian and Mario. We grew up surrounded by the flavors and traditions of the Mediterranean, and we started Little Lemon to share that love in a fresh, modern way.
            </p>
            <p>
              Our focus is simple — honest ingredients, bold flavors, and genuine hospitality. Every dish is made with care, using recipes inspired by our roots and reimagined for today.
            </p>
            <p>
              Whether you’re here for a quick lunch, a relaxed dinner, or a night out with friends, we want you to feel at home — enjoying good food, good company, and a little taste of the Mediterranean lifestyle.
            </p>
            <p><strong><em>Family-owned. Flavor-driven. Always from the heart.</em></strong></p>
          </div>
          <div className="about-images">
            <div className="image1">
            <img src="Mario and Adrian A.jpg" alt="Mario and Adrian" />
            </div>
          <div className="image2">
            <img src="restaurant chef B.jpg" alt="Adrian" />
            </div>
          </div>
        </div>
      </section>
  );
}

export default About;