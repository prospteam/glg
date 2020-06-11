
const MyFunctions = {};

export function to_upper(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

MyFunctions.split_city_state_country=(city,state)=>{
  return city+", "+state+", USA";
}
MyFunctions.get_state=(address)=>{
  return address.split(", ")[1];
}
MyFunctions.get_city=(address)=>{
  return address.split(", ")[0];
}

export default MyFunctions;