import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import styles from './index.less'
import { Page } from 'components'
import { routerRedux } from 'dva/router'
import { Tabs,Form, Input, InputNumber, Radio, Cascader, Button, Upload, Icon, message } from 'antd'
import { config } from 'utils'
import Modal from './Modal'
// const { confirm } = Modal
const TabPane = Tabs.TabPane


const Version = ({
  version,
  dispatch,
  loading,
}) => {

  
  const modalProps = {
    dispatch:dispatch,
    maskClosable: false,
    confirmLoading: loading.effects['product/update'],
    wrapClassName: 'vertical-center-modal',
    onOk (data) {
      console.log('updateVersion',data)
      dispatch({
        type: `version/updateVersion`,
        payload: data,
      })
    },
  }

  const apple={
    title:'IPA',
    accept:'.ipa',
    version:version.iosVersion,
  }

  const android ={
    title:'APK',
    accept:'.apk',
    version:version.androidVersion,
  }
  

  return (
    <Page inner>
      <Tabs defaultActiveKey="1">
    <TabPane tab={<span><Icon type="apple" />苹果版本</span>} key="1">
    <Modal {...modalProps} {...apple}/>
    </TabPane>
    <TabPane tab={<span><Icon type="android" />安卓版本</span>} key="2">
    <Modal {...modalProps} {...android} />
    </TabPane>
     </Tabs>
    </Page>
  )
}

Version.propTypes = {
  version: PropTypes.object,
}

export default connect(({ version, loading }) => ({ version, loading}))(Version)
