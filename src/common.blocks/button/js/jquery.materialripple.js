/* jQuery MaterialRipple Plugin */
/* 2014 Dominik Biedebach */

$.fn.materialripple = function (options) {
  const defaults = {
    rippleClass: 'ripple-wrapper',
  };
  $.extend(defaults, options);

  $('body').on('animationend webkitAnimationEnd oAnimationEnd', `.${defaults.rippleClass}`, function () {
    removeRippleElement(this);
  });

  const addRippleElement = function (element, e) {
    const $element = $(element);
    const $window = $(window);
    $element.addClass('button_active');
    $element.append(`<span class="added ${defaults.rippleClass}"></span>`);
    newRippleElement = $element.find('.added');
    newRippleElement.removeClass('added');

    // get Mouse Position
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    // for each ripple element, set sizes
    elementWidth = $element.outerWidth();
    elementHeight = $element.outerHeight();
    d = Math.max(elementWidth, elementHeight);
    newRippleElement.css({ width: d, height: d });

    const rippleX = e.clientX - $element.offset().left - d / 2 + $window.scrollLeft();
    const rippleY = e.clientY - $element.offset().top - d / 2 + $window.scrollTop();

    // Position the Ripple Element
    newRippleElement.css('top', `${rippleY}px`).css('left', `${rippleX}px`).addClass('animated');
  };

  var removeRippleElement = function (element) {
    const $element = $(element);
    const $button = $element.parent();
    $element.remove();
    $button.removeAttr('style').removeClass('button_active').blur();
  };

  // add Ripple-Wrapper to all Elements
  $(this).addClass('has-ripple');

  // Let it ripple on click
  $(this).on('click', function (e) {
    addRippleElement(this, e);
  });
};
