function useKeyHander(handlerFunction, shouldUse) {
  if (shouldUse) {
    document.addEventListener('keyup', handlerFunction);
  } else {
    document.removeEventListener('keyup', handlerFunction);
  }
}

export default useKeyHander;
