import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import styles from './index.less'
import { Page } from 'components'
import { routerRedux } from 'dva/router'
import { Form, Input, InputNumber, Radio, Modal, Cascader, Button, Upload, Icon, message } from 'antd'
import { config } from 'utils'
const { confirm } = Modal



const ImportOrder = ({
  item = {},
  order,
  dispatch,
  loading,
}) => {

  const deleteAll = ()=>{
    confirm({
      title: '确定要删除所有数据吗?',
      onOk () {
        dispatch({
          type: 'order/deleteAllUser'
        })
          .then(() => {
            deleteAllOrder()
          })
      },
    })
  }

  const deleteAllOrder = () => {
    dispatch({
      type: 'order/deleteAllOrder'
    })
  }

  const importUser = () => {
    dispatch({
      type: 'order/importUser',
      payload: {fileName:order.fileName},
    })
  }

  const importOrder = () => {
    dispatch({
      type: 'order/importOrder',
      payload: {fileName:order.fileName},
    })
  }

  const fileUpoadProps = {
    name: 'file',
    action: `${config.api.uploadUserList}`,
    headers: {
    },
    data: { usr_id: item.usr_id || '' },
    onChange(info) {
      if (info.file.status !== 'uploading') {
      }
      if (info.file.status === 'done') {
        message.success(`名单上传成功`);
        let repData = info.file.response.RSP_BODY
        console.log('done', repData)
        dispatch({
          type: 'order/saveFileName',
          payload: {fileName:repData.fileName},
        })
      } else if (info.file.status === 'error') {
        message.error(`名单上传失败`);

      }
    },
  }

  return (
    <Page inner>
      <div className="flex-vertical-center">
        <Button type="danger" onClick={deleteAll}>清除所有用户数据！</Button>
      </div>
      <div className={styles.mydiv}>
      {order.deleteAllUser&&<div>清除用户成功</div>}
      {order.deleteAllOrder&&<div>清除订单成功</div>}
      </div>
      <Upload {...fileUpoadProps}>
        <Button type="primary">
          <Icon type="upload" /> 上传名单
          </Button>
      </Upload>
      <div className={styles.mydiv}></div>

      <div className="flex-vertical-center">
        <Button type="primary" onClick={importUser} loading={loading.effects['order/importUser']}>开始导入用户</Button>
      </div>
      <div className="flex-vertical-center">
        错误信息:{order.user}
      </div>

      <div className="flex-vertical-center">
        <a href={config.api.downloadUserList}>下载用户数据</a>
      </div>
    </Page>
  )
}

ImportOrder.propTypes = {
  order: PropTypes.object,
}

export default connect(({ order, loading }) => ({ order, loading}))(ImportOrder)
