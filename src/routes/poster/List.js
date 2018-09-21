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
  onDeleteItem, onEditItem, location, ...tableProps
}) => {
  location.query = queryString.parse(location.search)

  const handleMenuClick = (record, e) => {
    console.log('record',record)
    if (e.key === '1') {
      onEditItem(record)
    } else if (e.key === '2') {
      confirm({
        title: '确定要删除该广告吗?',
        onOk () {
          onDeleteItem(record.bor_id)
        },
      })
    }
  }
  
  const avatarPng = {
      png1:'http://dummyimage.com/100x100/f2d479/757575.png&text=S',
      png2:'http://dummyimage.com/100x100/cef279/757575.png&text=H'
  }

  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => <a >{text}</a>,
    }, 
    {
      title: '属性',
      dataIndex: 'bor_typ',
      key: 'avatar',
      width: 64,
      className: styles.avatar,
      render: text => <img alt="avatar" width={24} src={`${text=='01'?avatarPng.png1:avatarPng.png2}`} />,
    }, {
      title: '广告类型',
      dataIndex: 'bor_typ',
      key: 'bor_typ',
      render :text => (<span>{text=='01'
        ? '内部广告'
        : '商业广告'}</span>)
    }, {
      title: '内容',
      dataIndex: 'content',
      key: 'content',
    }, {
      title: '广告位置',
      dataIndex: 'location',
      key: 'location',      
    }, {
      title: '状态',
      dataIndex: 'state',
      key: 'state',
      render :text => (<span>{text=='1'
        ? '启用'
        : '禁用'}</span>)
    }, {
      title: '操作',
      key: 'operation',
      width: 100,
      render: (text, record) => {
        return <DropOption onMenuClick={e => handleMenuClick(record, e)} menuOptions={[{ key: '1', name: '详情' }, { key: '2', name: '删除' }]} />
      },
    },
  ]

  const AnimateBody = (props) => {
    // console.log('AnimateBody',props)
    return <AnimTableBody {...props} />
  }

  const CommonBody = (props) => {
    return <tbody {...props} />
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
