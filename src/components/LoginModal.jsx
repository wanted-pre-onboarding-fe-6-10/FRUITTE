import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Input } from './Input';
import Button from './Button';
import { AiOutlineClose } from 'react-icons/ai';

function LoginModal({ onToggle }) {
  useEffect(() => {
    document.body.style.cssText = `
          position: fixed;
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const { email, password } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (email === 'test@test.com' && password === 'test123!') {
      localStorage.setItem(
        'who',
        JSON.stringify({
          username: '테스트',
          phoneNumber: '010-1234-1234',
          email: 'test@test.com',
        })
      );
      onToggle();
    } else if (email === 'admin@admin.com' && password === 'admin123!') {
      localStorage.setItem('who', 'admin');
      onToggle();
    } else {
      alert('아이디와 비밀번호가 일치하지 않습니다');
    }
  };

  return (
    <LoginModalBlock>
      <LoginModalBox>
        <div className="loginHeader">
          <div className="closeBlock">
            <AiOutlineClose onClick={onToggle} />
          </div>
          <h2>로그인</h2>
        </div>
        <LoginFormWapper onSubmit={onSubmit}>
          <StyledInput
            type="email"
            name="email"
            value={email}
            placeholder="아이디를 입력해주세요"
            onChange={onChange}
          />
          <StyledInput
            type="password"
            name="password"
            value={password}
            placeholder="비밀번호를 입력해주세요"
            onChange={onChange}
          />
          <SubmitButton size="large" fullWidth>
            로그인
          </SubmitButton>
        </LoginFormWapper>
      </LoginModalBox>
    </LoginModalBlock>
  );
}

export default LoginModal;

const LoginModalBlock = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginModalBox = styled.div`
  width: 500px;
  height: 300px;
  background-color: white;
  border-radius: 7px;
  padding: 1rem;

  .loginHeader {
    width: 100%;
    h2 {
      text-align: center;
      margin-bottom: 1rem;
    }

    .closeBlock {
      width: 100%;
      text-align: right;
      padding: 1rem 1rem 0 0;

      svg {
        cursor: pointer;
        font-size: 20px;
      }
    }
  }

  .extraInfo {
    display: flex;
    justify-content: center;

    span {
      cursor: pointer;
    }

    #goRegister {
      margin-left: 0.5rem;
      text-decoration: underline;
      text-underline-position: under;
    }
  }
`;
const LoginFormWapper = styled.form``;
const StyledInput = styled(Input)`
  & + & {
    margin-top: 1rem;
  }
`;

const SubmitButton = styled(Button)`
  margin-top: 1rem;
  cursor: pointer;
`;
