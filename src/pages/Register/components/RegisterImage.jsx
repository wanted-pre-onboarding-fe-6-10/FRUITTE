import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import RegisterBox from './common/RegisterBox';
import RegisterModal from './RegisterModal';
import {
  RegisterContentWrapper,
  RegisterInputWrapper,
  RegisterTitleWrapper,
} from './common/RegisterContent';
// 이미지 등록하고 미리보기 볼 수 있는 컴포넌트
const RegisterImage = ({ data, setData }) => {
  const [imgUrls, setImgUrls] = useState([]);
  const [imgId, setImgId] = useState();
  const [open, setOpen] = useState(false);
  const photoInput = useRef();
  const photoEdit = useRef();
  const handleClick = () => {
    photoInput.current.click();
  };
  const handleEdit = id => {
    setImgId(id);
    photoEdit.current.click();
  };
  const onClose = () => {
    setOpen(false);
  };
  const uploadImg = e => {
    // console.log(e);
    const fileArr = e.target.files;
    const fileLength = `${fileArr.length > 9 ? 9 : fileArr.length}`;
    let fileUrl = [];
    for (let i = 0; i < fileLength; i++) {
      const img = URL.createObjectURL(fileArr[i]);
      fileUrl[i] = img;
      setImgUrls([...fileUrl]);
    }
  };
  const handleModal = id => {
    setImgId(id);
    setOpen(true);
  };

  const handleDeleteImage = id => {
    setImgUrls(imgUrls.filter((_, index) => index !== id));
  };
  const handleEditImage = (e, id) => {
    if (id) {
      let fileUrl = [];
      for (let i = 0; i < imgUrls.length; i++) {
        if (i === imgId) {
          fileUrl[i] = URL.createObjectURL(e.target.files[0]);
        } else {
          fileUrl[i] = imgUrls[i];
        }
        setImgUrls([...fileUrl]);
      }
    } else {
      handleDeleteImage(id);
    }
  };
  useEffect(() => {
    setData({ ...data, img: imgUrls });
  }, [imgUrls]);

  return (
    <RegisterBox title={'상품이미지'}>
      <RegisterTitleWrapper>
        <>
          {imgUrls.length > 0 ? null : <UploadPic onClick={handleClick} />}
          <input
            type="file"
            accept="image/jpg, image/jpeg, image/png"
            multiple={true}
            ref={photoInput}
            onChange={uploadImg}
            style={{ display: 'none' }}
          />
        </>
      </RegisterTitleWrapper>
      <Preview>
        {imgUrls.map((v, id) => (
          <ImgWrapper key={id}>
            <Img src={v} />
            <ButtonWrapper>
              <Btn
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
                onClick={() => handleModal(id)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </Btn>
              {open && <RegisterModal open={open} onClose={onClose} img={imgUrls[imgId]} />}
              <Btn
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
                onClick={() => handleEdit(id)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </Btn>
              <input
                type="file"
                accept="image/jpg, image/jpeg, image/png"
                ref={photoEdit}
                onChange={e => handleEditImage(e, id)}
                style={{ display: 'none' }}
              />
              <Btn
                onClick={() => handleDeleteImage(id)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </Btn>
            </ButtonWrapper>
          </ImgWrapper>
        ))}
      </Preview>
    </RegisterBox>
  );
};

const UploadPic = styled.img.attrs({ src: `${process.env.PUBLIC_URL}/+.png` })`
  width: 150px;
  height: 150px;
  border: 1px solid;
  cursor: pointer;
`;
const Preview = styled.div`
  display: flex;
`;
const ImgWrapper = styled.div`
  position: relative;
  display: flex;
  border: 1px solid;
  margin-right: 8px;
`;
const Img = styled.img`
  width: 150px;
  height: 150px;
`;
const ButtonWrapper = styled.div`
  position: absolute;
  width: 150px;
  height: 30%;
  background-color: black;
  opacity: 0.5;
  bottom: 0%;
  display: flex;
  justify-content: space-evenly;
`;
const Btn = styled.svg`
  color: white;
  width: 30px;
  font-weight: bold;
  cursor: pointer;
`;
export default RegisterImage;
