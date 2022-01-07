
$(window).on('load', function() {

  function readMoreText(item, more, text, block, gradient, active, value) {
    $(item).on('click', more, function(e) {
      let elem = $(e.target).parents(item);

      let btn = elem.find(more);
      let textElem = elem.find(text);
      let heightItem = elem.find(block).height();

      textElem.toggleClass(gradient);

      if (textElem.hasClass(active)) {
        btn.html(btn.data('hide'));
        textElem.css("max-height", heightItem);
      } else {
        btn.html(btn.data('show'));
        textElem.css("max-height", value);
      }
    })
  }

  function loadMoreText(text, block, item, more, active, gradient, value){
    let elems = $(text);
    elems.each(function(index, elem) {
      let heightItem = $(elem).find(block).height();
      const parentElem = $(elem).parents(item);
      const btnItem = parentElem.find(more);
      if (heightItem > value) {
        btnItem.html(btnItem.data('show'));
        btnItem.addClass(active);
        $(elem).addClass(gradient);
      }
    })
  }


  // reviewsButton

  loadMoreText('.reviews__text', '.reviews__block', '.reviews__item', '.reviews__more', 'reviews__more--active', 'reviews__text--gradient', 114);

  readMoreText('.reviews__item', '.reviews__more', '.reviews__text', '.reviews__block', 'reviews__text--active reviews__text--gradient', 'reviews__text--active', '114px');
    
  // cardtButton

  loadMoreText('.card__text', '.card__block', '.card', '.card__more', 'card__more--active', 'card__text--gradient', 299);

  readMoreText('.card', '.card__more', '.card__text', '.card__block', 'card__text--active card__text--gradient', 'card__text--active', '299px');

  // contenttButton

  loadMoreText('.content__text', '.content__block', '.content__item', '.content__more', 'content__more--active', 'content__text--gradient', 57);

  readMoreText('.content__item', '.content__more', '.content__text', '.content__block', 'content__text--active content__text--gradient', 'content__text--active', '57px');

  $('.content__more').on('click', function(){
    $(this).toggleClass('content__more--inner');
  })
  
})

  // прокрутка вверх

  var heightDevice = $(window).height();
  $(window).scroll(function () {
    hideLink();
  });

  $(window).on('resize', function () {
    heightDevice = $(window).height();
    hideLink();
  });

  function hideLink() {
    if ($(window).scrollTop() > heightDevice) {
      $('.scroll-up').fadeIn(100);
    } else {
      $('.scroll-up').fadeOut(100);
    }
  }

  $('.scroll-up').click(function (event) {
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0
    }, 700);
    return false;
  });

   function trickMob() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }


  window.addEventListener('resize', () => {
   trickMob();
  });


  window.addEventListener('scroll', () => {
    trickMob();
  });


  trickMob();

$(document).ready(function() {

  $(".user__box").on('click', function() {
    $(".user__box ").removeClass("user__box--active").eq($(this).index()).addClass("user__box--active");
    var index = $(this).index();
    $(".user__content").hide().eq(index).fadeIn()
  })

  //sliders 

  if (window.Swiper) {

    let info_swiper = new Swiper(".info__wrap", {
      slidesPerView: 1,
      spaceBetween: 24,
      pagination: {
        clickable: true,
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".info__block .swiper-button-next",
        prevEl: ".info__block .swiper-button-prev",
      },
      allowTouchMove: true,
    });

    let similar_swiper = new Swiper(".similar__wrap", {
      slidesPerView: 4,
      spaceBetween: 4,
      navigation: {
        nextEl: ".similar__holder .swiper-button-next",
        prevEl: ".similar__holder .swiper-button-prev",
      },
      pagination: {
        clickable: true,
        el: ".swiper-pagination",
      },
      allowTouchMove: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        1023: {
          slidesPerView: 3,
        },
        1250: {
          slidesPerView: 4,
        }
      }
    });

    let reviews_swiper = new Swiper(".reviews__wrap", {
      slidesPerView: 3,
      spaceBetween: 24,
      navigation: {
        nextEl: ".reviews__block .swiper-button-next",
        prevEl: ".reviews__block .swiper-button-prev",
      },
      allowTouchMove: true,
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1023: {
          slidesPerView: 3,
        }
      }
    });

    let product_swiper = new Swiper(".product__list", {
      slidesPerView: "auto",
      allowTouchMove: true,
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });

    let brends_swiper = new Swiper(".brends__list", {
      slidesPerView: "auto",
      allowTouchMove: true,
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });

    let breadcrumbs_swiper = new Swiper(".catalog__slider", {
      slidesPerView: "auto",
      allowTouchMove: true,
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });

    let card_swipers = new Swiper(".card__slider", {
      slidesPerView: "auto",
      allowTouchMove: true,
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });

    let advantages_swiper = new Swiper(".swiper-advantages", {
      slidesPerView: 4,
      spaceBetween: 24,
      allowTouchMove: true,
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        560: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        841: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1023: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      }
    });

    let card_gallery = new Swiper(".swiper-card", {
      direction: 'vertical',
      slidesPerView: 5,
      spaceBetween: 13,
      mousewheel: false,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      navigation: {
        nextEl: ".card__gallery .swiper-button-next",
        prevEl: ".card__gallery .swiper-button-prev",
      },
      breakpoints: {
        320: {
          direction: 'horizontal',
          spaceBetween: 30,
          slidesPerView: 4,
        },
        1023: {
          direction: 'vertical',
          spaceBetween: 13,
          slidesPerView: 5,
        },
      }
    });

    let single_gallery = new Swiper(".swiper-single", {
      //slidesPerView: 1,
      mousewheel: false,
      navigation: {
        nextEl: ".swiper-card .swiper-button-next",
        prevEl: ".swiper-card .swiper-button-prev",
      },
      thumbs: {
        swiper: card_gallery,
      },
      breakpoints: {
        320: {
          slidesPerView: 'auto',
        },
        1023: {
          slidesPerView: '1',
        },
      }
    });

}


// add basket product
function addProductBasket(elem, active){
  $(elem).on('click', function() {
    $(this).toggleClass(active);
  })
}

addProductBasket('.card__btn--favorites','card__btn--active');
addProductBasket('.rcatalog__favorites', 'rcatalog__favorites--active');
addProductBasket('.product__cart', 'product__cart--active')

  // проверка в каталоге, чтобы могли вводить только цифры

  $(document).on('input', '.catalog__input', function() {
    $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё.,-]/, ''));
  });

  $(document).on('blur', '.catalog__input', function() {
    let maxValue = $('.catalog__wrapper').data('max');
    if ($(this).val() > maxValue) {
      $(this).val(maxValue);
    }
  });

  $(document).on('change', '.check__input', function() {

    let minValue = $(this).data('min');
    let maxValue = $(this).data('max');
    if (minValue != undefined || maxValue != undefined) {
      console.log($(this));
      $('.catalog__input--min').val(minValue);
      $('.catalog__input--max').val(maxValue);
    }
  })

  // скролл в карточке товара

  $(document).on('click', '.card__box', function() {
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 800);
    return false;
  });

  $(document).on('click', '.catalog__control', function() {
    $('.catalog__result').toggleClass('catalog__result--active');
  })

  $(document).on('click', '.filter__block', function() {
    $('.popup--catalog').addClass('popup--active');
  })

  //popups

  $(document).on('click', '.catalog__btn-mob', function(e) {
    $('.popup').removeClass('popup--active');
    $('.wrap').removeClass('popup--bg wrap--active');
  })

  $(document).on('click', '.popup__close-order', function() {
    $('.popup').removeClass('popup--active');
    $('.wrap').removeClass('wrap--active');
  })

  $(document).on('click', '.rcard__conditions', function() {
    $('.popup--conditions').addClass('popup--active');
  })

  $(document).on('click', '.card__size', function() {
    $('.wrap').addClass('wrap--active');
    $('#popup--size').addClass('popup--active');
  }) 

  $(document).on('click', '.equipment__desc', function(){
    $('#popup--change').addClass('popup--active');
  })

  $(document).on('click', '.product__notification, .card__btn--available', function(){
    $('#popup--msg').addClass('popup--active');
  })

  $(document).on('click','.availability__close', function() {
    $('.popup').removeClass('popup--active');
  })

    $(document).on('mousedown', function(e){
      if ($('.popup--city').is(e.target) && $('.city__inner').has(e.target).length === 0) {
     // console.log($('.popup--city').has(e.target).length);
      $('.popup--city').removeClass('popup--active');
      $('.wrap').removeClass('wrap--active');
      $('.popup--menu').removeClass('popup--bg');
    }
    })

  $(document).click(function (e) {
    if ( $('.popup--conditions').is(e.target) && $('.conditions__inner').has(e.target).length === 0) {
      $('.popup--conditions').removeClass('popup--active');
    };

     if ($('.popup--order').is(e.target) && $('.popup--order').has(e.target).length === 0) {
      $('.popup').removeClass('popup--active');
      $('.wrap').removeClass('wrap--active');
    }

    if ($('.popup--size').is(e.target) && $('.popup--size').has(e.target).length === 0) {
      $('.popup').removeClass('popup--active');
      $('.wrap').removeClass('wrap--active');
    }

    if ($('.popup--code').is(e.target) && $('.popup--code').has(e.target).length === 0) {
      $('.popup').removeClass('popup--active');
    }

    if ($('#popup--msg').is(e.target) && $('#popup--msg').has(e.target).length === 0) {
      $('.popup').removeClass('popup--active');
    }

    if ($('#popup--send').is(e.target) && $('#popup--send').has(e.target).length === 0) {
      $('.popup').removeClass('popup--active');
    }
});

  //city

  $(document).on('click', '.city__item', function(e) {
    let value = $(e.target).text();
    console.log(value);
    $('.city__selection .select2-selection__rendered').text(value);
     $('.main-header__map').text(value);
  })

  $(document).on('click', '.city__close, .city__btn', function(e) {
    $('.wrap').removeClass('wrap--active');
    $('.popup--city').removeClass('popup--active');
    $('.popup--menu').removeClass('popup--bg');
  })

  // map

  $('.main-header__map').on('click', function() {
    $('.wrap').addClass('wrap--active');
    $('.popup--city').addClass('popup--active');
  })

  $('.popup .main-header__map').on('click', function() {
    $('.popup--menu').toggleClass('popup--bg');
  })

  // card

 

  $('.card__btn--buy').on('click', function() {
    $('.wrap').addClass('wrap--active');
    $('.popup--order').addClass('popup--active');
  })

// анимация кнопки загрузить еще

  $('.product__btn').on('click', function(e) {
    $(e.currentTarget).addClass('product__btn--active');

    setTimeout(function() {
      $(e.currentTarget).removeClass('product__btn--active');
    }, 1000)

  })

  $(document).on('click', '.catalog__subtitle', function(e) {
    let elem = $(e.target).parents('.catalog__inner').find('.check__submenu');
    console.log(elem);
    $(elem).slideToggle(250);
    $(e.target).toggleClass('catalog__subtitle--hide');
  })

  $('.catalog__more').on('click', function(e) {
    let block = $(this).parents('.catalog__inner');
    let elems = block.find('.check__item[style*="display: none"]');
    let currentButton = $(e.currentTarget);
    elems.addClass('toggleclass');
    let hideElems = currentButton.parents('.catalog__inner').find('.toggleclass');
    hideElems.slideToggle(150);

    let showText = $(e.currentTarget).data('show');
    let hideText = $(e.currentTarget).data('hide');
    currentButton.toggleClass('catalog__more--hide');
    if ($(e.currentTarget).hasClass('catalog__more--hide')) {
      currentButton.find('span').text(hideText);
    } else {
      currentButton.find('span').text(showText);
    }

  })

  $(document).on('mouseover click', '.product__bg', function(e) {
    let elem = e.currentTarget;
    let indexElem = $(elem).data('index');
    let parent = $(elem).parents('.product__item');
    let block = parent.find('.product__bg');
    let image = parent.find('.product__image');
    let size = parent.find('.product__wrap-size')

    block.removeClass('product__bg--active');
    $(this).addClass('product__bg--active');

    image.removeClass('product__image--visible');
    image.eq(indexElem).addClass('product__image--visible');

    size.find('.product__size').removeClass("product__size--active");
    size.find('.product__size').eq(indexElem).addClass("product__size--active");

  })

  $('.mob-menu__open, .mob-block__phone, .mob-menu__link--search').on('click', function() {
    $('.popup--menu').toggleClass('popup--active');
  })

  $('.mob-menu__close').on('click', function() {
    $('.popup--menu').toggleClass('popup--active');
  })

  $('.mob-menu__link--search').on('click', function() {
    $('.popup__input').focus();
  })

  $('.mob-menu__link--catalog').on('click', function(e) {

    $('.popup--inner').toggleClass('popup--active');
    e.preventDefault();
  })

  $('.popup__col').on('click', function() {
    var text = $(this).text();
    $(this).parents('li').find('.popup__submenu').addClass('popup__submenu--active')
    $('.popup__title').addClass('popup__title--active');
    $('.popup__title--active').text(text);
    $('.popup__elem').addClass('popup__elem--inner');
  })

  $('.popup__elem').on('click', function() {
    $('.popup__submenu').removeClass('popup__submenu--active');
    $('.popup__title').removeClass('popup__title--active');
    let title = $('.popup__title').data('title');
    $('.popup__title').text(title);
    //if($('.popup__elem').hasClass('popup__elem--inner')){
    $('.popup--inner').removeClass('popup--active');
    //}
  })

  $('.popup--inner').on('click', '.popup__title--active', function() {
    let title = $('.popup__title').data('title');
    $('.popup__title').text(title);
    $('.popup__submenu').removeClass('popup__submenu--active');
    $('.popup__title').removeClass('popup__title--active');
  })


  let iframeContainer = $('#map');
  if ($('#map').length > 0) {

    function loadScript() {
      const script_google_map = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC8I82DhSjgntcm5mDcEvM1iIrpCm4NGwg&callback=initMap&v=weekly&channel=2';
      let script = document.createElement('script');
      script.src = script_google_map;
      document.body.append(script);
    };

    let advancedOffset = 150;
    let iframeContainerOffsetTop = Math.round(iframeContainer.offset().top);
    let windowHeight = $(window).height();

    // При загрузке страницы делаем проверку, не находится ли наш div в поле видимости, если находится, то мы сразу в него вставляем iframe
    // Если этого не делать, и страница вдруг окажется маленькой по высоте где не будет скролла, то наш div останется без iframe
    /*if ($(window).scrollTop() >= (iframeContainerOffsetTop - windowHeight - advancedOffset)) {
      iframeContainer.addClass('active');
    }*/

    $(window).scroll(function() {
      if ($(this).scrollTop() >= (iframeContainerOffsetTop - windowHeight - advancedOffset)) {
        // При прокрутке страницы делаем проверку на наличие iframe внутри div, если его нет, то добавляем в него iframe
        // Если не делать эту проверку, то при каждом скролле у нас в div будет обновляться iframe и по новой загружаться
        if (!iframeContainer.hasClass('active')) {
          iframeContainer.addClass('active');
          loadScript();
        }
      }
    });
  }

    function sizeSelect(){
    if($('.rcard__wrap').length>0) {
      $('.size__select').select2({
      selectionCssClass: 'size__selection',
      dropdownCssClass: 'size__dropdown',
      placeholder: 'Оберіть розмір',
      language: "uk"
    });
    }

  }


//function citySelect() {
   //if($('.city__wrap-select').length>0) {
    $('select[name="city"]').select2({ 
 selectionCssClass: 'city__selection',
dropdownCssClass: 'city__dropdown',
language: "uk"
});

$('select[name="city"]').on('select2:open', function (e) {
  $('.select2-search input').prop('focus', false);
});

//}


function filterSelect(){
  if($('.filter__text').length>0) {
    $('.filter__select').select2({
     selectionCssClass: 'filter__selection',
      dropdownCssClass: 'filter__dropdown',
      language: "uk"
  });
  }
}


  $(window).on('resize', function(e) {
    filterSelect();
   // citySelect();
    sizeSelect();
  })

  filterSelect();
//citySelect();
sizeSelect();
  

});


let map;

function initMap() {
  const mapOptions = {
    zoom: 8,
    center: {
      lat: 49.8131973,
      lng: 24.042569
    },
  };
  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  const marker = new google.maps.Marker({
    position: {
      lat: 49.8131973,
      lng: 24.042569
    },
    map: map,
  });



  const mapTitle = document.querySelector('#map').getAttribute('data-title');
  const infowindow = new google.maps.InfoWindow({
    content: `<p class="map__title">${mapTitle}</p>`,
  });

  infowindow.open(map, marker);
}

$(document).on('input', '.catalog__field', function(e) {

  let isFound;
  $(e.target).parents('.catalog__inner--brends').find('.check__label').each((i, el) => {
    let is = $(el).html().toLowerCase().indexOf(e.target.value.toLowerCase()) != -1;
    $(el).parents('.check__item').css("display", is ? "flex" : "none");
    if (is) isFound = true;
  });
})

function highlightBtnClear(){
  if($('.product__item .favorites__input:checked').length > 0) {
    $('.favorites__clear').addClass('favorites__clear--active');
  } else {
  $('.favorites__clear').removeClass('favorites__clear--active');
  }
}

function countOnFavorites() {
  let count = $('.product__item .favorites__input:checked').length;
  let arrWord = ['товарів', 'товар', 'товари'];
  let elem = $('#favorites__word');
   if (count == 0) {
    elem.text(arrWord[0]);
  } else if (count == 1) {
    elem.text(arrWord[1]);
  }  else if (count > 1 &&  count < 5) {
    elem.text(arrWord[2]);
  } else {
  elem.text(arrWord[0]);
  }

  $('#favorites__number').text(count);
}

$(document).on('change', '#f_all', function(){
    $('.favorites__input').prop('checked', $(this).prop('checked'));  
    highlightBtnClear();
     countOnFavorites();
})

$(document).on('change', '.product__item .favorites__input', function(){    
    $('#f_all').prop('checked', false);
    
    if ($('.product__item .favorites__input').length=== $('.product__item .favorites__input:checked').length) {
       $('#f_all').prop('checked', true);
    }    
  highlightBtnClear();
  countOnFavorites();
})

highlightBtnClear();
 countOnFavorites();

  if($('.popup--availability').length>0) {
    $("form[name='availability']").validate({
      rules: {
        phone: {
         required: true,
          minlength: 9
        }
      },
      errorPlacement: function(error, element) {
        error.hide();
      },
      submitHandler: function(form) {
        form.submit();
      }
    });
  }

  $(document).on('click', '.brends__box', function(e) {
    let target = $(this).attr('href');
    console.log(target);
    $('html, body').animate({scrollTop: $(target).offset().top}, 300);
    e.preventDefault();
  });



$('input[type="tel"]').mask("+380 (99) 999-99-99");