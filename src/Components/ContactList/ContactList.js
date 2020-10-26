import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux'
import { CSSTransition, TransitionGroup } from "react-transition-group";
import itemOperations from '../redux/item/itemOperations'
import itemSelector from '../redux/item/itemSelector'
import styles from "./ContactList.module.css";

const ContactList = ({ items, deleteItem }) => {
  return (
    <TransitionGroup component="ul" className={styles.list} >
        {items && items.map(({ name, id, number }) => {
          return (
            <CSSTransition key={id}  classNames={styles} timeout={250}    > 
          <li className={styles.item}>
            <span>
              {name} {number}
            </span>
            <button
              className={styles.button}
              type="button"
              onClick={() => deleteItem(id)}
  
            >
              Delete
            </button>
          </li>
          </CSSTransition>

          );
        })}
      </TransitionGroup>
    
  );
};
ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteItem: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return   {  items: itemSelector.setVisible(state)}
}

  const mapDispatchToProps = {
    deleteItem: itemOperations.removeItem
  }

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
