import "./App.css";
import Header from "./components/header/Header";
import Container from "./components/main/Container";

function App() {
  const products = [
    { image: "https://picsum.photos/150/150", price: "199.99" },
    { image: "https://picsum.photos/150/150", price: "149.99" },
    { image: "https://picsum.photos/150/150", price: "179.99" },
    { image: "https://picsum.photos/150/150", price: "299.99" },
    { image: "https://picsum.photos/150/150", price: "189.99" },
  ];

  return (
    <div className="App">
      <Header />
      <Container products = {products} />
    </div>
  );
}

export default App;
