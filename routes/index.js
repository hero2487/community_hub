// Mysql接続
var express = require('express');
const mysql = require('mysql');
var app = express();

// app.use(express.static(path.join(__dirname, 'public')));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'gs_db'
  // database: 'node_Community_hub'
});


// const app = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('N_top', { title: 'Community_Hub' });
// connection.query('SELECT*FROM akiya_bukken',
// (error, results)=>{
//   console.log(results);
// }
// );
});

router.get('/test', function(req, res, next) {
  res.render('N_test', { title: 'Community_Hub' });
});

router.get('/N_newAccount', function(req, res, next) {
  res.render('N_newAccount');
});

router.get('/N_login', function(req, res, next) {
  res.render('N_login');
});

// router.get('/top', function(req, res) {
//   res.render('N_top');
// });


// router.get('/main', function(req, res, next) {
//   res.render('N_top');
// });

// router.post('/accountInsert',(req,res)=>{
//   console.log("あああ");
//   // アカウントを追加する処理
//   //TOP画面に映る（ここで増田さんのスキル一覧を取得して表示。今はだた画面遷移）
//   connection.query(
//     'SELECT * FROM Account_table',
//     (error, results) => {
//       console.log(results);
//       res.render('N_top');
//       // ,{items:results}
//     }
//     );
// })

module.exports = router;
