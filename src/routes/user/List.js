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
    if (e.key === '1') {
      onEditItem(record)
    } else if (e.key === '2') {
      confirm({
        title: '确定要删除该用户吗?',
        onOk () {
          onDeleteItem(record.usr_id)
        },
      })
    }
  }

  const columns = [
    {
      title: '用户头像',
      dataIndex: 'tit_url',
      key: 'tit_url',
      width: 64,
      className: styles.avatar,
      render: text => <img alt="avatar" width={24} src={text} />,
    }, {
      title: '会员账号',
      dataIndex: 'thd_id',
      key: 'thd_id',
      // render: (text, record) => <Link to={`user/detail?usr_id=${record.usr_id}`}>{text}</Link>,
    }, {
      title: '用户名',
      dataIndex: 'usr_nme',
      key: 'usr_nme',
    },  {
      title: '手机号码',
      dataIndex: 'pho_no',
      key: 'pho_no',
    }, {
      title: '操作',
      key: 'operation',
      width: 100,
      render: (text, record) => {
        return <DropOption onMenuClick={e => handleMenuClick(record, e)} menuOptions={[{ key: '1', name: '查看' }, { key: '2', name: '删除' }]} />
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
