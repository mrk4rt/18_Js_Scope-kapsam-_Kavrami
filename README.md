# Scope (Kapsam) - JavaScript

## Genel Tanım
Scope, JavaScript'te bir değişkenin tanımlandığı ve erişilebilir olduğu alanı ifade eder. Kapsam, kodunuzdaki değişkenlerin yaşam döngüsünü ve hangi kod bölümlerinden erişilebileceğini belirler. Scope, değişkenlerin yanlışlıkla çakışmasını önlemek ve kodu daha okunabilir hale getirmek için önemlidir.

---

## Scope Türleri

### 1. **Global Scope (Genel Kapsam)**
- Global kapsamda tanımlanan değişkenlere, kodun her yerinden erişilebilir.
- Tanımlama örneği:

```javascript
let globalVar = "Bu bir global değişken";

function printGlobalVar() {
    console.log(globalVar); // Global değişkene erişilebilir
}

printGlobalVar();
```

### 2. **Local Scope (Yerel Kapsam)**
- Bir değişken, bir fonksiyon veya blok içinde tanımlandığında yerel kapsamda bulunur. Bu değişkenlere, sadece tanımlandıkları yerden erişilebilir.
- Tanımlama örneği:

```javascript
function myFunction() {
    let localVar = "Bu bir yerel değişken";
    console.log(localVar); // Yerel değişkene erişilebilir
}

myFunction();
// console.log(localVar); // Hata: localVar tanımlı değil
```

### 3. **Block Scope (Blok Kapsamı)**
- `let` ve `const` ile tanımlanan değişkenler, sadece tanımlandıkları blok içinde geçerlidir.
- Tanımlama örneği:

```javascript
{
    let blockScopedVar = "Bu bir blok değişkeni";
    console.log(blockScopedVar); // Erişilebilir
}

// console.log(blockScopedVar); // Hata: blockScopedVar tanımlı değil
```

### 4. **Function Scope (Fonksiyon Kapsamı)**
- `var` ile tanımlanan değişkenler, sadece içinde tanımlandıkları fonksiyon kapsamında geçerlidir.
- Tanımlama örneği:

```javascript
function myFunction() {
    var functionScopedVar = "Bu bir fonksiyon değişkeni";
    console.log(functionScopedVar); // Erişilebilir
}

// console.log(functionScopedVar); // Hata: functionScopedVar tanımlı değil
```

---

## Scope Zinciri
- İç içe fonksiyonlar, dıştaki fonksiyonların kapsamındaki değişkenlere erişebilir. Ancak dıştaki fonksiyonlar, içte tanımlanan değişkenlere erişemez.
- Örnek:

```javascript
let outerVar = "Dıştaki değişken";

function outerFunction() {
    let innerVar = "İçteki değişken";

    function innerFunction() {
        console.log(outerVar); // Erişilebilir
        console.log(innerVar); // Erişilebilir
    }

    innerFunction();
    // console.log(innerVar); // Hata: innerVar tanımlı değil
}

outerFunction();
```

---

## Hoisting ve Scope
- **Hoisting**, JavaScript'in değişken ve fonksiyon tanımlarını kapsamlarının başına taşınmış gibi işlemesidir. Ancak, sadece `var` ile tanımlanan değişkenler için geçerlidir.
- Örnek:

```javascript
console.log(hoistedVar); // undefined (tanım yükseltildi, ama değer ataması yapılmadı)
var hoistedVar = "Hoisted değişken";
```

---

## Kapsam Yönetiminde İpuçları
1. **`var` yerine `let` ve `const` kullanın:**
   - `var` blok kapsamını desteklemez ve beklenmedik hatalara yol açabilir.

2. **Global değişkenlerden kaçının:**
   - Değişkenlerinizi mümkün olduğunca yerel kapsamda tanımlayın.

3. **İsim çakışmalarından kaçının:**
   - Aynı isimli global ve yerel değişkenler kafa karışıklığına yol açabilir.

---

## Özet
JavaScript'te scope, değişkenlerin hangi bölümlerde erişilebilir olduğunu tanımlar. Global, yerel, blok ve fonksiyon kapsamları arasında farkı anlamak, kodunuzu daha güvenli ve okunabilir hale getirecektir. Doğru kapsam kullanımı, hataları önlemek ve kod düzenini sağlamak açısından büyük önem taşır.

