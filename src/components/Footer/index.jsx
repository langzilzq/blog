import React from 'react'
import { GithubOutlined } from '@ant-design/icons'
import { DefaultFooter } from '@ant-design/pro-layout'

export default () => (
  <DefaultFooter
    copyright="2020 林志钦学习笔记"
    links={[
      {
        key: 'github',
        title: <GithubOutlined />,
        href: 'https://github.com/langzilzq',
        blankTarget: true,
      },
      {
        key: 'contact me',
        title: '联系我',
        href: 'http://wpa.qq.com/msgrd?v=3&uin=896818912&site=qq&menu=yes',
        blankTarget: true,
      },
    ]}
  />
)
