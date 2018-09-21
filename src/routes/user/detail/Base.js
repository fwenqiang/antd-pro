import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import styles from './index.less'
import { Page } from 'components'
import { routerRedux } from 'dva/router'
import { Form, Input, InputNumber, Radio, Modal, Cascader,Button,Upload,Icon,message } from 'antd'
const FormItem = Form.Item
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}


const Detail = ({ 
  item = {},
  form: {
  getFieldDecorator,
  validateFields,
  getFieldsValue,
  },
}) => {

  return (
    <div>
      <Form layout="horizontal">
        <FormItem label="上级推荐账号" hasFeedback {...formItemLayout}>
          {getFieldDecorator('p_thd_id', {
            initialValue: item.p_thd_id,
          })(<Input maxLength='20'/>)}
        </FormItem>
        <FormItem label="推荐账号名称" hasFeedback {...formItemLayout}>
          {getFieldDecorator('p_usr_nme', {
            initialValue: item.p_usr_nme,
          })(<Input disabled={true} placeholder="推荐账号名称" />)}
        </FormItem>
        <FormItem label="用户头像" hasFeedback {...formItemLayout}>
        <img src={item.tit_url} className={styles.img}/>
        </FormItem>
        <FormItem label="会员账号" hasFeedback {...formItemLayout}>
          {getFieldDecorator('thd_id', {
            initialValue: item.thd_id,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input maxLength='20'/>)}
        </FormItem>
        <FormItem label="会员名称" hasFeedback {...formItemLayout}>
          {getFieldDecorator('usr_nme', {
            initialValue: item.usr_nme,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input maxLength='20'/>)}
        </FormItem>
        <FormItem label="手机号码" hasFeedback {...formItemLayout}>
          {getFieldDecorator('pho_no', {
            initialValue: item.pho_no,
            rules: [
              {
                required: true,
                pattern: /^1[0123456789]\d{9}$/,
                message: '请输入有效手机号码!',
              },
            ],
          })(<Input maxLength='15'/>)}
        </FormItem>        
      </Form>
    </div>
  )
}

Detail.propTypes = {
  item: PropTypes.object,
}

//export default connect(({ user, loading }) => ({ user, loading: loading.models.user }))(Detail)
export default Form.create()(Detail)
