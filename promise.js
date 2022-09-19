const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (reaksi) => {

  const data1 = await promiseTheaterIXX();
  const data2 = await promiseTheaterVGC();

  let total = [].concat(data1, data2);

  let nilai=0;

  total.forEach((data) => {
    if (data.hasil == reaksi) {
      nilai++;
    }
  });

  return nilai;
};

module.exports = {
  promiseOutput,
};