function display() {
  var x = document.getElementsByClassName("list-pic");
  if (x[0].style.display === "none") {
    for(i=0; i<3; i++){
      x[i].style.display = "block";
      document.getElementsByClassName("bgvideo")[0].style.display = 'none';
      document.body.style.backgroundImage = "url('images/alt.jpg')";
      document.body.style.backgroundSize = "100% 900px";
    }
  }
  else {
    for(i=0; i<3; i++){
      x[i].style.display = "none";
    }
    document.getElementsByClassName("bgvideo")[0].style.display = 'block';
    document.getElementsByClassName("bgvideo")[0].load();

  }
}

function left_box(){
  document.querySelector(".box-left").style.display ='block';
  document.getElementsByClassName("left")[0].style.width = "100%";
  document.getElementsByClassName("center")[0].style.display = 'none';
  document.getElementsByClassName("right")[0].style.display = 'none';
  document.getElementsByClassName("image1")[0].src = '/images/gohan.jpg';
  document.getElementsByClassName("box")[0].style.margin = "90px 0px 0px 0px";
  document.getElementsByClassName("image1")[0].style.width= "40%";
  document.getElementsByClassName("image1")[0].style.height = '415px'
  document.getElementsByClassName("button-next")[0].style.display = 'block';
  document.getElementsByClassName("button-next1")[0].style.display = 'block';
  document.getElementsByClassName("ytube")[0].style.display = 'inline';
  document.getElementsByClassName("text")[0].style.display = 'block';
}

function center_box(){
    document.querySelector(".center").style.display ='block';
  document.querySelector(".box-left").style.display = 'none';
  document.getElementsByClassName("right")[0].style.display = 'none';
  document.getElementsByClassName("center")[0].style.transform = 'none';
  document.getElementsByClassName("center")[0].style.width = "100%";
  document.getElementsByClassName("image2")[0].src = '/images/vid.jpg';
  document.getElementsByClassName("box")[0].style.margin = "90px 0px 0px 0px";
  document.getElementsByClassName("image2")[0].style.width= "40%";
  document.getElementsByClassName("image2")[0].style.height = '415px'
  document.getElementsByClassName("button-next2")[0].style.display = 'block';
  document.getElementsByClassName("button-next3")[0].style.display = 'block';
  document.getElementsByClassName("ytube1")[0].style.display = 'inline';
  document.getElementsByClassName("text1")[0].style.display = 'block';
}

function right_box(){
  document.querySelector(".right").style.display ='block';
  document.getElementsByClassName("left")[0].style.display = 'none';
  document.getElementsByClassName("center")[0].style.display = 'none';
  document.getElementsByClassName("right")[0].style.width = "100%";
  document.getElementsByClassName("image3")[0].src = '/images/vegi.jpg';
  document.getElementsByClassName("box")[0].style.margin = "90px 0px 0px 0px";
  document.getElementsByClassName("image3")[0].style.width= "40%";
  document.getElementsByClassName("image3")[0].style.height = '415px'
  document.getElementsByClassName("button-next4")[0].style.display = 'block';
  document.getElementsByClassName("button-next5")[0].style.display = 'block';
  document.getElementsByClassName("ytube2")[0].style.display = 'inline';
  document.getElementsByClassName("text2")[0].style.display = 'block';
  
  
  
  
  
  
  
  
  
}