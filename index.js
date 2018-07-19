// Code your solution here:
function driversWithRevenueOver(drivers, amount){
    return drivers.filter(driver => driver.revenue >= amount)
}

function driverNamesWithRevenueOver(drivers, amount){
    return driversWithRevenueOver(drivers, amount).map(driver => driver.name)
}

function exactMatch(drivers, condition) {
    keys = Object.keys(condition)
    return drivers.filter(function(driver){
        return driver[keys[0]] === Object.values(condition)[0]
    })
}

function exactMatchToList(drivers, condition) {
    return exactMatch(drivers, condition).map(function(driver){return driver.name})
}