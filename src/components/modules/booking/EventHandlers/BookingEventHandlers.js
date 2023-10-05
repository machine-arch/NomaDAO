export const handleSearchLocation = (ref) => {
  if (ref.current === document.activeElement) {
    ref.current.blur();
  } else {
    ref.current.focus();
  }
};

export const handleDate = (state, setState) => {
  setState({ ...state, date: !state?.date });
};

export const handlePersons = (state, setState) => {
  setState({ ...state, guests: !state?.guests });
};

export function handleLocation(state, setState) {
  setState(!state);
}
