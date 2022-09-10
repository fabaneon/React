// ColorEditor의 메소드를 낮,밤 색상을 적용하여 실행시키는 기능입니다.
function daynight(self){

    if(self.value === 'Day Mode'){
      self.value = 'Night Mode';

      body.setColor('black');
      body.setbackgroundColor('white');
      title.setColor('white');
      title.setbackgroundColor('grey');
      important.setColor('indianred');
    }

    else                        {
      self.value = 'Day Mode';

      body.setColor('white');
      body.setbackgroundColor('black');
      title.setColor('yellow');
      title.setbackgroundColor('black');
      important.setColor('green');
    }
}
