import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

const adapter = new JSONFile(new URL('./stocks.json', import.meta.url));
const db = new Low(adapter, {});

await db.read();
if (!db.data) db.data = {};
await db.write();

export { db };
export default { db };