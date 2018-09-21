import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, InputNumber, Radio, Modal, Cascader,Button,Upload,Icon,message } from 'antd'
import { config } from 'utils'
import styles from './Modal.less'

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
  item = {},
  onOk,
  onCancel,
  dispatch,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
  },
  ...modalProps
}) => {
  const handleOk = () => {
    validateFields((errors) => {
      if (errors) {
        return
      }
      let val = getFieldsValue()
      const data = {        
        ord_id: item.ord_id,
        state:val.state
      }
      onOk(data)
    })
  }

  const modalOpts = {
    ...modalProps,
    onOk: handleOk,
    onCancel:onCancel,
    footer:[
      <Button key="back" type="ghost" size="large" onClick={onCancel}>取 消</Button>,
      <Button key="submit" type="primary" size="large" onClick={handleOk}>確 定</Button>
      ]
  }


  return (
    <Modal {...modalOpts}>
      <Form layout="horizontal">
        <FormItem label="订单状态" {...formItemLayout}>
          {getFieldDecorator('state', {
            initialValue: item.state,
            rules: [
              {
                required: true,
              },
            ],
          })(<Radio.Group>
            <Radio value='A'>作废</Radio><br/>
            <Radio value='S'>支付成功，待发货</Radio><br/>
            <Radio value='T'>已发货</Radio><br/>
            <Radio value='E'>已签收</Radio><br/>
          </Radio.Group>)}
        </FormItem>      
      </Form>
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
