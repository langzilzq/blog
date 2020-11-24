import React from 'react';
import { Card, Alert, Typography } from 'antd';
import styles from './Welcome.less';
import Code from '@/components/Code'


const CodePreview = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

export default () => (
  <Card>
    <CodePreview>
      ant add
    </CodePreview>
  </Card>
);
