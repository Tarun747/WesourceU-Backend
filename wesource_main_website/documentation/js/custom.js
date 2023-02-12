var currentActiveSection = 'start-installation';

function onePageCurrentSection() {
  $('.docs-content-inner').each(function (index) {
    var h = $(this).offset().top;
    var y = $(window).scrollTop();
    if (
      y + 50 >= h &&
      y < h + $(this).height() &&
      $(this).attr('id') != currentActiveSection
    ) {
      currentActiveSection = $(this).attr('id');
    }
  });
  return currentActiveSection;
}

/*==============================================================
 Smooth Scroll - START CODE
 ==============================================================*/
$('.inner-link').smoothScroll({
  speed: 900,
  offset: -0,
});

$('.sec-link').smoothScroll({
  speed: 900,
  offset: -0,
});

/*==============================================================
 Custom scrollbar
 ==============================================================*/

(function ($) {
  $(window).load(function () {
    $('#leftCol').mCustomScrollbar({
      set_width: false /*optional element width: boolean, pixels, percentage*/,
      set_height: false /*optional element height: boolean, pixels, percentage*/,
      horizontalScroll: false /*scroll horizontally: boolean*/,
      scrollInertia: 0 /*scrolling inertia: integer (milliseconds)*/,
      mouseWheel: true /*mousewheel support: boolean*/,
      mouseWheelPixels: 'auto' /*mousewheel pixels amount: integer, "auto"*/,
      autoDraggerLength: true /*auto-adjust scrollbar dragger length: boolean*/,
      autoHideScrollbar: false /*auto-hide scrollbar when idle*/,
      scrollButtons: {
        /*scroll buttons*/ enable: false /*scroll buttons support: boolean*/,
        scrollType:
          'continuous' /*scroll buttons scrolling type: "continuous", "pixels"*/,
        scrollSpeed:
          'auto' /*scroll buttons continuous scrolling speed: integer, "auto"*/,
        scrollAmount: 80 /*scroll buttons pixels scroll amount: integer (pixels)*/,
      },
      advanced: {
        updateOnBrowserResize: true /*update scrollbars on browser resize (for layouts based on percentages): boolean*/,
        updateOnContentResize: true /*auto-update scrollbars on content resize (for dynamic content): boolean*/,
        autoExpandHorizontalScroll: false /*auto-expand width for horizontal scrolling: boolean*/,
        autoScrollOnFocus: false /*auto-scroll on focused elements: boolean*/,
        normalizeMouseWheelDelta: false /*normalize mouse-wheel delta (-1/1)*/,
      },
      contentTouchScroll: true /*scrolling by touch-swipe content: boolean*/,
      callbacks: {
        onScrollStart:
          function () {} /*user custom callback function on scroll start event*/,
        onScroll:
          function () {} /*user custom callback function on scroll event*/,
        onTotalScroll:
          function () {} /*user custom callback function on scroll end reached event*/,
        onTotalScrollBack:
          function () {} /*user custom callback function on scroll begin reached event*/,
        onTotalScrollOffset: 0 /*scroll end reached offset: integer (pixels)*/,
        onTotalScrollBackOffset: 0 /*scroll begin reached offset: integer (pixels)*/,
        whileScrolling:
          function () {} /*user custom callback function on scrolling event*/,
      },
      theme:
        'dark-2' /*"light", "dark", "light-2", "dark-2", "light-thick", "dark-thick", "light-thin", "dark-thin"*/,
    });
  });
})(jQuery);

/*==============================================================
 Scroll To Top
 ==============================================================*/

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.scrollToTop').fadeIn();
  } else {
    $('.scrollToTop').fadeOut();
  }
});
//Click event to scroll to top
$('.scrollToTop').click(function () {
  $('html, body').animate(
    {
      scrollTop: 0,
    },
    1000
  );
  return false;
});

/*==============================================================
 Copy to Clipboard
 ==============================================================*/
$('pre').each(function () {
  $(this)
    .prev('.copy-clipboard')
    .on('click', function () {
      var code = $(this).siblings('pre').text();
      $(this)
        .siblings('pre')
        .append(`<textarea readonly class="clipboard"></textarea>`);
      $(this).siblings('pre').find('textarea.clipboard').val(code);
      $(this).siblings('pre').find('textarea.clipboard').select();
      document.execCommand('copy');
      $(this).text('Copied');
      $(this).siblings('pre').find('textarea.clipboard').remove();
      setTimeout(function () {
        $('.copy-clipboard').text('Copy');
      }, 2000);
    });
});
