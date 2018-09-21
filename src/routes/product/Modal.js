import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, InputNumber, Radio, Modal, Upload,Cascader,Button,Icon,message } from 'antd'
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
  def_url,
  item = {},
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
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
        pro_id: item.pro_id,
        def_url:def_url,
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
  action: `${config.api.productDefFileUpload}`,
  headers: {
    // authorization: 'authorization-text',
    // 'Content-Type':'multipart/form-data;',
  },
  data:{pro_id:item.pro_id||''},
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
      currentItem.def_url = repData.filePath
      dispatch({
        type: `product/updateData`,
        payload: {currentItem:currentItem,def_url:repData.filePath},
      })
    } else if (info.file.status === 'error') {
      message.error(`图片上传失败`);
    }
  },
}

  return (
    <Modal {...modalOpts}>
      <Form layout="horizontal">
        <FormItem label="商品名称" hasFeedback {...formItemLayout}>
          {getFieldDecorator('pro_nme', {
            initialValue: item.pro_nme,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input placeholder="商品名称，如：新教育產品" />)}
        </FormItem>
        <FormItem label="商品类型" hasFeedback {...formItemLayout}>
          {getFieldDecorator('pro_typ', {
            initialValue: item.pro_typ,
            rules: [
              {
                required: true,
              },
            ],
          })(<Radio.Group>
            <Radio value='新旅游'>新旅游</Radio>
            <Radio value='新教育'>新教育</Radio>
            <Radio value='新健康'>新健康</Radio>
          </Radio.Group>)}
        </FormItem>
        <FormItem label="价格类型" hasFeedback {...formItemLayout}>
          {getFieldDecorator('amt_typ', {
            initialValue: item.amt_typ,
            rules: [
              {
                required: true,
              },
            ],
          })(<Radio.Group>
            <Radio value='1990'>1990元</Radio>
            <Radio value='800'>800元</Radio>
          </Radio.Group>)}
        </FormItem>
        <FormItem label="商品价格" hasFeedback {...formItemLayout}>
          {getFieldDecorator('pro_amt', {
            initialValue: item.pro_amt,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input placeholder="商品价格，如：32"/>)}
        </FormItem>
        <FormItem label="分类标签1" hasFeedback {...formItemLayout}>
          {getFieldDecorator('frt_typ_lab', {
            initialValue: item.frt_typ_lab,
          })(<Input placeholder="如：收藏品"/>)}
        </FormItem>
        <FormItem label="分类标签2" hasFeedback {...formItemLayout}>
          {getFieldDecorator('snd_typ_lab', {
            initialValue: item.snd_typ_lab,
          })(<Input placeholder="如：沉香"/>)}
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
        <FormItem label="默认图片" hasFeedback {...formItemLayout}>
          <Upload {...fileUpoadProps}>
          <Button>
            <Icon type="upload" /> 上传图片
          </Button>
        </Upload>
        </FormItem>
        <img src={item.def_url?item.def_url:def_url} className={styles.modalImg}/>
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
