let mail = "sarathkumar@gmail.com";
let emailRegex = /^([a-zA-Z0-9\.-]+)@([a-zA-Z]+)\.([a-zA-Z])$/;
let indNo = "+91 7200824843";
let UsNo = "+17200350087"
let phoneRegexIndia = /^(\+91)(\s?)([0-9]{10})$/;
let phoneRegexUS = /^(\+1)(\s?)([0-9]{10})$/;
let result = emailRegex.test(mail);
let result2 = phoneRegexIndia.test(indNo);
let result3 = phoneRegexUS.test(UsNo);
console.log(result3);
