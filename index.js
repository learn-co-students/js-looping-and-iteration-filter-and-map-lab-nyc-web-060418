// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(driver => driver.name)
}

function exactMatch(drivers, propertyObj) {
  return drivers.filter(function(driver){
    return driver[Object.keys(propertyObj)[0]] === Object.values(propertyObj)[0]
  })
}

function exactMatchToList(drivers, propertyObj) {
  return exactMatch(drivers, propertyObj).map(driver => driver.name)
}
