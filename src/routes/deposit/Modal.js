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
      console.log('val',val)
      const data = {
        dep_id: item.dep_id,
        state:val.state,
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
        <FormItem label="用户头像" {...formItemLayout}>
        <img src={item.tit_url} className={styles.img}/>
        </FormItem>
        <FormItem label="会员账号" hasFeedback {...formItemLayout}>
          {getFieldDecorator('thd_id', {
            initialValue: item.thd_id,
          })(<Input disabled={true} maxLength='20'/>)}
        </FormItem>
        <FormItem label="会员名称" hasFeedback {...formItemLayout}>
          {getFieldDecorator('usr_nme', {
            initialValue: item.usr_nme,
          })(<Input disabled={true} maxLength='20'/>)}
        </FormItem>
        <FormItem label="手机号码"  {...formItemLayout}>
          {getFieldDecorator('pho_no', {
            initialValue: item.pho_no,
          })(<Input disabled={true} maxLength='15'/>)}
        </FormItem>  
        <FormItem label="提现金额"  {...formItemLayout}>
          {getFieldDecorator('amt', {
            initialValue: item.amt,
          })(<Input disabled={true} maxLength='15'/>)}
        </FormItem> 
        <FormItem label="提现账号"  {...formItemLayout}>
          {getFieldDecorator('acunt', {
            initialValue: item.acunt,
          })(<Input disabled={true} maxLength='15'/>)}
        </FormItem>  
        <FormItem label="提现类型"  {...formItemLayout}>
          {getFieldDecorator('dep_typ', {
            initialValue: item.dep_typ,
          })(<Input disabled={true} maxLength='15'/>)}
        </FormItem>   
        <FormItem label="状态" hasFeedback {...formItemLayout}>
          {getFieldDecorator('state', {
            rules: [
              {
                required: true,
              },
            ],
          })(<Radio.Group>
            <Radio value='3'>驳回</Radio>
            <Radio value='2'>通过</Radio>
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
