import React, { Component } from 'react'
import {Button,Table} from 'antd'

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}];
const dataSource = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}];
class Index extends Component {
  
  render() {
    
    return (
      <div className="wrapper">
        <Button type='primary'>test</Button>
        <Table
          columns={columns}
          dataSource={dataSource}
        />
      </div>
    )
  }
}

export default Index
