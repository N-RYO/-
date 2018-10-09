$(function () {
  // ローディング画面
  // コンテンツの読む込みが完了するまでにユーザーの負担を軽減するために
  // load セレクタwindow
  $(window).on('load', function () {
    $('#loading').fadeOut(1000, function () {
      $('#wrapper').fadeIn(500);
    });
  });

  // フルスクリーン表示
  // resize イベント
  $(window).on('load resize', function () {
    var wH = $(window).height();
    // console.log(wH);
    // css メソッド
    $('#header').css('height', wH);
  });

  // キャラ診断
  $('#btn').on('click', function () {
    // フォーム部品の取得 val(); valueの略
    var name = $('#name').val();
    // console.log(name);
    if (name === '') {
      // alert('名前を入力してください！');
      swal({
        title: "エラー",
        text: "名前を入力してください。",
        type: "warning"
      });
      return; // 処理終了
    }

    // 配列を用意する
    // 職業をまとめた配列
    var jobs = ['戦士', '騎士', '魔法使い', '盗賊', '冒険家'];
    // 形容詞をまとめた配列
    var charas = [];

    // console.log(jobs[]); 0 ~ 4
    // 配列から値をランダムに取ってくる
    // Mathオブジェクト　（組み込みオブジェクト）
    // Math.random() 0.0000001 ~ 0.9999999 4.5555555
    // console.log(Math.random() * 5);
    // Math.floor() 小数点切り捨て
    // console.log(Math.floor(Math.random() * jobs.length));
    // 職業の配列からランダムに取ってきて、yourJobにセット
    var num = Math.floor(Math.random() * jobs.length);
    var yourJob = jobs[num];
    // 形容詞の配列からランダムに取ってきて、yourCharaにセット


    var result = name + 'さんは「' + yourJob + '」です。';
    $('#result').text(result);
  });
});