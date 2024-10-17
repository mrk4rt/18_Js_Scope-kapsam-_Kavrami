//! SCOPE KAVRAMI

//! 1) Global Scope

var veri1 = 5;
let veri2 = 10;
const veri3 = 15;

//! 2) Function Scope

function fonksiyon() {
  //! Function Scope diğerlerine göre önceliği olur.

  var veri1 = 30;
  let veri2 = 40;
  const veri3 = 50;

  console.log(veri1, veri2, veri3); //! Function belirtilen değerler öncelikli olduğu için 30 40 50 çıkar.
}

fonksiyon();

console.log(veri1, veri2, veri3); //! Fonsiyon görevini tamamlar sonra 5 10 15 şeklinde çıkar.

//! 3) Block Scope

if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a); //! var komutunu yazdığımızda gösterir
console.log(b); //! let komutu tanımlı değil gösterir.
console.log(c); //! const komutu tanımlı değil gösterir.

/*
block içerisinde değişken tanımlarken eğer (var) komutu kullanılırsa block dışında da 
geçerliliğini sürdürür (var) olmaya devam eder. Fakat block içerisinde let ve const
yapısını kullanarak oluşturduğumuz değişkenler sadece block içerisinde görevlerini
sürdürürken block dışında sürdüremezler. Hem block içerisinde ve dışında kullanmak istersek
var değişkenin kullanabiliriz.
*/

if (true) {
  var veri1 = 10;
  let veri2 = 20;
  const veri3 = 30;

  console.log(veri1, veri2, veri3); //* block içerisinde kullanıldığı için tüm değişkenler görevini tamamlar.
}
console.log(veri1, veri2, veri3);

var admin_password = "111111"; //! block dışında var kullanılırsa şifre değişir. let ve const kullanmak daha sağlıklı

if (true) {
  var admin_password = "222222";
}
console.log(admin_password);
