import React, { Fragment } from 'react';
import spinner from './Eclipse-1s-207px.gif';

export default () => {
  return (
    <Fragment>
      <img
        src={spinner}
        style={{ width: '150px', margin: 'auto', display: 'block' }}
        alt="loading..."
      />
    </Fragment>
  );
};
