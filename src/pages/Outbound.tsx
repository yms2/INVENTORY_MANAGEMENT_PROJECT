import React from 'react';
import { Card, Typography, Button, Form, Input, Select, DatePicker, Table, Space } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Option } = Select;

const Outbound: React.FC = () => {
  const columns = [
    {
      title: '출고번호',
      dataIndex: 'outboundNo',
      key: 'outboundNo',
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
      title: '출고일',
      dataIndex: 'outboundDate',
      key: 'outboundDate',
    },
    {
      title: '고객명',
      dataIndex: 'customer',
      key: 'customer',
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
      outboundNo: 'OUT001',
      productName: '아이폰 15',
      quantity: 5,
      outboundDate: '2024-01-15',
      customer: '홍길동',
      status: '완료',
    },
    {
      key: '2',
      outboundNo: 'OUT002',
      productName: '갤럭시 S24',
      quantity: 3,
      outboundDate: '2024-01-14',
      customer: '김철수',
      status: '완료',
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <Title level={2} className="text-gray-900 mb-0">
          출고 관리
        </Title>
        <Button type="primary" icon={<PlusOutlined />}>
          출고 등록
        </Button>
      </div>

      <Card className="mb-6">
        <Form layout="inline">
          <Form.Item label="제품명">
            <Input placeholder="제품명을 입력하세요" />
          </Form.Item>
          <Form.Item label="고객명">
            <Input placeholder="고객명을 입력하세요" />
          </Form.Item>
          <Form.Item label="출고일">
            <DatePicker placeholder="출고일 선택" />
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

export default Outbound;
