import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    userAdded : false ,
    user : {}
}

const userSlice = createSlice({
    name : 'user',
    initialState, 
    reducers : {
        addedUser : (state, action) => {
            // console.log('Payload : ', action.payload);
            state.userAdded = action.payload ;
        }
    }
})


export const {addedUser} = userSlice.actions ; 
export default userSlice.reducer ; 