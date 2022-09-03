import styled from 'styled-components';

const BoxTitle = props => {
  return <Text>{props.title}</Text>;
};

// styled-components 위치
const Text = styled.h2`
  color: ${props => props.theme.textColor};
`;
export default BoxTitle;
