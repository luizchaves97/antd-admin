import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

export const Wrapper = styled(Layout)`
  padding-top: 64px;
  height: 100vh;
  flex: 1;
  overflow-y: scroll;
  overflow-x: hidden;

  .ant-layout-footer {
    text-align: center;
  }
`;

export const Container = styled(Content)`
  margin: 0 25px;
`;

export const ContainerContent = styled.div`
  padding: 24px;
  background: #fff;
  min-height: 300px;
`;
