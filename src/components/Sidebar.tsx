import React from 'react';
import { Layout, Menu, Avatar, Typography, Button } from 'antd';
import {
  UserOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  BarChartOutlined,
  SettingOutlined,
  HomeOutlined,
  FileTextOutlined,
  TeamOutlined,
  InboxOutlined,
  ExportOutlined,
  EditOutlined,
  SwapOutlined,
  HistoryOutlined,
  DatabaseOutlined,
  UsergroupAddOutlined,
  EnvironmentOutlined
} from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';

const { Sider } = Layout;
const { Text } = Typography;

interface SidebarProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onCollapse }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // 로컬스토리지에서 사용자 정보 가져오기
  const userInfo = JSON.parse(localStorage.getItem('user') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: '홈',
    },
    {
      key: '/products',
      icon: <ShoppingCartOutlined />,
      label: '제품목록',
    },
    {
      key: '/inbound',
      icon: <InboxOutlined />,
      label: '입고',
    },
    {
      key: '/outbound',
      icon: <ExportOutlined />,
      label: '출고',
    },
    {
      key: '/adjustment',
      icon: <EditOutlined />,
      label: '조정',
    },
    {
      key: '/transfer',
      icon: <SwapOutlined />,
      label: '이동',
    },
    {
      key: '/history',
      icon: <HistoryOutlined />,
      label: '내역',
    },
    {
      key: '/data-management',
      icon: <DatabaseOutlined />,
      label: '데이터 관리',
      children: [
        {
          key: '/data-management/inventory',
          icon: <FileTextOutlined />,
          label: '제품',
        },
        {
          key: '/data-management/inventory',
          icon: <UsergroupAddOutlined />,
          label: '거래처',
        },
        {
          key: '/data-management/inventory',
            icon: <EnvironmentOutlined />,
            label: '위치',
        }
      ],
    },
    {
      key: '/settings',
      icon: <SettingOutlined />,
      label: '설정',
      children: [
        {
          key: '/settings/profile',
          icon: <UserOutlined />,
          label: '프로필',
        },

      ],
    },
  ];

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={250}
      className="bg-white shadow-lg"
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 1000,
      }}
    >
      {/* 로고 및 제목 */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-center">
          {!collapsed ? (
            <div className="text-center">
              <Text strong className="text-lg text-blue-600">
                재고 관리 시스템
              </Text>
            </div>
          ) : (
            <div className="text-center">
              <Text strong className="text-lg text-blue-600">
                재고
              </Text>
            </div>
          )}
        </div>
      </div>

      {/* 사용자 정보 */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <Avatar 
            src={userInfo.profileImage} 
            icon={<UserOutlined />} 
            size="default"
          />
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <Text strong className="block truncate">
                {userInfo.name || '사용자'}
              </Text>
              <Text type="secondary" className="text-xs">
                {userInfo.email || 'user@example.com'}
              </Text>
            </div>
          )}
        </div>
      </div>

      {/* 메뉴 */}
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
        onClick={handleMenuClick}
        className="border-0"
        style={{ 
          height: 'calc(100vh - 200px)',
          borderRight: 0,
        }}
      />

      {/* 로그아웃 버튼 */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
        <Button
          type="text"
          icon={<LogoutOutlined />}
          onClick={handleLogout}
          block
          className="text-left"
        >
          {!collapsed && '로그아웃'}
        </Button>
      </div>
    </Sider>
  );
};

export default Sidebar;
