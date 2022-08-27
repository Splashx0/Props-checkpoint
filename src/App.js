import "./App.css";
import Profile from "./profile/Profile";

function App() {
  const name = "Anes hadj k";
  const bio = "learning ReatJs";
  const profession = "student";

  const handleName = (n) => {
    alert(`hello ${n}`);
  };

  return (
    <div className="App">
      <Profile
        name={name}
        bio={bio}
        profession={profession}
        handleName={handleName}
      >
        <img src="it.jpg" alt="me" style={{ width: 200, height: 200 }} />
      </Profile>
    </div>
  );
}

export default App;
