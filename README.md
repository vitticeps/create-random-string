# create-random-string


This module lets you create random strings by masks

## Install
	
    $ npm install create-random-string

## Usage

Simply call the function with or without any arguments

For example,

```javascript
var crs = require('create-random-string');

crs();
// 9a4BMrv7uFfYozqbRHnqL10tM6Y6z9MUvWhtZIxP8xhyBlOJC0Jgfyf1C1rNh9Vj

// without any arg it will return a 64 characters long random string - containing [A-z0-9]
```

You can specify the length of the string by providing a number

```javascript
crs(12);
// y31g45FDvZjB
```

You can use masks. `x` stands for small letters, `X` for capital letters and `0` is for digits.

```javascript
crs("xxxx-XXXX.0000");
// rfrg-PTSO.4601

// as you can see the dividers are remaining on their position
```

If you need longer strings you can define the character type and the length within brackets.

```javascript
crs("(x|9)");
// jratgqkgl

crs("(xX|9)");
// vbcfpHNUc

crs("(xX0|9)");
// r9Myxp224

crs("(xX|9)-(x0|9)-(X|9):(0|9)-(0X|9)-(xX0|9)");
// GikKMCvrf-uu7381m61-DQSYOJORH:684072415-82R0OHCG9-1bn8SIJJe
```


