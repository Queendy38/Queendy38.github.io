      var foodName = []; //array for names
      var foodPrice = []; //array for prices
      var testing = false; //asks the user to order

      var xmlhttp = new XMLHttpRequest(); //display json
      xmlhttp.onreadystatechange = function () { //i will do this when somthing is matched
          if (this.readyState == 4 && this.status == 200) { //4 = ready 200=okay 44=error
              var mydata = JSON.parse(this.responseText); //json will be saved as mydata

              for (var i = 0; i < mydata.food.length; i++) {
                  foodName.push(mydata.food[i].name);
                  foodPrice.push(mydata.food[i].price);
              }

              function enter() {
                  var qty = document.getElementById('user1').value; //get quantity
                  //display price at bottom with tax
                  var totalP = (qty * 1.0471) * foodPrice[0];
                  localStorage.setItem("total", totalP); //set item, price with tax
                  var totalL2 = Number(localStorage.getItem("total2")); //get from box2
                  var totalL3 = Number(localStorage.getItem("total3")); //get from box3
                  var totalL4 = Number(localStorage.getItem("total4")); //get from box4
                  var totalL5 = Number(localStorage.getItem("total5")); //get from box5
                  var totalL6 = Number(localStorage.getItem("total6")); //get from box6
                  var total = totalP + totalL2 + totalL3 + totalL4 + totalL5 + totalL6;
                  document.getElementById('bottom').innerHTML = "Your total is $" + total.toFixed(2);
                  window.alert(foodName[0] + " x " + qty);
                  var itemList = (foodName[0] + " x " + qty + " = $" + foodPrice[0] * qty);
                  localStorage.setItem("item1", itemList); //set order summary to next page

              }

              order.onclick = function () {
                  if (document.getElementById('user1').value >= 1) {
                      enter();
                      testing = true;

                  }
                  if (document.getElementById('user2').value >= 1) {
                      enter2();
                      testing = true;
                  }

                  if (document.getElementById('user3').value >= 1) {
                      enter3();
                      testing = true;
                  }

                  if (document.getElementById('user4').value >= 1) {
                      enter4();
                      testing = true;
                  }

                  if (document.getElementById('user5').value >= 1) {
                      enter5();
                      testing = true;
                  }

                  if (document.getElementById('user6').value >= 1) {
                      enter6();
                      testing = true;
                  } else if (testing == false) {
                      window.alert("Please order something.")
                  }
              }

              function enter2() {
                  var qty = document.getElementById('user2').value; //get quantity
                  //display price at bottom with tax
                  var totalP = (qty * 1.0471) * foodPrice[1]; //get price
                  localStorage.setItem("total2", totalP); //set item
                  var totalL = Number(localStorage.getItem("total")); //get price from box1
                  var totalL3 = Number(localStorage.getItem("total3")); //get from box3
                  var totalL4 = Number(localStorage.getItem("total4")); //get from box4
                  var totalL5 = Number(localStorage.getItem("total5")); //get from box5
                  var totalL6 = Number(localStorage.getItem("total6")); //get from box6
                  var total = totalP + totalL + totalL3 + totalL4 + totalL5 + totalL6;
                  document.getElementById('bottom').innerHTML = "Your total is $" + total.toFixed(2);
                  window.alert(foodName[1] + " x " + qty);
                  var itemList = (foodName[1] + " x " + qty + " = $" + foodPrice[1] * qty);
                  localStorage.setItem("item2", itemList); //set order summary to next page
              }


              function enter3() {
                  var qty = document.getElementById('user3').value; //get quantity
                  //display price at bottom with tax
                  var totalP = (qty * 1.0471) * foodPrice[2]; //get price
                  localStorage.setItem("total3", totalP); //set item
                  var totalL = Number(localStorage.getItem("total")); //get from box1
                  var totalL2 = Number(localStorage.getItem("total2")); //get from box 2
                  var totalL4 = Number(localStorage.getItem("total4")); //get from box 4
                  var totalL5 = Number(localStorage.getItem("total5")); //get from box5
                  var totalL6 = Number(localStorage.getItem("total6")); //get from box6
                  var total = totalL + totalP + totalL2 + totalL4 + totalL5 + totalL6;
                  document.getElementById('bottom').innerHTML = "Your total is $" + total.toFixed(2);
                  window.alert(foodName[2] + " x " + qty);
                  var itemList = (foodName[2] + " x " + qty + " = $" + foodPrice[2] * qty);
                  localStorage.setItem("item3", itemList); //set order summary to next page
              }

              //function 4
              function enter4() {
                  var qty = document.getElementById('user4').value; //get quantity
                  //display price at bottom with tax
                  var totalP = (qty * 1.0471) * foodPrice[3]; //get price
                  localStorage.setItem("total4", totalP); //set item
                  var totalL = Number(localStorage.getItem("total")); //get from box1
                  var totalL2 = Number(localStorage.getItem("total2")); //get from box 2
                  var totalL3 = Number(localStorage.getItem("total3")); //get from box3
                  var totalL5 = Number(localStorage.getItem("total5")); //get from box5
                  var totalL6 = Number(localStorage.getItem("total6")); //get from box6
                  var total = totalL + totalP + totalL2 + totalL3 + totalL5 + totalL6;
                  document.getElementById('bottom').innerHTML = "Your total is $" + total.toFixed(2);
                  window.alert(foodName[3] + " x " + qty);
                  var itemList = (foodName[3] + " x " + qty + " = $" + foodPrice[3] * qty);
                  localStorage.setItem("item4", itemList); //set order summary to next page

              }

              //function 5
              function enter5() {
                  var qty = document.getElementById('user5').value; //get quantity
                  //display price at bottom with tax
                  var totalP = (qty * 1.0471) * foodPrice[4]; //get price
                  localStorage.setItem("total5", totalP); //set item
                  var totalL = Number(localStorage.getItem("total")); //get from box1
                  var totalL2 = Number(localStorage.getItem("total2")); //get from box 2
                  var totalL3 = Number(localStorage.getItem("total3")); //get from box3
                  var totalL4 = Number(localStorage.getItem("total4")); //get from box4
                  var totalL6 = Number(localStorage.getItem("total6")); //get from box6
                  var total = totalL + totalP + totalL2 + totalL3 + totalL4 + totalL6;
                  document.getElementById('bottom').innerHTML = "Your total is $" + total.toFixed(2);
                  window.alert(foodName[4] + " x " + qty);
                  var itemList = (foodName[4] + " x " + qty + " = $" + foodPrice[4] * qty);
                  localStorage.setItem("item5", itemList); //set order summary to next page

              }

              //function6
              function enter6() {
                  var qty = document.getElementById('user6').value; //get quantity
                  //display price at bottom with tax
                  var totalP = (qty * 1.0471) * foodPrice[5]; //get price
                  localStorage.setItem("total6", totalP); //set item
                  var totalL = Number(localStorage.getItem("total")); //get from box1
                  var totalL2 = Number(localStorage.getItem("total2")); //get from box 2
                  var totalL3 = Number(localStorage.getItem("total3")); //get from box3
                  var totalL4 = Number(localStorage.getItem("total4")); //get from box4
                  var totalL5 = Number(localStorage.getItem("total4")); //get from box5
                  var total = totalL + totalP + totalL2 + totalL3 + totalL4 + totalL5;
                  document.getElementById('bottom').innerHTML = "Your total is $" + total.toFixed(2);
                  window.alert(foodName[5] + " x " + qty);
                  var itemList = (foodName[5] + " x " + qty + " = $" + foodPrice[5] * qty);
                  localStorage.setItem("item6", itemList); //set order summary to next page

              }

              //show name and price of items
              document.getElementById('mapo').innerHTML = foodName[0] + " - $" + foodPrice[0];
              document.getElementById('wonton').innerHTML = foodName[1] + " - $" + foodPrice[1];
              document.getElementById('friedrice').innerHTML = foodName[2] + " - $" + foodPrice[2];
              document.getElementById('hainam').innerHTML = foodName[3] + " - $" + foodPrice[3];
              document.getElementById('fishball').innerHTML = foodName[4] + " - $" + foodPrice[4];
              document.getElementById('pho').innerHTML = foodName[5] + " - $" + foodPrice[5];

              //****create a "maneger secet link" that allows the manipulation of piece or mark the item as Sold Out
              //make the button bigger
              bottom.onclick = function () { //enter password to make box disappear
                  var password = prompt("Enter password");
                  if (password == "item1") {
                      left1.style.visibility = "hidden";
                  }
                  if (password == "item2") {
                      right1.style.visibility = "hidden";
                  }
                  if (password == "item3") {
                      left2.style.visibility = "hidden";
                  }

                  if (password == "item4") {
                      right2.style.visibility = "hidden";
                  }
                  if (password == "item5") {
                      left3.style.visibility = "hidden";
                  }
                  if (password == "item6") {
                      right3.style.visibility = "hidden";
                  }
              }

              title.onclick = function () { //enter password to make box appear again
                  var password = prompt("Enter password");
                  if (password == "item1") {
                      left1.style.visibility = "visible";

                  }
                  if (password == "item2") {
                      right1.style.visibility = "visible";

                  }
                  if (password == "item3") {
                      left2.style.visibility = "visible";

                  }
                  if (password == "item4") {
                      right2.style.visibility = "visible";

                  }
                  if (password == "item5") {
                      left3.style.visibility = "visible";
                  }
                  if (password == "item6") {
                      right3.style.visibility = "visible";
                  }

              }


              localStorage.clear();

              checkOut.onclick = function () { //jump to next page
                  if (testing == false) {
                      window.alert("Please order before checkout.")
                  } else {
                      location.href = "Rest2.html";

                  }
              }


          }

      };
      xmlhttp.open("GET", "jsonRest.json", true);
      xmlhttp.send();

      //check reload

      var previous = null;
      var current = null;
      setInterval(function () {
          $.getJSON("jsonRest.json", function (json) {
              current = JSON.stringify(json);
              if (previous && current && previous !== current) {
                  location.reload();
              }
          });
      }, 2000);