const profileData = { name: "Nguyễn Tuấn Điền", email: "djenbmt96@gmail.com" };
;
const profileReducers = (state = profileData, action) => {
    switch (action.type) {
        case "Edit":
            return {
                name: action.profile.name,
                email: action.profile.email,
            }

        default:
            return state
    }
}
export default profileReducers