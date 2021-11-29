import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import StudentList from "./components/StudentList";

// React component
// components === functions
// they start with a Capital letter.
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div style={{ border: "1px solid white" }}>
          <Title name={"Matias"} age={30} />
        </div>
        <h3>Welcome class 55!</h3>
        <div style={{ border: "1px solid white" }}>
          <StudentList />
        </div>
      </header>
    </div>
  );
}

export default App;
