import React from 'react'
import PropTypes from 'prop-types'
import { Table, Modal } from 'antd'
import classnames from 'classnames'
import { DropOption } from 'components'
import { Link } from 'react-router-dom'
import queryString from 'query-string'
import AnimTableBody from 'components/DataTable/AnimTableBody'
import styles from './List.less'

const { confirm } = Modal

const List = ({
  onDeleteItem, onEditItem, onEditImgList,location, ...tableProps
}) => {
  location.query = queryString.parse(location.search)

  const handleMenuClick = (record, e) => {
    console.log('record',record)
    if (e.key === '1') {
      onEditItem(record)
    }else if (e.key === '2') {
      onEditImgList(record,'2')
    } else if (e.key === '3') {
      onEditImgList(record,'3')
    }else if (e.key === '4') {
      confirm({
        title: '确定要删除该商品吗?',
        onOk () {
          onDeleteItem(record.pro_id)
        },
      })
    }
  }

  const columns = [
    {
      title: '商品名称',
      dataIndex: 'pro_nme',
      key: 'pro_nme',
      render: (text, record) => <a >{text}</a>,
    }, 
     {
      title: '商品类型',
      dataIndex: 'pro_typ',
      key: 'pro_typ',
    }, {
      title: '价格类型',
      dataIndex: 'amt_typ',
      key: 'amt_typ',
    }, {
      title: '价格',
      dataIndex: 'pro_amt',
      key: 'pro_amt',      
    },{
      title: '展示图片',
      dataIndex: 'def_url',
      key: 'def_url',
      width: 64,
      //className: styles.avatar,
      render: text => <img alt="def_url" width={24} height={24} src={text} />,
    }, {
      title: '已拼数量',
      dataIndex: 'buy_cnt_sum',
      key: 'buy_cnt_sum',      
    },{
      title: '状态',
      dataIndex: 'state',
      key: 'state',
      render :text => (<span>{text=='1'
        ? '启用'
        : '禁用'}</span>)
    }, {
      title: '操作',
      key: 'operation',
      width: 130,
      render: (text, record) => {
        return <DropOption onMenuClick={e => handleMenuClick(record, e)} menuOptions={[{ key: '1', name: '查看详情' },{ key: '2', name: '轮播图片' },{ key: '3', name: '详情图片' }, { key: '4', name: '删除商品' }]} />
      },
    },
  ]

  const AnimateBody = (props) => {
    return <AnimTableBody {...props} />
  }

  //console.log('tableProps',tableProps)
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
