export function increment() {
  return {
    type: "Increment"
  };
}
export function decrement() {
  return {
    type: "Decrement"
  };
}
export const edit = (profile) => {
  return {
    type: "Edit",
    profile:profile,
  };
}