const Title = (props) => {
  console.log("props in title", props);
  console.log("name im getting via props", props.name);
  return (
    <div>
      <h1>Title</h1>
      <h2>
        User: {props.name}, Age: {props.age}
      </h2>
    </div>
  );
};

export default Title;
