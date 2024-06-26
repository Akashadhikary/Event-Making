import React from 'react'
import {Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create">Create Event</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Nav
