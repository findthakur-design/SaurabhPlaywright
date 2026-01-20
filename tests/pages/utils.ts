import fs from 'fs';
import path from 'path';
const testDataPath = path.join(__dirname, '../testdata/data.json');
export const testdata = JSON.parse(fs.readFileSync(testDataPath, 'utf-8'));