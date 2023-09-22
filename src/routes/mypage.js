import React, { useState } from 'react';
import './mypage.css'; // CSS 파일을 import합니다.

function MyPage() {
  const [profileImage, setProfileImage] = useState(null);
  const [email, setEmail] = useState(''); // 초기값은 서버에서 가져오는 값으로 설정
  const [name, setName] = useState(''); // 초기값은 서버에서 가져오는 값으로 설정
  const [detailAddress, setDetailAddress] = useState(''); // 초기값은 서버에서 가져오는 값으로 설정

  // 프로필 이미지를 업로드하는 함수
  const handleImageUpload = async (event) => {
    const formData = new FormData();
    formData.append('profileImage', event.target.files[0]);

    try {
      // 서버에 formData를 전송하는 코드 작성
      // 예를 들어 fetch() 또는 axios를 사용하여 업로드 요청을 보낼 수 있습니다.
    } catch (error) {
      console.error('업로드 중 오류 발생: ', error);
    }
  };

  return (
    <div>
      <br />
      <h1 className="title">마이페이지</h1>
      <img src="기본프로필.jpg" alt="기본이미지" className="profile-image" width="100" height="100" />

      
      <form id="uploadForm">
        <input type="file" name="profileImage" id="fileInput" onChange={handleImageUpload} />
        <button type="submit" id="uploadButton">업로드</button>
      </form>

      <div className="sign-form">
        <div className="form-group">
          <label>이메일</label>
          <input type="text" value={email} className="form-control" style={{ width: '250px' }} readOnly />
        </div>
        <div className="form-group">
          <label>이름</label>
          <input type="text" value={name} className="form-control" style={{ width: '250px' }} readOnly />
        </div>
        <div className="form-group">
          <label>상세 주소</label>
          <input type="text" value={detailAddress} className="form-control" readOnly />
        </div>
      </div>
    </div>
  );
}

export default MyPage;
