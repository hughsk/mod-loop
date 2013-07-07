module.exports = loop

function loop(value, divisor) {
  return ((value % divisor) + divisor) % divisor
}
