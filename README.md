**2018年5月4日 第16回博麗神社例大祭**  
paroleise × Satellite Himawari コンピレーションEP
"unfinished"  
特設サイト

[https://paroleise.github.io/unfinished/](https://paroleise.github.io/unfinished/)  

スペース : 【I10 ab】  
サークル名 : paroleise, Satellite Himawari  
曲数 : 5曲入り  
定価 : 700円  




***
mochiへの指南書  

http-serverを使ってスマホから実機動作をしたり、gulpを使ってscssをcssにコンパイルするための手順を書いてます。  
コーディングの際の参考にしてください。  
※ターミナルコマンドは、このリポジトリのルートディレクトリ(README.mdと同階層)で行ってください。

* 大まかな手順  
**HTMLを更新する → docs/index.htmlを書く**  
**CSSを更新する → docs/assets/scss/style.scssを書いて、gulpを起動してcssに変換する**  
**JSを更新する → docs/assets/js/script.jsを書く**  
**画像を入れる → docs/assets/imgに画像を入れる**  
**スマホでの動作確認 → 下記参照**

※jQueryとBootstrapはCDNですでに読み込んでいるので、そのまま書いてOKです。

***
詳細  
※ターミナル操作はルートディレクトリ(README.mdと同階層)で行ってください  
  
* 内部サーバー上でホームページの挙動を確認する  
1. http-serverで` docs`を起動する。  
`http-server docs`  
2. ブラウザから表示されたIPアドレス+ポート番号（例：192.777.0.0.1:8080)にアクセスするとindex.htmlが確認できます。  
※サーバー上のファイルを読み込んでいるので、直接HTMLファイルを見るよりもCSSの反映が遅くなったりします。更新を確認したい場合はスーパーリロード等してください。  

  
* スマホからPCの内部サーバーにアクセスし、スマホでの動作を確認する  
1. PCとスマホを同じWi-Fiに接続する。
2. 「システム環境設定」>「ネットワーク」>「詳細」>「TCP/IP」からPCのIPアドレスを調べる。（例：192.777.7.7）
3. このリポジトリのルートディレクトリに移動し、http-serverを起動する。  
`http-server docs`
4. スマホ上ブラウザから、 http://IP情報:ポート番号 で内部サーバーにアクセス可能。
5. 実機でレスポンシブの挙動を確認する。

参考URL：
[Macで立てたローカルサーバにスマホからアクセスする](https://qiita.com/shh-nkmr/items/ca134c6e39df6ecf9d4b)

  
* gulpを起動して、scssをcssに変換する  
1. gulpを起動する。  
`npx gulp`  
2. docs/assets/scss/style.scssを書く
gulpが起動している状態でscssを保存すると、docs/assets/css/style.cssにコンパイルしてくれます。 
監視をやめるにはctrl+Cしてください。

参考URL:
[絶対つまずかないGulp 4入門（2019年版）インストールとSassを使うまでの手順](https://ics.media/entry/3290/)
