module.exports = loop

function loop(value, divisor) {
  var n = value % divisor;
  return n < 0 ? (divisor + n) : n
}
