const title_colors = document.querySelectorAll('#title');
const important_colors = document.querySelectorAll('#important');
const atag_colors = document.querySelectorAll('a');
const atag = {
  setColor:function(color) {

      var i = 0;
      while(true){
          atag_colors[i].style.color = color;
          i++;
          if(i >= atag_colors.length){
              i = 0;
              break;
              }
          }
  },

  setbackgroundColor:function(color){

      var i = 0;
      while(true){
          atag_colors[i].style.backgroundColor = color;
          i++;
          if(i >= atag_colors.length){
              i = 0;
              break;
              }
          }
  }
}

const body = {
  setColor:function(color) {
    document.querySelector('body').style.color = color;
  },
  setbackgroundColor:function(color) {
    document.querySelector('body').style.backgroundColor = color;
  }
};

let important = {
  setColor:function(color) {
    
    var i = 0;
    while(true){
      important_colors[i].style.color = color;
      i++;
      if (i >= important_colors.length){
        i = 0;
        break;
      }
    }
  },
  setbackgroundColor:function(color) {
    var i = 0;
    while(true){
      important_colors[i].style.backgroundColor = color;
      i++;
      if (i >= important_colors.length){
        i = 0;
        break;
      }
    }
  }
};

let title = {
      
  setColor:function(color) {
    
    var i = 0;
    while(true){
      title_colors[i].style.color = color;
      i++;
      if (i >= title_colors.length){
        i = 0;
        break;
      }
    }
  },
  setbackgroundColor:function(color) {

    var i = 0;
    while(true){
      title_colors[i].style.backgroundColor = color;
      i++;
      if (i >= title_colors.length){
        i = 0;
        break;
      }
    }
  }
};