import StudentCard from "./StudentCard_temp";

function StudentList(props) {
  return (
      <div className="student-list">
      {props.students.map((student) => (
        <StudentCard
          key={student.roll}
          name={student.name}
          roll={student.roll}
          department={student.department}
          semester={student.semester}
          cgpa={student.cgpa}
          photo={student.photo}
        />
      ))}
    </div>
  );
}

export default StudentList;