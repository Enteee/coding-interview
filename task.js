#!/usr/bin/env ndoe
// TODO: Fix, document and maybe refactor this so that this runs under ECMAScript5

function getNextRandom(){
    x1 = Math.floor(Math.random() * 255) + 1;
    x2 = Math.floor(Math.random() * 255) + 1;
    x3 = Math.floor(Math.random() * 255) + 1;
    x4 = Math.floor(Math.random() * 255) + 1;
    return `${x1}.${x2}.${x3}.${x4}`
}

console.log(getNextRandom())
