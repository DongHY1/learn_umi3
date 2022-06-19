import React,{useEffect} from 'react'
import { Button, Modal, Form,Input } from 'antd';
export default function UserModal(props) {
    const [form] = Form.useForm()
    useEffect(()=>{
        form.setFieldsValue(props.record)
    },[props.visible])
    const onOk = ()=>{
        form.submit()
    }
  return (
    <Modal title="Basic Modal" visible={props.visible} onOk={onOk} onCancel={props.handleCancelClick} forceRender>
    <Form
      name='basic'
      form = {form}
      onFinish={props.onFinish}
    >
      <Form.Item
        label="Name"
        name="name"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Create_time"
        name="create_time"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Status"
        name="status"
      >
        <Input />
      </Form.Item>
      </Form>
    </Modal>
  )
}
