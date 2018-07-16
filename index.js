// Code your solution here:

function driversWithRevenueOver(drivers, revenue){
    return drivers.filter(function(driver){
        return driver.revenue > revenue;
    })
};

function driverNamesWithRevenueOver(drivers, revenue) {
  let driverHighRev = driversWithRevenueOver(drivers, revenue);
  return driverHighRev.map(function (driver) {
      return driver.name;
    });
}

//REVIEW THIS ONE. 
function exactMatch(drivers, matcher) {
  return drivers.filter(function (driver) {
    let matches = [false];

    for (const key in matcher) {
      matches = driver[key] === matcher[key];
    }

    return matches;
  });
}

function exactMatchToList(drivers, matcher) {
  let clone = exactMatch(drivers, matcher);
  return clone.map(function (driver) {
    return driver.name;
  });
}