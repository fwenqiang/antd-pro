import React from 'react'
import PropTypes from 'prop-types'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import { Row, Col, Button, Popconfirm } from 'antd'
import { Page } from 'components'
import queryString from 'query-string'
import List from './List'
import Filter from './Filter'
import Modal from './Modal'


const Deposit = ({
  location, dispatch, deposit, loading,
}) => {
  location.query = queryString.parse(location.search)
  const { query, pathname } = location
  const {
    list, pagination, currentItem, modalVisible, modalType, isMotion, selectedRowKeys,
  } = deposit

  const handleRefresh = (newQuery) => {
    dispatch(routerRedux.push({
      pathname,
      search: queryString.stringify({
        ...query,
        ...newQuery,
      }),
    }))
  }

  const modalProps = {
    dispatch,
    item: currentItem,
    visible: modalVisible,
    maskClosable: false,
    confirmLoading: loading.effects['deposit/update'],
    title: `提现审核`,
    wrapClassName: 'vertical-center-modal',
    onOk (data) {
      dispatch({
        type: `deposit/shenhe`,
        payload: data,
      })
        .then(() => {
          handleRefresh()
        })
    },
    onCancel () {
      dispatch({
        type: 'deposit/hideModal',
      })
    },
  }

  const listProps = {
    dataSource: list,
    loading: loading.effects['deposit/query'],
    pagination,
    location,
    isMotion,
    onChange (page) {
      handleRefresh({
        page: page.current,
        pageSize: page.pageSize,
        state:'1',
      })
    },
    onDeleteItem (usr_id) {
      dispatch({
        type: 'deposit/delete',
        payload: {usr_id:usr_id},
      })
    },
    onEditItem (data) {
      dispatch({
        type: `deposit/shenhe`,
        payload: data,
      })
        .then(() => {
          handleRefresh()
        })
    },
  }

  const filterProps = {
    // isMotion,
    filter: {
      ...query,
    },
    onFilterChange (value) {
      handleRefresh({
        ...value,
        page: 1,
        state:'1',
      })
    },
    onAdd () {
      dispatch({
        type: 'deposit/showModal',
        payload: {
          modalType: 'create',
          currentItem:{},
        },
      })
    },
  }

  const handleDeleteItems = () => {
    dispatch({
      type: 'deposit/multiDelete',
      payload: {
        ids: selectedRowKeys,
      },
    })
      .then(() => {
        handleRefresh({
          page: (list.length === selectedRowKeys.length && pagination.current > 1) ? pagination.current - 1 : pagination.current,
        })
      })
  }

  return (
    <Page inner>
      <Filter {...filterProps} />
      <List {...listProps} />
      {modalVisible && <Modal {...modalProps} />}
    </Page>
  )
}

Deposit.propTypes = {
  deposit: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default connect(({ deposit, loading }) => ({ deposit, loading }))(Deposit)
