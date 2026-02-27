function App() {
  const firstName = "Monkey D Luffy";
  const LastName = "Mugiwara";

  const isOnline = true;

  const status = isOnline ? "green" : "red";

  return (
    <div style={{ backgroundColor: status }}>
      <h1>The Captain of straw hat pirates {firstName}. Also known as{LastName}</h1>
      <p>{isOnline ? "Online" : "Offline"}</p>
    </div>

  )
}
export default App;