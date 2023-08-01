export function materialInput(ref, parentClass = '.form-group--material') {
  const { value, parentElement } = ref.current;

  if (!value) {
    return parentElement.classList.remove('--dirty');
  }

  if (parentElement && parentElement.matches(parentClass)) {
    parentElement.classList.add('--dirty');
  }
}