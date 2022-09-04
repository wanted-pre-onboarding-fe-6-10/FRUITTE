import styled from 'styled-components';

const BoxTitle = ({ title }) => {
  return <Text>{title}</Text>;
};

// styled-components 위치
const Text = styled.h1`
  color: ${props => props.theme.textColor};
  font-size: 30px;
`;
export default BoxTitle;
