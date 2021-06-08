import { parse } from '@babel/parser';
import * as babel from '@babel/core';
import * as fs from 'fs';

const code = fs.readFileSync('./test.js').toString();
const ast = parse(code, { sourceType: 'module' });
// babel.transformFromAstSync 把 ast 变成新的 code
const result = babel.transformFromAstSync(ast, code, {
    presets: ['@babel/preset-env']
})
fs.writeFileSync('./test.es5.js', result.code);
