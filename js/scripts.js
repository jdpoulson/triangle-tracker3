$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();
    var side = parseInt($("input#length").val());
    var side2 = parseInt($("input#length2").val());
    var side3 = parseInt($("input#length3").val());

    if ((side === side2) && (side2 === side3) && (side === side3)) {
      $("#equilateral").show();
      $("#isosceles").hide();
      $("#scalene").hide();
      $("#not-a-triangle").hide();
    };
    if (((side === side2) && (side > side3) && (side2 > side3)) || ((side2 === side3) && (side2 > side) && (side3 > side)) || ((side === side3) && (side > side2) && (side3 > side2))) {
      $("#equilateral").hide();
      $("#isosceles").show();
      $("#scalene").hide();
      $("#not-a-triangle").hide();
    };
    if (((side > side2) && (side > side3) && (side2 > side3)) || ((side2 > side) && (side2 > side3) && (side > side3)) || ((side2 > side) && (side2 > side3) && (side3 > side)) || ((side3 > side) && (side3 > side2) && (side > side2)) || ((side3 > side) && (side3 > side2) && (side2 > side)) || ((side > side2) && (side > side3) && (side3 > side2))) {
      $("#equilateral").hide();
      $("#isosceles").hide();
      $("#scalene").show();
      $("#not-a-triangle").hide();
    };
    if ((side === 0) || (side2 === 0) || (side3 === 0)) {
      $("#equilateral").hide();
      $("#isosceles").hide();
      $("#scalene").hide();
      $("#not-a-triangle").show();
    };
  });
})
