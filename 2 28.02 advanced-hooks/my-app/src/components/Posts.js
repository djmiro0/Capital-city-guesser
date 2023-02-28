import useFetch from "./useFetch";


export default function Posts() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/posts");
console.log(data)
  return (
    <div>
      {data.map((post) => (
        <div style={{border: "1px solid black", margin: "5px"}} key={post.id}>
          <h2> {post.title} </h2> <p> {post.body} </p>
        </div>
      ))}
    </div>
  );
}
