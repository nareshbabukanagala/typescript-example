// var Excel = require('exceljs');

// const XlsxPopulate = require('xlsx-populate');
const xlsxj = require("xlsx-2-json");
// const fse = require('fs-extra');

// //Reading a Single Cell from Excel
// XlsxPopulate.fromFileAsync("../testData/out.xlsx")
//     .then(workbook => {
//         // Modify the workbook. 
//         const value = workbook.sheet("Sheet1").cell("B2").value();
//         // Log the value. 
//         console.log(value);
// });

// //Writing a single cell to Excel
// XlsxPopulate.fromFileAsync('../testData/out.xlsx').then(workbook => {
//         //Modify the workbook. 
//         workbook.sheet("Sheet1").cell("B4").value("Somesh");
//         const value1 = workbook.sheet("Sheet1").cell("B4").value();
//         console.log(value1);

//         return workbook.toFileAsync("../testData/out.xlsx");      
// });


// XlsxPopulate.fromFileAsync('../testData/out2.xlsx').then(workbook => {
//         // Modify the workbook. 
    
//           console.log(workbook.sheet("Sheet1").range("A1:C3").value());


// 		//Set range values to the same value:
// 		const r = workbook.sheet("Sheet1").range("A1:C3");
// 		r.value(5);

// 		console.log(workbook.sheet("Sheet1").range("A1:C3").value());

// // 		//Set the values using a 2D array:
// 		r.value([
// 		    [2, 4, 6],
// 		    [8, 10, 12],
// 		    [14, 16, 18]
// 		]);

// 	console.log(workbook.sheet("Sheet1").range("A1:C3").value());

// });
// 		// Set the values using a callback function:
// 		r.value((cell, ri, ci, range) => Math.random());
// 		console.log(workbook.sheet("Sheet1").range("A1:C3").value());

        
//         //Write to file. 
//         //return workbook.toFileAsync("./out2.xlsx");
// });



//Convert to JSON file
  xlsxj({
    input: "../testData/out.xlsx", 
    output: "../testData/output.json"
  }, function(err, result) {
    if(err) {
      console.error(err);
    }else {
      console.log(result);
    }
  });

// xlsxj('../testData/out.xlsx', function(error, result) {
//   if (error) return console.error(error);
//   console.log(result);
// });

  //Convert to JSON file
  // xlsxj({
  //   input: "./out.xlsx", 
  //   output: "./output.json"
  // }, function(err, result) {
  //   if(err) 
  //     console.error(err);
  // });

var myJson = require('../testData/output.json');
var myJSON1 = JSON.stringify(myJson);
var event = JSON.parse(myJSON1);
console.log('Value : '+event[0].Sno);
console.log('Value : '+event[0].Name);
console.log('Value : '+event[0].Sal);





//============================

 //const file = './file.txt'
// fse.outputFile(file, 'hello!', err => {
//   console.log(err) // => null

//   fse.readFile(file, 'utf8', (err, data) => {
//     if (err) return console.error(err)
//     console.log(data) // => hello!
//   })
// });

// With Promises:
// fse.outputFile(file, 'hello!')
// .then(() => fse.readFile(file, 'utf8'))
// .then(data => {
//   console.log(data) // => hello!
// })
// .catch(err => {
//   console.error(err)
// });






