import JsonRegistrationForm from "./components/JsonRegistrationForm";
import CourseList from "./components/CourseList";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <JsonRegistrationForm />
      <CourseList />
    </div>
  );
}

export default App;