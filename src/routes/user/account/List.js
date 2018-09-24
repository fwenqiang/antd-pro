import React from 'react'
import PropTypes from 'prop-types'
import { Table, Modal } from 'antd'
import classnames from 'classnames'
import { DropOption } from 'components'
import { Link } from 'react-router-dom'
import queryString from 'query-string'
import AnimTableBody from 'components/DataTable/AnimTableBody'
import styles from './List.less'

const List = ({
                location, ...tableProps
              }) => {
  location.query = queryString.parse(location.search)

  const columns = [{
    title: '手机号码',
    dataIndex: 'pho_no',
    key: 'pho_no',
  }, {
    title: '拥有账户数',
    dataIndex: 'total_account',
    key: 'total_account',
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
      //rowKey={record => record.pho_no}
      components={{
        body: { wrapper: AnimateBody },
      }}
    />
  )
}

List.propTypes = {
  location: PropTypes.object,
}

export default List
