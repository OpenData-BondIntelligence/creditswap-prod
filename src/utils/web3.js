import Web3 from 'web3';
import { OZTCoinABI, contractAddress } from './constants.js';
import { useContext } from 'react';
import { AppContext } from './WebContextProvider';

const useConnectWalletHandler = () => {
  const { setOwner, setUserBalance, setSelectedAccount, setOZTCoin, setWeb3, setWalletConnected } =
    useContext(AppContext);

  const connectWalletHandler = async () => {
    const provider = window.ethereum;
    let selectedAccount;
    let web3;
    let OZTCoin;

    if (typeof provider !== 'undefined') {
      try {
        const accounts = await provider.request({
          method: 'eth_requestAccounts',
        });
        selectedAccount = accounts[0];
        localStorage.setItem('buttonHasBeenClicked', 'true');
        setWalletConnected(true);

        web3 = new Web3(provider);
        OZTCoin = new web3.eth.Contract(OZTCoinABI, contractAddress);
        const resOwner = await OZTCoin.methods.owner().call();
        const resBalance = await OZTCoin.methods.balanceOf(selectedAccount).call();

        setWeb3(web3 ?? "");
        setOZTCoin(OZTCoin ?? "");
        setSelectedAccount(selectedAccount ?? "");
        setOwner(resOwner ?? "");
        setUserBalance(web3.utils.fromWei(resBalance, "ether") ?? "");

        window.ethereum.on('accountsChanged', function (accounts) {
          setSelectedAccount(accounts[0]);
          window.location.reload();
        });
      } catch (err) {
        alert(err);
      }
    } else {
      alert('Please install Metamask!');
    }
  };

  const disconnectWalletHandler = async () => {
    const provider = window.ethereum;
    let selectedAccount;
    let web3;
    let OZTCoin;

    if (typeof provider !== 'undefined') {
      try {
        const accounts = await provider.request({
          method: 'eth_requestAccounts',
        });
        selectedAccount = accounts[0];
        localStorage.setItem('buttonHasBeenClicked', 'false');
        setWalletConnected(false);

        web3 = new Web3(provider);
        OZTCoin = new web3.eth.Contract(OZTCoinABI, contractAddress);
        const resOwner = await OZTCoin.methods.owner().call();
        const resBalance = await OZTCoin.methods.balanceOf(selectedAccount).call();

        setWeb3(web3);
        setOZTCoin(OZTCoin);
        setSelectedAccount(selectedAccount);
        setOwner(resOwner);
        setUserBalance(web3.utils.fromWei(resBalance, "ether"));

        window.ethereum.on('accountsChanged', function (accounts) {
          setSelectedAccount(null);
          window.location.reload();
        });
      } catch (err) {
        alert(err);
      }
    } else {
      alert('Please install Metamask!');
    }
  };

  return [connectWalletHandler, disconnectWalletHandler];
};

export { useConnectWalletHandler };
