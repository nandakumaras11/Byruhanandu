import Contact from "../Contact/Contact";
import { ToggleSwitch } from "../../Components/ToggleSwitch/ToggleSwitch";
import { useState, useEffect } from "react";
import "./Gallery.scss";
import SimpleImageSlider from "react-simple-image-slider";
import { Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Home = () => {
  const [isVegitable, handleVegitables] = useState(false);
  const fruits = [
    {
      name: "Apple",
    },
    {
      name: "Orange",
    },
    {
      name: "Kiwi",
    },
    {
      name: "Avacado",
    },
    {
      name: "Strawberries",
    },
    {
      name: "Mango",
    },
    {
      name: "Pineapple",
    },
    {
      name: "Grape",
    },
    {
      name: "Banana",
    },
    {
      name: "Watermelon",
    },
    {
      name: "Dragaon Fruit",
    },
    {
      name: "Pappaya",
    },
    {
      name: "Raspberries",
    },
    {
      name: "Cranberries",
    },
    {
      name: "Fig",
    },
    {
      name: "Guava",
    },
    {
      name: "Sapota",
    },
    {
      name: "Pear",
    },
  ];
  const vegitables = [
    {
      name: "Onion",
    },
    {
      name: "Tomato",
    },
    {
      name: "Coconut",
    },
    {
      name: "Mushroom",
    },
    {
      name: "Chillies",
    },
    {
      name: "Celery",
    },
    {
      name: "Cauliflower",
    },
    {
      name: "Potato",
    },
    {
      name: "Carrot",
    },
    {
      name: "Broccoli",
    },
    {
      name: "Pumpkin",
    },
    {
      name: "Capsicum",
    },
    {
      name: "Beetroot",
    },
  ];

  const images = [
    { url: "./bg4.jpg" },
    { url: "./bg5.jpg" },
    { url: "./bg3.png" },
  ];
  const mobileImages = [
    { url: "./mbg4.jpg" },
    { url: "./mbg5.jpg" },
    { url: "./mbg3.jpg" },
  ];
  const [products, handleProductArray] = useState(vegitables);

  useEffect(() => {
    handleProductArray(isVegitable ? vegitables : fruits);
  }, [isVegitable]);

  return (
    <>
      <section id="hero">
        {/* <section id="hero" className="d-flex align-items-center"> */}
        {/* <SimpleImageSlider
          width="100%"
          slideDuration={2}
          height="70vh"
          images={window.screen.width < 768 ? mobileImages : images}
          showBullets={true}
          showNavs={false}
          autoPlay={true}
        /> */}
        <video loop autoPlay={true} muted style={{ width: "100%" }}>
          <source src="./bghome.mp4" type="video/mp4" />
        </video>
        {/* <video src="./bghome.mp4" autoPlay={true} style={{width:"100%"}} /> */}
        <div className="slider_text" data-aos="zoom-in-right">
          {/* <div className="slider_txt">
            <h1>Go Green, Eat Healthy</h1>
          </div> */}
          {/* <div className="slider_button">
            <Link to="/about">
              <Button variant="success">
                Why Byruha <FaArrowRight size="0.7em" />{" "}
              </Button>
            </Link>
          </div> */}
        </div>
      </section>
      <div className="slider_txt">
            <h1>Go Green ! Eat Healthy !</h1>
          </div>
      <main id="main">
        <section id="whoweare" className="whoweare">
          <div className="container">
       
            <div className="section-title" data-aos="fade-up">
              {/* <h2>Who we are</h2> */}
              <div className="who_we_are_container">
                <div className="who_we_are_img" data-aos="fade-left">
                  <img className="img-fluid animated" src="./fruithand.jpg" />
                </div>
                <div className="who_we_are_txt " data-aos="fade-right">
                  {" "}
                  <div className="who_we_are_txt_heading">Fruits & Veggies from Every Origin, Specially Chosen by BYRUHA</div>
                  <p>
                    Byruha food stuff LLC is one of middle east leading importer
                    & wholesalers of fresh fruit & vegetables. We import tonnes
                    of fresh fruits & veggies from Kenya, South Africa, Sri
                    Lanka, India, China, Egypt, Pakistan, Iran, Turkey, Ukraine
                    and many more. Headquartered in Dubai, under a wise management we dedicate
                    ourselves in supplying the region with top quality products
                    all over the world.
                    {/* .By sourcing products from multiple
                    countries, the company is able to provide customers with a
                    diverse selection of high-quality food products year-round.
                    Byruha Food Stuff LLC is committed to providing exceptional
                    customer service and ensuring that all of their products
                    meet the highest standards of quality and freshness. */}
                  </p>
                  {/* <p>
                    Headquartered in Dubai, under a wise management we dedicate
                    ourselves in supplying the region with top quality products
                    all over the world.By sourcing products from multiple
                    countries, the company is able to provide customers with a
                    diverse selection of high-quality food products year-round.
                    Byruha Food Stuff LLC is committed to providing exceptional
                    customer service and ensuring that all of their products
                    meet the highest standards of quality and freshness.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="services">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Features</h2>
              <p>Tailored solutions to meet your needs.</p>
            </div>

            <div className="row">
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="icon">
                    <i className="bi bi-box"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Wholesale</a>
                  </h4>
                  <p className="description">
                    Bulk supply of fresh produce for global distribution.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="icon">
                    <i className="bi bi-boxes"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Retail</a>
                  </h4>
                  <p className="description">
                    Fresh, quality produce for retail customers worldwide.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="icon">
                    <i className="bi bi-airplane"></i>
                  </div>
                  <h4 className="title">
                    <a href=""> International business</a>
                  </h4>
                  <p className="description">
                    International business with Kenya, South Africa, Sri Lanka,
                    India, China, Egypt, Pakistan, Iran, Turkey, Ukraine.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="icon">
                    <i className="bi bi-truck"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Own logistics and supply chain management</a>
                  </h4>
                  <p className="description">
                    In-house logistics and supply chain management for efficient
                    operations.
                  </p>
                </div>
              </div>
            </div>
            <div className="row" style={{ marginTop: "1%" }}>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="icon">
                    <i className="bi bi-currency-dollar"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Attractive Pricing</a>
                  </h4>
                  <p className="description">
                    Competitive and compelling pricing to fit your budget.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="icon">
                    <i className="bi bi-stars"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Premium Quality</a>
                  </h4>
                  <p className="description">
                    Superior quality products and services to exceed
                    expectations.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="icon">
                    <i className="bi bi-people"></i>
                  </div>
                  <h4 className="title">
                    <a href=""> Direct market access</a>
                  </h4>
                  <p className="description">
                    We offer direct market access to Kenya, South Africa, Sri
                    Lanka, India, China, Egypt, Pakistan, Iran, Turkey, and
                    Ukraine, among other countries.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="icon">
                    <i className="bi bi-cursor"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Re-Exporting</a>
                  </h4>
                  <p className="description">
                    Exporting previously imported goods to new markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Services Section -->
      <!-- ======= Portfolio Section ======= --> */}
        <section id="portfolio" className="portfolio">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Our Products</h2>
              <p>
                Freshly harvested fruits and veggies for global distribution.
              </p>
            </div>
            <ToggleSwitch
              isVegitable={isVegitable}
              handleVegitables={handleVegitables}
            />
            <section className="skills">
              <div className="container">
                <div className="skills-flex-container">
                  {products.map((item, index) => {
                    return (
                      <div className="box" key={index}>
                        <a
                          href={
                            "whatsapp://send?text=I am interested in buying " +
                            item.name +
                            ". Can you provide me with pricing and shipping information?!&phone=+971525966515"
                          }
                        >
                          <div className="image">
                            <img
                              src={
                                "../../../img/product/" +
                                item.name.toLowerCase() +
                                ".png"
                              }
                              alt={item.name}
                            />
                          </div>{" "}
                        </a>
                        <div className="title">{item.name}</div>
                      </div>
                      // </a>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        </section>
        {/* <!-- End Portfolio Section --> */}

        {/* <!-- ======= Contact Section ======= --> */}
        <Contact />
        {/* <!-- End Contact Section --> */}
      </main>
    </>
  );
};
