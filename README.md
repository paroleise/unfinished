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

* 内部サーバー上でホームページの挙動を確認する  
1. http-server をインストールする。  
`npm install -g http-server`  
(npmがインストールされていない場合、まずnode.jsをインストールしてください。)
2. このリポジトリのルートディレクトリ（README.mdと同階層）に移動する。  
3. http-serverを起動する。  
`http-server docs`  
4. ブラウザから表示されたIPアドレス+ポート番号（例：192.777.0.0.1:8080)にアクセスするとindex.htmlが確認できます。  
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
1. package.jsonからnpmのパッケージをグローバルにインストールする。  
`npm i`  
↑ node_modulesというフォルダが生成されます。
2. 今回のpackage.jsonには、フロントエンドのタスクランナー「gulp」と、SASSをCSSに変換するgulpプラグイン「gulp-sass」が入っているので、パッケージをインストールすることでこれをPCで使えるようになります。
3. gulpを起動する。  
`npx gulp`  
このコマンドを打つと、docs/assets/scss/style.scssを監視し、scssが更新されたときにcssに反映してくれるようになります。  
監視をやめるにはctrl+Cしてください。

参考URL:
[絶対つまずかないGulp 4入門（2019年版）インストールとSassを使うまでの手順](https://ics.media/entry/3290/)