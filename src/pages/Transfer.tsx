import React from 'react';
import { Card, Typography, Button, Form, Input, Select, DatePicker, Table, Space } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Option } = Select;

const Transfer: React.FC = () => {
  const columns = [
    {
      title: '이동번호',
      dataIndex: 'transferNo',
      key: 'transferNo',
    },
    {
      title: '제품명',
      dataIndex: 'productName',
      key: 'productName',
    },
    {
      title: '수량',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: '출발지',
      dataIndex: 'fromLocation',
      key: 'fromLocation',
    },
    {
      title: '도착지',
      dataIndex: 'toLocation',
      key: 'toLocation',
    },
    {
      title: '이동일',
      dataIndex: 'transferDate',
      key: 'transferDate',
    },
    {
      title: '상태',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  const data = [
    {
      key: '1',
      transferNo: 'TRF001',
      productName: '아이폰 15',
      quantity: 10,
      fromLocation: '본사 창고',
      toLocation: '지점 A',
      transferDate: '2024-01-15',
      status: '완료',
    },
    {
      key: '2',
      transferNo: 'TRF002',
      productName: '갤럭시 S24',
      quantity: 5,
      fromLocation: '지점 B',
      toLocation: '본사 창고',
      transferDate: '2024-01-14',
      status: '진행중',
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <Title level={2} className="text-gray-900 mb-0">
          재고 이동
        </Title>
        <Button type="primary" icon={<PlusOutlined />}>
          이동 등록
        </Button>
      </div>

      <Card className="mb-6">
        <Form layout="inline">
          <Form.Item label="제품명">
            <Input placeholder="제품명을 입력하세요" />
          </Form.Item>
          <Form.Item label="출발지">
            <Select placeholder="출발지 선택" style={{ width: 150 }}>
              <Option value="main">본사 창고</Option>
              <Option value="branch_a">지점 A</Option>
              <Option value="branch_b">지점 B</Option>
            </Select>
          </Form.Item>
          <Form.Item label="도착지">
            <Select placeholder="도착지 선택" style={{ width: 150 }}>
              <Option value="main">본사 창고</Option>
              <Option value="branch_a">지점 A</Option>
              <Option value="branch_b">지점 B</Option>
            </Select>
          </Form.Item>
          <Form.Item label="이동일">
            <DatePicker placeholder="이동일 선택" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" icon={<SearchOutlined />}>
              검색
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <Card>
        <Table columns={columns} dataSource={data} />
      </Card>
    </div>
  );
};

export default Transfer;
