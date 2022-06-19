import { request } from 'umi';
import {message} from 'antd'
export async function getUserListService(params) {
  return request('https://public-api-v1.aspirantzhang.com/users', {
    method: 'get',
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.error(err);
    });
}
// 更新
export async function editRecord({ id, values }) {
  return request(`https://public-api-v1.aspirantzhang.com/users/${id}`, {
    method: 'put',
    data: values,
  })
    .then((res) => {
      message.success('修改成功')
    })
    .catch((err) => {
      console.error(err);
    });
}
