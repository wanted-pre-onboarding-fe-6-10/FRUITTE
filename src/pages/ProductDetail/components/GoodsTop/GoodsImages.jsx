import styled from 'styled-components';

const GoodsImages = ({ imageList }) => {
  return (
    <Wrapper>
      <img src="/" />
      <ImageThumbnails>
        {[].map((item, idx) => (
          <img src="item" title={idx} />
        ))}
      </ImageThumbnails>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const ImageThumbnails = styled.div`
  display: flex;
  flex-direction: row;
`;

export default GoodsImages;
