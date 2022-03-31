const randomizeNewArray = (number, range) => {
  const pro_IntDigit = () => Math.floor(Math.random() * range) + 1;
  let temp = [];
  for (let i = 0; i < number; i++) {
    let item = pro_IntDigit();
    temp.push(item);
  }
  const random_val = (temp) => {
    temp.sort(function (a, b) {
      return b - a;
    });
  };
  random_val(temp);
  console.log(temp);
  return temp;
};
export default randomizeNewArray;
