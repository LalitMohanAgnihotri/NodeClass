import fs from 'fs';
import path from 'path';

// this is for path module demonstration
const filePath = path.join('.', 'file.txt');

console.log(fs.readFileSync(filePath, 'utf-8'));

// it will return the file extension
console.log(path.extname(filePath));

// it will give the file name with extension
console.log(path.basename(filePath));

// it will give the absolute path
console.log(path.resolve(filePath));

// it will give the directory name of the path
console.log(path.dirname(filePath));

// it will parse the path into an object  
console.log(path.parse(filePath));

// it will format the path object back to string
console.log(path.format(path.parse(filePath)));

// it will convert the path to a namespaced path
console.log(path.toNamespacedPath(filePath));

// it will check if the file path matches the given glob pattern glob pattern is a string that can include wildcards (e.g., '*', '?') to match multiple file paths. The path.matchesGlob() method checks if the provided file path matches the specified glob pattern and returns true or false accordingly. This is useful for filtering files based on patterns, such as finding all text files in a directory.
console.log(path.matchesGlob(filePath, '*.txt'));

// it will  
console.log(path.matchesGlob(path.basename(filePath), 'file.?txt'));

