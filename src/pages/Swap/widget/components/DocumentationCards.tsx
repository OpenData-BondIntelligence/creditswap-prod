/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
// @ts-nocheck
import styles from '../styles/Cards.module.css'
import { BsInfoCircle } from 'react-icons/bs'
import { FaMoneyCheckAlt } from 'react-icons/fa'
import Web3Connectors from './Web3Connectors'
import styles2 from '../styles/Home.module.css'
import store from '../../../../state'
import { Provider } from 'react-redux'

export default function DocumentationCards({ connectors }) {
  return (
    <div className={styles.grid}>
      <div className={styles2.connectors} ref={connectors} tabIndex={-1}>
        <Provider store={store}>
          <Web3Connectors />
        </Provider>
      </div>

      <a target="_blank" className={styles.card} rel="noreferrer">
        <div className={styles.row}>
          <BsInfoCircle className={styles.logo} />↗
        </div>
        <h3>EDX Exchange</h3>
        <p style={{ fontSize: 20 }}>Coming Soon</p>
      </a>

      <a
        target="_blank"
        className={styles.card}
        rel="noreferrer"
      >
        <div className={styles.row}>
          <FaMoneyCheckAlt className={styles.logo} />↗
        </div>
        <h3>NFT Marketplace</h3>
        <p style={{ fontSize: 20 }}>Coming Soon</p>
      </a>

      {/* <a href="https://docs.uniswap.org/sdk/widgets/swap-widget" className={styles.card}>
        <div className={styles.row}>
          <BsInfoCircle />↗
        </div>
        <h3>Swap Widget Docs</h3>
        <p>Explore the Swap Widget&apos;s features and API.</p>
      </a>

      <a href="https://discord.gg/ybKVQUWb4s" className={styles.card + ' ' + styles.external}>
        <div className={styles.row}>
          <FaDiscord className={styles.logo} fill="#8c9eff" />
          <div className={styles.column}>
            <h3>Discord</h3>
            <p>Hop into #widgets for realtime help.</p>
          </div>
        </div>
      </a> */}

      {/* <a
        href="https://github.com/OpenData-BondIntelligence"
        className={styles.card + ' ' + styles.external}
      >
        <div className={styles.row}>
          <FaGithub className={styles.logo} />
          <div className={styles.column}>
            <h3>GitHub</h3>
            <p>View the OpenExa Github.</p>
          </div>
        </div>
      </a> */}
    </div>
  )
}
