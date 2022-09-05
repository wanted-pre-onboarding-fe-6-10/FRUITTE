import styled from 'styled-components';

const BreadcrumbHeader = () => {
  return (
    <Box>
      <HomeLink href="/">Home</HomeLink>
      {'  >  '}
      <FruitteStoreLink href="/fruitstore">FRUITTE STORE</FruitteStoreLink>
    </Box>
  );
};

const Box = styled.div`
  width: 100%;
  color: ${props => props.theme.lightTextColor};
  font-size: small;
  font-weight: 300;
  gap: 230;
`;

const HomeLink = styled.a`
  margin-right: 10px;
`;

const FruitteStoreLink = styled.a`
  color: ${props => props.theme.textColor};
  margin-left: 10px;
`;

export default BreadcrumbHeader;
