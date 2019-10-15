import {GET_USER} from '../../common/Constants'

const INITIAL_STATE = {
    loading: false,
    loaded: false,
    data: []
};

function filterData(data) {
    return data ? data.data.getCustomReportData : [];
}

export default (state = INITIAL_STATE, action) => {
    console.log('reducer',action)
    switch (action.type) {
        case `${GET_USER}_REQUEST`:
            return { ...state, loading: true };

        case GET_USER:
            if (action.payload.status === 'FAIL') {
                throw new Error(action.payload.message);
            }
            console.log('reducer',action.payload.users[0].firstname)

            return {
                ...state,
                loading: false,
                loaded: true,
                data: action.payload.users
            };
        case `${GET_USER}_FAILURE`:
            return { ...state, loaded: true,loading: false };

        default:
            return state;
    }
};
