const initialState = {
    contactuid:'',
    activechatuid: ''
};

export default function(state = initialState, action){
    switch(action.type){
        case 'SET_CONTACT_CHAT_UID':
            return {...state, activechatuid: action.payload};
        case 'SET_CONTACT_UID':
            return {...state, contactuid: action.payload};
        default:
            return state;
    }
}