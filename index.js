// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver (drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
    .map(function (driver) {
      return driver.name;
    });
}

// function exactMatch(drivers, attr) {
//   return drivers.filter(function( driver) {
//     return driver[Object.keys(attr)[0]] === Object.values(attr)[0]
//   });
// }


function exactMatch (drivers, attr) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const i in attr) {
      console.log(driver,driver[i],attr,attr[i])
      matches = driver[i] === attr[i];
    }

    return matches;
  });
}


function exactMatchToList (drivers, attr) {
  return exactMatch(drivers, attr)
    .map(function (driver) {
      return driver.name;
    });
}
