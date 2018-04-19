import Type from '../Enum.js'
const profileData = {id:1, name: "Nguyễn Tuấn Điền", email: "djenbmt96@gmail.com", date: "1996-03-20", gender: 0, picture:'' };
;
const profileReducers = (state = profileData, action) => {
    switch (action.type) {
        case Type.EDIT:
            return {
                name: action.profile.name,
                email: action.profile.email,
                date: action.profile.date,
                gender: action.profile.gender,
                picture: action.profile.picture,
            }

        default:
            return state
    }
}
export default profileReducers