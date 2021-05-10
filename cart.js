"use strict";

/*Friends Coffee Shopping Cart, Ana De Leon, 4/11/2021*/

var subtotal = 0;

var cartHTML = "<table><thead><tr><th>Item Description</th><th>Price</th><th>Qty</th><th>Total</th></tr></thead><tbody>";

for(var i=0; i< item.length; i++){ 
cartHTML = cartHTML + "<tr><td>" + item[i] + "</td>";
cartHTML = cartHTML + "<td>$" + price[i] + "</td>";
cartHTML = cartHTML + "<td>" + qty[i] + "</td>";
var cost = price[i]*qty[i];
cartHTML = cartHTML + "<td>$" + cost + "</td>"; 
subtotal += cost;
}

var salesTax = Math.round(subtotal*0.05) ;
var orderTotal = subtotal + salesTax; 
salesTax += ".00";

cartHTML += "</tbody><tfoot><tr><td colspan='3'>Subtotal</td><td>$"+subtotal+"</td></tr>";
cartHTML += "<tr><td colspan='3'>Sales Tax*</td><td>$"+salesTax+"</td></tr>";
cartHTML += "<tr><td colspan='3'>Total</td><td>$"+orderTotal+"</td></tr></tfoot></table>";
document.getElementById("cart").innerHTML=cartHTML;

var now = new Date();
var day3 = now.getDate()+3;
now.setDate(day3);

document.getElementById("sdate").innerHTML = "* Orders placed today will be shipped by " + now.toLocaleDateString() ;












