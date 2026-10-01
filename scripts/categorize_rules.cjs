const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '..', 'data', 'products.ts'), 'utf8');
const blockRegex = /\{\s*"id":\s*"([^"]+)"[\s\S]*?"name":\s*"([^"]+)"[\s\S]*?"category":\s*"([^"]+)"[\s\S]*?"image":\s*"([^"]+)"/g;
let m;
const prods = [];
while ((m = blockRegex.exec(content)) !== null) {
  prods.push({ id: m[1], name: m[2], cat: m[3], image: m[4] });
}

const contaOnly = prods.filter(p => /conta/i.test(p.name) && !/plaka|levha/i.test(p.name));
const plakaLevha = prods.filter(p => /plaka|levha/i.test(p.name));
const jonta = prods.filter(p => /jonta/i.test(p.name));
const salmastra = prods.filter(p => /salmastra/i.test(p.name));
const diger = prods.filter(p => !/conta|plaka|levha|jonta|salmastra/i.test(p.name));

console.log('Total products:', prods.length);
console.log('Conta Only (sadece conta istenen):', contaOnly.length);
console.log('Plaka / Levha (kenarda plaka gözüksün istenen):', plakaLevha.length);
console.log('Jonta (çift conta / jonta istenen):', jonta.length);
console.log('Salmastra:', salmastra.length);
console.log('Diğer (keçe, fitil, hortum, çubuk, kumaş vb.):', diger.length);

console.log('\n--- Örnek Plaka / Levha Ürünleri ---');
plakaLevha.forEach(p => console.log(` - [${p.id}] ${p.name}`));

console.log('\n--- Örnek Diğer Ürünler ---');
diger.forEach(p => console.log(` - [${p.id}] ${p.name} (${p.cat})`));
