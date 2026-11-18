// Home page with the original student ID card gallery.
import Card from "../components/Card";

const students = [
  { id: 1, name: "Rahul", year: "III", department: "CSE" },
  { id: 2, name: "Priya Verma", year: "II", department: "IT" },
  { id: 3, name: "Aarav Sharma", year: "IV", department: "ECE" },
  { id: 4, name: "Fathima Noor", year: "I", department: "EEE" },
  { id: 5, name: "Karthik Raja", year: "III", department: "Mechanical" },
  { id: 6, name: "Sneha Iyer", year: "II", department: "AI & DS" },
];

function Home() {
  return (
    <div className="page">
      <section className="hero">
        <h2 className="page__heading">Welcome to Home Page</h2>
        <p className="page__lead">This is the home page of my website.</p>
      </section>

      <section className="gallery" aria-labelledby="gallery-heading">
        <h2 id="gallery-heading" className="gallery__heading">
          Student ID Card Gallery
        </h2>

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
      </section>
    </div>
  );
}

export default Home;
