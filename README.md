# Arcium Private DAO Voting Demo

## Overview

This project is a prototype private governance voting application inspired by confidential compute principles.

The goal is to demonstrate how governance systems can protect voter privacy by treating votes as encrypted signals and only revealing aggregated results.

## Features
- Private proposal submission
- Encrypted voting
- On-chain result verification
- Confidential governance logic

## Tech Stack
- Solana
- Arcium
- Typescript
- Anchor

## How It Works
1. User creates a proposal
2. Proposal is encrypted through Arcium
3. Participants vote privately
4. Results are decrypted and executed

## Installation
git clone https://github.com/salauayo/arcium-governance-demo
cd arcium-governance-demo
npm install
npm run dev

## Demo Flow
https://youtu.be/MxEQiKq10Zs
## Screenshots / Architecture
<img width="634" height="807" alt="image" src="https://github.com/user-attachments/assets/b260eb26-fa36-4f71-abf9-b514768d4da7" />

## Future Improvements
- Real Arcium confidential compute SDK integration
- Zero knowledge proof voting verification
- Multi-proposal governance system
- Token-weighted governance voting

## Program Deployment

Solana Devnet Program ID:

HfpjgyQuSuXgzA2Vt9M2A5XWtipVCnuMqsnRBehXwM3g

## Architecture
src/
 ├─ program/        # Solana program
 ├─ client/         # Frontend interaction
 ├─ encryption/     # Arcium encryption logic
 └─ tests/

## Why privacy matters for governance

Privacy protects voters from pressure, bribery, or retaliation. When votes are private, participants can vote honestly without fear of influence or exposure. This leads to fairer decisions and more trustworthy governance, especially in decentralized communities.

## How Arcium enables confidential computation

Arcium enables confidential computation by encrypting data before it is processed. Instead of revealing votes or inputs, the network performs computations on encrypted data using secure multi-party computation (MPC). This means governance results can be calculated and verified without exposing individual votes.
