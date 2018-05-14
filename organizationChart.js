'use strict';
const org = [
  { id: 'Zuckerberg', boss: null },
  { id: 'Schroepfer', boss: 'Zuckerberg' },
  { id: 'Schrage', boss: 'Zuckerberg' },
  { id: 'Sandberg', boss: 'Zuckerberg' },
  { id: 'Bosworth', boss: 'Schroepfer' },
  { id: 'Zhao', boss: 'Schroepfer' },
  { id: 'Steve', boss: 'Bosworth' },
  { id: 'Kyle', boss: 'Bosworth' },
  { id: 'Andra', boss: 'Bosworth' },
  { id: 'Richie', boss: 'Zhao' },
  { id: 'Sofia', boss: 'Zhao' },
  { id: 'Jen', boss: 'Zhao' },
  { id: 'VanDyck', boss: 'Schrage' },
  { id: 'Swain', boss: 'Schrage' },
  { id: 'Sabrina', boss: 'VanDyck' },
  { id: 'Michelle', boss: 'VanDyck' },
  { id: 'Josh', boss: 'VanDyck' },
  { id: 'Blanch', boss: 'Swain' },
  { id: 'Tom', boss: 'Swain' },
  { id: 'Joe', boss: 'Swain' },
  { id: 'Goler', boss: 'Sandberg' },
  { id: 'Hernandez', boss: 'Sandberg' },
  { id: 'Moissinac', boss: 'Sandberg' },
  { id: 'Kelley', boss: 'Sandberg' },
  { id: 'Eddie', boss: 'Goler' },
  { id: 'Julie', boss: 'Goler' },
  { id: 'Annie', boss: 'Goler' },
  { id: 'Rowi', boss: 'Hernandez' },
  { id: 'Inga', boss: 'Hernandez' },
  { id: 'Morgan', boss: 'Hernandez' },
  { id: 'Amy', boss: 'Moissinac' },
  { id: 'Chuck', boss: 'Moissinac' },
  { id: 'Vinni', boss: 'Moissinac' },
  { id: 'Eric', boss: 'Kelley' },
  { id: 'Ana', boss: 'Kelley' },
  { id: 'Wes', boss: 'Kelley' },
];
function makeTree(org, boss){
  let node={};
  org
    .filter(employee => employee.boss === boss)
    .forEach(employee => node[employee.id]=makeTree(org, employee.id));
  return node;
}
//console.log(makeTree(org,null));
const structuredOrg=makeTree(org, null);
function traverseA(word, move){
  let indent= ' '.repeat(move * 4);
  Object.keys(word).forEach(item => {
    console.log(indent + item);
    return traverseA(word[item], move +1);
  });
}
console.log(traverseA(structuredOrg, 0));
