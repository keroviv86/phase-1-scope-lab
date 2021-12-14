var customerName = 'bob'

console.log(customerName)

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
    return customerName
}

function setBestCustomer(){
    bestCustomer = 'not bob'
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer= 'joe'
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer= 'viv'
    return leastFavoriteCustomer
}