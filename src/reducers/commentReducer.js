import Type from '../Enum.js';
const commentData = [
    {
        idUser:1,
        comment:'i like it',
        time:'3:40 am'
    },
    {
        idUser:1,
        comment:'i dislike it',
        time:'3:59 pm'
    },
    {
        idUser:1,
        comment:'i love it',
        time:'4:50 pm'
    },
    {
        idUser:1,
        comment:'i hate it',
        time:'9:40 pm'
    },
]
const add = (comment) => {
    commentData.push(comment);
}
const comments = (state = commentData, action) => {
    switch(action.type){
        case Type.ADDCOMMENT: 
            add(action.comment)
            return commentData
        
        default:
            return state
    }
}
export default comments