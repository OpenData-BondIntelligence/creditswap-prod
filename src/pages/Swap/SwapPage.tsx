import React, { useEffect } from 'react'
import { PageWrapper } from 'pages/styled'
import { TYPE } from 'theme'
import { AutoColumn } from 'components/Column'
import Widget from './widget/components/App'
import Bar from '../Bar'

export default function SwapPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageWrapper>
      <AutoColumn gap="16px">
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
          <Bar></Bar>
          <div style={{
            width: "90%",
            margin: "auto"}}
          >  
        <Widget />
        </div>

        {/*<iframe
          src="https://uniswap-widgets-demo.vercel.app/"
          width="100%"
          height="700px"
          scrolling="no"
          frameBorder="0"
          allow="gyroscope"
        ></iframe>*/}
      </AutoColumn>
    </PageWrapper>
  )
}
