/* global document */
import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { FilterItem } from 'components'
import { Form, Button, Row, Col, DatePicker, Input, Cascader, Switch,Select } from 'antd'
import city from '../../utils/city'

const { Search } = Input
const { RangePicker } = DatePicker

const ColProps = {
  xs: 24,
  sm: 12,
  style: {
    marginBottom: 16,
  },
}

const TwoColProps = {
  ...ColProps,
  xl: 96,
}

const Filter = ({
  onAdd,
  // isMotion,
  // switchIsMotion,
  onFilterChange,
  filter,
  form: {
    getFieldDecorator,
    getFieldsValue,
    setFieldsValue,
  },
}) => {

  const handleSubmit = () => {
    let fields = getFieldsValue()
    onFilterChange(fields)
  }

  const handleReset = () => {
    const fields = getFieldsValue()
    for (let item in fields) {
      if ({}.hasOwnProperty.call(fields, item)) {
        if (fields[item] instanceof Array) {
          fields[item] = []
        } else {
          fields[item] = undefined
        }
      }
    }
    setFieldsValue(fields)
    handleSubmit()
  }

  const handleChange = (key, values) => {
    let fields = getFieldsValue()
    fields[key] = values
    onFilterChange(fields)
  }
  const { title, address } = filter
    
  const selectItems = [{
      key:'',
      name:'全部类型'
  },{
      key:'01',
      name:'内部'
  },{
      key:'02',
      name:'商业'
  }]

  return (
    <Row gutter={24}>
      <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }}>
        {getFieldDecorator('title', { initialValue: title })(<Search placeholder="广告标题" onSearch={handleSubmit} />)}
      </Col>
      <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }} id="bor_typ">
        {getFieldDecorator('bor_typ', { initialValue: '' })(<Select 
                  style={{
                    width: '100%',
                    flex: 1,
                  }}
                  //defaultValue={}
                  size="large"
                  //onChange={this.handleChange}
                >
                  {selectItems.map((item, index) => {
                    return (<Select.Option key={index} value={`${item.key}`}>
                      {item.name}
                    </Select.Option>)
                  })}
                </Select>)}
      </Col>
      
      <Col {...TwoColProps} xl={{ span: 4 }} md={{ span: 8 }} sm={{ span: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div>
            <Button type="primary" className="margin-right" onClick={handleSubmit}>查询</Button>
           {false&&<Button onClick={handleReset}>重置</Button>}
          </div>
          <div className="flex-vertical-right">
            <Button type="ghost" onClick={onAdd}>添加</Button>
          </div>
        </div>
      </Col>
    </Row>
  )
}

Filter.propTypes = {
  onAdd: PropTypes.func,
  form: PropTypes.object,
  filter: PropTypes.object,
  onFilterChange: PropTypes.func,
}

export default Form.create()(Filter)
