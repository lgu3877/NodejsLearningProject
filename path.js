const path = require('path');

const string = __filename;


console.log('path.sep :', path.sep);
console.log('path.delimiter :', path.delimiter);

console.log('---------------------------------');

console.log('path.dirname() : ', path.dirname(string));
console.log('path.extname() : ', path.extname(string));
console.log('path.basename() : ', path.basename(string));
console.log('path.basename - extname : ', path.basename(string, path.extname(string)));

console.log('----------------------------------');

console.log('path.parse()', path.parse(string))
console.log('path.format()', path.format({
    dir : '/Users/weggle/WebstormProjects/learningnodejs/',
    name : 'path',
    ext : '.js',
}));


console.log('path.normalize() : ', path.normalize('/Users/weggle/WebstormProjects/learningnodejs/path.js'));
console.log('---------------------------------');
console.log('path.isAbsolute(/Users/)', path.isAbsolute('/Users/'));
console.log('path.isAbsolute(.home) :', path.isAbsolute('./home'));
console.log('path.relative() : ', path.relative('/Users/weggle/WebstormProjects/learningnodejs/path.js', '/Users/'));


/*

-path.sep
경로의 구분자입니다

-path.delimiter
환경 변수의 구분자입니다.

-path.dirname
파일이 위치한 폴더 경로를 보여줍니다.

-path.extname
파일의 확장자를 보여줍니다.

-path.basename
파일의 이름을 표시합니다.

-path.parse
파일 경로를 root, dir, base, ext, name

-path.format
path.parse() 객체를 파일 경로로 합칩니다.

-path.normalize
/를 실수로 여러 번 사용했을 때 정상적인 경로로 변경합니다.

-path.isAbsolute
파일의 경로가 절대 경로인지 상대 경로인지를 true 나 false 로 알립니다.

-path.relative
경로를 두 개 넣으면 첫 번째 경로에서 두 번째 경로로 가는 방법을 알립니다.

 */