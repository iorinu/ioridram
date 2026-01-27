// src/scripts/glitch.ts

// クラス定義（ロジックの本体）
class GlitchController {
  private element: HTMLElement;
  private originalText: string;
  private chars: string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  private intervalId: number | null = null;
  private isHovering: boolean = false;

  constructor(element: HTMLElement) {
    this.element = element;
    this.originalText = element.innerText;

    // クリックで発動
    this.element.addEventListener("click", () => this.start());

    // カーソルを変えて「クリックできそう」感を出す
    this.element.style.cursor = "pointer";
  }

  public start(): void {
    if (this.intervalId !== null) return;

    let counter = 0;
    const duration = 1000;
    const speed = 30;
    const totalSteps = duration / speed;

    this.intervalId = window.setInterval(() => {
      let hackedText = "";

      for (let i = 0; i < this.originalText.length; i++) {
        if (i < Math.floor((counter / totalSteps) * this.originalText.length)) {
          hackedText += this.originalText[i];
        } else {
          hackedText += this.getRandomChar();
        }
      }

      this.element.innerText = hackedText;
      counter++;

      if (counter > totalSteps) {
        this.stop();
      }
    }, speed);
  }

  private stop(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.element.innerText = this.originalText;
  }

  private getRandomChar(): string {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

// ▼▼▼ ここが重要：自動初期化ロジック ▼▼▼

function initializeGlitchEffect() {
  // ".glitch-text" というクラスがついている要素を全部探す
  const targets = document.querySelectorAll(".glitch-text");

  targets.forEach((el) => {
    // 既に適用済みかチェック（二重適用防止）
    if (el.getAttribute("data-glitch-initialized") === "true") return;

    // クラスを適用
    new GlitchController(el as HTMLElement);

    // 適用済みフラグを立てる
    el.setAttribute("data-glitch-initialized", "true");
  });
}

// ページ読み込み時に実行
document.addEventListener("DOMContentLoaded", initializeGlitchEffect);

// Astroのビュー遷移（SPAモード）を使っている場合用
document.addEventListener("astro:page-load", initializeGlitchEffect);
