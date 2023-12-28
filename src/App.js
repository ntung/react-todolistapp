import logo from './logo.svg';
import './App.css';
import Welcome from './shared/welcome';
import UserProfile from './shared/user-profile';


function App() {
  const currentDate = new Date();
  return (
    <div className="App">
      <Welcome name="Tom" />
      <UserProfile avatar="https://raw.githubusercontent.com/ntung/ntung.github.io/master/assets/img/tung.jpg" name="Tom Nguyen" bio="a geek, a developer" />
      <h2>The time now is {currentDate.toLocaleTimeString()}</h2>
    </div>
  );
}

export default App;
