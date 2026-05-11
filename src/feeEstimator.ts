import { ethers } from "ethers";
export async function estimateBridgeFee(provider: ethers.JsonRpcProvider, amountEth: string): Promise<string> {
  const gasPrice = (await provider.getFeeData()).gasPrice ?? BigInt(0);
  const gasLimit = BigInt(200000);
  const gasCost = gasPrice * gasLimit;
  console.log(`Bridge fee: ~${ethers.formatEther(gasCost)} ETH`);
  return ethers.formatEther(gasCost);
}