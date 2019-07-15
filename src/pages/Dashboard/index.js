import React, { PureComponent } from 'react';
import { Skeleton, notification, Button, Divider } from 'antd';

class Dashboard extends PureComponent {
  render() {
    const openNotification = () => {
      const args = {
        message: 'Notification Title',
        description:
          'I will never close automatically. I will be close automatically. I will never close automatically.',
        duration: 0,
      };
      notification.open(args);
    };
    return (
      <>
        <h1>Dashboard</h1>
        <Button onClick={openNotification}>Notification</Button>
        <Divider />
        <Skeleton avatar paragraph={{ rows: 30 }} />
      </>
    );
  }
}

export default Dashboard;
