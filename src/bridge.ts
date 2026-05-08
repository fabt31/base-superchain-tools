import { ethers } from "ethers";

const L2_BRIDGE = "0x4200000000000000000000000000000000000010";
const L2_MESSENGER = "0x4200000000000000000000000000000000000007";

const BRIDGE_ABI = [
  "function bridgeETHTo(address _to, uint32 _minGasLimit, bytes calldata _extraData) payable",
  "function bridgeERC20To(address _localToken, address _remoteToken, address _to, uint256 _amount, uint32 _minGasLimit, bytes calldata _extraData)"
];

const MESSENGER_ABI = [
  "function sendMessage(address _target, bytes calldata _message, uint32 _minGasLimit)"
];

const CHAINS: Record<string, string> = {
  base: "https://mainnet.base.org",
  optimism: "https://mainnet.optimism.io",
  mode: "https://mainnet.mode.network",
  zora: "https://rpc.zora.energy"
};

async function bridgeETH(fromChain: string, toAddress: string, amountEth: string, privateKey: string) {
  const provider = new ethers.JsonRpcProvider(CHAINS[fromChain]);
  const wallet = new ethers.Wallet(privateKey, provider);
  const bridge = new ethers.Contract(L2_BRIDGE, BRIDGE_ABI, wallet);

  const tx = await bridge.bridgeETHTo(toAddress, 200_000, "0x", {
    value: ethers.parseEther(amountEth)
  });
  console.log(`Bridge TX: ${tx.hash}`);
  await tx.wait();
  console.log("Bridge initiated! Withdrawal period: 7 days");
  return tx.hash;
}

async function sendCrossChainMessage(target: string, calldata: string, privateKey: string) {
  const provider = new ethers.JsonRpcProvider(CHAINS.base);
  const wallet = new ethers.Wallet(privateKey, provider);
  const messenger = new ethers.Contract(L2_MESSENGER, MESSENGER_ABI, wallet);
  const tx = await messenger.sendMessage(target, calldata, 200_000);
  console.log(`Message TX: ${tx.hash}`);
  return tx.hash;
}

export { bridgeETH, sendCrossChainMessage };
