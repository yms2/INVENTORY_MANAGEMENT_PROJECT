import React, { useState } from 'react';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import KakaoLogin from 'react-kakao-login';
import { Button, Card, Typography, Divider, Alert } from 'antd';
import { GoogleOutlined, MessageOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

interface LoginFormProps {
  onLoginSuccess?: (user: any) => void;
  onLoginError?: (error: any) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess, onLoginError }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 구글 로그인 성공 핸들러
  const handleGoogleSuccess = (credentialResponse: CredentialResponse) => {
    setLoading(true);
    setError(null);
    
    try {
      // JWT 토큰을 디코딩하여 사용자 정보 추출
      const token = credentialResponse.credential;
      if (token) {
        // 실제 프로젝트에서는 서버로 토큰을 전송하여 검증하고 사용자 정보를 받아와야 합니다
        const userInfo = {
          id: 'google_user_id',
          name: 'Google User',
          email: 'user@gmail.com',
          provider: 'google',
          token: token
        };
        
        onLoginSuccess?.(userInfo);
        console.log('구글 로그인 성공:', userInfo);
      }
    } catch (err) {
      const errorMessage = '구글 로그인 중 오류가 발생했습니다.';
      setError(errorMessage);
      onLoginError?.(err);
      console.error('구글 로그인 오류:', err);
    } finally {
      setLoading(false);
    }
  };

  // 구글 로그인 실패 핸들러
  const handleGoogleError = () => {
    const errorMessage = '구글 로그인에 실패했습니다.';
    setError(errorMessage);
    onLoginError?.(new Error(errorMessage));
    console.error('구글 로그인 실패');
  };

  // 카카오 로그인 성공 핸들러
  const handleKakaoSuccess = (result: any) => {
    setLoading(true);
    setError(null);
    
    try {
      const userInfo = {
        id: result.profile.id,
        name: result.profile.properties.nickname,
        email: result.profile.kakao_account?.email || '',
        profileImage: result.profile.properties.profile_image,
        provider: 'kakao',
        accessToken: result.response.access_token
      };
      
      onLoginSuccess?.(userInfo);
      console.log('카카오 로그인 성공:', userInfo);
    } catch (err) {
      const errorMessage = '카카오 로그인 중 오류가 발생했습니다.';
      setError(errorMessage);
      onLoginError?.(err);
      console.error('카카오 로그인 오류:', err);
    } finally {
      setLoading(false);
    }
  };

  // 카카오 로그인 실패 핸들러
  const handleKakaoFailure = (error: any) => {
    const errorMessage = '카카오 로그인에 실패했습니다.';
    setError(errorMessage);
    onLoginError?.(error);
    console.error('카카오 로그인 실패:', error);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Title level={2} className="text-gray-900">
            재고 관리 시스템
          </Title>
          <Text className="text-gray-600">
            계정에 로그인하여 시작하세요
          </Text>
        </div>

        <Card className="shadow-lg">
          <div className="space-y-6">
            {error && (
              <Alert
                message="로그인 오류"
                description={error}
                type="error"
                showIcon
                closable
                onClose={() => setError(null)}
              />
            )}

            <div className="space-y-4">
              {/* 테스트용 로그인 버튼 */}
              <Button
                type="primary"
                size="large"
                block
                onClick={() => {
                  const testUser = {
                    id: 'test_user_123',
                    name: '테스트 사용자',
                    email: 'test@example.com',
                    provider: 'test'
                  };
                  onLoginSuccess?.(testUser);
                }}
                className="mb-4"
              >
                테스트 로그인 (개발용)
              </Button>

              <Divider>
                <Text className="text-gray-500">또는</Text>
              </Divider>

              {/* 구글 로그인 */}
              <div className="w-full">
                {process.env.REACT_APP_GOOGLE_CLIENT_ID ? (
                  <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={handleGoogleError}
                    useOneTap={false}
                    theme="outline"
                    size="large"
                    width="100%"
                    text="signin_with"
                    shape="rectangular"
                    logo_alignment="left"
                  />
                ) : (
                  <Button
                    type="default"
                    size="large"
                    block
                    disabled
                    icon={<GoogleOutlined />}
                  >
                    구글 로그인 (클라이언트 ID 필요)
                  </Button>
                )}
              </div>

              <Divider>
                <Text className="text-gray-500">또는</Text>
              </Divider>

              {/* 카카오 로그인 */}
              <div className="w-full">
                {process.env.REACT_APP_KAKAO_CLIENT_ID ? (
                  <KakaoLogin
                    token={process.env.REACT_APP_KAKAO_CLIENT_ID}
                    onSuccess={handleKakaoSuccess}
                    onFail={handleKakaoFailure}
                    onLogout={console.info}
                    render={({ onClick }) => (
                      <Button
                        type="primary"
                        size="large"
                        block
                        loading={loading}
                        onClick={onClick}
                        className="bg-yellow-400 hover:bg-yellow-500 border-yellow-400 hover:border-yellow-500 text-black font-medium"
                        icon={<MessageOutlined />}
                      >
                        카카오로 로그인
                      </Button>
                    )}
                  />
                ) : (
                  <Button
                    type="primary"
                    size="large"
                    block
                    disabled
                    className="bg-yellow-400 border-yellow-400 text-black font-medium"
                    icon={<MessageOutlined />}
                  >
                    카카오 로그인 (클라이언트 ID 필요)
                  </Button>
                )}
              </div>
            </div>

            <div className="text-center">
              <Text className="text-sm text-gray-500">
                로그인하면 서비스 이용약관 및 개인정보처리방침에 동의하는 것으로 간주됩니다.
              </Text>
              
              {(!process.env.REACT_APP_GOOGLE_CLIENT_ID || !process.env.REACT_APP_KAKAO_CLIENT_ID) && (
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <Text className="text-sm text-yellow-800">
                    <strong>개발자 안내:</strong> 소셜 로그인을 사용하려면 .env 파일에 클라이언트 ID를 설정하세요.
                    <br />
                    현재는 테스트 로그인 버튼을 사용하세요.
                  </Text>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoginForm;
