import React, { useEffect } from 'react'

export default function SwapPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    // <PageWrapper>
    <iframe
      src="https://uniswap-widgets-demo.vercel.app/"
      width="100%"
      height="700"
      scrolling="no"
      frameBorder="0"
      allow="gyroscope"
    ></iframe>

    // </PageWrapper>
  )
}
