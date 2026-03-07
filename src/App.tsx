import { useState, useEffect } from "react";

declare global {
  interface Window {
    solana?: any;
  }
}

export default function App() {
  const [wallet, setWallet] = useState<string | null>(null);
  const [votes, setVotes] = useState<{ yes: number; no: number }>({
    yes: 0,
    no: 0,
  });

  const [revealed, setRevealed] = useState(false);

  // Load stored votes
  useEffect(() => {
    const storedVotes = localStorage.getItem("arciumVotes");
    if (storedVotes) {
      setVotes(JSON.parse(storedVotes));
    }
  }, []);

  // Connect wallet
  const connectWallet = async () => {
    if (window.solana) {
      try {
        const response = await window.solana.connect();
        setWallet(response.publicKey.toString());
      } catch {
        alert("Wallet connection failed");
      }
    } else {
      alert("Please install a Solana wallet extension");
    }
  };

  // Disconnect wallet
  const disconnectWallet = () => {
    setWallet(null);
  };

  // Voting logic
  const vote = (choice: "yes" | "no") => {
    if (!wallet) {
      connectWallet();
      return;
    }

    const votedWallets = JSON.parse(
      localStorage.getItem("votedWallets") || "[]"
    );

    if (votedWallets.includes(wallet)) {
      alert("This wallet has already voted.");
      return;
    }

    const newVotes = { ...votes };

    if (choice === "yes") newVotes.yes++;
    if (choice === "no") newVotes.no++;

    votedWallets.push(wallet);

    localStorage.setItem("votedWallets", JSON.stringify(votedWallets));
    localStorage.setItem("arciumVotes", JSON.stringify(newVotes));

    setVotes(newVotes);

    alert("Vote submitted privately.");
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "auto",
        padding: "40px",
        fontFamily: "Arial",
        textAlign: "center",
      }}
    >
      <h1>🔐 Arcium Private Governance Demo</h1>

      {wallet ? (
        <div>
          <p>
            Wallet Connected: {wallet.slice(0, 6)}...{wallet.slice(-4)}
          </p>

          <button onClick={disconnectWallet}>Disconnect Wallet</button>
        </div>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}

      <hr />

      <h2>Proposal #1</h2>

      <h3>Private DAO Voting for Arcium</h3>

      <p>
        Should Arcium introduce confidential governance voting using secure
        compute infrastructure?
      </p>

      <div style={{ marginTop: "25px" }}>
        <button onClick={() => vote("yes")} style={{ marginRight: "15px" }}>
          ✅ Vote YES
        </button>

        <button onClick={() => vote("no")}>❌ Vote NO</button>
      </div>

      <div style={{ marginTop: "40px" }}>
        {!revealed ? (
          <button onClick={() => setRevealed(true)}>
            Reveal Final Result
          </button>
        ) : (
          <div>
            <h3>Final Results</h3>
            <p>YES: {votes.yes}</p>
            <p>NO: {votes.no}</p>
          </div>
        )}
      </div>

      <div
        style={{
          marginTop: "60px",
          paddingTop: "25px",
          borderTop: "1px solid #eee",
          fontSize: "14px",
          color: "gray",
        }}
      >
        <h3>Why Private Governance Matters</h3>

        <p>
          Traditional DAO voting exposes individual votes before final tally,
          which can create social pressure and governance bias.
        </p>

        <p>
          This prototype demonstrates confidential compute principles where
          voting signals are aggregated while preserving privacy.
        </p>
      </div>
    </div>
  );
}
