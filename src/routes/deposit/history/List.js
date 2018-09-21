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
  const getDepTyp = (depTyp)=>{
    switch(depTyp){
      case '1':return '微信';
      case '2':return '支付宝';
      case '3':return '银行卡';
      default:return '';
    }
  }
  const handleOkClick = (record, e) => {
    confirm({
      title: '确定要通过该提现吗?',
      onOk () {
        onEditItem(record)
      },
    })
    //onEditItem(record)
  }

  const handleCannelClick = (record, e) => {
    confirm({
      title: '确定要驳回该提现吗?',
      onOk () {
        onEditItem(record)
      },
    })
    //onEditItem(record)
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
      render: (text, record) => <Link to={`user/detail?usr_id=${record.usr_id}`}>{text}</Link>,
    }, {
      title: '用户名',
      dataIndex: 'name',
      key: 'name',
    },  {
      title: '手机号码',
      dataIndex: 'pho_no',
      key: 'pho_no',
    }, {
      title: '提现金额(元)',
      dataIndex: 'amt',
      key: 'amt',
    },{
      title: '手续费&个税(元)',
      dataIndex: 'tar_amt',
      key: 'tar_amt',
    }, {
      title: '提现类型',
      dataIndex: 'dep_typ',
      key: 'dep_typ',
      render :text => (<span>{getDepTyp(text)}</span>)
    }, {
      title: '提现账号',
      dataIndex: 'acunt',
      key: 'acunt',
    },{
      title: '账号用户名',
      dataIndex: 'usr_nme',
      key: 'usr_nme',
    }, {
      title: '银行类型',
      dataIndex: 'bak_typ',
      key: 'bak_typ',
    }, {
      title: '开户分行',
      dataIndex: 'bak_nme',
      key: 'bak_nme',
    },
    {
      title: '时间',
      dataIndex: 'upd_tme',
      key: 'upd_tme',
    },
    {
      title: '状态',
      dataIndex: 'state',
      key: 'state',
      render :text => (<span>{text=='2'
        ? '通过'
        : '驳回'}</span>)
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
      rowKey={record => record.dec_id}
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
