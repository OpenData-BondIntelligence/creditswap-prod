import React, { useEffect } from 'react'
import { PageWrapper } from 'pages/styled'
import { TYPE } from 'theme'
import Widget from './widget/components/App'
import Bar from '../Bar'

export default function SwapPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageWrapper>
      <h1
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
      <div>
        <Bar />
      </div>
      {/* 
      <TYPE.main style={{ marginBottom: 10, textAlign: 'center' }}>Swap your Tokens Here</TYPE.main>

      <Widget /> */}

      <iframe
        src="https://chloe-testappv2-wmn5n7rc5q-uc.a.run.app"
        width="100%"
        height="700px"
        scrolling="no"
        frameBorder="0"
        allow="gyroscope"
      />
      {/* <iframe
        src="https://uniswap-widgets-demo-iota.vercel.app/"
        width="100%"
        height="100%"
        scrolling="no"
        allow="gyroscope"
        style={{ display: 'block', border: 0, overflow: 'hidden' }}
      /> */}
    </PageWrapper>
  )
}
