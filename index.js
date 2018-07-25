// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  const driverFilter = drivers.filter(driver => driver.revenue > parseInt(revenue));
  return driverFilter;
}


function driverNamesWithRevenueOver(drivers, revenue) {
  const driverFilter = drivers.filter(driver => driver.revenue > parseInt(revenue));
  const driverNames = driverFilter.map(driver => driver.name);
  return driverNames;
}

function exactMatch(drivers, object) {
  const driverList = drivers.filter(driver => {
    let answer = false
    for (let k in object) {
      if (object[k] === driver[k]) {
        answer = true;
      }
    }
    return answer
  })
  return driverList;
}

function exactMatchToList(drivers, object) {
  const driverList = exactMatch(drivers, object);
  const driverNames = driverList.map(driver => driver.name)
  return driverNames;
}

// exactMatch([{name: 'Risher', revenue: 45}], {revenue: 45})
