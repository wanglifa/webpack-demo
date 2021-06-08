import { parse } from '@babel/parser';
import * as babel from '@babel/core';

const code = `let a = 'let'; let b = 2; const c = 3`;
const ast = parse(code, { sourceType: 'module' });
// babel.transformFromAstSync 把 ast 变成新的 code
const result = babel.transformFromAstSync(ast, code, {
    presets: ['@babel/preset-env']
})
console.log(result.code)
