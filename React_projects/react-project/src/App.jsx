function App() {
  const firstName = "Monkey D. Luffy";
  const lastName = "Mugiwara";
  const bounty = 3000000000; // 3 Billion!
  const isOnline = true;
  const statusColor = isOnline ? "green" : "red";

  return (
    <div style={{
      border: "5px solid gold",
      padding: "20px",
      backgroundColor: "#fde68a", // Light yellowish like a poster
      textAlign: "center",
      width: "300px",
      margin: "20px auto"
    }}>
      <h1 style={{ color: "brown" }}>WANTED</h1>
      <h2>{firstName}</h2>
      <h3>"{lastName}"</h3>

      {/* Logic: Formatting a number inside JSX */}
      <p style={{ fontWeight: "bold", fontSize: "20px" }}>
        Bounty: ฿{bounty.toLocaleString()}
      </p>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
        <div style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: statusColor
        }}></div>
        <p>{isOnline ? "Searching for One Piece" : "Sleeping"}</p>
      </div>
    </div>
  );
}

export default App;