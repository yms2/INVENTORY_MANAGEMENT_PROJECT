import React from 'react';
import { Card, Typography, Button, Table, Tag, Space, Image } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, CameraOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const Products: React.FC = () => {
  const navigate = useNavigate();

  const handleAddProduct = () => {
    navigate('/products/add');
  };

  const columns = [
    {
      title: '이미지',
      dataIndex: 'image',
      key: 'image',
      width: 80,
      render: (image: string) => (
        image ? (
          <Image
            width={40}
            height={40}
            src={image}
            alt="제품 이미지"
            className="rounded object-cover"
          />
        ) : (
          <div className="w-10 h-10 bg-white border border-gray-300 rounded flex items-center justify-center">
            <CameraOutlined className="text-gray-600" />
          </div>
        )
      ),
    },
    {
      title: 'SKU',
      dataIndex: 'sku',
      key: 'sku',
    },
    {
      title: '제품명',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '바코드',
      dataIndex: 'barcode',
      key: 'barcode',
      render: (barcode: string) => (
        <div className="font-mono text-sm">
          {barcode}
        </div>
      ),
    },
    {
      title: '현재재고',
      dataIndex: 'stock',
      key: 'stock',
      render: (stock: number) => (
        <Tag color={stock > 10 ? 'green' : stock > 0 ? 'orange' : 'red'}>
          {stock}개
        </Tag>
      ),
    },
    {
      title: '상태',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === '활성' ? 'blue' : 'default'}>
          {status}
        </Tag>
      ),
    },
    {
      title: '작업',
      key: 'action',
      render: () => (
        <Space size="middle">
          <Button type="link" icon={<EditOutlined />}>
            수정
          </Button>
          <Button type="link" danger icon={<DeleteOutlined />}>
            삭제
          </Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      sku: 'SKU-NXXNLHP6',
      name: '아이폰 15',
      barcode: 'BC12345678',
      stock: 25,
      status: '활성',
      image: '',
    },
    {
      key: '2',
      sku: 'SKU-MYYMLHP7',
      name: '갤럭시 S24',
      barcode: 'BC87654321',
      stock: 8,
      status: '활성',
      image: '',
    },
    {
      key: '3',
      sku: 'SKU-OZZOLHP8',
      name: '맥북 프로',
      barcode: 'BC11223344',
      stock: 0,
      status: '활성',
      image: '',
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <Title level={2} className="text-gray-900 mb-0">
          제품목록
        </Title>
        <Button type="primary" icon={<PlusOutlined />} onClick={handleAddProduct}>
          제품 추가
        </Button>
      </div>

      <Card>
        <Table columns={columns} dataSource={data} />
      </Card>
    </div>
  );
};

export default Products;
