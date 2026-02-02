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

### 1. Twitter API キーの取得

まずはTwitter Developer Portalでアプリを作成し、APIキーを取得する必要があります。

1. [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard) にアクセス
2. 「Projects & Apps」から新しいプロジェクトを作成
3. App permissionsを「Read and Write」に設定（ツイートするために書き込み権限が必要）
4. 以下の4つのキーをメモしておく
   - API Key
   - API Key Secret
   - Access Token
   - Access Token Secret

### 2. プラグインのインストール

lazy.nvimを使用している場合：

```lua title="lazy.nvim"
{
  "tomatotamada/nvim-twitter-poster",
  config = function()
    require("nvim-twitter-poster").setup({
      api_key = "YOUR_API_KEY",
      api_key_secret = "YOUR_API_KEY_SECRET",
      access_token = "YOUR_ACCESS_TOKEN",
      access_token_secret = "YOUR_ACCESS_TOKEN_SECRET",
    })
  end,
}
```


### 3. キーバインドの設定

毎回コマンドを打つのは面倒なので、キーバインドを設定しておくと便利です。

```lua title="keymaps.lua"
-- 1行ツイート用（入力プロンプトが表示される）
vim.keymap.set("n", "<leader>tw", ":Tweet ", { desc = "Tweet" })

-- 選択範囲をツイート
vim.keymap.set("v", "<leader>tw", ":TweetSelection<CR>", { desc = "Tweet selection" })
```

### セキュリティに関する注意

APIキーをdotfilesなどで公開リポジトリに上げてしまうと悪用される恐れがあります。
環境変数を使って設定するか、gitignoreに含まれる別ファイルに保存することをおすすめします。


## まとめ

これでneovimからシームレスにツイートできるようになりました。
ターミナルの見た目はコードを書いているようにしか見えないので、周囲の目を気にせずツイートできます。


何かバグや機能追加のリクエストがあれば、GitHubのIssueやPRをお待ちしています！

