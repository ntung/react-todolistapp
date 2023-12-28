// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import './App.css';
import MyForm from './shared/MyForm';
import Welcome from './shared/welcome';
import UserProfile from './shared/user-profile';


function App() {
  const currentDate = new Date();
  return (
    <div className="App">
      <Welcome name="Tom" />
      <UserProfile avatar="https://raw.githubusercontent.com/ntung/ntung.github.io/master/assets/img/tung.jpg"
                   name="Tom Nguyen" bio="a geek, a developer" />
      <h2>The time now is {currentDate.toLocaleTimeString()}</h2>
      <MyForm />
    </div>
  );
}

export default App;
