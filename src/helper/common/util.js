export function isEmpty(value) {
  if (!value || value === "" || (Array.isArray(value) && value.length === 0)) {
    return true;
  }
  return false;
}
