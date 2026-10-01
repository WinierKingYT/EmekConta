const path = require('path');
const sharp = require('sharp');

const brainDir = 'C:\\Users\\faruk\\.gemini\\antigravity\\brain\\29aade75-62d2-4590-b33d-f2f5dd13d20f';
const targetDir = path.join(__dirname, '..', 'public', 'images', 'products');

const mapping = [
  {
    src: 'klingirit_conta_single_1790884651853.jpg',
    targets: ['klingirit-flans-conta.webp']
  },
  {
    src: 'klingirit_levha_conta_1790884687193.jpg',
    targets: ['asbestsiz-klingerit-levha.webp', 'asbestsiz-klingrit-levhalar.webp']
  },
  {
    src: 'jonta_cift_conta_1790884734796.jpg',
    targets: ['klingirit-conta.webp', 'asbetsiz-conta.webp']
  },
  {
    src: 'epdm_conta_single_1790885000603.jpg',
    targets: ['epdm-conta.webp', 'epdm-flans-conta.webp', 'lastik-conta.webp']
  },
  {
    src: 'viton_conta_single_1790885037686.jpg',
    targets: ['viton-conta.webp', 'viton-flans-conta.webp', 'mekanik-viton-conta.webp']
  },
  {
    src: 'spiral_sarimli_single_1790885101377.jpg',
    targets: ['spiral-sarimli-celik-conta.webp', 'buhar-contasi.webp', 't200.webp']
  },
  {
    src: 'saf_grafit_levha_conta_1790885175423.jpg',
    targets: ['saf-grafit-levha.webp', 'grafitli-telli-conta.webp']
  },
  {
    src: 'ptfe_teflon_single_1790885252541.jpg',
    targets: ['ptfe-teflon-conta.webp']
  },
  {
    src: 'ptfe_levha_conta_1790885297954.jpg',
    targets: ['ptfe-teflon-levha.webp', 'termoflon-levha.webp']
  },
  {
    src: 'mantar_levha_conta_1790885345036.jpg',
    targets: ['mantar-levhalar.webp', 'kaucuklu-mantar-levhalar.webp']
  }
];

async function deployBatch1() {
  console.log('Deploying batch 1 webp images...');
  for (const item of mapping) {
    const srcPath = path.join(brainDir, item.src);
    for (const targetName of item.targets) {
      const destPath = path.join(targetDir, targetName);
      await sharp(srcPath)
        .resize(800, 600, { fit: 'cover' })
        .webp({ quality: 90 })
        .toFile(destPath);
      console.log(`✓ Generated ${targetName} from ${item.src}`);
    }
  }
  console.log('Batch 1 deployment complete!');
}

deployBatch1();
