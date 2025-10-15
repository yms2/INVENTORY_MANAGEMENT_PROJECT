import React, { useState } from 'react';
import { Layout, Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import Sidebar from './Sidebar';

const { Header, Content } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="min-h-screen">
      <Sidebar collapsed={collapsed} onCollapse={setCollapsed} />
      
      <Layout 
        className="transition-all duration-300"
        style={{ 
          marginLeft: collapsed ? 80 : 250,
          minHeight: '100vh'
        }}
      >
        <Header 
          className="bg-white shadow-sm border-b px-4 flex items-center justify-between"
          style={{ 
            position: 'fixed',
            top: 0,
            right: 0,
            left: collapsed ? 80 : 250,
            zIndex: 999,
            height: 64,
            lineHeight: '64px'
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          
          <div className="flex items-center space-x-4">
            {/* 여기에 알림, 프로필 등 추가 가능 */}
          </div>
        </Header>
        
        <Content
          style={{
            marginTop: 64,
            padding: '24px',
            minHeight: 'calc(100vh - 64px)',
            background: '#ffffff',
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
