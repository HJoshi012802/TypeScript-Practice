"use strict";
let sales = 121212121;
let course = "TypeScript";
let isPublised = true;
let level;
function render(document) {
    console.log(document);
}
let arr1 = [];
arr1[0] = 1;
arr1[1] = "String";
arr1.forEach((n) => {
    n;
});
let user = [1, 'Harshit'];
;
let mySize = 2;
function calculateTax(income, taxYear = 2022) {
    if ((taxYear) < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000, 2022);
let employee = {
    id: 1,
    name: 'Mosh',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs("10Kg");
let textBox = {
    drag: () => { },
    resize: () => { }
};
let value = 100;
let distance = 'meter';
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
customer === null || customer === void 0 ? void 0 : customer.birthday;
//# sourceMappingURL=index.js.map