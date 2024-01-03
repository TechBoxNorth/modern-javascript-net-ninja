// for loops
/*
for (let i = 0; i < 5; i++) {
  console.log(`Loop number: ${i}`);
}
*/
const names = ["ett", "två", "tre", "fyra", "fem"];
for (let i = 0; i < names.length; i++) {
  //console.log(names[i]);
  let html = `<div>${names[i]}</div>`;
  console.log(html);
}
