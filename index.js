// Write your solution in this file!
const driver = {};
function updateDriverWithKeyAndValue(driver,key,value){
driver[key]=value;
return driver;

}
driver.name = 'Sam';
updateDriverWithKeyAndValue(driver,'address','11 Broadway');
driver;
