# Arcium Private DAO Voting Demo

## Overview

This project is a prototype private governance voting application inspired by confidential compute principles.

The goal is to demonstrate how governance systems can protect voter privacy by treating votes as encrypted signals and only revealing aggregated results.

---

## Technology Stack

- React + TypeScript frontend
- Solana Devnet smart contract deployment
- Anchor framework
- Phantom wallet connection simulation
- Vercel cloud hosting

---

## Privacy Concept

Traditional DAO governance systems expose individual votes publicly.

This prototype demonstrates a privacy-first governance model where:

- Votes are treated as confidential inputs
- Individual votes are hidden
- Only final tally results are revealed

This design aligns with confidential compute philosophy.

---

## Live Demo

Frontend Application:
https://arcium-governance-demo.vercel.app <img width="645" height="755" alt="image" src="https://github.com/user-attachments/assets/427ecaf3-4d80-477b-97bc-df1b25df5e73" />


---

## Program Deployment

Solana Devnet Program ID:

HfpjgyQuSuXgzA2Vt9M2A5XWtipVCnuMqsnRBehXwM3g

---

## How To Run Locally

Clone repository

git clone https://github.com/salauayo/arcium-governance-demo


Navigate to frontend folder


cd app
npm install
npm run dev


Open browser:


http://localhost:5173


---

## Future Improvements

- Real Arcium confidential compute SDK integration
- Zero knowledge proof voting verification
- Multi-proposal governance system
- Token-weighted governance voting
