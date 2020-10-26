import React from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import {connect} from 'react-redux'
import itemAction from '../redux/item/itemActions'
import itemSelector from '../redux/item/itemSelector'

const Filter = ({ onSetFilter, value }) => {
  const loginInputId = uuidv4();
  return (
    <div>
      <h3>Find contact by name</h3>
      <input
        onChange={e => onSetFilter(e.target.value)}
        value={value}
        type="text"
        name="filter"
        id={loginInputId}
        placeholder="Enter a name to search..."
      />
    </div>
  );
};
Filter.propTypes = {
  onSetFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    value: itemSelector.getFilter(state)
  }
);
const mapDispatchToProps = {
  onSetFilter: itemAction.setFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
