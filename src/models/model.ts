import { Effect, Reducer, Subscription } from 'umi';
import {getUserListService,editRecord} from '../services/service'
interface UserModelType{
    namespace:'users';
    state:{};
    effects:{
        fetchUserList:Effect,
        edit:Effect
    };
    reducers:{
        getUserList:Reducer
    };
    subscriptions:{
        setup:Subscription
    }
}
const UserModel: UserModelType = {
  namespace: 'users',
  state:{},
  reducers: {
    getUserList(state, {payload}) {
        return payload
    },
  },
  effects: {
    *fetchUserList(action,{put,call}){
        const data = yield call(getUserListService)
          yield put({
            type:'getUserList',
            payload:data
          })
    },
    *edit({payload:{id,values}},{put,call}){
      console.log(id,values)
      const data = yield call(editRecord,{id,values}) 
      // 刷新页面
      yield put({
        type:'fetchUserList'
      })
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/users') {
            dispatch({
                type:'fetchUserList'
            })
        }
      });
    },
  },
};
export default UserModel;
