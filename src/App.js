import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import TimeLine from './Components/TimeLine/TimeLine';
import Widgets from './Components/Widget/Widgets';

function App() {
  return (
    <div className="app">
      <Sidebar></Sidebar>
      <TimeLine></TimeLine>
      <Widgets></Widgets>
    </div>
  );
}

export default App;
