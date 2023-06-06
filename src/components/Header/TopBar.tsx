import React from 'react'
import styled from 'styled-components'
import { AutoRow, RowBetween, RowFixed } from 'components/Row'
import { ExternalLink, TYPE } from 'theme'
import { useEthPrices } from 'hooks/useEthPrices'
import { formatDollarAmount } from 'utils/numbers'
import Polling from './Polling'
import { useActiveNetworkVersion } from '../../state/application/hooks'
import { SupportedNetwork } from '../../constants/networks'
import LogoDark from '../../assets/svg/openexamainlogo.png'
import { NavLink } from 'react-router-dom'
import { networkPrefix } from 'utils/networkPrefix'

const Wrapper = styled.div`
  // width: 100%;
  // background-color: ${({ theme }) => theme.black};
  // padding: 10px 20px;
  z-index: 80;
  /* line-height: 64px; */
  /* color: white; */
  display: flex;
  background-color: #202232;
  align-items: center;
  justify-content: space-between;
  height: 55px;
  width: 100%;
`

const Item = styled(TYPE.main)`
  font-size: 12px;
`

const StyledLink = styled(ExternalLink)`
  font-size: 12px;
  color: ${({ theme }) => theme.text1};
`

const UniIcon = styled.div`
  transition: transform 0.3s ease;
  :hover {
    transform: rotate(-5deg);
  }
`
const Title = styled(NavLink)`
  display: flex;
  align-items: center;
  pointer-events: auto;
  justify-self: flex-start;
  margin-right: 0px;
  :hover {
    cursor: pointer;
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
    justify-self: center;
  `};
`

const Text = styled(TYPE.main)`
  font-size: 17px;
  color: white;
  display: block;
  line-height: 20px;
`

const Button = styled(TYPE.main)`
  width: 260px;
  border-radius: 10px;
  margin-right: 10px;
  background: linear-gradient(45deg, #ac50ef, #7059fb 50%, #2ecff6);
  margin: 5px 2px 5px 0px;
  height: 40px;
  display: flex;
  align-items: center;
`
const TopBar = () => {
  const ethPrices = useEthPrices()
  const [activeNetwork] = useActiveNetworkVersion()
  
  return (
    <Wrapper>
      <Title to={networkPrefix(activeNetwork)}>
          <UniIcon>
            <img width={'auto'} height={'33px'} src={LogoDark} alt="logo" />
          </UniIcon>
        </Title>
      <RowBetween>
        <AutoRow gap="6px" width="95%" style={{ justifyContent: 'center' }}>
        <a className="launchApp-link" href="https://openexa.to">
          <Button style={{ justifyContent: 'center' }}>
            <Text>
              RWA Intelligence
            </Text>
          </Button>
        </a>

        <a className="launchApp-link" href="https://openexa.io">
          <Button style={{ justifyContent: 'center' }}>
            <Text>
              Manage Tokens
            </Text>
          </Button>
        </a>
        </AutoRow>
        {/* <AutoRow gap="6px" style={{ justifyContent: 'flex-end' }}>
          <RowFixed>
            {activeNetwork.id === SupportedNetwork.CELO ? <Item>Celo Price:</Item> : <Item>Eth Price:</Item>}
            <Item fontWeight="700" ml="4px">
              {formatDollarAmount(ethPrices?.current)}
            </Item>
          </RowFixed>
          <Polling /> */}
          {/* <StyledLink href="https://v2.info.uniswap.org/#/">V2 Analytics</StyledLink>
          <StyledLink href="https://docs.uniswap.org/">Docs</StyledLink>
          <StyledLink href="https://app.uniswap.org/#/swap">App</StyledLink> */}
        {/* </AutoRow> */}
      </RowBetween>
    </Wrapper>
  )
}

export default TopBar
