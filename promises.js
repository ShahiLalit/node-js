const promiseLevel1 = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let twiceNum = num * 2;
      console.log(twiceNum);
      resolve(twiceNum);
    }, 1000);
  });
};

const promiseLevel2 = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let againTwiceNum = num + 2;
      resolve(againTwiceNum);
      console.log(againTwiceNum);
    }, 2000);
  });
};

const promiseLevel3 = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(num);
      let againTwiceAgainTwiceNum = num * 2;
      resolve(againTwiceAgainTwiceNum);
      console.log(againTwiceAgainTwiceNum);
    }, 3000);
  });
};

const afterAllPromises = num => {
  console.log("Last Promise");
  console.log(num * 2);
};

promiseLevel1(10)
  .then(num => promiseLevel2(num))
  .then(num => promiseLevel3(num))
  .then(num => afterAllPromises(num))
  .catch(err => console.log(err));
