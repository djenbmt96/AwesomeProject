import Type from '../Enum.js'
const profileData = { id: 1, name: "Nguyễn Tuấn Điền", email: "djenbmt96@gmail.com", date: "1996-03-20", gender: 0, picture: '', cover: '', data: [] };

const profileReducers = (state = profileData, action) => {
    switch (action.type) {
        case Type.EDIT:
            return {
                ...state,
                name: action.profile.name,
                email: action.profile.email,
                date: action.profile.date,
                gender: action.profile.gender,
                picture: action.profile.picture,
            }
        case Type.UPDATE_COVER_PHOTO:
            return {
                ...state,
                cover: action.cover,
            }
        case Type.LOGIN:
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}
export default profileReducers