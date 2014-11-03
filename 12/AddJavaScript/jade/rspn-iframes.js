(function() {
  jQuery(function($) {
    var responsiveIframe;
    responsiveIframe = function() {
      return $('iframe').each(function() {
        var ih, ip, ipw, ipwh, iw;
        iw = $(this).width();
        ih = $(this).height();
        ip = $(this).parent().width();
        ipw = ip / iw;
        ipwh = Math.round(ih * ipw);
        return $(this).css({
          'width': ip,
          'height': ipwh
        });
      });
    };
    responsiveIframe();
    return $(window).resize(function() {
      return responsiveIframe();
    });
  });

}).call(this);
