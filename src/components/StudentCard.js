// {
//   name: "Matias",
//   age: 30,
//   gender: "M",
//   hobbies: ["gaming", "sailing", "music"],
// },

const StudentCard = (props) => {
  console.log("props in card", props);

  // const displayGender = props.gender === "M" ? "Male" : "Female";

  // if (props.gender === "M") {
  //   return <div>Male, we dont show him</div>;
  // }
  return (
    <div style={{ border: "1px solid red" }}>
      <p>One student</p>
      <h3>Name: {props.name}</h3>
      <h3>Age: {props.studentAge}</h3>
      <h3>Gender: {props.gender === "M" ? "Male" : "Female"}</h3>
      <div>
        hobbies:
        <ul>
          {props.hobbies.map((hobby) => {
            return <li>{hobby}</li>;
          })}
        </ul>
        {/* <ul>
          <li>football</li>
          <li>crypto</li>
        </ul> */}
      </div>
    </div>
  );
};

export default StudentCard;
