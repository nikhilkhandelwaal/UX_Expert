const otpGenerator = require('otp-generator');

const newOtp = otpGenerator.generate(10, { upperCaseAlphabets: false, lowerCaseAlphabets: false, specialChars: false });
console.log(newOtp)
