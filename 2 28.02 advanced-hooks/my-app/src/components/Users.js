import useFetch from "./useFetch";


export default function Users() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      {data.map((user) => (
        <div style={{border: "1px solid black", margin: "5px"}} key={user.id}>
          <h2> {user.username} </h2> <p> {user.email} </p>
        </div>
      ))}
    </div>
  );
}
