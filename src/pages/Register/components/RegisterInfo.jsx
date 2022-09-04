// 원산지랑 배송관련 정보 입력 컴포넌트(배송 관련 내용은 따로 작업할지 고민)

import { Box, Description, RequireDot, Title } from './RegisterBox';

const RegisterInfo = () => {
  return (
    <Box>
      <Title>
        상품주요정보
        <RequireDot>*</RequireDot>
      </Title>
      <Description>설명내용</Description>
    </Box>
  );
};

export default RegisterInfo;
