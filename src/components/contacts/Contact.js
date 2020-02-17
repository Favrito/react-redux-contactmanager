import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteContact } from "../../actions/contactActions";

import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onArrowClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = id => {
    this.props.deleteContact(id);
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}
          {showContactInfo ? (
            <FaAngleUp
              onClick={this.onArrowClick}
              style={{ cursor: "pointer", marginLeft: "6px" }}
            />
          ) : (
            <FaAngleDown
              onClick={this.onArrowClick}
              style={{ cursor: "pointer", marginLeft: "6px" }}
            />
          )}
          <FaTimes
            onClick={this.onDeleteClick.bind(this, id)}
            style={{ cursor: "pointer", float: "right", color: "red" }}
          />
          <Link to={`/contact/edit/${id}`}>
            <FaPencilAlt
              style={{
                cursor: "pointer",
                float: "right",
                color: "black",
                marginRight: "1rem"
              }}
            />
          </Link>
        </h4>

        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired
};

export default connect(null, { deleteContact })(Contact);
