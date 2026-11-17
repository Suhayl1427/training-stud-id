import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "./App.css";

// Student information is kept here as a simple array of objects.
// To add a new student to the gallery, just add another object below.
// Optional: give a student an `avatar` image URL to show a photo instead of initials.
const students = [
  { id: 1, name: "Rahul", year: "III", department: "CSE" },
  { id: 2, name: "Priya Verma", year: "II", department: "IT" },
  { id: 3, name: "Aarav Sharma", year: "IV", department: "ECE" },
  { id: 4, name: "Fathima Noor", year: "I", department: "EEE" },
  { id: 5, name: "Karthik Raja", year: "III", department: "Mechanical" },
  { id: 6, name: "Sneha Iyer", year: "II", department: "AI & DS" },
];

function App() {
  return (
    <>
      <Navbar />

      <main className="gallery">
        <h2 className="gallery__heading">Student ID Card Gallery</h2>

        {/* map() generates one reusable Card per student in the array */}
        <div className="card-grid">
          {students.map((student) => (
            <Card
              key={student.id}
              name={student.name}
              year={student.year}
              department={student.department}
              avatar={student.avatar}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
