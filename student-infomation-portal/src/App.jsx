import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentList from "./components/StudentList";

function App() {
  const students = [
    {
      name: "Arjun Sharma",
      roll: "101",
      department: "Computer Science",
      semester: 4,
      cgpa: 8.7,
      photo: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Mou Dey",
      roll: "102",
      department: "Information Technology",
      semester: 4,
      cgpa: 9.2,
      photo: "https://i.pravatar.cc/150?img=47",
    },
    {
      name: "Rahul Das",
      roll: "103",
      department: "Computer Science",
      semester: 3,
      cgpa: 7.8,
      photo: "https://i.pravatar.cc/150?img=11",
    },
    {
      name: "Prantika Das",
      roll: "104",
      department: "Electronics",
      semester: 5,
      cgpa: 8.9,
      photo: "https://i.pravatar.cc/150?img=44",
    },
  ];

  return (
    <div className="app">
      <Header />

      <StudentList students={students} />

      <Footer />
    </div>
  );
}

export default App;