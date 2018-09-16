export default function sharks(state = [], action) {
  if (action.type === 'ADD_SHARKS') {
    return [
      ...state,
      ...action.sharks,
    ];
  }

  return state;
}
