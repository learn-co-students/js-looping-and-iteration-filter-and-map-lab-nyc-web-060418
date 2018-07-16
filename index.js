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
function exactMatch(drivers, obj) {
  const key = Object.keys(obj)[0];
  return drivers.filter(function(driver){
    return driver[key] === obj[key];
  })
}

function exactMatchToList(drivers, obj) {
  let clone = exactMatch(drivers, obj);
  return clone.map(function (driver) {
    return driver.name;
  });
}