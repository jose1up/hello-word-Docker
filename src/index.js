const app = require("./app");
require("dotenv").config();
const PORT = process.env.PORT || 3002;

//// codigo legasy ////
// app.listen(PORT, () => {
//   console.log(`listening on port ${PORT}`);
// });

//// con funciones 

const main = async (Port) => {
  await app.listen(Port);
  console.log("running on port " + Port);
};

main(PORT);
