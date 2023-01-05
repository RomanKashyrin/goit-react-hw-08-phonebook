import { createSlice } from '@reduxjs/toolkit';
// import persistReducer from 'redux-persist/es/persistReducer';
// import storage from 'redux-persist/lib/storage';
import { logOut } from 'redux/auth/operations';
import { fetchContacts, addContacts, deleteContact } from './operations';

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

export const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: {
       //fetch
        [fetchContacts.pending]: handlePending,
        [addContacts.pending]: handlePending,
        [deleteContact.pending]: handlePending,
        [fetchContacts.rejected]: handleRejected,
        [addContacts.rejected]: handleRejected,
        [addContacts.rejected]: handleRejected,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },

        //add
        [addContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },

        //delete
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                task => task.id === action.payload.id
            );
            state.items.splice(index, 1);
        },

        // logout 
        [logOut.fulfilled](state) {
            state.items = [];
            state.error = null;
            state.isLoading = false;
        },
    }
});

// const persistConfig = {
//     key: 'contacts',
//     storage,
// };

export const contactsReducer = contactSlice.reducer;