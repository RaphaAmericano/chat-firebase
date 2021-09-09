export function setContactChat(uid){
    return {
        type: 'SET_CONTACT_CHAT_UID',
        payload: uid
    }
}
export function setContactUID(uid){
    return {
        type: 'SET_CONTACT_UID',
        payload: uid
    }
}
export function getContactUID(){
    return {
        type: 'GET_CONTACT_UID',
    }
}