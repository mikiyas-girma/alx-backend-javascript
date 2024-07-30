export default function cleanSet(set, startString) {
  const ret = [];
  if (!set || !startString) {
    return '';
  }

  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const substring = value.substring(startString.length);

      if (substring && substring !== value) {
        ret.push(substring);
      }
    }
  }

  return ret.join('-');
}
