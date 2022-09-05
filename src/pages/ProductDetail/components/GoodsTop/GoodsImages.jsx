import { useState } from 'react';
import styled from 'styled-components';

const GoodsImages = ({ imageList }) => {
  const [focusImage, setFocusImage] = useState(0);

  return (
    <Wrapper>
      {imageList.length > 0 ? (
        <>
          <FocusImage>
            <img
              src={imageList[focusImage]}
              alt={`이미지${focusImage}`}
              title="상품이미지"
              style={{ width: '100%' }}
            />
          </FocusImage>
          <ImageThumbnails>
            {imageList.map((item, idx) => (
              <ThumbnailImage key={idx} onClick={() => setFocusImage(idx)}>
                <img
                  src={item}
                  alt={`이미지${focusImage}`}
                  title="상품이미지"
                  style={{ width: '100%' }}
                />
              </ThumbnailImage>
            ))}
          </ImageThumbnails>
        </>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const ImageThumbnails = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
  white-space: nowrap;
`;

const FocusImage = styled.div`
  width: 100%;
`;

const ThumbnailImage = styled.div`
  max-width: 15%;
  min-width: 15%;
  margin: 1px;
`;

export default GoodsImages;
