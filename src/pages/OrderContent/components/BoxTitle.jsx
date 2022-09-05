import styled from 'styled-components';

const BoxTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

const Title = styled.h1`
  padding: 1em 2em;
  color: ${props => props.theme.ownColor};
  font-weight: bold;
`;

export default BoxTitle;
