// Code your solution here:
function driversWithRevenueOver(array, revenue) {
  const newArray = array.filter(function(object) {return object.revenue > revenue});
  return newArray;
}

function driverNamesWithRevenueOver(array, revenue) {
  const newArray = driversWithRevenueOver(array, revenue);
  return newArray.map(function(object) {return object.name});
}

function exactMatch(array, object) {
  let key = Object.keys(object)[0]
  return array.filter(function(instance) {return instance[key] === object[key]})
}

function exactMatchToList(array, object) {
  const newArray = exactMatch(array, object);
  return newArray.map(function(instance) {return instance.name});
}
