import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, InputNumber, Radio, Modal, Upload,Cascader,Button,Icon,message } from 'antd'
import styles from './Modal.less'
import { config } from 'utils'
import PicturesWall from './PicturesWall'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}



const modal = ({
  dispatch,
  item = {},
  fileList = [],
  imgListKey,
  onOk,
  onCancel,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
  },
  ...modalProps
}) => {
  console.log('item')
  const handleOk = () => {
      onOk()
  }

  const modalOpts = {
    ...modalProps,
    onOk: handleOk,
    onCancel:onCancel,
    wrapClassName: 'web',
    width: '800px',
    footer:[
      <Button key="back" type="ghost" size="large" onClick={onCancel}>取 消</Button>,
      <Button key="submit" type="primary" size="large" onClick={handleOk}>確 定</Button>
      ]
  }
  

const PicturesWallProps = {
  fileList : fileList/*[{
  uid: '2343423',
  name: 'xxx.png',
  status: 'done',
  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
 },]*/,
 item:item,
 imgListKey,
}

  return (
    <Modal {...modalOpts} className='web'>
    <div className={styles.modelDiv}>
    <PicturesWall {...PicturesWallProps} />
     </div>
    </Modal>
  )
}

modal.propTypes = {
  form: PropTypes.object.isRequired,
  type: PropTypes.string,
  item: PropTypes.object,
  onOk: PropTypes.func,
}

export default Form.create()(modal)
