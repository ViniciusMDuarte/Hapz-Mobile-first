
// função TABS
function openCity(evt, idDoElemento) {
    // Variáveis declaradas
    var i, tabcontent, tablinks;
  
    // Pega todos os elemento com a class="tabcontent"  e os esconde
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Pega todos os elementos com a class="tablinks" e remove a class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Mostra o current tab, e add a "active" class para button que abriu a guia
    document.getElementById(idDoElemento).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("link-creditos").click();

  // Troca imagem de plano de fundo
  function trocafundo () {
    document.getElementById('trocarbgi').style.backgroundImage = "url('img/background/background-man.jpg')";
  }
  document.getElementById("tab-dados").click();
  