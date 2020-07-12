//spanタグ,time部分の表示時間
let time = 30;
function countdown() {
    const timeDisplay = document.getElementById('time');
    timer = setInterval(() => {
        timeDisplay.innerText = time;
        if (time == 0) {
            clearInterval(timer);
            timeup();
        };
        time--;
    }, 1000);
};

//soundの再生用関数
function playSound(sound) {
    const data = new Audio(sound);
    data.play();
};

//タイムアップ後の関数
function timeup() {
    setTimeout(() => {
        document.getElementById('second').click();
    }, 2000);
};

//Warningイベントスタートの関数
function warningEvent() {
    alert('このサイトはジョークサイトです。\n\
このサイトは人の不安を煽るような内容や音声が流れます。\n\
コンソールに quite() の入力でプログラムの停止ができます');
    playSound('./sound/voice.mp3');
    playSound('./sound/error1.mp3');
    countdown();
    return 0;
};

//イベント停止用
function quite() {
    clearInterval(timer);
    console.log('Stop Event!');
};

//ページ読み込み完了後に実行
window.onload = () => {
    //ブラウザバック不可
    history.pushState(null, null, window.location);
    window.addEventListener('popstate', (e) => {
        history.go(1);
    });
    //イベント開始
    warningEvent();
};
