 $('#timer').countdown('2020/01/01', function(event) {
    $(this).html(event.strftime(""
    + '<div class="date"><span>%D</span></div><div class="semicolom"><div></div><div></div></div>'
    + '<div class="date"><span>%H</span></div><div class="semicolom"><div></div><div></div></div>'
    + '<div class="date"><span>%m</span></div><div class="semicolom"><div></div><div></div></div>'
    + '<div class="date"><span>%S</span></div>'
    ));
  });
