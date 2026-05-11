import { ethers } from "ethers";
const L1_PORTAL = "0x49048044D57e1C92A77f2326CB01656aE2F4F695"; // Base on Ethereum
export async function getWithdrawalStatus(txHash: string, l1Provider: ethers.JsonRpcProvider) {
  const receipt = await l1Provider.getTransactionReceipt(txHash);
  if (!receipt) return { status: "pending", finalized: false };
  return { status: "finalized", blockNumber: receipt.blockNumber, finalized: true };
}
export function estimateBridgeTime(fromChain: string, toChain: string): string {
  if (fromChain === "base" && toChain === "ethereum") return "~7 days (challenge period)";
  return "~1-3 minutes (L2 to L2 via L1)";
}