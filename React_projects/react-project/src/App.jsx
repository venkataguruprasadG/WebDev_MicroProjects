import Poster from './poster';

function App() {

  const crewMembers = [
    { firstName: "Monkey D.", lastName: "Luffy", bounty: 1500000000, isOnline: true },
    { firstName: "zoro", lastName: "Roronoa", bounty: 1100000000, isOnline: true },

  ]

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {crewMembers.map((member, index) => (
        <Poster
          key={index}
          firstName={member.firstName}
          lastName={member.lastName}
          bounty={member.bounty}
          isOnline={member.isOnline}
        />
      ))}
    </div>
  );
}

export default App;