import React from 'react'
import PropTypes from 'prop-types'
import { Table, Modal } from 'antd'
import classnames from 'classnames'
import { DropOption } from 'components'
import { Link } from 'react-router-dom'
import queryString from 'query-string'
import AnimTableBody from 'components/DataTable/AnimTableBody'
import styles from './List.less'
import { log } from 'utils'

const { confirm } = Modal

const List = ({
  onDeleteItem, onEditItem, location, ...tableProps
}) => {
  location.query = queryString.parse(location.search)

  const getState = (state)=>{
    log.info('state',state)
    switch(state){
      case 'B':return '刚下单';
      case 'I':return '待付款';
      case 'A':return '已作废';
      case 'S':return '待发货';
      case 'T':return '已发货';
      case 'E':return '已签收';
    }
  }

  const handleMenuClick = (record, e) => {
      onEditItem(record)
  }

  const columns = [
    {
      title: '发票号',
      dataIndex: 'inv_id',
      key: 'inv_id',
    },{
      title: '商品名称',
      dataIndex: 'pro_nme',
      key: 'pro_nme',
    }, {
      title: '发票类型',
      dataIndex: 'inv_typ',
      key: 'inv_typ',
      render: (text, record) => <div>{text=='1'?'个人':'单位'} </div>,
    }, {
      title: '发票金额(元)',
      dataIndex: 'amt',
      key: 'amt',
    },{
      title: '时间',
      dataIndex: 'crt_tm',
      key: 'crt_tm',
    },  {
      title: '发票状态',
      dataIndex: 'state',
      key: 'state',
      render :text => (<span>{text=='2'?'已开':'未开'}</span>)
    },{
      title: '操作',
      key: 'operation',
      width: 100,
      render: (text, record) => {
        return <pan><a onClick={e => handleMenuClick(record, e)}>查看</a></pan>
      },
    },
  ]

  const AnimateBody = (props) => {
    return <AnimTableBody {...props} />
  }

  const CommonBody = (props) => {
    return <tbody {...props} />
  }

  return (
    <Table
      {...tableProps}
      className={classnames(styles.table, { [styles.motion]: false })}
      bordered
      columns={columns}
      simple
      rowKey={record => record.id}
      components={{
        body: { wrapper: AnimateBody },
      }}
    />
  )
}

List.propTypes = {
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  location: PropTypes.object,
}

export default List
