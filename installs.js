//npm - global command , comes with node 
//npm -- version

//local dependency -- use it only in this particular project
// npm i <pacakge name>

//global dependency - use it in any project
// npm install -g <packageName>
//sudo npm install -g <packageName> 


//package.json - manifest files ( stores important info about projects / packages )
//manual approach (create package.json in root , creates propertirsn etc)
// npm init(setp by step , press enter to skip)
//npm init -y(everthing default)


const s= require('loadsh')

const items=[1,[2,[3,[4]]]]
console.log(s.flattenDeep(items))

console.log("hello world")