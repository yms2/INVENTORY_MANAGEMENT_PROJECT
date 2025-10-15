import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {

  const handleLoginSuccess = (user: any) => {
    console.log('로그인 성공:', user);
    
    // 사용자 정보를 로컬스토리지에 저장
    localStorage.setItem('user', JSON.stringify(user));
    
    // 홈으로 이동 (새로고침 방식)
    window.location.href = '/';
  };

  const handleLoginError = (error: any) => {
    console.error('로그인 실패:', error);
    // 에러 처리 로직 (토스트 메시지 등)
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ''}>
      <LoginForm 
        onLoginSuccess={handleLoginSuccess}
        onLoginError={handleLoginError}
      />
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
