export function capitalize (string) {
if (typeof string !== 'string') {
  throw new Error('strings only');
}
return string[0].toUpperCase() + string.slice(1);
}