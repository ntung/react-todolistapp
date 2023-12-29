// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import './App.css';
import MyForm from './shared/MyForm';
import Welcome from './shared/welcome';
import UserProfile from './shared/user-profile';
import DigitalClock from "./shared/timer";
import Counter from "./shared/counter";

function App() {
  return (
    <div className="App">
      <Welcome name="Tom" />
      <UserProfile avatar="https://raw.githubusercontent.com/ntung/ntung.github.io/master/assets/img/tung.jpg"
                   name="Tom Nguyen" bio="a geek, a developer" />
      <DigitalClock />
      <Counter />
      <MyForm />
    </div>
  );
}

export default App;
