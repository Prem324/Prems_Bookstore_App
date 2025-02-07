import { Component } from "react";
import Popup from "reactjs-popup";
import Payment from "../Payment";
import "./index.css";

class UserDetailsForm extends Component {
  state = { isSubmit: false };
  onSubmitForm = (event) => {
    event.preventDefault();
    this.setState({ isSubmit: true });
  };
  render() {
    const { isSubmit } = this.state;
    return (
      <>
        <div className="user-form">
          <h2 className="form-heading"> Delivery Address and Contact Info </h2>
          <form onSubmit={this.onSubmitForm}>
            <label className="user-details-form-label">Name </label>
            <br />
            <div className="grid-container">
              <input
                className="user-details-form-name-input"
                type="text"
                required
                placeholder="First Name "
              ></input>
              <input
                className="user-details-form-name-input"
                type="text"
                required
                placeholder="Last Name "
              ></input>
            </div>
            <label className="user-details-form-label">
              Email
              <br />
              <input
                className="user-details-form-input"
                type="email"
                required
                placeholder="Email"
              
              ></input>
            </label>
            <br />
            <label className="user-details-form-label">
              Phone Number
              <br />
              <input
                className="user-details-form-input"
                type="tel"
                required
                placeholder="Phone"
                pattern="[0-9]{10}"
              ></input>
            </label>
            <br />
            <label className="user-details-form-label">
              Address
              <br />
              <input
                className="user-details-form-input"
                type="text"
                required
                placeholder="Address"
              ></input>
            </label>
            <br />
            <label className="user-details-form-label">
              Country
              <br />
              <input
                className="user-details-form-input"
                type="text"
                required
              ></input>
            </label>
            <br />
            {isSubmit ? (
              <Popup
                modal
                trigger={
                  <button type="submit" className="submit-button">
                    Order Now
                  </button>
                }
                position="top-left"
              >
                {(close) => <Payment close={close} />}
              </Popup>
            ) : (
              <button type="submit" className="submit-button">
                Submit
              </button>
            )}
          </form>
        </div>
      </>
    );
  }
}

export default UserDetailsForm;
