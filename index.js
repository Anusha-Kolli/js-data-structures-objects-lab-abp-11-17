// Write your solution in this file!
const driver = {};
function updateDriverWithKeyAndValue(object,key,value){
object[key]=value;
return object;

}
driver.name = Sam;
updateDriverWithKeyAndValue(driver,'address:','11 Broadway');
driver['address'];
