function Main() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-container">
        <div className="hero-left">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <button>Reserve a Table</button>
        </div>
        <div className="hero-right">
        <img src="restauranfood.jpg" alt="Chef holding a dish" />
        </div>
        </div>
      </section>
      <section id="highlights-section">
        <div className="highlights-top">
          <h2>This Week's Specials!</h2>
          <button>Online Menu</button>
        </div>
        <div className="highlights-card-container">
          <div className="highlights-card">
            <div className="highlights-card-image">
            <img src="greek salad.jpg" alt="Greek Salad" />
            </div>
            <div className="highlights-card-header">
            <h2 className="highlights-card-title">Greek Salad</h2>
            <p className="highlights-card-price">$12.99</p>
            </div>
            <div className="highlights-card-content">
            <p className="highlights-content">The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            </div>
            <div className="highlights-card-footer">
            <p className="tagline">Order a delivery</p>
            </div>
          </div>
          <div className="highlights-card">
            <div className="highlights-card-image">
            <img src="bruschetta.svg" alt="Bruschetta" />
            </div>
            <div className="highlights-card-header">
            <h2 className="highlights-card-title">Bruschetta</h2>
            <p className="highlights-card-price">$5.99</p>
            </div>
            <div className="highlights-card-content">
            <p className="highlights-content">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
            </div>
            <div className="highlights-card-footer">
            <p className="tagline">Order a delivery</p>
            </div>
          </div>
          <div className="highlights-card">
            <div className="highlights-card-image">
            <img src="lemon dessert.jpg" alt="Lemon Dessert" />
            </div>
            <div className="highlights-card-header">
            <h2 className="highlights-card-title">Lemon Dessert</h2>
            <p className="highlights-card-price">$4.99</p>
            </div>
            <div className="highlights-card-content">
            <p className="highlights-content">This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            </div>
            <div className="highlights-card-footer">
            <p className="tagline">Order a delivery</p>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-top">
          <h1>Testimonials</h1>
          </div>
          <div className="testimonials-card-container">
            <div className="testimonials-card">
              <div className="testimonials-card-rating">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <div className="testimonials-card-image">
              <img src="customer1.jpg" alt="Customer 1" />
              </div>
              <div className="testimonials-card-name">
                <h3>Saya D.</h3>
              </div>
              <div className="testimonials-card-content">
                <p>"I love going to Little Lemon! Best Bruschetta I've ever had!"</p>
                </div>
            </div>
            <div className="testimonials-card">
              <div className="testimonials-card-rating">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <div className="testimonials-card-image">
              <img src="customer2.jpg" alt="Customer 2" />
              </div>
              <div className="testimonials-card-name">
                <h3>Jake B.</h3>
              </div>
              <div className="testimonials-card-content">
                <p>"Highly reccommend. We celebrate all our big events there, the food and atmosphere never dissapoint"</p>
                </div>
            </div>
            <div className="testimonials-card">
              <div className="testimonials-card-rating">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <div className="testimonials-card-image">
              <img src="customer3.jpg" alt="Customer 3" />
              </div>
              <div className="testimonials-card-name">
                <h3>Vera S.</h3>
              </div>
              <div className="testimonials-card-content">
                <p>"Our go-to restaurant with my family and friends. The food is amazing!"</p>
                </div>
            </div>
            <div className="testimonials-card">
              <div className="testimonials-card-rating">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <div className="testimonials-card-image">
              <img src="customer4.jpg" alt="Customer 4" />
              </div>
              <div className="testimonials-card-name">
                <h3>Jordan T.</h3>
              </div>
              <div className="testimonials-card-content">
                <p>"The food was fantastic and the service excellent. I will be back again!"</p>
                </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about-section">
        <div className="about-container">
          <div className="about-content">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
              At Little Lemon, we believe in creating memorable dining experiences that celebrate the rich flavors of Mediterranean cuisine. Our chefs use the freshest ingredients to craft dishes that are both traditional and innovative. Whether you're joining us for a casual meal or a special occasion, we strive to provide exceptional service in a warm and inviting atmosphere.
            </p>
          </div>
          <div className="about-images">
            <img src="Mario and Adrian A.jpg" alt="Mario and Adrian" />
            <img src="restaurant chef B.jpg" alt="Adrian" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;