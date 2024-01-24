import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './tab2.css'

const Tab2 = (props) => {
  return (
    <Link to="/recharge" className="">
      <div className={`tab2-container ${props.rootClassName} `}>
        <svg viewBox="0 0 1024 1024" className="tab2-icon">
          <path
            d="M682 576q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM512 682v-340h426v340h-426zM896 768v42q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596q34 0 60 26t26 60v42h-384q-36 0-61 25t-25 61v340q0 36 25 61t61 25h384z"
            className=""
          ></path>
        </svg>
        <span className="tab2-text">{props.text}</span>
      </div>
    </Link>
  )
}

Tab2.defaultProps = {
  text: 'Recharge',
  HomeTab: 'Invite',
  rootClassName1: '',
  rootClassName: '',
  RechargeTab: 'Recharge',
}

Tab2.propTypes = {
  text: PropTypes.string,
  HomeTab: PropTypes.string,
  rootClassName1: PropTypes.string,
  rootClassName: PropTypes.string,
  RechargeTab: PropTypes.string,
}

export default Tab2
