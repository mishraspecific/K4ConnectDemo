import Axios from 'axios';
import {BASE_URL,GET_USER} from '../../common/Constants'
export default getUsers = () => {
    console.log('action called')
    return {
      type: GET_USER,
      promise: client =>
        client.get(
          `${BASE_URL}getUsers`
        )
    }
  }