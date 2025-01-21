const jwt = require("jsonwebtoken");

/**
 * jwt.sign(
 *  paylaod // {}
 *  token-secret-code
 *  { epire time}
 * )
 */

/**
('2 days')  // 172800000
('1d')   // 86400000
('10h')  // 36000000
('2.5 hrs') // 9000000
('2h')      // 7200000
('1m')      // 60000
('5s')      // 5000
('1y')      // 31557600000
('-3 days') // -259200000
('-1h')     // -3600000
*/

// const expireTime = Math.floor(Date.now() / 1000) + 15 * 60; // 15min
// console.log(expireTime);

const myToken = jwt.sign({ userid: 123, name: "abc" }, "123456", {
  expiresIn: "60s",
});

console.log(myToken);

const expiredToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJ1c2VyaWQiOjEyMywibmFtZSI6ImFiYyIsImlhdCI6MTczNjg3MTkxMywiZXhwIjoxNzM2ODcxOTczfQ.4Sa1jkxmnTbi60DBzKZnczhlwSnArg927DeUkePT7Vw";

/**
 * jwt.verify(
 *  token,
 *  secret,
 *  (err, decode) ={}
 * )
 */

jwt.verify(myToken, "123456", (err, decode) => {
  if (err) {
    console.log(err.message);
  }
  console.log(decode);
});
