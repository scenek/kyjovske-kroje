var mixlepixle = {

  init : function () {
    // obecna kontrola na js
    if (!document.getElementsByTagName) return false;
    // obrazky
    if (document.getElementById('showimg')) {
      var links = document.getElementById('showimg').childNodes;
      for (var i=0; i < links.length; i++) {
        if (links[i].tagName == 'A') {
          links[i].onclick = mixlepixle.show;
        }
      }
    }
    // menicko
    var p = document.getElementsByTagName('span');
    for (var i=0; i<p.length; i++) {
      if (p[i].className == 'hide') {
        p[i].style.display = 'none';
      }
    }
    p = document.getElementById('menu').childNodes;
    for (var i=0; i<p.length; i++) {
      p[i].onmouseover = mixlepixle.activate;
      p[i].onclick = mixlepixle.setSekce;
    }
    p = document.getElementById('menu2');
    p.style.height = '20px';
    mixlepixle.deactivate();
  },

  activate : function () {
    mixlepixle.deactivate();
    this.className = 'selected';
    if (this.id != '') {   
      var p = document.getElementById('menu2-'+this.id);
      p.className = '';
    }
  },
	
  deactivate : function () {
    var p = document.getElementById('menu').childNodes;
    for (var i=0; i<p.length; i++) {
      p[i].className = '';
    }
    p = document.getElementById('menu2').childNodes;
    for (var i=0; i<p.length; i++) {
      if (p[i].tagName == 'DIV') {
        p[i].className = 'deactive';
      }
    }    
  },
  
  setSekce : function (sekce) {
/*    if (sekce != null) {
      document.getElementById(sekce).className = 'selected';
      document.getElementById('menu2-'+sekce).className = '';
    }*/
  },
  
  show : function() {
    var img = document.getElementById('presentation').childNodes;
    for (var i=0; i < img.length; i++) {
      if (img[i].tagName == 'IMG') {
        img[i].src = this.href;
        document.getElementById('showimg').scrollIntoView(true);
        return false;
      }
    }  
  }
}

window.onload = mixlepixle.init;