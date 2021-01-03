// Mysql接続
var express = require('express');
const mysql = require('mysql');
var app = express();

// app.use(express.static(path.join(__dirname, 'public')));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  // database: 'gs_db'
  database: 'node_Community_hub'
});


// const app = require('../app');
var router = express.Router();


//! ルーティング=====================
router.get('/', function(req, res, next) {
  res.render('N_top', { title: 'Community_Hub' });
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

router.get('/main', function(req, res, next) {
  res.render('N_top');
});

router.get('/touroku', function(req, res, next) {
  res.render('touroku');
});






//! ルーティングここまで=====================

//! ここからpost処理================================
// 新規登録
router.post('/accountInsert',(req,res)=>{
  const name =req.body.name;
  // const nameArry =req.body.name;
  // const name = nameArry.join(',');
  const mail_adress=req.body.mail_adress;
  const login_id=req.body.login_id;
  const login_pw=req.body.login_pw;
  const post = {'name': name,'mail_adress':mail_adress ,'login_id':login_id, 'login_pw':login_pw};
  // アカウントを追加する処理
  console.log(post);
  //TOP画面に映る（ここで増田さんのスキル一覧を取得して表示。今はだた画面遷移）
  connection.query(
    'INSERT INTO Account_table SET ?',post,
    // (error, results) => {
    //  connection.query(
    //     'SELECT * FROM items',
        (error, results) => {
          res.redirect('/main');
        }
    //   );
    // }
  );
})

// コミュニティ登録
router.post('/communityInsert',(req,res)=>{
  const field =req.body.field;
  const skillArry =req.body.skill;
  const skill = skillArry.join(',');
  const purpose =req.body.purpose;
  const goal =req.body.goal;
  const current_level =req.body.current_level;
  const Desired =req.body.Desired;
  const place =req.body.place;
  const can_range =req.body.can_range;

  const post = {'field': field,'skill':skill ,'purpose':purpose, 'goal':goal,'current_level':current_level, 'Desired':Desired, 'place':place, 'can_range':can_range};
  // アカウントを追加する処理
  console.log(post);
  connection.query(
    'INSERT INTO Skill_table SET ?',post,
    // (error, results) => {
    //  connection.query(
    //     'SELECT * FROM items',
        (error, results) => {
            //TOP画面に映る（ここで増田さんのスキル一覧を取得して表示。今はだた画面遷移）
          res.redirect('/main');
        }
    //   );
    // }
  );
})

module.exports = router;
