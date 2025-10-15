import React from 'react';
import { Card, Row, Col, Statistic, Typography } from 'antd';
import { 
  ShoppingCartOutlined, 
  DollarOutlined, 
  BarChartOutlined,
  UserOutlined
} from '@ant-design/icons';

const { Title } = Typography;

const Home: React.FC = () => {
  return (
    <div>
      <div className="mb-6">
        <Title level={2} className="text-gray-900 mb-2">
          대시보드
        </Title>
        <p className="text-gray-600">
          재고 관리 시스템의 주요 지표를 확인하세요.
        </p>
      </div>

      {/* 통계 카드 */}
      <Row gutter={[16, 16]} className="mb-8">
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="총 상품 수"
              value={1128}
              prefix={<ShoppingCartOutlined />}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="재고 부족 상품"
              value={23}
              prefix={<BarChartOutlined />}
              valueStyle={{ color: '#cf1322' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="이번 달 매출"
              value={112893}
              prefix={<DollarOutlined />}
              suffix="원"
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="신규 주문"
              value={93}
              prefix={<ShoppingCartOutlined />}
              valueStyle={{ color: '#722ed1' }}
            />
          </Card>
        </Col>
      </Row>

      {/* 최근 활동 */}
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card title="최근 활동" className="h-full">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>새로운 주문이 들어왔습니다. (주문번호: #12345)</span>
                </div>
                <span className="text-gray-500 text-sm">2분 전</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>재고가 부족한 상품이 있습니다. (상품명: 아이폰 15)</span>
                </div>
                <span className="text-gray-500 text-sm">1시간 전</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>새로운 상품이 등록되었습니다. (상품명: 갤럭시 S24)</span>
                </div>
                <span className="text-gray-500 text-sm">3시간 전</span>
              </div>
            </div>
          </Card>
        </Col>
        
        <Col xs={24} lg={12}>
          <Card title="빠른 액션" className="h-full">
            <div className="grid grid-cols-2 gap-4">
              <Card hoverable className="text-center">
                <ShoppingCartOutlined className="text-3xl text-blue-500 mb-2" />
                <p className="font-medium">상품 추가</p>
              </Card>
              <Card hoverable className="text-center">
                <BarChartOutlined className="text-3xl text-green-500 mb-2" />
                <p className="font-medium">재고 확인</p>
              </Card>
              <Card hoverable className="text-center">
                <UserOutlined className="text-3xl text-purple-500 mb-2" />
                <p className="font-medium">고객 관리</p>
              </Card>
              <Card hoverable className="text-center">
                <DollarOutlined className="text-3xl text-orange-500 mb-2" />
                <p className="font-medium">매출 분석</p>
              </Card>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
