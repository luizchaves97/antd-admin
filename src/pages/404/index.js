import React from 'react';
import { Icon } from 'antd';

import { Container } from './style';

function Error() {
  return (
    <Container>
      <Icon type="frown-o" />
      <h1>404 Not Found</h1>
    </Container>
  );
}

export default Error;
