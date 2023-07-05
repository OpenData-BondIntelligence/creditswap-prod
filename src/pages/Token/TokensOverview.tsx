import React, { useMemo, useEffect } from 'react'
import { PageWrapper } from 'pages/styled'
import { AutoColumn } from 'components/Column'
import { TYPE, HideSmall } from 'theme'
import TokenTable from 'components/tokens/TokenTable'
import { useAllTokenData, useTokenDatas } from 'state/tokens/hooks'
import { notEmpty } from 'utils'
import { useSavedTokens } from 'state/user/hooks'
import { DarkGreyCard } from 'components/Card'
import TopTokenMovers from 'components/tokens/TopTokenMovers'
import Bar from '../Bar'

export default function TokensOverview() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const allTokens = useAllTokenData()

  const formattedTokens = useMemo(() => {
    return Object.values(allTokens)
      .map((t) => t.data)
      .filter(notEmpty)
  }, [allTokens])

  const [savedTokens] = useSavedTokens()
  const watchListTokens = useTokenDatas(savedTokens)

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
          Tokens
        </h1>
        <Bar></Bar>
        <div style={{
          width: "90%",
          margin: "auto",
          marginTop: 25
        }} >  
          <div
            style={{
              borderRadius: 15,
              backgroundColor: 'rgba(32, 34, 50, 0.5)',
              padding: 15,
            }}
          >
            <TYPE.main style={{ marginBottom: 10 }}>Your Watchlist</TYPE.main>
            <div style={{ marginBottom: 10 }}>
              {savedTokens.length > 0 ? (
                <TokenTable tokenDatas={watchListTokens} />
              ) : (
                <DarkGreyCard>
                  <TYPE.main>Saved tokens will appear here</TYPE.main>
                </DarkGreyCard>
              )}
            </div>
            <HideSmall>
              <DarkGreyCard style={{ paddingTop: '12px' }}>
                <AutoColumn gap="md">
                  <TYPE.mediumHeader fontSize="16px">Top Movers</TYPE.mediumHeader>
                  <TopTokenMovers />
                </AutoColumn>
              </DarkGreyCard>
            </HideSmall>
          <br />
            <TYPE.main style={{ marginBottom: 10 }}>All Tokens</TYPE.main>
            <TokenTable tokenDatas={formattedTokens} />
          </div>
        </div>
      </AutoColumn>
    </PageWrapper>
  )
}
