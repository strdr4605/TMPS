// lab1
import SingletonPblFactory from "./CreationalPatterns/SingletonPblFactory";
import PblPrototype from './CreationalPatterns/PblPrototype';

const groups = [];
const pblFactory1 = new SingletonPblFactory();
const pblFactory2 = new SingletonPblFactory();
console.log(`\n============ Lab1, Creational Patterns ==============\n`);

console.log(`pblFactory1 === pblFactory2 ${pblFactory1 === pblFactory2}`);
console.log(`noPblFactory1 === noPblFactory2 ${noPblFactory1 === noPblFactory2}`);

groups.push(pblFactory1.createPbl('FAF-181'));
groups.push(pblFactory1.createPbl('FAF-182'));
groups.push(pblFactory2.createPbl('FAF-171'));
groups.push(pblFactory2.createPbl('FAF-172'));
groups.push(pblFactory1.createNoPbl('TI-161'));
groups.push(pblFactory1.createNoPbl('TI-162'));
groups.push(pblFactory2.createNoPbl('TI-163'));
groups.push(pblFactory2.createNoPbl('TI-164'));

const proto = pblFactory1.create('FAF-183 Prototype');
const prototype = new PblPrototype(proto);

groups.push(prototype.clone());

groups.forEach((group) => {
  group.say();
});
