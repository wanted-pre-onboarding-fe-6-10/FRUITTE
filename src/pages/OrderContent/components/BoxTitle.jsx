import styled from 'styled-components';

const BoxTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

const Title = styled.h1`
  color: ${props => props.theme.textColor};
  margin: 15px;
  font-weight: bold;
`;

export default BoxTitle;
