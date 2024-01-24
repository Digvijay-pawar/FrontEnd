import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './tab1.css'

const Tab1 = (props) => {
  return (
    <Link to="/invite" className="">
      <div className={`tab1-container ${props.rootClassName} `}>
        <svg viewBox="0 0 1024 1024" className="tab1-icon">
          <path
            d="M554 554q80 0 168 35t88 93v86h-512v-86q0-58 88-93t168-35zM838 562q74 12 130 43t56 77v86h-128v-86q0-68-58-120zM554 470q-52 0-90-38t-38-90 38-90 90-38 90 38 38 90-38 90-90 38zM768 470q-20 0-38-6 38-54 38-122t-38-122q18-6 38-6 52 0 90 38t38 90-38 90-90 38zM342 426v86h-128v128h-86v-128h-128v-86h128v-128h86v128h128z"
            className=""
          ></path>
        </svg>
        <span className="tab1-text">{props.HomeTab}</span>
      </div>
    </Link>
  )
}

Tab1.defaultProps = {
  HomeTab: 'Invite',
  rootClassName: '',
}

Tab1.propTypes = {
  HomeTab: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Tab1
