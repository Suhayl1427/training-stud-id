// Builds up to two initials from a full name, e.g. "Priya Verma" -> "PV".
function getInitials(name) {
  return name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

// Reusable student ID card. Every piece of student information arrives through
// props, so the same component can render any number of students.
function Card({ name, year, department, avatar }) {
  return (
    <article className="card">
      <h2 className="card__college">MSAJCE COLLEGE</h2>

      <div className="card__avatar" aria-hidden="true">
        {avatar ? (
          <img className="card__avatar-img" src={avatar} alt="" />
        ) : (
          <span>{getInitials(name)}</span>
        )}
      </div>

      <h3 className="card__title">Student ID Card</h3>

      <ul className="card__details">
        <li>
          <span className="card__label">Name:</span> {name}
        </li>
        <li>
          <span className="card__label">Year:</span> {year}
        </li>
        <li>
          <span className="card__label">Department:</span> {department}
        </li>
      </ul>
    </article>
  );
}

export default Card;
