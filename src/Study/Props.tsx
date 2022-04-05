import styled from "styled-components";

interface IProps {
  bgColor: string;
}

const Container = styled.div<IProps>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor};
`;

const Props = ({ bgColor }: IProps) => {
  return <Container bgColor={bgColor}></Container>;
};

export default Props;
