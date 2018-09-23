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
      case 'B':return '已作废';
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
      title: '订单号',
      dataIndex: 'ord_id',
      key: 'ord_id',
    },{
      title: '用户名',
      dataIndex: 'usr_nme',
      key: 'usr_nme',
    }, {
      title: '手机号',
      dataIndex: 'pho_no',
      key: 'pho_no',
    },{
      title: '商品名称',
      dataIndex: 'pro_nme',
      key: 'pro_nme',
    }, {
      title: '商品价格(元)',
      dataIndex: 'pro_amt',
      key: 'pro_amt',
      render: (text, record) => <div>{text} 元</div>,
    },{
      title: '购买时间',
      dataIndex: 'upd_tme',
      key: 'upd_tme',
    }, {
      title: '收货地址',
      dataIndex: 'rec_adr',
      key: 'rec_adr',
    }, {
      title: '订单状态',
      dataIndex: 'state',
      key: 'state',
      render :text => (<span>{getState(text)}</span>)
    },{
      title: '操作',
      key: 'operation',
      width: 100,
      render: (text, record) => {
        return <pan><a onClick={e => handleMenuClick(record, e)}>编辑</a></pan>
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
