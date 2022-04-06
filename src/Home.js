import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
      <>
    <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
    </ul>
    <div>Home</div>
    </>
  )
}

export default Home;
