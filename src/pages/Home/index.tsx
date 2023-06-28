import React, { useState, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import { AutoColumn } from 'components/Column'
import { TYPE } from 'theme'
import { ResponsiveRow, RowBetween, RowFixed } from 'components/Row'
import LineChart from 'components/LineChart/alt'
import useTheme from 'hooks/useTheme'
import { useProtocolChartData, useProtocolData, useProtocolTransactions } from 'state/protocol/hooks'
import { DarkGreyCard } from 'components/Card'
import { formatDollarAmount } from 'utils/numbers'
import Percent from 'components/Percent'
import { HideMedium, HideSmall, StyledInternalLink } from '../../theme/components'
import TokenTable from 'components/tokens/TokenTable'
import PoolTable from 'components/pools/PoolTable'
import { PageWrapper, ThemedBackgroundGlobal } from 'pages/styled'
import { unixToDate } from 'utils/date'
import BarChart from 'components/BarChart/alt'
import { useAllPoolData } from 'state/pools/hooks'
import { notEmpty } from 'utils'
import TransactionsTable from '../../components/TransactionsTable'
import { useAllTokenData } from 'state/tokens/hooks'
import { MonoSpace } from 'components/shared'
import { useActiveNetworkVersion } from 'state/application/hooks'
import { useTransformedVolumeData } from 'hooks/chart'
import { SmallOptionButton } from 'components/Button'
import { VolumeWindow } from 'types'
import Network from '../../components/Header'
import { Text, StyleSheet } from 'react-native'
import SearchSmall from 'components/Search'
import Bar from '../Bar'

import NetworkDropdown from 'components/Menu/NetworkDropdown'

const ChartWrapper = styled.div`
  width: 49%;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 100%;
  `};
`

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const theme = useTheme()

  const [activeNetwork] = useActiveNetworkVersion()

  const [protocolData] = useProtocolData()
  const [transactions] = useProtocolTransactions()

  const [volumeHover, setVolumeHover] = useState<number | undefined>()
  const [liquidityHover, setLiquidityHover] = useState<number | undefined>()
  const [leftLabel, setLeftLabel] = useState<string | undefined>()
  const [rightLabel, setRightLabel] = useState<string | undefined>()

  // Hot fix to remove errors in TVL data while subgraph syncs.
  const [chartData] = useProtocolChartData()

  useEffect(() => {
    setLiquidityHover(undefined)
    setVolumeHover(undefined)
  }, [activeNetwork])

  // get all the pool datas that exist
  const allPoolData = useAllPoolData()
  const poolDatas = useMemo(() => {
    return Object.values(allPoolData)
      .map((p) => p.data)
      .filter(notEmpty)
  }, [allPoolData])

  // if hover value undefined, reset to current day value
  useEffect(() => {
    if (volumeHover === undefined && protocolData) {
      setVolumeHover(protocolData.volumeUSD)
    }
  }, [protocolData, volumeHover])
  useEffect(() => {
    if (liquidityHover === undefined && protocolData) {
      setLiquidityHover(protocolData.tvlUSD)
    }
  }, [liquidityHover, protocolData])

  const formattedTvlData = useMemo(() => {
    if (chartData) {
      return chartData.map((day) => {
        return {
          time: unixToDate(day.date),
          value: day.tvlUSD,
        }
      })
    } else {
      return []
    }
  }, [chartData])

  const formattedVolumeData = useMemo(() => {
    if (chartData) {
      return chartData.map((day) => {
        return {
          time: unixToDate(day.date),
          value: day.volumeUSD,
        }
      })
    } else {
      return []
    }
  }, [chartData])

  const weeklyVolumeData = useTransformedVolumeData(chartData, 'week')
  const monthlyVolumeData = useTransformedVolumeData(chartData, 'month')

  const allTokens = useAllTokenData()

  const formattedTokens = useMemo(() => {
    return Object.values(allTokens)
      .map((t) => t.data)
      .filter(notEmpty)
  }, [allTokens])

  const [volumeWindow, setVolumeWindow] = useState(VolumeWindow.weekly)

  const tvlValue = useMemo(() => {
    if (liquidityHover) {
      return formatDollarAmount(liquidityHover, 2, true)
    }
    return formatDollarAmount(protocolData?.tvlUSD, 2, true)
  }, [liquidityHover, protocolData?.tvlUSD])

  return (
    <PageWrapper style={{ width: '100%' }}>
      <ThemedBackgroundGlobal backgroundColor={activeNetwork.bgColor} />
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
          Overview
        </h1>
        <Bar></Bar>

        <div style={{ width: '90%', margin: 'auto' }}>
          <div style={{ marginTop: 20, marginBottom: 35, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <DarkGreyCard
              width={window.innerWidth > 900 ? 'fit-content' : '100%'}
              style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '90vw' }}
              className="flex"
            >
              <div>
                {window.innerWidth > 700 ? (
                  <RowBetween>
                    <RowFixed>
                      <NetworkDropdown />
                      <SearchSmall />
                    </RowFixed>
                  </RowBetween>
                ) : (
                  <div>
                    <div className="flex">
                      <NetworkDropdown />
                    </div>
                    <div className="flex">
                      <SearchSmall />
                    </div>
                  </div>
                )}
              </div>
            </DarkGreyCard>
          </div>

          <div
            style={{
              borderRadius: 15,
              backgroundColor: 'rgba(32, 34, 50, 0.5)',
              padding: 15,
            }}
          >
            <TYPE.main>Cryptocurrency Overview</TYPE.main>
            <ResponsiveRow style={{ width: '100%', maxWidth: '100%', marginTop: 10, marginBottom: 10 }}>
              <ChartWrapper>
                <LineChart
                  data={formattedTvlData}
                  height={220}
                  minHeight={332}
                  color={activeNetwork.primaryColor}
                  value={liquidityHover}
                  label={leftLabel}
                  setValue={setLiquidityHover}
                  setLabel={setLeftLabel}
                  topLeft={
                    <AutoColumn gap="4px">
                      <TYPE.mediumHeader fontSize="16px">TVL</TYPE.mediumHeader>
                      <TYPE.largeHeader fontSize="32px">
                        <MonoSpace>{tvlValue} </MonoSpace>
                      </TYPE.largeHeader>
                      <TYPE.main fontSize="12px" height="14px">
                        {leftLabel ? <MonoSpace>{leftLabel} (UTC)</MonoSpace> : null}
                      </TYPE.main>
                    </AutoColumn>
                  }
                />
              </ChartWrapper>
              <ChartWrapper>
                <BarChart
                  height={220}
                  minHeight={332}
                  data={
                    volumeWindow === VolumeWindow.monthly
                      ? monthlyVolumeData
                      : volumeWindow === VolumeWindow.weekly
                      ? weeklyVolumeData
                      : formattedVolumeData
                  }
                  color={theme.blue1}
                  setValue={setVolumeHover}
                  setLabel={setRightLabel}
                  value={volumeHover}
                  label={rightLabel}
                  activeWindow={volumeWindow}
                  topRight={
                    <RowFixed style={{ marginLeft: '-40px', marginTop: '8px' }}>
                      <SmallOptionButton
                        active={volumeWindow === VolumeWindow.daily}
                        onClick={() => setVolumeWindow(VolumeWindow.daily)}
                      >
                        D
                      </SmallOptionButton>
                      <SmallOptionButton
                        active={volumeWindow === VolumeWindow.weekly}
                        style={{ marginLeft: '8px' }}
                        onClick={() => setVolumeWindow(VolumeWindow.weekly)}
                      >
                        W
                      </SmallOptionButton>
                      <SmallOptionButton
                        active={volumeWindow === VolumeWindow.monthly}
                        style={{ marginLeft: '8px' }}
                        onClick={() => setVolumeWindow(VolumeWindow.monthly)}
                      >
                        M
                      </SmallOptionButton>
                    </RowFixed>
                  }
                  topLeft={
                    <AutoColumn gap="4px">
                      <TYPE.mediumHeader fontSize="16px">Volume 24H</TYPE.mediumHeader>
                      <TYPE.largeHeader fontSize="32px">
                        <MonoSpace> {formatDollarAmount(volumeHover, 2)}</MonoSpace>
                      </TYPE.largeHeader>
                      <TYPE.main fontSize="12px" height="14px">
                        {rightLabel ? <MonoSpace>{rightLabel} (UTC)</MonoSpace> : null}
                      </TYPE.main>
                    </AutoColumn>
                  }
                />
              </ChartWrapper>
            </ResponsiveRow>
          
            <HideSmall>
              <DarkGreyCard>
                <RowBetween>
                  <RowFixed>
                    <RowFixed mr="20px">
                      <TYPE.main mr="4px">Volume 24H: </TYPE.main>
                      <TYPE.label mr="4px">{formatDollarAmount(protocolData?.volumeUSD)}</TYPE.label>
                      <Percent value={protocolData?.volumeUSDChange} wrap={true} />
                    </RowFixed>
                    <RowFixed mr="20px">
                      <TYPE.main mr="4px">Fees 24H: </TYPE.main>
                      <TYPE.label mr="4px">{formatDollarAmount(protocolData?.feesUSD)}</TYPE.label>
                      <Percent value={protocolData?.feeChange} wrap={true} />
                    </RowFixed>
                    <HideMedium>
                      <RowFixed mr="20px">
                        <TYPE.main mr="4px">TVL: </TYPE.main>
                        <TYPE.label mr="4px">{formatDollarAmount(protocolData?.tvlUSD)}</TYPE.label>
                        <TYPE.main></TYPE.main>
                        <Percent value={protocolData?.tvlUSDChange} wrap={true} />
                      </RowFixed>
                    </HideMedium>
                  </RowFixed>
                </RowBetween>
              </DarkGreyCard>
            </HideSmall>
          </div>
          <br />
          <div
            style={{
              borderRadius: 15,
              backgroundColor: 'rgba(32, 34, 50, 0.5)',
              padding: 15,
            }}
          >
            <RowBetween style={{ marginBottom: 10 }}>
              <TYPE.main>Top Tokens</TYPE.main>
              <StyledInternalLink to="tokens" style={{ color: 'gray' }}>
                Explore
              </StyledInternalLink>
            </RowBetween>
            <TokenTable tokenDatas={formattedTokens} />
          </div>
          <br />
          <div
            style={{
              borderRadius: 15,
              backgroundColor: 'rgba(32, 34, 50, 0.5)',
              padding: 15,
            }}
          >
            <RowBetween style={{ marginBottom: 10 }}>
              <TYPE.main>Top Pools</TYPE.main>
              <StyledInternalLink to="pools" style={{ color: 'gray' }}>
                Explore
              </StyledInternalLink>
            </RowBetween>
            <PoolTable poolDatas={poolDatas} />
          </div>
          <br />
          <div
            style={{
              borderRadius: 15,
              backgroundColor: 'rgba(32, 34, 50, 0.5)',
              padding: 15,
            }}
          >
            <RowBetween style={{ marginBottom: 10 }}>
              <TYPE.main>Transactions</TYPE.main>
            </RowBetween>
            {transactions ? <TransactionsTable transactions={transactions} color={theme.blue1} /> : null}
          </div>
        </div>
      </AutoColumn>
    </PageWrapper>
  )
}
