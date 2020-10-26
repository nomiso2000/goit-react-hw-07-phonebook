import React from "react";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import Header from "./header";
import itemsAction from '../redux/item/itemActions'
import { CSSTransition } from "react-transition-group";
import {connect} from 'react-redux'
import Notification from '../Notification/Notification'
import itemOperations from '../redux/item/itemOperations'
import itemSelector from '../redux/item/itemSelector'
import stylesNotification from '../Notification/Notification.module.css'
import Filter from "../Filter/Filter";
import styles from "./App.module.css";

class App extends React.Component  {

  componentDidMount () {
    this.props.fetchItems()
  }

  render () {
    console.log(this.props)
    return (
      <div className={styles.container}>
         <CSSTransition
          in={true}
          classNames={styles}
          timeout={500}
          appear={true}
        >         
         <Header />
         </CSSTransition>
          <CSSTransition 
           in={this.props.notific}
           timeout={1000} 
           classNames={stylesNotification}  
           unmountOnExit
           onEntered={() => this.props.toggleNotification()}  
            > 
            <Notification/></CSSTransition>
          <ContactForm  />
          {this.props.contacts.length > 1 &&     
        <> 
          <h2>Contacts</h2>
          <Filter />
        </> }
        <ContactList  />
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    notific: itemSelector.getNotific(state),
    contacts: itemSelector.getContacts(state)
  }
}
const mapDispatchToProps = {
  toggleNotification: itemsAction.setVisible,
  fetchItems: itemOperations.fetchItems
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
