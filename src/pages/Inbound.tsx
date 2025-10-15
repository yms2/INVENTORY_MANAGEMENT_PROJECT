import React from 'react';
import { Card, Typography, Button, Form, Input, Select, DatePicker, Table, Space } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Option } = Select;

const Inbound: React.FC = () => {
  const columns = [
    {
      title: '입고번호',
      dataIndex: 'inboundNo',
      key: 'inboundNo',
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
      title: '입고일',
      dataIndex: 'inboundDate',
      key: 'inboundDate',
    },
    {
      title: '공급업체',
      dataIndex: 'supplier',
      key: 'supplier',
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
      inboundNo: 'IN001',
      productName: '아이폰 15',
      quantity: 50,
      inboundDate: '2024-01-15',
      supplier: '애플코리아',
      status: '완료',
    },
    {
      key: '2',
      inboundNo: 'IN002',
      productName: '갤럭시 S24',
      quantity: 30,
      inboundDate: '2024-01-14',
      supplier: '삼성전자',
      status: '완료',
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <Title level={2} className="text-gray-900 mb-0">
          입고 관리
        </Title>
        <Button type="primary" icon={<PlusOutlined />}>
          입고 등록
        </Button>
      </div>

      <Card className="mb-6">
        <Form layout="inline">
          <Form.Item label="제품명">
            <Input placeholder="제품명을 입력하세요" />
          </Form.Item>
          <Form.Item label="공급업체">
            <Select placeholder="공급업체 선택" style={{ width: 200 }}>
              <Option value="apple">애플코리아</Option>
              <Option value="samsung">삼성전자</Option>
            </Select>
          </Form.Item>
          <Form.Item label="입고일">
            <DatePicker placeholder="입고일 선택" />
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

export default Inbound;
