import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, InputNumber, Radio, Modal, Upload,Cascader,Button,Icon,message } from 'antd'
import city from '../../utils/city'
import styles from './Modal.less'
import { config } from 'utils'

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
  bor_url,
  item = {},
  onOk,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
  },
  ...modalProps
}) => {
  console.log('item')
  const handleOk = () => {
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
        bor_id: item.bor_id,
        bor_url:bor_url,
      }
      onOk(data)
    })
  }

  const modalOpts = {
    ...modalProps,
    onOk: handleOk,
  }
  

const fileUpoadProps = {
  name: 'file',
  action: `${config.api.posterFileUpload}`,
  headers: {
    // authorization: 'authorization-text',
    // 'Content-Type':'multipart/form-data;',
  },
  data:{bor_id:item.bor_id||''},
  onChange(info) {
    // console.log('info',info)
    if (info.file.status !== 'uploading') {
      // console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`图片上传成功`);
      let repData = info.file.response.RSP_BODY
      console.log('done',repData)
      let currentItem = item
      currentItem.bor_url = repData.filePath
      dispatch({
        type: `poster/updateData`,
        payload: {currentItem:currentItem,bor_url:repData.filePath},
      })
    } else if (info.file.status === 'error') {
      message.error(`图片上传失败`);
    }
  },
}

  return (
    <Modal {...modalOpts}>
      <Form layout="horizontal">
        <FormItem label="广告标题" hasFeedback {...formItemLayout}>
          {getFieldDecorator('title', {
            initialValue: item.title,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="广告位置" hasFeedback {...formItemLayout}>
          {getFieldDecorator('location', {
            initialValue: item.location,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="广告类型" hasFeedback {...formItemLayout}>
          {getFieldDecorator('bor_typ', {
            initialValue: item.bor_typ,
            rules: [
              {
                required: true,
              },
            ],
          })(<Radio.Group>
            <Radio value='01'>内部</Radio>
            <Radio value='02'>商业</Radio>
          </Radio.Group>)}
        </FormItem>
        <FormItem label="广告内容" hasFeedback {...formItemLayout}>
          {getFieldDecorator('content', {
            initialValue: item.content,        
          })(<Input type="textarea" autosize={{ minRows: 3, maxRows: 6 }}/>)}
        </FormItem>
        <FormItem label="状态" hasFeedback {...formItemLayout}>
          {getFieldDecorator('state', {
            initialValue: item.state,
            rules: [
              {
                required: true,
              },
            ],
          })(<Radio.Group>
            <Radio value='1'>启用</Radio>
            <Radio value='0'>禁用</Radio>
          </Radio.Group>)}
        </FormItem>
        <FormItem label="广告图片" hasFeedback {...formItemLayout}>
          <Upload {...fileUpoadProps}>
          <Button>
            <Icon type="upload" /> 上传图片
          </Button>
        </Upload>
        </FormItem>
        <img src={item.bor_url?item.bor_url:bor_url} className={styles.modalImg}/>
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
