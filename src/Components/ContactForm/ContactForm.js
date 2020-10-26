import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux'
import itemsOperation from '../redux/item/itemOperations'
import itemsAction from '../redux/item/itemActions'
import itemSelector from '../redux/item/itemSelector'
import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  static propTypes = {
    onAddItem: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };
 contains(array, value) {
   return array.some( el => el.name.toLowerCase() === value.toLowerCase()
   );
 }
  handleSubmit = (e) => {
    e.preventDefault();
    
       if( this.contains(this.props.contacts, this.state.name)) {
        this.props.toggleNotification()
       } else if( this.state.name && this.state.number) {
       this.props.onAddItem(this.state.name, this.state.number )
       }
     
    this.clearState();
  };

  clearState = () => {
    this.setState({
      name: "",
      number: "",
    
    });
  };

  render() {
    const { name, number } = this.state;
    
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name..."
          onChange={this.handleChange}
          value={name}
        />
        <input
          type="text"
          name="number"
          placeholder="Enter your number..."
          onChange={this.handleChange}
          value={number}
        />
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {
    contacts: itemSelector.getContacts(state)
  }
}
const mapDispatchToProps = {
  onAddItem: itemsOperation.addItem ,
  toggleNotification: itemsAction.setVisible
}
export default connect(mapStateToProps, mapDispatchToProps )(ContactForm);
