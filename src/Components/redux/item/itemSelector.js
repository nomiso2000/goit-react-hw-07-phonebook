import { createSelector } from "@reduxjs/toolkit"


const getContacts = state => state.items.items
const getNotific = state => state.items.toggle
const getFilter = state => state.items.filter
// const  setVisible = state => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state).toLowerCase();
//   return contacts.filter(contact => contact.name.toLowerCase().includes(filter))

// }
const setVisible = createSelector(
    [getContacts, getFilter],
     (contacts, filter ) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
})
export default {
    getContacts,
    getNotific,
    getFilter,
    setVisible
}