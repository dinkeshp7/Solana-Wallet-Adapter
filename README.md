# 🔐 Solana Wallet Adapter UI

A stylish and minimal web interface built using React and Solana Wallet Adapter that lets users easily interact with the Solana Devnet. The project supports wallet connection, SOL airdrop, balance check, transaction signing, token creation UI, and more.

![Demo UI](./public/demo.png) <!-- Replace with your actual path if needed -->

---

## ✨ Features

- 🔌 Connect/Disconnect Phantom or any Solana-compatible wallet
- 💸 Airdrop SOL directly to your wallet (Devnet)
- 💰 Send SOL to another address
- 📊 View real-time SOL balance
- 🖋️ Sign a message using your wallet
- 🪙 UI to Create Custom SPL Tokens (WIP)
- 🧪 Token Pool Interface (Placeholder for future integration)
- 📱 Responsive and modern UI with Tailwind CSS


---

## 📦 Getting Started

### 🔧 Prerequisites

- Node.js v16+
- npm or yarn
- Phantom Wallet (or any Solana wallet)

### 🚀 Installation

```bash
git clone https://github.com/dinkeshp7/Solana-Wallet-Adapter.git
cd Solana-Wallet-Adapter
npm install
# or
yarn install

#### Component Overview
Browse components/ to understand modular structure:

Component	Purpose
WalletContextProvider.tsx	Wraps the app with wallet provider context
AirDrop.tsx	Airdrop test SOL tokens to connected wallet
SendSol.tsx	Transfer SOL to another address
CheckBalance.tsx	Fetch and display live SOL balance
SignMessage.tsx	Sign arbitrary text messages
CreateToken.tsx	UI for minting custom tokens (under dev)
Pool.tsx	Placeholder for liquidity pool logic

All components use useWallet, useConnection, and handle transactions using Solana’s web3.js.

#### File Structure

📁 components/           // Modular React components 
📁 public/               // Static assets 
📁 pages/                // Next.js routes 
📁 styles/               // Tailwind + globals 
.env.local               // Devnet RPC endpoint config 


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# Wallet-adapter
