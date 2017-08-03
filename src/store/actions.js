export const TEST_ME_REQUESTED = 'TEST_ME_REQUESTED';
export const GET_MYNAME='GET_MYNAME';
export const GET_POST='GET_POST';
export const SET_USER='SET_USER';



export const testme = () => dispatch => {
    dispatch({
        type: TEST_ME_REQUESTED,
        payload: {id: '>>> thi is payload data from action.. going to reducer <<<' }
    });
}




