// ブラウザバック禁止
history.pushState(null, null, window.location);
window.addEventListener('popstate', (e) => {
    history.go(1);
});

//soundの再生用関数
function playSound(sound) {
    const data = new Audio(sound);
    data.play();
}

//イベント発火用
function event() {
    sound = setInterval(() => {
        playSound('./sound/error2.mp3');
    }, 1980);
}

//イベント停止用
function quite(){
    clearInterval(sound);
    console.log('Stop Event!');
};

//ロード完了後実行
window.onload = event();