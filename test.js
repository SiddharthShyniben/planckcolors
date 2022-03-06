import c from'./index.js';
console.log(Object.keys(c).map(k=>c[k](k)).join`\n`);
console.log(Object.keys(c).map(k=>c[k](Object.keys(c).map(l=>c[l]('#')).join(''))).join`\n`)
