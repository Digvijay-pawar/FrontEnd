import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './tab3.css'

const Tab3 = (props) => {
  return (
    <Link to="/my" className="">
      <div className={`tab3-container ${props.rootClassName} `}>
        <svg viewBox="0 0 1024 1024" className="tab3-icon">
          <path
            d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"
            className=""
          ></path>
        </svg>
        <span className="tab3-text">{props.MyTab}</span>
      </div>
    </Link>
  )
}

Tab3.defaultProps = {
  rootClassName: '',
  MyTab: 'My',
}

Tab3.propTypes = {
  rootClassName: PropTypes.string,
  MyTab: PropTypes.string,
}

export default Tab3
