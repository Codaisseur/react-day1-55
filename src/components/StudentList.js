import StudentCard from "./StudentCard";
const students = [
  {
    name: "Matias",
    age: 30,
    gender: "M",
    hobbies: ["gaming", "sailing", "music"],
  },
  {
    name: "Mariya",
    age: 35,
    gender: "F",
    hobbies: ["illustration", "baking"],
  },
  {
    name: "Koen",
    age: 39,
    gender: "M",
    hobbies: ["football", "crypto"],
  },
  {
    name: "Sheyla",
    age: 38,
    gender: "F",
    hobbies: ["being a momma", "reading", "coding"],
  },
];

const StudentList = () => {
  // fetch data with axios
  // store in some variable
  // const students = [{}, {}, {}]

  const onlyGirls = students.filter((student) => student.gender === "F");
  return (
    <div>
      <h3>Our students are:</h3>
      {/* we have 3 students */}
      {onlyGirls.map((student) => {
        return (
          <StudentCard
            name={student.name}
            studentAge={student.age}
            hobbies={student.hobbies}
            gender={student.gender}
          />
        );
      })}
    </div>
  );
};

export default StudentList;
