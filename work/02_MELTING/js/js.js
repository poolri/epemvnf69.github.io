// DOM이 로드된 후에 스크립트가 실행되도록 합니다.
document.addEventListener('DOMContentLoaded', function() {
  // .btn_menu 버튼을 찾습니다.
  const btnMenu = document.querySelector('.btn_menu');
  const header = document.querySelector('header'); // header 요소를 찾습니다.

  // 버튼에 클릭 이벤트 리스너를 추가합니다.
  btnMenu.addEventListener('click', function() {
    // header 요소에 'on' 클래스를 토글합니다.
    header.classList.toggle('on');
  });
});
