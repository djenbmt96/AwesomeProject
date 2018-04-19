import Type from '../Enum.js';
export function increment() {
  return {
    type: Type.INCREAMENT
  };
}
export function decrement() {
  return {
    type: Type.DECREAMENT
  };
}
export const edit = (profile) => {
  return {
    type: Type.EDIT,
    profile: profile,
  };
}
export const addComment = (comment) => {
  return {
    type: Type.ADDCOMMENT,
    comment: comment,
  };
}
export const showPeople = () => {
  return {
    type: Type.SHOW_PEOPLE,
  }
}
export const getPerson = (person) => {
  return {
    type: Type.GET_PERSON,
    person: person,
  }
}