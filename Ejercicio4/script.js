$(document).ready(init);

function init(jQuery) {
  CurrentYear();
  
  initTableSorter();
}

function CurrentYear() {
  var thisYear = new Date().getFullYear()
  $("#currentYear").text(thisYear);
}


// Table Sorter
//$(document).ready(initTableSorter);
  
function initTableSorter() {
  // call the tablesorter plugin
  $("[data-sort=table]").tablesorter({
    // Sort on the second column, in ascending order
    sortList: [[1,0]]
  });
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Search field

var $rows = $('#tablesort tr');
$('#searchstudent').keyup(function() {
  var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase().split(' ');

  $rows.hide().filter(function() {
    var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
    var matchesSearch = true;
    $(val).each(function(index, value) {
      matchesSearch = (!matchesSearch) ? false : ~text.indexOf(value);
    });
    return matchesSearch;
  }).show();
});

// Filter by Country

$(function() {
  $("#country").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#tablesort > tbody > tr").filter(function() {      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

// Filter by City

$(function() {
  $("#city").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#tablesort > tbody > tr").filter(function() {      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

