const multValid = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const modPhysical = (document) => {
   let modulo = 11 -
      (document.map((value, index) => parseInt(value) * (document.length + 1 - index))
         .reduce((prev, after) => prev + after) % 11);
   return modulo > 9 ? 0 : modulo;

}

const modLegal = (count, document) => {
   let modulo = 11 - document.map((value, index) => {
      if (count == 2) count = 10;
      count--;
      return parseInt(value) * count;
   }).reduce((prev, after) => prev + after) % 11;

   return modulo > 9 ? 0 : modulo;

}

const physical = (document) => {
   let newDocument = document.substring(0, 9).split("");

   newDocument.push(modPhysical(newDocument));
   newDocument.push(modPhysical(newDocument));

   return newDocument.join("");
}

const legal = (document) => {
   let newDocument = document.substring(0, 12).split("");

   newDocument.push(modLegal(6, newDocument));
   newDocument.push(modLegal(7, newDocument));

   return newDocument.join("");
}


module.exports = {
   "validation": function (document, type) {
      return (type == 1 ? physical(document) : legal(document)) == document;

   }

}
