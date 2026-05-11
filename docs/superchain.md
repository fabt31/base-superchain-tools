# Superchain Architecture

The OP Stack Superchain is a network of L2 chains sharing security from Ethereum L1.

## Cross-Chain Messaging Flow
1. Source chain calls `L2CrossDomainMessenger.sendMessage()`
2. Message included in L2 output root
3. Output root submitted to L1 every ~1 hour
4. After challenge period (7 days), message can be relayed on destination
5. Destination `L1CrossDomainMessenger` relays to target contract

## Fast L2-L2 Bridging (Experimental)
Using the Superchain interop protocol, messages can be passed between OP Stack chains in ~2 blocks without waiting for L1 finality.