export const getUnit = function (num) {
  var units = ["m", "b", "t", "q"];
  var unit = Math.floor((num / 1.0e1).toFixed(0).toString().length);
  var r = unit % 3;
  var x = Math.abs(Number(num)) / Number("1.0e+" + (unit - r)).toFixed(2);
  return x.toFixed(2) + " " + units[Math.floor(unit / 3) - 2];
};
