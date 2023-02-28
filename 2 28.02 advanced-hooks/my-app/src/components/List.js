import { useEffect, useState } from "react";

export default function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    
    console.log("updating items");
  }, [getItems]);

  return (
    <div>
      {items.map((item, i) => (
        <div key={i}> {item} </div>
      ))}
    </div>
  );
}
