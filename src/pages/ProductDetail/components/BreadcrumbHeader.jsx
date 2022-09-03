import styled from 'styled-components';

const BreadcrumbHeader = () => {
  return (
    <Box>
      <Wrapper>
        <a href="/">Home</a>
        {' > '}
        <a href="/fruitstore">FRUITTE STORE</a>
      </Wrapper>
    </Box>
  );
};

const Box = styled.div``;
const Wrapper = styled.div``;

export default BreadcrumbHeader;
