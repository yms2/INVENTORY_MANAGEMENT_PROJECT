import React from 'react';
import { Card, Typography, Button, Form, Input, Select, DatePicker, Table, Space, Tag } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Option } = Select;

const History: React.FC = () => {
  const columns = [
    {
      title: '일시',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '유형',
      dataIndex: 'type',
      key: 'type',
      render: (type: string) => {
        const colors = {
          '입고': 'green',
          '출고': 'red',
          '조정': 'orange',
          '이동': 'blue',
        };
        return <Tag color={colors[type as keyof typeof colors]}>{type}</Tag>;
      },
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
      render: (quantity: number, record: any) => (
        <span style={{ color: record.type === '입고' || record.type === '조정' ? 'green' : 'red' }}>
          {record.type === '입고' || record.type === '조정' ? '+' : '-'}{quantity}
        </span>
      ),
    },
    {
      title: '처리자',
      dataIndex: 'operator',
      key: 'operator',
    },
    {
      title: '비고',
      dataIndex: 'note',
      key: 'note',
    },
  ];

  const data = [
    {
      key: '1',
      date: '2024-01-15 14:30',
      type: '입고',
      productName: '아이폰 15',
      quantity: 50,
      operator: '김관리',
      note: '애플코리아 입고',
    },
    {
      key: '2',
      date: '2024-01-15 13:20',
      type: '출고',
      productName: '갤럭시 S24',
      quantity: 3,
      operator: '이직원',
      note: '고객 주문',
    },
    {
      key: '3',
      date: '2024-01-15 12:10',
      type: '조정',
      productName: '아이폰 15',
      quantity: 2,
      operator: '박실사',
      note: '재고 실사',
    },
    {
      key: '4',
      date: '2024-01-15 11:00',
      type: '이동',
      productName: '맥북 프로',
      quantity: 5,
      operator: '최이동',
      note: '본사→지점A',
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <Title level={2} className="text-gray-900 mb-0">
          재고 내역
        </Title>
      </div>

      <Card className="mb-6">
        <Form layout="inline">
          <Form.Item label="제품명">
            <Input placeholder="제품명을 입력하세요" />
          </Form.Item>
          <Form.Item label="유형">
            <Select placeholder="유형 선택" style={{ width: 120 }}>
              <Option value="inbound">입고</Option>
              <Option value="outbound">출고</Option>
              <Option value="adjustment">조정</Option>
              <Option value="transfer">이동</Option>
            </Select>
          </Form.Item>
          <Form.Item label="처리자">
            <Input placeholder="처리자명을 입력하세요" />
          </Form.Item>
          <Form.Item label="기간">
            <DatePicker.RangePicker placeholder={['시작일', '종료일']} />
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

export default History;
