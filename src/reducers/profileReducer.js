const profileData = { name: "Nguyễn Tuấn Điền", email: "djenbmt96@gmail.com", date: "1996-03-20", gender: 0 };
;
const profileReducers = (state = profileData, action) => {
    switch (action.type) {
        case "Edit":
            return {
                name: action.profile.name,
                email: action.profile.email,
                date: action.profile.date,
                gender: action.profile.gender,
            }

        default:
            return state
    }
}
export default profileReducers