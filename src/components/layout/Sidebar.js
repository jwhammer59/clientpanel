import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <Link to="/client/add" className="btn btn-success btn-block">
        <i className="fas fa-plus" /> New
      </Link>
    </div>
  );
};
