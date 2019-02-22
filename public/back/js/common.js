// 在第一个ajax开始发送时, 开启进度条
$(document).ajaxStart(function() {
    // 开启进度条
    NProgress.start();
  })
  
  // 在全部的ajax完成时, 关闭进度条
  $(document).ajaxStop(function() {
    // 模拟网络延迟
    setTimeout(function() {
      // 结束进度条
      NProgress.done();
    }, 500);
  });