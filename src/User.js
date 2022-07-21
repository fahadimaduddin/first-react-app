let name = "Fahad Imaduddin!!";
const carObj = {
  name: "Revo",
  color: "Black",
  make: "2022",
};
function User() {
  return (
    <div className='App'>
      <h1>{name}</h1>
      <h2>{carObj.name}</h2>
      <h2>{carObj.color}</h2>
    </div>
  );
}

export default User;
