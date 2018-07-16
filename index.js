// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function (driver) {
    return driver['revenue'] > revenue;
  });
};

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver){
    return driver.revenue > revenue
  }).map(function(obj) { return obj.name});
};

function exactMatch(drivers, obj){
  return drivers.filter(function (driver){
    const objKey = Object.keys(obj)[0]
    const driverValue = driver[`${objKey}`]
    return driverValue === obj[objKey]
  });
};

function exactMatchToList(drivers, obj){
  return drivers.filter(function (driver){
    const objKey = Object.keys(obj)[0]
    const driverValue = driver[`${objKey}`]
    return driverValue === obj[objKey]
  }).map(function(match){
    return match.name;
  });
};
