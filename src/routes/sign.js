import React from 'react';

function SignIn() {
  return (
    <div className="singin">
      <div className="member">
      </div>
      <div className="field">
        <b>이름</b>
        <span className="text"><input type="text" placeholder="필수" /></span>
      </div>
      <div className="field">
        <b>아이디</b>
        <span className="id"><input type="text" maxLength="8" minLength="5" placeholder="5~8 사이로 입력해 주세요." /></span>
      </div>
      <div className="field">
        <b>비밀번호</b>
        <span className="pwd"><input type="password" maxLength="8" minLength="6" placeholder="6~8 사이로 입력해 주세요." /></span>
      </div>
      <div className="field">
        <b>비밀번호 재확인</b>
        <span className="re-pwd"><input type="password" /></span>
      </div>
      <div className="field">
        <b>본인 확인 이메일</b>
        <span className="email">
          <input type="email" />
          <select>
            <option value="">naver.com</option>
            <option value="">daum.net</option>
            <option value="">gmail.com</option>
            <option value="">nate.com</option>
          </select>
        </span>
      </div>
      <div className="tel">
        <b>휴대전화</b>
        <select className="public">
          <option value="">대한민국 +82</option>
        </select>
        <div className="num1">
          <input type="tel" placeholder="전화번호 입력" style={{ width: '310px' }} />
          <input type="button" style={{ width: '150px' }} value="인증번호 받기" />
        </div>
        <div className="num2">
          <input type="text" placeholder="인증번호를 입력하세요." style={{ width: '469px' }} />
        </div>
      </div>
      <div className="num3">
        <input type="button" value="가입하기" style={{ width: '472px' }} />
      </div>
      <div className="footer">
        <div>
          <a href="#none">이용약관</a>
          <a href="#none">개인정보처리방침</a>
          <a href="#none">책임의 한계와 법적고지</a>
          <a href="#none">회원정보 고객센터</a>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
