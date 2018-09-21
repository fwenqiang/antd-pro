import React from 'react'
import PropTypes from 'prop-types'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import { Row, Col, Button, Popconfirm } from 'antd'
import { Page } from 'components'
import queryString from 'query-string'
import List from './List'
// import Filter from './Filter'
import Modal from './Modal'


const Invoice = ({
  location, dispatch, invoice, loading,
}) => {
  location.query = queryString.parse(location.search)
  const { query, pathname } = location
  const {
    list, pagination, currentItem, modalVisible, modalType, isMotion, selectedRowKeys,
  } = invoice

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
    confirmLoading: loading.effects['invoice/update'],
    title:  '订单编辑',
    wrapClassName: 'vertical-center-modal',
    onOk (data) {
      dispatch({
        type: `invoice/updateInvoiceState`,
        payload: data,
      })
        .then(() => {
          handleRefresh()
        })
    },
    onCancel () {
      dispatch({
        type: 'invoice/hideModal',
      })
    },
  }

  const listProps = {
    dataSource: list,
    loading: loading.effects['invoice/query'],
    pagination,
    location,
    isMotion,
    onChange (page) {
      handleRefresh({
        page: page.current,
        pageSize: page.pageSize,
      })
    },
    onDeleteItem (ord_id) {
      dispatch({
        type: 'invoice/delete',
        payload: {ord_id:ord_id},
      })
        /*.then(() => {
          handleRefresh({
            page: (list.length === 1 && pagination.current > 1) ? pagination.current - 1 : pagination.current,
          })
        })*/
    },
    onEditItem (item) {
      dispatch({
        type: 'invoice/showModal',
        payload: {
          currentItem:item,
        },
      })
    },
  }


  const handleDeleteItems = () => {
    dispatch({
      type: 'invoice/multiDelete',
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
      {/* <Filter {...filterProps} /> */}
      <List {...listProps} />
      {modalVisible && <Modal {...modalProps} />}
    </Page>
  )
}

Invoice.propTypes = {
  invoice: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default connect(({ invoice, loading }) => ({ invoice, loading }))(Invoice)
