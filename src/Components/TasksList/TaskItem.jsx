import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import cx from 'classnames'

// import s from './styles.css'
// import glob from '../../styles/global/global.css'



function TaskItem({ children, to }) {
  const content = to ? (
    <Link to={to}>{children}</Link>
  ) : (
    <div>{children}</div>
  );

  return (
    <td>
      {content}
    </td>
  );
}

export default TaskItem