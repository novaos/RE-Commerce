import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = (
  <LoadingOutlined style={{ fontSize: 44, position: 'fixed', left: '50%', top: '50%', zIndex: 999 }} spin />
);

const Loader = () => <Spin indicator={antIcon} />;
export default Loader;
