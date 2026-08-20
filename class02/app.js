import { join, resolve, basename } from 'path';

const filename = basename('/users/docs/file.txt');
console.log(filename);

const filenameWithoutExt = basename('/users/docs/file.txt', '.txt');
console.log(filenameWithoutExt);


const fullPath = join('/users', 'docs', 'file.txt');
console.log(fullPath);


const absolutePath = resolve('users', 'docs', 'file.txt');
console.log(absolutePath);