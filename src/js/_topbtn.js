export function topbtn() {
  window.onload=function(){
    let Animation = function() {
    //アイコン位置取得
    let pageTop =  document.getElementById('page__top');

    //要素の位置座標を取得
    let rect = pageTop.getBoundingClientRect();
    //topからの距離
    let scrollTop = rect.top + window.pageYOffset;

    if(scrollTop > 420){
      pageTop.classList.add('show');
    }  else {
      pageTop.classList.remove('show');
    }
  }
  window.addEventListener('scroll', Animation);
  }
}