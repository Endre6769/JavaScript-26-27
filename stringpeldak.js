let szoveg = "I would rather die than not play volleyball for a week.";

console.log(szoveg.slice(0, 5));
console.log(szoveg.slice(2, 7));
console.log(szoveg.slice(4));
console.log(szoveg.substr(4, 6));
console.log(szoveg.toUpperCase());

let ujszoveg = "";
for (let i = 0; i < szoveg.length; i++) {
  if (i % 2 == 0) {
    ujszoveg += szoveg[i].toUpperCase();
  } else {
    ujszoveg += szoveg[i];
  }
}

console.log(ujszoveg);
console.log(szoveg.replaceAll("e", "E"));

let tomb = szoveg.split("e");
console.log(tomb);
