if ($('.user__row').length > 0) {

  //tel mask validate
  $.validator.methods.tel = function(value, element) {
    return this.optional(element) || /^((\+380)[\ ]?)?(\(?\d{2}\)?[\- ]?)?[\d\- ]{9,10}$/.test(value);
  };

  //email mask validate
  $.validator.methods.email = function(value, element) {
    return this.optional(element) || /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z-])+\.)+([a-zA-Z]{2,4})+$/.test(value);
  };

  $("#r_new").validate({
    rules: {
      name: {
        required: true,
      },
      surname: {
        required: true,
      },
      email: {
        required: true,
      },
      phone: {
        required: true,
      }
    },
    // submitHandler: function(form) {
    //  form.submit();
    // }
  });

  $("#r_old").validate({
    rules: {
      phone: {
        required: true,
        minlength: 9
      }
    },
    // submitHandler: function(form) {
    // form.submit();
    //}
  });
}

if($('.reg__tabs').length>0) {
    $("#courier-form").validate({
    rules: {
      street: {
        required: true,
      },
       house: {
        required: true,
      },
    },
    // submitHandler: function(form) {
    // form.submit();
    //}
  });
}

$("#r_new").on('submit', function(e) {

  let form = $(this);
  let $userName = form.find('#user__input--name').val();
  let $userSurname = form.find('#user__input--surname').val();
  let $userEmail = form.find('#user__input--email').val();
  let $userPhone = form.find('#user__input--phone').val();
  if (form.valid()) {

    $('#r_surname').val($userSurname);
    $('#r_name').val($userName);
    $('#r_phone').val($userPhone);

    $('#reg__block--fio').text($userName + ' ' + $userSurname);
    $('#reg__block--phone').text($userPhone);
    $('#reg__block--email').text($userEmail);

    $('#popup--code').addClass('popup--active');
    $('#sms-control').focus();

    
  }
  e.preventDefault();
});

$("#r_old").on('submit', function(e) {

  let form = $(this);
  let $userPhone = form.find('.user__input--repeat_phone').val();
  if (form.valid()) {

    $('#popup--code').addClass('popup--active');
    $('#sms-control').focus();
  }
  e.preventDefault();
});

$('#form-sms').on('submit', function(e) {
  e.preventDefault();
  let $codeInput = $('#sms-control');
  let $codeText = $('.code-block__error');
  let $codePopup = $('#popup--code');

  if ($codeInput.val() != 1234) {
    $codeInput.addClass('error');
    $codeText.show();
  } else {
    $codeInput.removeClass('error');
    $codeText.hide();
    $codePopup.removeClass('popup--active');
    let form = $("form[name='reg_new']");
    let from = form.closest('.reg__point').attr('id'),
      to = form.closest('.reg__point').attr('data-to');
    secondSlide(from, to);

  }
});


$('#courier-form').on('submit', function(e) {
  e.preventDefault();
  let form = $(this);
  let $courierStreet = form.find('#r_street').val();
  let $courierHouse = form.find('#r_house').val();

  if (form.valid()) {
    let from = form.closest('.reg__point').attr('id'),
      to = form.closest('.reg__point').attr('data-to');
    secondSlide(from, to);


    let surname = $('#r_surname').val();
    let name = $('#r_name').val();

    $('#reg__block--data').text(name + ' ' + surname);
    let value = $('#r_courier').val();
    $('#reg__block-delivery').text(value);
  }
});

function secondSlide(from, to) {
  let $from = $('#' + from),
    $to = $('#' + to);
  $from.removeClass('reg__point--edit');
  $to.addClass('reg__point--edit');
  $from.find('.reg__info').slideDown(0);
  $from.find('.reg__col').slideUp(0);
  // $to.find('.reg__col').addClass('edit');
  $to.find('.reg__col').show(0);
  $to.find('.reg__info').slideUp(0);
  $from.find('.reg__back').show(0);

  if ($(window).width() < 768) {
    setTimeout(function() {
      $("html, body").animate({
        scrollTop: $to.offset().top
      }, 400);
    }, 200);
  }
}

function editSlide(par) {
  $('.reg__point').removeClass('reg__point--edit'); 
  let parent = par.closest('.reg__point');
  let col = parent.find('.reg__col');
  let info = parent.find('.reg__info');
  col.show();
  info.hide();
  parent.addClass('reg__point--edit');
}

$(document).on('click', '.reg__back', function (e) {
  editSlide($(this));
  $('.reg__back').hide(0);
}); 

 $(document).on('click', '.reg__box', function() {
    $(".reg__elem").removeClass("reg__elem--active");
    $(this).parents(".reg__elem").addClass("reg__elem--active");
    var index = $(this).parents(".reg__elem").index();
    console.log(index);
    $(".reg__desc").hide(0).eq(index).fadeIn(0);
  })

$(document).on('click', '.code-block__elem', function() {
  $('#popup--code').removeClass('popup--active')
})

$(document).on('click', '.code-block__send', function(e) {
  $(e.target).hide(0);
  $('.code-block__desc').show(0);

  let spanTime = $('.code-block__desc span[data-time]');
  let time = Number(spanTime.data('time'));
  time = time - 1;

  let intrvl = setInterval(function() {
    if (time == 0) {
      clearInterval(intrvl);
      $('.code-block__desc').hide();
      $('.code-block__send').show();

      spanTime.text(time);
      time = Number(spanTime.data('time'));
    }

    spanTime.text(time--)
  }, 1000)
})


