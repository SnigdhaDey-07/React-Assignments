function StudentCard(props) {
  return (
    <div className="student-card">
      <img src={props.photo} alt={props.name} />

      <h2>{props.name}</h2>

      <p>Roll Number: {props.roll}</p>
      <p>Department: {props.department}</p>
      <p>Semester: {props.semester}</p>
      <p>CGPA: {props.cgpa}</p>
    </div>
  );
}

export default StudentCard;