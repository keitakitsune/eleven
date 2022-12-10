//expressモジュールの読み込み
const express = require('express')
//expressのインスタンス化
const app = express()

//body-parserモジュールを読み込み初期化する
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
//HTTPリクエストのボディをjsonで扱えるようになる
app.use(bodyParser.json());


//8080番ポートでサーバーを待ちの状態にする。
//またサーバーが起動したことがわかるようにログを出力する
app.listen(8080, () => {
  console.log("サーバー起動中");
});

//GETリクエストの設定
//'/get'でアクセスされた時に、JSONとログを出力するようにする
// app.get('/', (req, res)=> {
//     res.json({ "pet": "dog"});
//     console.log('GETリクエストを受け取りました')
//     res.end();
// })

//POSTリクエストの作成
app.post("/", (req, res) => {
    //HTTPリクエストのボディを出力
    console.log(req.body);
    console.log("POSTリクエストを受け取りました");
    res.end();
  });