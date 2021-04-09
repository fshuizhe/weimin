---
layout: null
---

$(function() {
  var toc     = $('.toc-link'), /* 文章链接列表 */
      sidebar = $('#sidebar'), /* 边栏区域 */
      main    = $('#main'), /* 内容区域 */
      menu    = $('#menu'), /* 目录显示开关按钮 */
      x1, y1;

  // run this function after pjax load.
  var afterPjax = function() {
    // open links in new tab.
    $('#main').find('a').filter(function() {
      return this.hostname != window.location.hostname;
    }).attr('target', '_blank');

    // discus comment.
    {% if site.disqus_shortname %}
    (function() {
      var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
      dsq.src = '//{{ site.disqus_shortname }}' + '.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
    {% endif %}

    // your scripts
  };
  afterPjax();


  // NProgress
  NProgress.configure({ showSpinner: false });


  // Pjax
  $(document).pjax('#sidebar-avatar, .toc-link', '#main', {
    fragment: '#main',
    timeout: 3000
  });

  $(document).on({
    'pjax:click': function() {
      NProgress.start(); // 进度条
      main.removeClass('fadeIn');
    },
    'pjax:end': function() {
      afterPjax();
      NProgress.done();
      main.scrollTop(0).addClass('fadeIn');
      menu.add(sidebar).removeClass('open');
      {% if site.google_analytics %}
      ga('set', 'location', window.location.href);
      ga('send', 'pageview');
      {% endif %}
    }
  });


  // Tags Filter 标签轮换。sidebar-tag为主目录列表。
  $('#sidebar-tags').on('click', '.sidebar-tag', function() { // ul#sidebar-tags下的li.sidebar-tags接收click事件
    var filter = $(this).data('filter'); //data方法获取li标签中“data-xx”后的内容
    if (filter === 'all') {
      toc.fadeIn(350); // 文章链接列表显示
    } else {
      toc.hide(); // 文章链接列表隐藏
      $('.toc-link[data-tags~=' + filter + ']').fadeIn(350); // 符合的标签显示
    }
    $(this).addClass('active').siblings().removeClass('active'); // 选中的标签激活，其他标签封印（改变颜色和边框）
  });


  // Menu
  menu.on('click', function() {
    $(this).add(sidebar).toggleClass('open');
  });

});
