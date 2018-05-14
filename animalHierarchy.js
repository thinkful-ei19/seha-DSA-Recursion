'use strict';
const animalHierarchy = [
  { id: 'Animals', parent: null },
  { id: 'Mammals', parent: 'Animals' },
  { id: 'Dogs', parent: 'Mammals' },
  { id: 'Cats', parent: 'Mammals' },
  { id: 'Golden Retriever', parent: 'Dogs' },
  { id: 'Husky', parent: 'Dogs' },
  { id: 'Bengal', parent: 'Cats' }
];

function makeTree(animalHierarchy, parent){
  let node= {};
  animalHierarchy
    .filter(animal => animal.parent === parent)
    .forEach(animal => node[animal.id]= makeTree(animalHierarchy, animal.id));
  return node;
}
console.log(makeTree(animalHierarchy, null));
