export function findGetParameter(parameterName) {
  let result = null;
  let tmp = [];
  location.search
    .substr(1)
    .split('&')
    .forEach((item) => {
      tmp = item.split('=')
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1])
    });
  return result;
}

export function requireAll(requireContext) {
  const ret = {};
  requireContext.keys().forEach((k) => {
    ret[k] = requireContext(k);
  })
  return ret;
}

export default helpers = {
  findGetParameter,
  requireAll
}