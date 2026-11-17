import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <div className="card-container">
        {/* Same Card component reused with different props */}
        <Card name="Aarav Sharma" dept="Computer Science" year={3} />
        <Card name="Priya Verma" dept="Information Technology" year={2} />
        <Card name="Rahul Mehta" dept="Electronics" year={4} />
      </div>
    </>
  );
}

export default App;
