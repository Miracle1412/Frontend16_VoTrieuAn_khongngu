// let url = "http://apiforlearning.zendvn.com/api/get-gold"


// fetch(url)
//     .then(res => res.json())
//     .then((out) => {
//         console.log('Checkout this JSON! ', out);
//     })
//     .catch(err => { throw err });

// async function showdata () {
//     let data =fetch(url).then (() => {
//         console.log(2)

//     });
//     console.log(1)
//     console.log(data)
//     console.log(3)


//     const app = angular.modul("myapp",[]);


    const app = angular.module("myapp",[]);
app.controller("gold",function ($scope,$http) {
    $scope.items=[];
    $scope.cates=[];
    $scope.form={};

    $scope.initializez=function () {
        $http.get("http://apiforlearning.zendvn.com/api/get-gold").then(resp=>{
            $scope.items=resp.data;
        });

    }
    $scope.initializez();
})










// async function getapi("http://apiforlearning.zendvn.com/api/get-gold") {


//     const response = await fetch("http://apiforlearning.zendvn.com/api/get-gold");

//     var data = await response.json();
//     console.log(data);
//     if (response) {
//         hideloader();
//     }
//     show(data);
// }
// getapi(api_url);



// function show(data) {
//     let tab =
//         `<tr>
//     <th>Tên</th>
//     <th>Gía Vàng</th>
//     <th>Gía bán</th>
//   </tr>
// </thead>
// <tbody>
//   <tr>
//     <td>xxx</td>
//     <td>xxx</td>
//     <td>xxx</td>
//   </tr>
//   <tr>
//     <td>xxx</td>
//     <td>xxx</td>
//     <td>xxx</td>
//   </tr>`




// async function showdata() {
//     let myPromise = new Promise(function(resolve, reject) {
//       resolve("I love You !!");
//     });
//     document.getElementById("demo").innerHTML = await myPromise;
//   }
  
//   myDisplay();
















// async function getapi("http://apiforlearning.zendvn.com/api/get-gold") {


   
//     var data = await response.json();
//     console.log(data);
//     if (response) {
       
//     }
//     show(data);
// }
// getapi(api_url)