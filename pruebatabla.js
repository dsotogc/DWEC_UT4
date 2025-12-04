let tabla = document.body.lastElementChild.previousElementSibling;
let tbody = tabla.tBodies[0];
let tr = tbody.firstElementChild;
let celda = tr.cells[0];

console.log(tabla.caption);
console.log(tabla.tHead);
console.log(tabla.tBodies);
console.log(tabla.tFoot);
console.log(tabla.rows);

console.log(tbody.rows);

console.log(tr.cells);
console.log(tr.sectionRowIndex);
console.log(tr.rowIndex);

console.log(celda.cellIndex);