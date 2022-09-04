import { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
const RegisterModal = ({ open, onClose, img }) => {
  const [modalOpen, setModalOpen] = useState(open);
  const closeModal = () => {
    setModalOpen(false);
    onClose();
  };
  const modalStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '700px',
      height: '700px',
      backgroundColor: '#ffffff',
    },
  };
  return (
    <Modal isOpen={modalOpen} onRequestClose={() => closeModal()} style={modalStyle}>
      <TitleWrapper>
        <Title>이미지 상세보기</Title>
      </TitleWrapper>
      <ImgWrapper>
        <Img src={img} />
      </ImgWrapper>
    </Modal>
  );
};
const TitleWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  color: ${props => props.theme.textColor};
  margin-left: 32px;
  font-weight: bold;
  font-size: 18px;
`;

const ImgWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  width: 300px;
  height: auto;
`;

export default RegisterModal;
