import React from "react";
import { useState } from 'react';
import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/UI/FindCarForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import Testimonial from "../components/UI/Testimonial";
import BlogList from "../components/UI/BlogList";

import Form from "../components/UI/Form"
import "./home.css"
import FindCar2 from "../components/UI/FindCar2"
import FindCar3 from "../components/UI/FindCar3"



const Home = () => {
  const [view, setView] = useState(true);
  const [view2, setView2] = useState(false);
  const [view3, setView3] = useState(false);

  const viewForm = ()=>{
setView(true)
setView2(false)
setView3(false)
  }
  const viewFormT = ()=>{
    setView(false)
    setView2(true)
    setView3(false)
      }
  const viewFormTT = ()=>{
    setView(false)
    setView2(false)
    setView3(true)
      }




  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />
        {/* <Form/> */}

        <div className="hero__form">
          <Container>
            <Row className="form__row">
           
                <div className="navbtaan" style={{padding : 0}}>
                <button onClick={viewForm} className={`nbt ${view && "active"}`}> Local</button>
                <button onClick={viewFormT} className={`nbt ${view2 && "active"}`}> Airport</button>
                <button onClick={viewFormTT}className={`nbt ${view3 && "active"}`}> Package</button>
                </div> 
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find your best car here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                {
                  view2 &&  <FindCar2/> 
                  
                }
                {
                  view && <FindCarForm/>
                }
                {
                  view3 && <FindCar3/>
                }


                

              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* =========== about section ================ */}
      <AboutSection />
      {/* ========== services section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
      {/* =========== car offer section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>

            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
      {/* =========== become a driver section ============ */}
      <BecomeDriverSection />

      {/* =========== testimonial section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Our clients says</h6>
              <h2 className="section__title">Testimonials</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>

      {/* =============== blog section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Explore our blogs</h6>
              <h2 className="section__title">Latest Blogs</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
