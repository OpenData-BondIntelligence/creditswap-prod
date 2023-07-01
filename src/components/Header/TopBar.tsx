/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import { DropdownButton } from 'react-bootstrap'
import Logo from '../../assets/images/logotitle.png'
import HeaderBarRightSideIcons from './HeaderBarRightSideIcons.jsx'
// import "bootstrap/dist/css/bootstrap.min.css" from "react-bootstrap";

export const mainTextColor = {
  color: '#9B9EA3',
}

// Function to refresh page
function refreshHome() {
  window.location.reload()
}

const BREAKPOINT = 568

function HeaderBar() {
  let initialSubheaderFontSize
  if (window.innerWidth > BREAKPOINT) {
    initialSubheaderFontSize = 37
  } else {
    initialSubheaderFontSize = 31
  }

  const [subheaderFontSize, setSubheaderFontSize] = useState(initialSubheaderFontSize)

  // const { data } = this.props.location

  return (
    <div className="headerbar">
      <div className="menu_logo">
        <div className="hamburgerMenu"></div>
        <div className="newnew" onClick={refreshHome}>
          {/*/ This is where the logo will go */}
          <img className="headBar-logo" src={Logo} />
        </div>
      </div>

      {/* Launch AUT Swap Button */}
      <div className="flex">
        <div className="relative group">
          <a className="launchApp-link" href="https://openexa.ai" target="_blank" rel="noreferrer">
            <div className="group-hover:opacity-75 transition duration-200 absolute -inset-0.5 w-11/12 bg-gradient-to-tr from-secondary-200 to-secondary-100 rounded-lg blur opacity-0"></div>
            <button
              style={{ borderRadius: 500 }}
              className="z-10 hover:brightness-110 transition duration-300 py-2 px-4 w-11/12 text-base bg-gradient-to-tr from-secondary-100 via-secondary-200 to-secondary-300 text-center text-white shadow-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200 focus:outline-none"
            >
              <div>RWA Intelligence</div>
            </button>
          </a>
        </div>
        <div className="relative group">
          <a className="launchApp-link" href="https://openexa.io" target="_blank" rel="noreferrer">
            <div className="group-hover:opacity-75 transition duration-200 absolute -inset-0.5 w-11/12 bg-gradient-to-tr from-secondary-200 to-secondary-100 rounded-lg blur opacity-0"></div>
            <button
              style={{ borderRadius: 500 }}
              className="z-10 hover:brightness-110 transition duration-300 py-2 px-4 w-11/12 text-base bg-gradient-to-tr from-secondary-100 via-secondary-200 to-secondary-300 text-center text-white shadow-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200 focus:outline-none"
            >
              <div>Manage Tokens</div>
            </button>
          </a>
        </div>
      </div>

      {/* Dropdown Buttons on Right Side of Header Bar */}

      {window.innerWidth < 800 ? (
        <DropdownButton style={{ marginRight: 5 }} title="">
          <HeaderBarRightSideIcons mainTxtColor={mainTextColor} subHeaderFS={subheaderFontSize} />
        </DropdownButton>
      ) : (
        <HeaderBarRightSideIcons mainTxtColor={mainTextColor} subHeaderFS={subheaderFontSize} />
      )}
    </div>
  )
}

export default HeaderBar
