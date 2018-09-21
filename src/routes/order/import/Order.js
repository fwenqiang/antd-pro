import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import styles from './index.less'
import { Page } from 'components'
import { routerRedux } from 'dva/router'
import { Form, Input, InputNumber, Radio, Modal, Cascader,Button,Upload,Icon,message,Collapse  } from 'antd'
const Panel = Collapse.Panel;


const FormItem = Form.Item
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}


const Order = ({ 
  item = {},
  form: {
  getFieldDecorator,
  validateFields,
  getFieldsValue,
  },
}) => {
  const callback = (key)=> {
    console.log(key);
  }

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  return (
    <div>
    <Collapse onChange={callback}>
    <Panel header="徒弟1：小明" key="1">
      <Collapse defaultActiveKey="1">
        <Panel header="This is panel nest panel" key="1">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3">
      <p>{text}</p>
    </Panel>
  </Collapse>
  
    </div>
  )
}

Order.propTypes = {
  item: PropTypes.object,
}

export default Form.create()(Order)
