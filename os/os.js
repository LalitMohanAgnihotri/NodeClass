import os from 'os';


// this will give all the information about current user in form of an object which includes username, homedir, shell, etc.
console.log(os.cpus());

// this will give the operating system name
console.log(os.type());

// this will give the operating system platform
console.log(os.platform());


// this devNull() method returns the path to the operating system's null device, which is a special file that discards all data written to it. On Unix-like systems (e.g., Linux, macOS), the null device is typically represented by "/dev/null", while on Windows systems, it is represented by "NUL". This method is useful when you want to redirect output to a location that effectively ignores it.
console.log(os.devNull);

console.log(os.homedir());