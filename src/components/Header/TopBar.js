import Logo from '../../assets/images/logotitle.png'
import { useEffect, useContext } from 'react'
import { AppContext } from '../../utils/WebContextProvider'
import { clsx } from 'clsx'
import { useConnectWalletHandler } from '../../utils/web3.js'
import React from 'react'

function refreshHome() {
  window.location.reload()
}

const ConnectWalletButton = () => {
  const { walletConnected } = useContext(AppContext)
  const [connectWalletHandler, disconnectWalletHandler] = useConnectWalletHandler()

  useEffect(() => {
    if (localStorage.getItem('buttonHasBeenClicked') === 'true') {
      //connectWalletHandler();
    }
  }, [])

  function changeStatus() {
    if (localStorage.getItem('buttonHasBeenClicked') === 'false') {
      //connectWalletHandler();
    } else {
      //disconnectWalletHandler();
    }
  }

  return (
    <div className="group relative">
      <div
        className="flex items-center justify-center"
        style={{
          width: '100%',
        }}
      >
        <button
          className={clsx(
            'flex items-center justify-center group z-10 flex w-full rounded-lg bg-gray-500 p-2 text-center text-base font-semibold shadow-md transition duration-300 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200',
            walletConnected && 'bg-gray-700 text-emerald-500',
            !walletConnected && 'bg-gray-500 text-white'
          )}
          onClick={changeStatus}
        >
          <div className="ml-2 mr-2 hidden group-hover:block">
            {walletConnected ? 'Wallet Connected' : 'Connect Wallet'}
          </div>

          {walletConnected ? (
            <div className="m-2 h-3 w-3 rounded-full bg-emerald-500"></div>
          ) : (
            <div className="m-2 h-3 w-3 rounded-full bg-white"></div>
          )}
        </button>
      </div>
    </div>
  )
}

function HeaderBar() {
  return (
    <div
      className="grid grid-cols-3 gap-x-3"
      style={{ backgroundColor: '#202232', gridTemplateColumns: '19% 60% 19%' }}
    >
      <div className="menu_logo">
        <div className="hamburgerMenu"></div>
        <div className="newnew" onClick={refreshHome}>
          {/*/ This is where the logo will go */}
          <img className="headBar-logo" src={Logo} />
        </div>
      </div>
      {/* Launch AUT Swap and Bond Intelligence Buttons */}
      <div className="flex items-center justify-center">
        <div className="relative group">
          <a className="launchApp-link" href="https://openexa.ai" target="_blank" rel="noreferrer">
            <div className="group-hover:opacity-75 transition duration-200 absolute -inset-0.5 w-11/12 bg-gradient-to-tr from-secondary-200 to-secondary-100 rounded-lg blur opacity-0"></div>
            <button
              style={{ borderRadius: 500 }}
              className="z-10 hover:brightness-110 transition duration-300 py-2 px-4 w-11/12 text-base bg-gradient-to-tr from-secondary-100 via-secondary-200 to-secondary-300 text-center text-white shadow-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200 focus:outline-none"
            >
              <div style={{}}>RWA Intelligence</div>
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
      <div style={{ display: 'flex', marginRight: 5 }} className="items-center justify-end">
        {/*<ConnectWalletButton />*/}
      </div>
    </div>
  )
}

export default HeaderBar
