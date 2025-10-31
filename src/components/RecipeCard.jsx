import styled from "styled-components";
import Difficulty from "./Difficulty";

const Card = styled.div`
  width: 250px;
  background-color: ${(props) => (props.highlight ? "#fff5f5" : "#fff")};
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  padding-bottom: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 10px 15px;
`;

const Title = styled.h3`
  margin: 10px 0;
  font-size: 18px;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #666;
`;

export default function RecipeCard({ recipe }) {
  return (
    <Card highlight={recipe.difficulty === 3}>
      <Image src={recipe.image} alt={recipe.title} />
      <Info>
        <Title>{recipe.title}</Title>
        <Details>
          <span>{recipe.time} min</span>
          <span>{recipe.servings} servings</span>
          <span>{recipe.calories} cal</span>
        </Details>
        <Difficulty level={recipe.difficulty - 1} />
      </Info>
    </Card>
  );
}
