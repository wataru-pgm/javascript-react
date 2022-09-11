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
const func1 = function(str) {
    return str;
}
console.log(func1("func1です"));

//アロー関数
const func2 = (str) => {
    return str;
}
console.log(func2("func2です"));


/**
 * 分割代入
 */

const myProfile = {
    name: "wataru",
    age: 31
};
const message1 = `名前は${myProfile.name}です。年齢は${myProfile}歳です。`;
console.log(message1);

//上記のように書くとコードが長くなって複雑化してしまう。
//そこで下記の分割代入{}を使用することでコードをよりシンプルにすることができる。

const {name, age} = myProfile;
const message2 = `名前は${name}です。年齢は${age}歳です。`;
console.log(message1);

const myProfile = ['wataru', 31];
const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}`;
console.log(message3);

const [name, age] = myProfile;
const message4 = `名前は${name}です。年齢は${age}歳です。`;
console.log(message4);


/**
 * デフォルト値
 */

const sayHello = (name) => console.log(`こんにちは${name}さん！`);
sayHello("wataru");

/**
 * スプレッド構文
 */
//スプレッド構文は「...」と書くような文法のこと
//配列の中を順番に処理していく

//配列の展開
const arr1 = [1, 2];
console.log(arr1);

//コンソール
//[1, 2]

console.log(...arr1);

//コンソール
// 1 2
// ...とすることで配列の中身を順番に処理してくれる

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr[1]);

//コンソール
// 3

sumFunc(...arr1);

//コンソール
// 3



//まとめる場合
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);

//コンソール
// 1

console.log(num2);

//コンソール
// 2

console.log(num3);

//コンソール
//[3, 4, 5]


//配列のコピーや結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];

console.log(arr6);

//コンソール
//[10, 20]
//このように配列をコピーしたいときにスプレッド構文を使うことができる。

const arr7 = [...arr4, ...arr5];
console.log(arr7);

//コンソール
//[10, 20, 30, 40]
//このように二つの配列を結合して出力することもできる。

const arr8 = arr4;
console.log(arr8);

//コンソール
//[10, 20]
//　これはあまり良くない書き方（不具合の原因になったりする）
//例えば下記のようにarr8に対して要素を上書きした場合、参照したarr4の要素も上書きしてしまう。

arr8[0] = 100;
console.log(arr8);

//コンソール
//[100, 20]

console.log(arr4);

//コンソール
//[100, 20]


//スプレッド構文は上記の上書きを防ぐことができる。

const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
arr6[0] = 100;
console.log(arr6);

//コンソール
//[100, 20]

console.log(arr4);

//コンソール
//[10, 20]

/**
 * mapやfileterを使った配列の処理
 */

//mapについて
//従来の書き方
const nameArr = ["田中", "山田", "hoge"];
for (let index = 0; index < nameArr.length; index++) {
  console.log(`${index　＋　1}番目は${nameArr[index]}です`);
}

//コンソール
//1番目は田中です
//2番目は山田です
//3番目はhogeです
//と順番位表示される



//mapを使うとよりシンプルに書くことができる
nameArr.map((name, index)=>console.log(`${index　+ 1}番目は${name}です`));

//コンソール
//1番目は田中です
//2番目は山田です
//3番目はhogeです

//mapを使った書き方 挙動の確認
const nameArr2 = nameArr.map((name)=>{
  return name;
}) 
console.log(nameArr2);

//コンソール
//["田中", "山田", "hoge"]


//filterについて
//ある条件に一致するものだけを取り出したいときに使用する

const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1; //要素をそれぞれ2で割って余りが1になるもののみ
})
console.log(newNumArr);

//コンソール
//[1, 3, 5]

//実践練習
//hoge以外には「さん」をつけるようにする

const newNameArr = nameArr.map(() => {
  if (name === "hoge") {
    return name
  } else {
    return `${name}さん`
  }
})
console.log(newNameArr);

//コンソール
//["田中さん", "山田さん", "hoge"]

/**
 * 三項演算子
 */
//ある条件 ? 条件がtrueの時 : 条件がfalseの時

const val1 = 1 > 0 ? 'trueです'　：　'falseです';
console.log(val1);

//コンソール
//trueです


const num = 1300;
cosole.log(num.toLocaleString());

//コンソール
//1,300

const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
console.log(formattedNum);


const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? '100を超えています' : '許容範囲ないです'; 
}
console.log(checkSum(50, 60));

//コンソール
//100を超えています