import Poster from './poster';

function App() {

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Poster firstName="Monkey D." lastName="Luffy" bounty={1500000000} isOnline={true} />
      <Poster firstName="Zoro" lastName="Roronoa" bounty={1100000000} isOnline={true} />
      <Poster firstName="Nami" lastName="thief" bounty={100000000} isOnline={true} />
    </div>
  );
}

export default App;