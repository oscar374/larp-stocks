import fs from 'fs';

const stocksConfig = JSON.parse(await fs.promises.readFile(new URL('./stocksConfig.json', import.meta.url), 'utf8'));

export { stocksConfig };
export default { stocksConfig };