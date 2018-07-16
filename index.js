// Code your solution here:
function driversWithRevenueOver(drivers, num) {
  return drivers.filter(function (driver) {
    return driver.revenue > num;
  });
}

function driverNamesWithRevenueOver(drivers, num) {
  newDrivers = driversWithRevenueOver(drivers, num);

  return newDrivers.map(function(driver) {
    return driver.name;
  })
}

function exactMatch(drivers, obj) {
  const key = Object.keys(obj)[0];
  return drivers.filter(function(driver) {
    return  driver[key] === obj[key];
  })
}

function exactMatchToList(drivers, obj) {
  const matches = exactMatch(drivers, obj)

  return matches.map(function (driver) {
    return driver.name;
  })
}
