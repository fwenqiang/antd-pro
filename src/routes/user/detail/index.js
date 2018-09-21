import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import styles from './index.less'
import { Page } from 'components'
import { routerRedux } from 'dva/router'
import { Form, Input, InputNumber, Radio, Modal, Cascader,Button,Upload,Icon,message } from 'antd'
import Base from './Base'
import Order from './Order'



const Detail = ({ 
  item = {},
  user,
  dispatch,
}) => {
  const baseProps = {
    item
  }
  
  const  handleSubmit=()=>{
    dispatch(routerRedux.push({
      pathname:'/user',
    }))
  }

  return (
    <Page inner>
      <Base {...baseProps}/>
      <Order />
      <Button type="primary" className={styles.btn} onClick={handleSubmit}>返回</Button>
    </Page>
  )
}

Detail.propTypes = {
  user: PropTypes.object,
}

export default connect(({ user, loading }) => ({ user, loading: loading.models.user }))(Detail)
