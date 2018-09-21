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
        inv_id: item.inv_id,
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
       <FormItem label="发票编号"  {...formItemLayout}>
          {getFieldDecorator('inv_id', {
            initialValue: item.inv_id,
          })(<Input disabled/>)}
        </FormItem>
        <FormItem label="订单编号"  {...formItemLayout}>
          {getFieldDecorator('ord_id', {
            initialValue: item.ord_id,
          })(<Input disabled/>)}
        </FormItem>
        <FormItem label="商品名称" {...formItemLayout}>
          {getFieldDecorator('pro_nme', {
            initialValue: item.pro_nme,
          })(<Input disabled/>)}
        </FormItem>
        <FormItem label="发票类型"  {...formItemLayout}>
          {getFieldDecorator('inv_typ', {
            initialValue: item.inv_typ=='2'?'2':'1',
          })(<Radio.Group>
            <Radio value='1'>个人</Radio>
            <Radio value='2'>单位</Radio>
          </Radio.Group>)}
        </FormItem>
        <FormItem label="发票抬头"  {...formItemLayout}>
          {getFieldDecorator('inv_tit', {
            initialValue: item.inv_tit,
          })(<Input disabled/>)}
        </FormItem>
        <FormItem label="纳税人识别码"  {...formItemLayout}>
          {getFieldDecorator('per_no', {
            initialValue: item.per_no,
          })(<Input disabled/>)}
        </FormItem>
        <FormItem label="发票金额"  {...formItemLayout}>
          {getFieldDecorator('amt', {
            initialValue: item.amt,
          })(<Input disabled/>)}
        </FormItem>
        <FormItem label="发票内容"  {...formItemLayout}>
          {getFieldDecorator('inv_det', {
            initialValue: item.inv_det,
          })(<Input disabled/>)}
        </FormItem>
        <FormItem label="联系电话"  {...formItemLayout}>
          {getFieldDecorator('rec_pho', {
            initialValue: item.rec_pho,
          })(<Input disabled/>)}
        </FormItem>
        <FormItem label="收货邮件"  {...formItemLayout}>
          {getFieldDecorator('rec_eml', {
            initialValue: item.rec_eml,
          })(<Input disabled/>)}
        </FormItem>
        <FormItem label="创建日期"  {...formItemLayout}>
          {getFieldDecorator('crt_tm', {
            initialValue: item.crt_tm,
          })(<Input disabled/>)}
        </FormItem>
        <FormItem label="发票状态"  {...formItemLayout}>
          {getFieldDecorator('state', {
            initialValue: item.state=='2'?'2':'1',
            rules: [
              {
                required: true,
              },
            ],
          })(<Radio.Group>
            <Radio value='1'>未开</Radio>
            <Radio value='2'>已开</Radio>
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
