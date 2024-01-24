import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './tab.css'

const Tab = (props) => {
  return (
    <Link to="/" className="">
      <div className={`tab-container ${props.rootClassName} `}>
        <svg viewBox="0 0 1024 1024" className="tab-icon">
          <path
            d="M426 854h-212v-342h-128l426-384 426 384h-128v342h-212v-256h-172v256z"
            className=""
          ></path>
        </svg>
        <span className="tab-text">{props.HomeTab}</span>
      </div>
    </Link>
  )
}

Tab.defaultProps = {
  rootClassName: '',
  HomeTab: 'Home',
}

Tab.propTypes = {
  rootClassName: PropTypes.string,
  HomeTab: PropTypes.string,
}

export default Tab
