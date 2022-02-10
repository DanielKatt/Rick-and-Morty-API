import { useEffect, useState } from "react";
import { Card } from "./components/Card";

function CardsBox() {
  const [listCharacters, setListCharacter] = useState([]);
  useEffect(() => {
    const consumeApi = async () => {
      fetch("https://rickandmortyapi.com/api/character")
        .then((result) => result.json())
        .then((data) => {
          setListCharacter(data.results);
        });
    };
    consumeApi();
  }, []);

  return (
      <div>
          
          {listCharacters.map((element) => (
              <Card
              key={element.id}
              image={element.image}
              name={element.name}
              status={element.status}
            />
          ))}
    </div>
  );
}
export { CardsBox };
