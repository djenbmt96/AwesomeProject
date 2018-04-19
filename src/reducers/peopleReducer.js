import Type from '../Enum.js';

const data = require('../Data/people.json');
const people = (state = { people: data, showPerson: false }, action) => {
    switch (action.type) {
        case Type.GET_PERSON:
            return Object.assign({}, state, {
                person: action.person,
                showPerson: true,
            })
        case Type.SHOW_PEOPLE:
            return Object.assign({}, state, {
                showPerson: false,
            })
        default: return state
    }
}
export default people