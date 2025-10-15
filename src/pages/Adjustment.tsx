import React from 'react';
import { Card, Typography, Button, Form, Input, Select, DatePicker, Table, Space, InputNumber } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Option } = Select;

const Adjustment: React.FC = () => {
  const columns = [
    {
      title: '조정번호',
      dataIndex: 'adjustmentNo',
      key: 'adjustmentNo',
    },
    {
      title: '제품명',
      dataIndex: 'productName',
      key: 'productName',
    },
    {
      title: '조정 전',
      dataIndex: 'beforeQuantity',
      key: 'beforeQuantity',
    },
    {
      title: '조정 후',
      dataIndex: 'afterQuantity',
      key: 'afterQuantity',
    },
    {
      title: '차이',
      dataIndex: 'difference',
      key: 'difference',
      render: (difference: number) => (
        <span style={{ color: difference > 0 ? 'green' : 'red' }}>
          {difference > 0 ? '+' : ''}{difference}
        </span>
      ),
    },
    {
      title: '조정일',
      dataIndex: 'adjustmentDate',
      key: 'adjustmentDate',
    },
    {
      title: '사유',
      dataIndex: 'reason',
      key: 'reason',
    },
  ];

  const data = [
    {
      key: '1',
      adjustmentNo: 'ADJ001',
      productName: '아이폰 15',
      beforeQuantity: 25,
      afterQuantity: 23,
      difference: -2,
      adjustmentDate: '2024-01-15',
      reason: '재고 실사',
    },
    {
      key: '2',
      adjustmentNo: 'ADJ002',
      productName: '갤럭시 S24',
      beforeQuantity: 8,
      afterQuantity: 10,
      difference: 2,
      adjustmentDate: '2024-01-14',
      reason: '오류 수정',
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <Title level={2} className="text-gray-900 mb-0">
          재고 조정
        </Title>
        <Button type="primary" icon={<PlusOutlined />}>
          조정 등록
        </Button>
      </div>

      <Card className="mb-6">
        <Form layout="inline">
          <Form.Item label="제품명">
            <Input placeholder="제품명을 입력하세요" />
          </Form.Item>
          <Form.Item label="조정일">
            <DatePicker placeholder="조정일 선택" />
          </Form.Item>
          <Form.Item label="사유">
            <Select placeholder="사유 선택" style={{ width: 150 }}>
              <Option value="inventory">재고 실사</Option>
              <Option value="error">오류 수정</Option>
              <Option value="damage">손상</Option>
            </Select>
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

export default Adjustment;
