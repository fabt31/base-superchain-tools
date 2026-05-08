# base-superchain-tools

> OP Stack Superchain interoperability toolkit

Bridge assets and send messages between all OP Stack L2 chains: Base, Optimism, Mode, Zora, and more. Built on the native OP Stack cross-chain messaging protocol.

## Supported Chains

| Chain | Chain ID | L2 Bridge |
|-------|----------|-----------|
| Base | 8453 | `0x4200000000000000000000000000000000000010` |
| OP Mainnet | 10 | `0x4200000000000000000000000000000000000010` |
| Mode | 34443 | `0x4200000000000000000000000000000000000010` |
| Zora | 7777777 | `0x4200000000000000000000000000000000000010` |

## Features

- 🌉 Native OP Stack bridge (ETH + ERC20)
- 📨 Cross-chain message passing (L2CrossDomainMessenger)
- 🔍 Bridge transaction tracker with status
- ⏱️ Withdrawal finalization helper (7-day challenge period)
- 🚀 Superchain-compatible contract templates
- 📊 Fee estimator for cross-chain operations

## Installation

```bash
git clone https://github.com/fabt31/base-superchain-tools
cd base-superchain-tools
npm install
```

## Usage

```bash
# Bridge ETH from Base to OP Mainnet
npm run bridge -- --from base --to optimism --amount 0.1

# Send cross-chain message
npm run message -- --from base --to mode --target 0xContract --data 0xcalldata

# Check bridge status
npm run status -- --txHash 0x...

# Finalize withdrawal
npm run finalize -- --withdrawalHash 0x...
```

## License

MIT
