// lab1
import SingletonPblFactory from "./CreationalPatterns/SingletonPblFactory";
import SingletonNoPblFactory from "./CreationalPatterns/SingletonNoPblFactory";
import PblPrototype from './CreationalPatterns/PblPrototype';

const groups = [];
const noPblFactory1 = new SingletonNoPblFactory();
const noPblFactory2 = new SingletonNoPblFactory();
const pblFactory1 = new SingletonPblFactory();
const pblFactory2 = new SingletonPblFactory();
console.log(`\n============ Lab1, Creational Patterns ==============\n`);

console.log(`pblFactory1 === pblFactory2 ${pblFactory1 === pblFactory2}`);
console.log(`noPblFactory1 === noPblFactory2 ${noPblFactory1 === noPblFactory2}`);

groups.push(pblFactory1.create('FAF-181'));
groups.push(pblFactory1.create('FAF-182'));
groups.push(pblFactory2.create('FAF-171'));
groups.push(pblFactory2.create('FAF-172'));
groups.push(noPblFactory1.create('TI-161'));
groups.push(noPblFactory1.create('TI-162'));
groups.push(noPblFactory2.create('TI-163'));
groups.push(noPblFactory2.create('TI-164'));

const proto = pblFactory1.create('FAF-183 Prototype');
const prototype = new PblPrototype(proto);

groups.push(prototype.clone());

groups.forEach((group) => {
  group.say();
});
