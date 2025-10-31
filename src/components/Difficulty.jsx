import styled from "styled-components";

const levels = ["Easy", "Medium", "Hard"];
const colors = ["#d4edda", "#fff3cd", "#f8d7da"];

const DifficultyWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const Tag = styled.span`
  background-color: ${(props) => (props.active ? props.color : "#f3f3f3")};
  color: ${(props) => (props.active ? "#000" : "#666")};
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
`;

export default function Difficulty({ level }) {
  return (
    <DifficultyWrapper>
      {levels.map((item, index) => (
        <Tag key={index} color={colors[index]} active={index === level}>
          {item}
        </Tag>
      ))}
    </DifficultyWrapper>
  );
}
