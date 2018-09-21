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
      const data = {
        ...getFieldsValue(),
        usr_id: item.usr_id,
        tit_url:item.tit_url,
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

  const fileUpoadProps = {
    name: 'file',
    action: `${config.api.uploadUserUrl}`,
    headers: {
    },
    data:{usr_id:item.usr_id||''},
    onChange(info) {
      if (info.file.status !== 'uploading') {        
      }
      if (info.file.status === 'done') {
        message.success(`图片上传成功`);
        let repData = info.file.response.RSP_BODY
        console.log('done',repData)
        let currentItem = item
        currentItem.tit_url = repData.filePath
        if(item.usr_id == undefined){
          console.log('this is undefined',currentItem)
          dispatch({
            type: `user/updateData`,
            payload: {currentItem:currentItem},
          })
        }else{
        dispatch({
          type: `user/queryUserDetail`,
          payload: {usr_id:item.usr_id},
        })
      }
      } else if (info.file.status === 'error') {
        message.error(`图片上传失败`);
      
    }
    },
  }

  return (
    <Modal {...modalOpts}>
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
        <FormItem label="上传头像" hasFeedback {...formItemLayout}>
        <Upload {...fileUpoadProps}>
          <Button>
            <Icon type="upload" /> 选择图片
          </Button>
        </Upload>
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
