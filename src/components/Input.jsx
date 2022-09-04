import styled from 'styled-components';
import React, { useEffect, useState, forwardRef } from 'react';

export const TextInput = forwardRef((props, ref) => {
  return (
    <Width100>
      {props.title ? (
        <Label required={props.required}>
          {props.title}
          <Required>*</Required>
        </Label>
      ) : (
        <DisplayNone />
      )}
      <Input
        placeholder={props.placeholder ? props.placeholder : '안에 들어갈 내용을 입력하세요'}
        value={props.value ? props.value : ''}
        onChange={props.onChange}
        key={props.key}
        ref={ref}
        defaultValue={props.defaultValue}
      />
      {props.guideline ? <Guideline>{props.guideline}</Guideline> : <DisplayNone />}
    </Width100>
  );
});

export const ArrInput = forwardRef((props, ref) => {
  return (
    <Width100>
      {props.title ? (
        <Label required={props.required}>
          {props.title}
          <Required>*</Required>
        </Label>
      ) : (
        <DisplayNone />
      )}
      <Widthflex>
        <Input
          placeholder={props.placeholder ? props.placeholder : '안에 들어갈 내용을 입력하세요'}
          onChange={props.onChange}
          key={props.key}
          ref={ref}
          value={props.value}
          defaultValue={props.defaultValue}
        />
        <ArrButton onClick={props.onClick}>add</ArrButton>
      </Widthflex>
      {props.arr}
      {props.guideline ? <Guideline>{props.guideline}</Guideline> : <DisplayNone />}
    </Width100>
  );
});

const Width100 = styled.div`
  width: 100%;
  margin-top: 28px;
`;

const Widthflex = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
`;

const DisplayNone = styled.div`
  display: none;
`;

const Label = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 12px;
  span {
    display: ${props => (props.required === true ? 'static' : 'none')};
  }
`;
const Required = styled.span`
  color: red;
  margin-left: 2px;
`;

const InputImg = styled.input`
  font-size: 16px;
  line-height: 19px;
  width: 100%;
  height: 30px;
  border: 1px solid #ececec;
  box-sizing: border-box;
  padding: 12px 19px;
  border-radius: 5px;
`;

const PreviewImg = styled.img`
  width: 100px;
  padding: 15px 120px;
`;

const ArrButton = styled.button`
  font-size: 16px;
  line-height: 19px;
  width: 7rem;
  height: 30px;
  background-color: transparent;
  margin-left: 5px;
  border: 1px solid black;
  box-sizing: border-box;
  padding: 12px 19px;
  border-radius: 5px;
`;

export const Input = styled.input`
  font-size: 14px;
  line-height: 19px;
  width: 100%;
  height: 30px;
  border: 1px solid ${props => props.theme.subBgColor};
  box-sizing: border-box;
  padding: 8px 16px;
  border-radius: 5px;
  @media screen and (max-width: 499px) {
    font-size: 12px;
  }
  &::placeholder {
    color: ${props => props.theme.subBgColor};
  }
`;

const Guideline = styled.div`
  color: #949494;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  margin-top: 16px;
  margin-left: 1px;
`;

const ImgBnt = styled.label`
  font-size: 16px;
  width: 6.5rem;
  height: 30px;
  margin-left: 5px;
  line-height: 16px;
  text-align: center;
  border: 1px solid black;
  box-sizing: border-box;
  padding: 12px 19px;
  border-radius: 30px;
`;

export const MultiImgInput = forwardRef((props, ref) => {
  const [images, setImages] = useState([]);
  const [imageURLS, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  function onImageChange(e, imgHandler) {
    setImages([...e.target.files]);
    imgHandler(e.target.files);
  }

  return (
    <Width100>
      {props.title ? (
        <Label required={props.required}>
          {props.title}
          <Required>*</Required>
        </Label>
      ) : (
        <DisplayNone />
      )}
      <Widthflex>
        <Input
          style={{
            width: '100%',
            backgroundColor: 'white',
            padding: '7px 12px',
          }}
          disabled
          value={imageURLS.map(url => url)}
        />
        <ImgBnt htmlFor="imgUpload">올리기</ImgBnt>
      </Widthflex>

      <InputImg
        style={{ display: 'none' }}
        key={props.key}
        id="imgUpload"
        ref={ref}
        type="file"
        className="imgInput"
        accept="image/*"
        name="file"
        multiple
        onChange={e => {
          onImageChange(e, props.onChange);
        }}
      />
      {props.guideline ? <Guideline>{props.guideline}</Guideline> : <DisplayNone />}
      {imageURLS.map(imageURL =>
        imageURL !== null ? <PreviewImg key={imageURL} src={imageURL} /> : <DisplayNone />
      )}
    </Width100>
  );
});
