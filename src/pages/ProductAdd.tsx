import React, { useState } from 'react';
import { Card, Typography, Form, Input, Button, Row, Col, message, Upload, Image } from 'antd';
import { ArrowLeftOutlined, SaveOutlined, BarcodeOutlined, CameraOutlined, ScanOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const ProductAdd: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [barcode, setBarcode] = useState<string>('');
  const [productImage, setProductImage] = useState<string>('');

  // 바코드 자동생성 함수
  const generateBarcode = () => {
    const timestamp = Date.now().toString();
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    const newBarcode = `BC${timestamp.slice(-8)}${random}`;
    setBarcode(newBarcode);
    form.setFieldsValue({ barcode: newBarcode });
  };

  // 바코드 인식 함수
  const handleBarcodeScan = () => {
    // 실제 구현에서는 바코드 스캐너 라이브러리를 사용
    message.info('바코드 스캐너를 활성화합니다. (개발 중)');
    // 예시: 바코드 스캔 시뮬레이션
    setTimeout(() => {
      const scannedBarcode = `SCAN${Date.now().toString().slice(-8)}`;
      setBarcode(scannedBarcode);
      form.setFieldsValue({ barcode: scannedBarcode });
    }, 2000);
  };

  // 이미지 업로드 처리
  const handleImageUpload = (info: any) => {
    const file = info.file.originFileObj || info.file;
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProductImage(imageUrl);
      // 팝업 메시지 제거
    }
  };

  const handleSubmit = (values: any) => {
    // 필수값 검증
    if (!values.name) {
      message.error('제품명 : 필수값이 입력되지 않았습니다.');
      return;
    }

    const submitData = {
      ...values,
      sku: form.getFieldValue('sku') || 'SKU-NXXNLHP6',
      barcode: barcode,
      image: productImage
    };
    console.log('제품 등록 데이터:', submitData);
    message.success('제품이 성공적으로 등록되었습니다.');
    navigate('/products');
  };

  const handleCancel = () => {
    navigate('/products');
  };

  return (
    <div>
      <div className="flex items-center mb-6">
        <Button 
          icon={<ArrowLeftOutlined />} 
          onClick={handleCancel}
          className="mr-4"
        >
          뒤로가기
        </Button>
        <Title level={2} className="text-gray-900 mb-0">
          제품 등록
        </Title>
      </div>

      <Card>
        <div className="max-w-4xl">
          <div className="text-center mb-8">
            <Title level={3} className="text-gray-900 mb-2">
              제품 정보
            </Title>
          </div>

          <div className="flex gap-8">
            {/* 왼쪽: 폼 영역 */}
            <div className="flex-1">
              <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                className="space-y-6"
              >
                {/* SKU 필드 */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-gray-900 font-medium">SKU</span>
                    <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-xs">?</span>
                    </div>
                  </div>
                  <div className="flex-1 flex gap-2">
                    <Input 
                      placeholder="SKU-NXXNLHP6" 
                      className="flex-1"
                      value={form.getFieldValue('sku') || 'SKU-NXXNLHP6'}
                      onChange={(e) => form.setFieldsValue({ sku: e.target.value })}
                    />
                    <Button 
                      type="primary"
                      className="bg-green-500 hover:bg-green-600 border-green-500 hover:border-green-600"
                      onClick={() => {
                        const newSku = `SKU-${Math.random().toString(36).substr(2, 8).toUpperCase()}`;
                        form.setFieldsValue({ sku: newSku });
                      }}
                    >
                      자동 생성
                    </Button>
                  </div>
                </div>

                {/* 제품명 필드 */}
                <div className="flex items-center gap-4">
                  <div className="min-w-0">
                    <span className="text-gray-900 font-medium">제품명</span>
                  </div>
                  <div className="flex-1">
                    <Form.Item
                      name="name"
                      className="mb-0"
                    >
                      <Input placeholder="제품명" />
                    </Form.Item>
                  </div>
                </div>

                {/* 바코드 필드 */}
                <div className="flex items-center gap-4">
                  <div className="min-w-0">
                    <span className="text-gray-900 font-medium">바코드</span>
                  </div>
                  <div className="flex-1 flex gap-2">
                    <Input 
                      placeholder="바코드가 없어도 자동 생성할 수 있습니다." 
                      value={barcode}
                      onChange={(e) => setBarcode(e.target.value)}
                      className="flex-1"
                    />
                    <Button 
                      icon={<ScanOutlined />}
                      className="w-10 h-10 p-0 flex items-center justify-center"
                    />
                    <Button 
                      type="primary"
                      className="bg-green-500 hover:bg-green-600 border-green-500 hover:border-green-600"
                      onClick={generateBarcode}
                    >
                      자동 생성
                    </Button>
                  </div>
                </div>
              </Form>
            </div>

            {/* 오른쪽: 이미지 업로드 영역 */}
            <div className="w-44 h-44">
              {productImage ? (
                <div className="relative w-full h-full">
                  <Image
                    width={176}
                    height={176}
                    src={productImage}
                    alt="제품 이미지"
                    className="rounded-lg object-cover w-full h-full"
                  />
                  <Button 
                    onClick={() => setProductImage('')}
                    className="absolute top-2 right-2 w-6 h-6 p-0 flex items-center justify-center"
                    danger
                    size="small"
                  >
                    ×
                  </Button>
                </div>
              ) : (
                <Upload
                  accept="image/*"
                  showUploadList={false}
                  beforeUpload={() => false}
                  onChange={handleImageUpload}
                  className="w-full h-full"
                >
                  <div className="w-full h-full rounded-lg flex items-center justify-center bg-white border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <CameraOutlined className="text-white text-xl" />
                    </div>
                  </div>
                </Upload>
              )}
            </div>
          </div>
        </div>

        {/* 하단 버튼 */}
        <div className="flex justify-start space-x-4 mt-8 pt-6">
          <Button 
            type="primary" 
            htmlType="submit" 
            size="middle"
            className="bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700"
            onClick={() => form.submit()}
          >
            입력 완료
          </Button>
          <Button onClick={handleCancel} size="middle">
            취소
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ProductAdd;
