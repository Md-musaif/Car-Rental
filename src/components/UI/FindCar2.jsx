import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <>
    {/* <section>
      <div className="secContainer container">
        <div className="homeText"></div>

        <div className="homeCard grid"></div>
        <div className="locationDiv">
          <label htmlFor="location">Location</label>
          <input type="text" />
        </div>

      </div>
    </section> */}
    <Form className="form">
      <h3>Airport</h3>
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="From address" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="To address" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Journey date" required />
        </FormGroup>

        {/* <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Journey time"
            required
          />
        </FormGroup> */}
        <FormGroup className="select__group">
          {/* <select>
            <option value="ac">AC Car</option>
            <option value="non-ac">Non AC Car</option>
          </select> */}
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Find Car</button>
        </FormGroup>
      </div>
    </Form>
    </>
  );
};

export default FindCarForm;
