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
import ImgListModal from './ImgListModal'



const Product = ({
  location, dispatch, product, loading,
}) => {
  location.query = queryString.parse(location.search)
  const { query, pathname } = location
  const {
    list, pagination, currentItem,def_url, modalVisible, modalType,imgListKey,imgListModalVisible,fileList
  } = product

  console.log('currentItem',currentItem)
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
    dispatch:dispatch,
    def_url:def_url,
    item: modalType === 'create' ? {} : currentItem,
    visible: modalVisible,
    maskClosable: false,
    confirmLoading: loading.effects['product/update'],
    title: `${modalType === 'create' ? '添加商品' : '商品详情'}`,
    wrapClassName: 'vertical-center-modal',
    onOk (data) {
      dispatch({
        type: `product/${modalType}`,
        payload: data,
      })
        .then(() => {
          handleRefresh()
        })
    },
    onCancel () {
      dispatch({
        type: 'product/hideModal',
      })
    },
  }

  const imgListModalProps = {
    fileList,
    imgListKey:imgListKey,
    dispatch:dispatch,
    item: currentItem,
    visible: imgListModalVisible,
    maskClosable: false,
    confirmLoading: loading.effects['product/update'],
    title: `${imgListKey === '2' ? '轮播图片列表' : '详情图片列表'}`,
    onOk (data) {
      dispatch({
        type: 'product/updateData',
        payload: {
          imgListModalVisible: false,
        },
      })
    },
    onCancel () {
      dispatch({
        type: 'product/updateData',
        payload: {
          imgListModalVisible: false,
        },
      })
    },
  }

  console.log('list',list)
  const listProps = {
    dataSource: list,
    loading: loading.effects['product/query'],
    pagination,
    location,
    // isMotion,
    onChange (page) {
      handleRefresh({
        page: page.current,
        pageSize: page.pageSize,
      })
    },
    onDeleteItem (id) {
      console.log('onDeleteItem',id)
      dispatch({
        type: 'product/delete',
        payload: id,
      })
        .then(() => {
          handleRefresh({
            page: (list.length === 1 && pagination.current > 1) ? pagination.current - 1 : pagination.current,
          })
        })
    },
    onEditItem (item) {
      dispatch({
        type: 'product/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
        },
      })
    },

    onEditImgList (item,key) {
      dispatch({
        type: 'product/queryImgList',
        payload: {
          imgListModalVisible: true,
          imgListKey:key,
          currentItem: item,
        },
      })
    },
  }

  const filterProps = {
    filter: {
      ...query,
    },
    onFilterChange (value) {
      console.log()
      handleRefresh({
        ...value,
        page: 1,
      })
    },
    onAdd () {
      dispatch({
        type: 'product/showModal',
        payload: {
          modalType: 'create',
        },
      })
    },
  }


  return (
    <Page inner>
      <Filter {...filterProps} />
      <List {...listProps} />
      {modalVisible && <Modal {...modalProps} />}
      {imgListModalVisible && <ImgListModal {...imgListModalProps} />}
      
    </Page>
  )
}

Product.propTypes = {
  product: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default connect(({ product, loading }) => ({ product, loading }))(Product)
