//Con ES6+
const calculateArea = (w, h) => {
  let base = w;
  const multiplier = 2;
  return base * h * multiplier;
};

console.log(calculateArea(5, 10));

//Un quilombo antes de ES6
// var calculateArea2 = Function(w, h) {
//     var base = w;
//     var multiplier = 2;
//     return base * h * multiplier;
// }

// console.log(calculateArea2(4,10));

const fetchUserData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "alice" });
    }, 2000);
  });
};

const getUser = async () => {
    const userData = await fetchUserData();
    console.log(userData);
}

getUser();

//callbacks ==========>>>>> 
//