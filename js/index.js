// ステッキヘッダーボタン
$(function () {
    $('.wrap').hide().fadeIn(3000);
  });
  $('.btn2').on('click', function () {
    $(window).scrollTop(0);
  });

window.addEventListener('load', (event) => {

  document.getElementById('btn3').addEventListener('click', () => {

    // Aboutの表示位置を取得
    var About = document.getElementById('About');
    var content_position = About.getBoundingClientRect();

    // Aboutへ移動
    window.scrollTo( 0, content_position.top);

  });
});
  $('.btn3').on('click', function () {
    $(window).scrollTop(1000);
  });
  $('.btn4').on('click', function () {
    $(window).scrollTop(1850);
  });
  $('.btn5').on('click', function () {
    $(window).scrollTop(2600);
  });
  $('.btn6').on('click', function () {
    $(window).scrollTop(3200);
  });

  
  $('.btn2-2').on('click', function () {
    $(window).scrollTop(0);
  });
  $('.btn3-2').on('click', function () {
    $(window).scrollTop(370);
  });
  $('.btn4-2').on('click', function () {
    $(window).scrollTop(740);
  });
  $('.btn5-2').on('click', function () {
    $(window).scrollTop(990);
  });
  $('.btn6-2').on('click', function () {
    $(window).scrollTop(1290);
  });