// data.po.ts
=========
import {promise} from 'selenium-webdriver';
const = require('oracledb');

expoert class dbConnection{
getDbResults(done:DoneFn):promise.Promise<any>{
let resultData;
return oracleDb.getConnection({
user:'',
password:'',
connectString:'',

},
(err:any,connection:any)=>{

if(err){console.log(err);}

done();
return connection;
}

)}
}
=========

import {dbConnection} from './data.po';

let dbConnection:dbConnection

dbConnectionSet = new dbConnection()


















var col = ['sno', 'sname', 'sadd'];
var values = [

    [10, 'aaa', 'bbe'],
    [11, 'aas', 'bbr'],
    [12, 'aad', 'bbt'],
    [13, 'aaf', 'bby'],
    [14, 'aag', 'bbh'],
    [15, 'aah', 'bbf'],
    [16, 'aaj', 'bbj']

]


function generateObj(meta, rows) {
	var allres=[];
	var resobj = {};
    rows.forEach(function(row, rindex) {
        meta.forEach(function(ele, index) {
            resobj[ele] = row[index];
        }); 
        allres[rindex]=JSON.stringify(resobj);     
    })

    return allres;
}



function gatResultObject(col1, values1){
	var resObj=[];
	vv= generateObj(col1, values1);
	vv.forEach((ele)=>{
		resObj.push(JSON.parse(ele))
	})
return resObj
}

jj=gatResultObject(col, values);

console.log(jj[0].sno)



// frisby.get('http://jsonplaceholder.typicode.com/posts')
//       .expect('status', 200)
//       .expect('jsonTypes', '*', {
//         userId: Joi.number(),
//         id: Joi.number().required(),
//         title: Joi.string(),
//         body: Joi.string()
//       })
// expect().toBe();


// const xlsxj = require("xlsx-2-json");
//  xlsxj({
//     input: "./testData/out.xlsx", 
//     output: "./testData/output.json",
//     sheet: "Sheet2"
//   }, function(err, result) {
//     if(err) {
//       console.error(err);
//     }else {
//       console.log(result);
//     }
//   });
// const xlsxj = require("xlsx-2-json");
// const testFolder = './testData/';
// const fs = require('fs');

// fs.readdirSync(testFolder).forEach(file => {
//     console.log(file);
//     if (file.includes('xlsx')) {
//         var n = file.split('.');
//         console.log(n[0])
//         xlsxj({
//             input: "./testData/" + n[0] + ".xlsx",
//             output: "./testData/" + n[0] + ".json",
//             sheet: "Sheet2"
//         }, function(err, result) {
//             if (err) {
//                 console.error(err);
//             } else {
//                 console.log(result);
//             }
//         });
//     }
// })
// function a(callback) {
//  console.log("a started")
//     setTimeout(function() {
//         console.log("a");
//         callback();
//     }, 2000)
// }

// function b(callback) {
//     console.log("b");
//     callback();
// }
// function c(){
//  console.log("c")
// }

// a(function(){
//  b(function(){
//      c();
//  });
// });