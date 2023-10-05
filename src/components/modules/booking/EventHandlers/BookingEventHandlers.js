export const handleSearchLocation = (ref) => {
  ref?.current?.focus();
};

export const handleDate = () => {
  console.log('TEST');
};

export const handlePersons = () => {
  console.log('TEST');
};

export function handleLocation(e, ref) {
  if (e.key === 'Enter') ref?.current?.click();
}
