//今日の運勢は...（文字）
//占う（図形）
//今日の運勢は...（図形）
  let result = document.getElementById('result');
  // document.getElementById('result').textContent = items[random];
    // document.getElementById('result').innerHTML = `<storong>${items[random]}</strong>`;
  let btn = document.getElementById('btn');
  let result_CN = document.getElementsByClassName('result');

//今日の運勢は（文字）→　結果の定義
//今日の運勢は（図形）→　結果の定義
  var items = ['大吉','中吉','小吉','吉','凶'];
  var result_CN_R = ['#EEE8AA','#98FB98','#AFEEEE','#D87093','#FFEFD5'];

//関数の書き方
//function 関数名(){
//処理
//}



//let cchangeText = function(){} と関数とlet を組み合わせる事もできる。

    btn.addEventListener('click', function(){
        var random = Math.floor( Math.random() * items.length);
        //文字と色両方ともランダムに出力したい場合下記必要
        var random2 = Math.floor( Math.random() * result_CN_R.length);
        // ver random = items.length - 1; //Math.roundの場合は四捨五入するので-1が必要。Math.floorの場合は切り捨てるので-1は不要。


        result.innerText = `今日の運勢は \n ${items[random]}`;
        // result.textContent = `今日の運勢は \n ${items[random]}`; //文字のみ
        // result.innerHTML = `今日の運勢は <br> ${items[random]}`; //HTML

        //[0]はgetElementsByClassNameの指定番号（上から番号は自動付番される。）
        // result_CN[0].style.backgroundColor = result_CN_R[random];
        //文字と色両方ともランダムに出力したい場合下記必要、そうでない場合上記必要
        result_CN[0].style.backgroundColor = result_CN_R[random2];

        console.log(`"今日の運勢は" ${items[random] + result_CN_R[random]}`);

      });