import React from "react"

const About = () => {
  return (
    <>
      <section className="about-container">
        <div className="splash-container"></div>
        <article>
          <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
          <p>
            {" "}
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉) Our
            team is full of vanlife enthusiasts who know firsthand the magic of
            touring the world on 4 wheels.
          </p>
          <div className="cta">
            <h3>Your destination is waiting. Your van is ready.</h3>
            <button>Explore our vans</button>
          </div>
        </article>
      </section>
    </>
  )
}

export default About
