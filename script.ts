// script.ts

// DOMContentLoadedイベントのリスナー
document.addEventListener("DOMContentLoaded", () => {
  // 【C++との違い】
  // JSでは null かもしれない要素をそのまま使うと落ちますが、
  // TSでは "この変数は HTMLElement だよ（nullじゃないよ）" と型アサーションするか、
  // nullチェックを強制されます。

  // querySelector は Element | null を返します
  const targetElement = document.querySelector("h1");

  // targetElement が null の可能性を排除する（Safety Check）
  if (!targetElement) {
    console.error("Error: h1 element not found!");
    return;
  }

  // 文字セットの定義 (string型)
  const chars: string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  // 元のテキスト (string型)
  const originalText: string = targetElement.innerText;

  // タイマーID (number型 または null)
  // ブラウザの setInterval は数値を返します
  let intervalId: number | null = null;

  /**
   * ランダムな文字を1つ返す関数
   * @returns {string}
   */
  function getRandomChar(): string {
    const randomIndex: number = Math.floor(Math.random() * chars.length);
    return chars[randomIndex];
  }

  /**
   * ハッキングエフェクトを実行
   */
  function startHackingEffect(): void {
    if (intervalId !== null) return;

    let counter: number = 0;
    const duration: number = 1500;
    const speed: number = 50;
    const totalSteps: number = duration / speed;

    // setIntervalの戻り値を intervalId に代入
    intervalId = window.setInterval(() => {
      let hackedText: string = "";

      // 文字列生成ループ
      for (let i = 0; i < originalText.length; i++) {
        // ここで演出ロジック（今回は単純ランダム）
        if (i < Math.floor((counter / totalSteps) * originalText.length)) {
          // 少しずつ元に戻す演出を入れるならここ
          hackedText += originalText[i];
        } else {
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
  targetElement.addEventListener("click", () => {
    startHackingEffect();
  });
});
