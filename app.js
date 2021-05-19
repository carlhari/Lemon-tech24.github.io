function openMenu(){
            document.getElementById('menu').style.width = "300px";
            document.getElementById('icon').style.opacity= "0";
            document.getElementById('icon').disabled= true;

        }

function closeMenu(){
            document.getElementById('menu').style.width = "0";
            document.getElementById('content').style.marginLeft= "0";
            document.getElementById('icon').style.opacity= "1";


        }



function homepage(){
        document.getElementById('homepage').style.display= "initial";
        document.getElementById('pages').style.display= "none";
        document.getElementById('page1').style.display= "none";
        document.getElementById('page2').style.display= "none";
}


function changePage1() {

          document.getElementById('homepage').style.display= "none";
          document.getElementById('page1').style.display= "initial";
          document.getElementById('page2').style.display= "none";
          document.getElementById('pages').style.display= "initial";

}


function changePage2() {

          document.getElementById('homepage').style.display= "none";
          document.getElementById('page1').style.display= "none";
          document.getElementById('page2').style.display= "initial";
          document.getElementById('pages').style.display= "initial";

}










