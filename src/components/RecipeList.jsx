import styled from "styled-components";
import RecipeCard from "./RecipeCard";

const recipes = [
  { title: "Smoked salmon burger", image: "burger.jpg", time: 20, servings: 5, calories: 210, difficulty: 1 },
  { title: "Tomatoes With Creamy Feta", image: "feta.jpg", time: 15, servings: 3, calories: 400, difficulty: 1 },
  { title: "Spicy potato salad", image: "salad.jpg", time: 30, servings: 2, calories: 320, difficulty: 2 },
  { title: "Chicken Biryani", image: "biryani.jpg", time: 40, servings: 4, calories: 700, difficulty: 3 }
];

const List = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  padding: 40px;
`;

export default function RecipeList() {
  return (
    <List>
      {recipes.map((r, i) => (
        <RecipeCard key={i} recipe={r} />
      ))}
    </List>
  );
}
 