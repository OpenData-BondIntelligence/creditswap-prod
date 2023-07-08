import React, { useEffect } from 'react'
import { PageWrapper } from 'pages/styled'
import { TYPE } from 'theme'
import Widget from './widget/components/App'

export default function SwapPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageWrapper>
      {/* <h1
        style={{
          lineHeight: '80px',
          fontSize: 40,
          color: 'white',
          margin: 0,
          padding: 0,
          textAlign: 'center',
        }}
      >
        Credit Swap
      </h1>
      <TYPE.main style={{ marginBottom: 10, textAlign: 'center' }}>Swap your Tokens Here</TYPE.main>

      <Widget /> */}

      <iframe
        src="https://uniswap-widgets-demo-iota.vercel.app"
        width="100%"
        height="800px"
        scrolling="no"
        frameBorder="0"
        allow="gyroscope"
      ></iframe>
    </PageWrapper>
  )
}
