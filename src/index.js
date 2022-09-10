/**
 * const, letなどの変数宣言
 */

var val1 = "var変数";
console.log(val1);

// // var変数は上書きが可能

val1 = "var変数を上書き";
console.log(val1);

// // var変数は再宣言が可能
var val1 = "var変数を再宣言";
console.log(val1);

// let var2 = "let変数";
// console.log(val2);

// //letは上書きが可能
var2 = "let変数を上書き"
console.log(val2);

// //letは再宣言ができない

const val3 = "const変数"；
console.log(val3);

//constは上書きも再宣言もできない
//constで定義したオブジェクトはプロパティの変更が可能
const val4 = {
    name = "wataru",
    age = 31
};
val4.name = "wtr";
val4.addres = "mie"

console.log(val4);

//constで定義した配列はプロパティの変更が可能
const val5 = ['dog', 'cat'];
val5.push("monkey")
console.log(val5)

/**
 * テンプレート文字列
 */

const name = "wataru";
const age = 31;
// 「私の名前はwataruです。年齢は31歳です。」

// 従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);

//テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);

/**
 * アロー関数
 */
//従来の関数
function func1(str) {
    return str;
}
console.log(func1("func1です"));
