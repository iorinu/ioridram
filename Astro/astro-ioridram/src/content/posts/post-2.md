---
title: neovimから周りにバレずにツイートしたい
pubDate: 2026-01-29
description: "neovimpluginの紹介"
author: "iori"
image:
  url: 'https://docs.astro.build/assets/full-logo-light.png'
  alt: 'Astroのロゴ'
tags: ["blog", "programming", "neovim"]
---


## Twitterを常にいじりたい
というのは現代の病気とも言えるSNS中毒のドパガキ症状ではありますが、しっかり自分もこの症状にはまってしまっています。
研究室に配属されてから、かなり快適な勉強、研究環境を手に入れましたが、ここである問題が発生します。
研究室のパソコンでTwitterを見ているのは流石に気まずいといった問題です。

別に誰も気にしてはいないと思うのですが、大画面でサボっているのが周りに見えてしまうのは自分の気持ち的に恥ずかしいみたいに感じているわけです。
そこで考えたのは一旦タイムラインを見るのは諦めるが、ツイートだけは諦められない。
よし、neovimからツイートできるようにしよう！というわけです。
そこで作ったのが以下のプラグイン

[![GitHub Repo stars](https://gh-card.dev/repos/tomatotamada/nvim-twitter-poster.svg)](https://github.com/tomatotamada/nvim-twitter-poster)

![GitHub stars](https://img.shields.io/github/stars/tomatotamada/nvim-twitter-poster?style=social)

になります。
これは名前のとおりneovimからブラウザを開かずともツイートができるプラグインになっています。

まあツイートしかできないんですけども。

このプラグインの使い方としては、

```vim title="Neovim Command"
:Tweet Hello World!
```
のようにCOMMANDモードで1行の簡単なツイートをすることができます。

また、複数行のツイートをするときはVisualモードで選択したあとで
```vim title="Neovim Command"
:TweetSelection
```

を打つことで選択範囲をツイートすることができます。

毎回コマンドを打つのはめんどくさいので自分はキーバインドに登録して使っています。（Leader + tw）など。

画像などを入れることには対応していません。

では次に初期設定について説明します。

## 設定方法
記述中

