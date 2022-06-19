import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import React,{useState} from 'react';
import './index.css';
import { connect} from 'umi';
import UserModal from './components/userModal'
interface DataType {
  id: number;
  name: string;
  email: string;
  create_time: string;
}
interface IndexType {
  users:{},//就是model中的state
  dispatch:{}
}
const index: React.FC = ({ users,dispatch }) => {
  const [showModal,setShowModal] = useState(false)
  const [record,setRecord] = useState(undefined)
  const handleEditClick = (record)=>{
    setRecord(record)
    setShowModal(true)
  }
  const handleOKClick = ()=>{
    setShowModal(false)
  }
  const handleCancelClick = ()=>{
    setShowModal(false)
  }
  const onFinish = values => {
    const id = record.id
    dispatch({
      type:'users/edit',
      payload:{
        id,
        values
      }
    })
    setShowModal(false)
  }
  const columns: ColumnsType<DataType> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Create_time',
      key: 'create_time',
      dataIndex: 'create_time',
    },
    {
      title:'Action',
      key:'action',
      render:(text,record)=>(
        <span>
          <a onClick={()=>{handleEditClick(record)}} >Edit</a>&nbsp;&nbsp;&nbsp;
          <a>Delete</a>
        </span>
      )
    }
  ];

  return (
    <div className="list-table">
      <Table columns={columns} dataSource={users.data} rowKey="id"/>
      <UserModal visible={showModal} handleOKClick={handleOKClick} handleCancelClick={handleCancelClick} record={record} onFinish={onFinish}/>
    </div>
  );
};
const getUserList = ({users}) => {
  console.log('users',users)
  return {
    users,
  };
};
export default connect(getUserList)(index);
