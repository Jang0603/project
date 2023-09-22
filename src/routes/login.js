import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './login.css';

const LoginForm = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorCount, setErrorCount] = useState(0);
  const navigate = useNavigate(); 

  const handleLogin = () => {
    if (id === 'thtm') {
      if (password === '0000') {
        alert('로그인 되었습니다!');
        
        navigate('/mypage'); 
      } else {
        setErrorMessage('아이디와 비밀번호를 다시 확인해주세요.');
        setErrorCount(errorCount + 1);
      }
    } else {
      alert('존재하지 않는 계정입니다.');
    }

    if (errorCount >= 5) {
      alert('비밀번호를 5회 이상 틀리셨습니다. 비밀번호 찾기를 권장드립니다.');
    }
  };

  return (
    <div className="login-page">
      <div className="form">
        <p>로그인</p>
        <form className="login-form">
          <input
            className="login"
            type="text"
            placeholder="ID"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <input
            className="login"
            type="password"
            placeholder="password"
            name="pw"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button id="login" onClick={handleLogin}>
            <div className='loginimg'>로그인</div>
          </button>
          <Link to="/signin" target="_blank" className='message'>회원가입하기</Link>
          <p className="message">
            <a href="#">아이디/패스워드 찾기</a>
          </p>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
