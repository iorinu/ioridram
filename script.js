// script.ts
// DOMContentLoadedイベントのリスナー
document.addEventListener("DOMContentLoaded", function () {
    // 【C++との違い】
    // JSでは null かもしれない要素をそのまま使うと落ちますが、
    // TSでは "この変数は HTMLElement だよ（nullじゃないよ）" と型アサーションするか、
    // nullチェックを強制されます。
    // querySelector は Element | null を返します
    var targetElement = document.querySelector("h1");
    // targetElement が null の可能性を排除する（Safety Check）
    if (!targetElement) {
        console.error("Error: h1 element not found!");
        return;
    }
    // 文字セットの定義 (string型)
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    // 元のテキスト (string型)
    var originalText = targetElement.innerText;
    // タイマーID (number型 または null)
    // ブラウザの setInterval は数値を返します
    var intervalId = null;
    /**
     * ランダムな文字を1つ返す関数
     * @returns {string}
     */
    function getRandomChar() {
        var randomIndex = Math.floor(Math.random() * chars.length);
        return chars[randomIndex];
    }
    /**
     * ハッキングエフェクトを実行
     */
    function startHackingEffect() {
        if (intervalId !== null)
            return;
        var counter = 0;
        var duration = 1500;
        var speed = 50;
        var totalSteps = duration / speed;
        // setIntervalの戻り値を intervalId に代入
        intervalId = window.setInterval(function () {
            var hackedText = "";
            // 文字列生成ループ
            for (var i = 0; i < originalText.length; i++) {
                // ここで演出ロジック（今回は単純ランダム）
                if (i < Math.floor((counter / totalSteps) * originalText.length)) {
                    // 少しずつ元に戻す演出を入れるならここ
                    hackedText += originalText[i];
                }
                else {
                    hackedText += getRandomChar();
                }
            }
            targetElement.innerText = hackedText;
            counter++;
            if (counter > totalSteps) {
                if (intervalId !== null) {
                    clearInterval(intervalId);
                    intervalId = null;
                }
                targetElement.innerText = originalText;
            }
        }, speed);
    }
    // イベントリスナーの登録
    targetElement.addEventListener("click", function () {
        startHackingEffect();
    });
});
