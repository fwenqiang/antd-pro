import React from 'react'
import PropTypes from 'prop-types'
import { FilterItem } from 'components'
import { Form, Button, Row, Col, DatePicker, Input, Cascader, Switch } from 'antd'
import { config } from 'utils'

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
    fields = handleFields(fields)
    onFilterChange(fields)
  }
  const { ord_id, usr_nme,pro_nme } = filter

  return (
    <Row gutter={24}>
      <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }}>
        {getFieldDecorator('ord_id', { initialValue: ord_id })(<Input placeholder="订单编号"  maxLength='20'/>)}
      </Col>
      <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }} id="usr_nme">
        {getFieldDecorator('usr_nme', { initialValue: usr_nme })(<Input placeholder="用户名称" maxLength='20'/>)}
      </Col>
      <Col {...ColProps} xl={{ span: 6 }} md={{ span: 8 }} sm={{ span: 12 }} id="pro_nme">
        <FilterItem >
          {getFieldDecorator('pro_nme', { initialValue: pro_nme })(<Input placeholder="商品名称" maxLength='20'/>)}
        </FilterItem>
      </Col>
      <Col {...TwoColProps} xl={{ span: 10 }} md={{ span: 24 }} sm={{ span: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div>
            <Button type="primary" className="margin-right" onClick={handleSubmit}>查询</Button>
            <Button onClick={handleReset}>重置</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href={config.api.downloadOrderList} class="ant-btn _2mnot ant-btn-ghost" target="_blank">导出订单列表</a>
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
