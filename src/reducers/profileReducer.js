let form = { name: "Nguyễn Tuấn Điền", email: "djenbmt96@gmail.com", text: '' };
export default function (state=form, action) {
    switch (action.type) {
        case "Edit":
            return {
                name: action.name,
                email: action.email
            }

    }
    return state;
}