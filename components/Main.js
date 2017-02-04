import React from 'react';
import {link} from 'react-router';

export default Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
      </div>
    );
  }
});
