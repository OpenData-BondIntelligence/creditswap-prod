import React, { useEffect } from 'react'
import { PageWrapper } from 'pages/styled'

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
        Swap
      </h1>
      <iframe
        src="https://uniswap-widgets-demo.vercel.app/"
        width="100%"
        height="700px"
        scrolling="no"
        frameBorder="0"
        allow="gyroscope"
      ></iframe>
    </PageWrapper>
  )
}
