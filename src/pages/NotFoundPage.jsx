import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = (props) => {
  return (
    <>
        <div id="not-found">
            <div className="text-box">
                <h1>Oops!</h1>
                <p>Looks like the page you're looking for got lost in space...</p>
                <p>Don't worry,  we'll help you get back on track.</p>
                <Link className="btn" to={props.dest} >Go Back Home</Link>
                </div>
        </div>
    </>
  )
}

export default NotFoundPage


