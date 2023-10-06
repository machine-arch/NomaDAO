export const handleSearchLocation = (ref, setIsModalOpen, filterDisplay) => {
  setIsModalOpen((prev) => !prev);
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

export const handleAdvancedFilter = (name, setState) => {
  setState((prevState) => ({
    ...prevState,
    [name]: !prevState[name],
  }));
};
