// Write your solution in this file!
const driver = {};
function updateDriverWithKeyAndValue(object,key,value){

 return Object.assign({}, driver, { [key]: value })
}
driver.name ='Sam';
updateObjectWithKeyAndValue(driver, 'address:', '11 Broadway');
