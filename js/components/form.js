import React from 'react';

class Form extends React.Component {
  constructor () {
    super();

  }
  render() {
    return (
      <div className = "gameForm">
        <input type = "text"/>
        <button type = "submit"> Take a guess! </button>
        <p className = "displayFeedback">{} </p>
        <p className = "displayArray"> {} </p>
      </div>
    )
  }

}
