$(document).ready(function () {


  function getSelectedTabIndex() { 
    return $tabs.tabs('option', 'active');
  }


  var $tabs = $('.tabs').find('li');

  $tabs.on('click', function (event, ui) {
    var previousSelection = $(this).siblings();
    previousSelection.removeClass('active');
    $(this).addClass('active');
    $('.tab').hide();
    var currentTab = $(this).find('a').attr('href');
    console.log(currentTab);
    $(currentTab).show();
  });



});