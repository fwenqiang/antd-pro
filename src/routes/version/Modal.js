import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, InputNumber, Radio, Modal, Cascader,Button,Upload,Icon,message } from 'antd'
import { config } from 'utils'
import styles from './Modal.less'
import { Page } from 'components'

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
  title,
  accept,
  version,
  onOk,
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
      const app_typ = title=='APK'?'android':'ios'
      const data = {
        ...getFieldsValue(),
        app_typ:app_typ
      }
      onOk(data)
    })
  }

  console.log(`${config.api.uploadAPK}`)
  const fileUpoadProps = {
    name: 'file',
    action: `${config.api.uploadAPK}`,
    headers: {
    },
    accept:accept,
    data:{version:title},
    onChange(info) {
      if (info.file.status !== 'uploading') {        
      }
      if (info.file.status === 'done') {
        message.success(`版本上传成功`);
      } else if (info.file.status === 'error') {
        message.error(`版本上传失败`);
      
    }
    },
  }



  return (
    <Page inner>
      <Form layout="horizontal">
        
        <FormItem label={title} hasFeedback {...formItemLayout}>
        <Upload {...fileUpoadProps}>
          <Button>
            <Icon type="upload" /> 选择文件
          </Button>
        </Upload>
        </FormItem>  
        <FormItem label="版本号" hasFeedback {...formItemLayout}>
          {getFieldDecorator('version', {
            initialValue: version,
          })(<Input maxLength='20'/>)}
        </FormItem>   
      </Form>
      <div className={styles.center}>
      <Button key="submit" type="primary" size="large" onClick={handleOk}>確 定</Button>
      </div>
      </Page>
  )
}

modal.propTypes = {
  form: PropTypes.object.isRequired,
  type: PropTypes.string,
  onOk: PropTypes.func,
}

export default Form.create()(modal)
