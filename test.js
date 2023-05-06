import c from'./index.js';
Object.keys(c).map(k => {
	console.log(k, c[k](k));
})
console.log(Object.keys(c).length, 'styles')
