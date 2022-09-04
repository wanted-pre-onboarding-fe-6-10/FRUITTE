import styled from 'styled-components';
import RegisterDescription from './components/RegisterDescription';
import RegisterImage from './components/RegisterImage';
import RegisterInfo from './components/RegisterInfo';
import RegisterOption from './components/RegisterOption';
import RegisterPrice from './components/RegisterPrice';
import RegisterStatus from './components/RegisterStatus';
import RegisterTitle from './components/RegisterTitle';

const Register = () => {
  return (
    <Container>
      <Title>관리자 상품 등록 페이지</Title>
      <RegisterTitle />
      <RegisterPrice />
      <RegisterStatus />
      <RegisterOption />
      <RegisterImage />
      <RegisterDescription />
      <RegisterInfo />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.subBgColor};
`;
const Title = styled.div`
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: bold;
`;

export default Register;
