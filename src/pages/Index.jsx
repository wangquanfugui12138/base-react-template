import React, { Component } from 'react'
import { Button, Table } from 'antd'

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
  sorter: (a, b) => a.age - b.age
}, {
  title: '地址',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'a',
  dataIndex: 'a',
  key: 'a',
  sorter: (a, b) => a.a - b.a
}, {
  title: 'b',
  dataIndex: 'b',
  key: 'b',
}, {
  title: 'c',
  dataIndex: 'c',
  key: 'c',
}, {
  title: 'd',
  dataIndex: 'd',
  key: 'd',
}, {
  title: 'e',
  dataIndex: 'e',
  key: 'e',
}, {
  title: 'f',
  dataIndex: 'f',
  key: 'f',
}, {
  title: 'g',
  dataIndex: 'g',
  key: 'g',
}, {
  title: 'h',
  dataIndex: 'h',
  key: 'h',
}, {
  title: 'i',
  dataIndex: 'i',
  key: 'i',
}, {
  title: 'j',
  dataIndex: 'j',
  key: 'j',
},];



const dataSource = []

for (var i = 0; i < 20; i++) {
  dataSource.push({
    name: `测试${i}`,
    age: Math.floor(Math.random() * 11 + 10),
    address: `XX路${i}号`,
    a: Math.floor(Math.random() * 50000 + 1),
    b: Math.floor(Math.random() * 9000 + 1),
    c: Math.floor(Math.random() * 10000 + 1),
    d: Math.floor(Math.random() * 100000 + 1),
    e: Math.floor(Math.random() * 1000000 + 1),
    f: Math.floor(Math.random() * 100000 + 1),
    g: Math.floor(Math.random() * 10000 + 1),
    h: Math.floor(Math.random() * 10000 + 1),
    i: Math.floor(Math.random() * 2000 + 1),
    j: Math.floor(Math.random() * 88000 + 1),
  })
}

const topK = function (data, k) {
  var min = Math.min(...data.map(item => item.age))
  var max = Math.max(...data.map(item => item.age))
  var buckets = Array(max - min + 1).fill(0).map(() => [])
  var res = []

  data.forEach(item => {
    buckets[item.age - min].push(item)
  })

  var tmp = 0
  var par = 0
  console.log(buckets)
  for (var i = buckets.length - 1; i >= 0; i--) {
    tmp += buckets[i].length

    if (tmp >= k) {
      res.push(...buckets[i].slice(0, k - par))
      return res
    } else {
      par = tmp
      res.push(...buckets[i])
    }
  }
  return res
}

class Index extends Component {
  state = {
    selectedRowKeys: [],
    selectedRows: []
  }
  change = (selectedRowKeys, selectedRows) => {
    this.setState({ selectedRows, selectedRowKeys })
  }
  click = k => {
    console.log(topK(dataSource, k))
  }
  tableChange = (pagination, filters, sorter, extra) => {
    console.log(pagination, filters, sorter, extra)
  }
  render () {
    return (
      <div className="wrapper">
        <Button type='primary' onClick={() => this.click(10)}>top10</Button>
        <Button type='primary' onClick={() => this.click(3)}>top3</Button>
        <Button type='primary' onClick={() => this.click(1)}>top1</Button>
        <Table
          onChange={this.tableChange}
          columns={columns}
          dataSource={dataSource}
          rowKey={data => data.name}
          rowSelection={{
            selectedRowKeys: this.state.selectedRowKeys,
            selectedRows: this.state.selectedRows,
            onChange: this.change
          }}
          pagination={{
            defaultPageSize: 20,
          }}
        />
      </div>
    )
  }
}

export default Index
