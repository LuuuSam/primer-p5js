//Inspirado en un cuadro que vi en gta san andreas. https://oyster.ignimgs.com/mediawiki/apis.ign.com/grand-theft-auto-san-andreas/e/e6/2021-11-16_22_57_20-Greenshot.jpg?width=1280 (No encontre una imagen mejor jaja)

function setup() {
    createCanvas(350, 350);
  }
  
  function draw() {
    console.log("x:" + mouseX + "y:" + mouseY);
    background("#F5C8BC"); //Color rosa de fondo
    if (mouseIsPressed) {
      background("white");
    }
    //Cuadrado negro
    fill("#6B7B8E");
    rect(0, 169, 190, 195);
    stroke(2);
    //-------------------
    if (mouseIsPressed) {
      fill("black");
      rect(0, 169, 190, 195);
      noStroke(0);
    }
    //Cuadrado rojo
    fill("#8FBBAF");
    rect(189, 100, 165, 155);
    stroke(2);
    //-------------------
    if (mouseIsPressed) {
      fill("#F80000");
      rect(189, 100, 165, 155);
      noStroke(0);
    }
  
    //Cuadrados amarillos
    fill("#ACDEAA");
    rect(116, 50, 55, 50);
    stroke(2);
    //-------------------
    if (mouseIsPressed) {
      fill("#FFA424"); //Cuadrado de arriba
      rect(116, 50, 55, 50);
      noStroke(0);
    }
    //----------------------------------------
    fill("#ACDEAA");
    rect(189, 255, 65, 65);
    stroke(2);
    if (mouseIsPressed) {
      fill("#FFA424"); //Cuadrado de abajo
      rect(189, 255, 65, 65);
      noStroke(0);
    }
  
    //Cuadrado verde
    fill("#D6F8B8");
    rect(114, 100, 75, 70);
    stroke(2);
    //-------------------
    if (mouseIsPressed) {
      fill("#008000");
      rect(114, 100, 75, 70);
      noStroke(0);
    }
  
    //Cuadrado celeste
    fill("#ADEBBE");
    rect(0, 49, 120, 120);
    stroke(2);
    //-------------------
    if (mouseIsPressed) {
      fill("#0CB7F2");
      rect(0, 49, 120, 120);
      noStroke(0);
    }
    //Cuadrado azul oscuro
    fill("#A4C5C6");
    rect(210, 0, 100, 100);
    stroke(2);
    //-------------------
    if (mouseIsPressed) {
      fill("#004173");
      rect(210, 0, 100, 100);
      noStroke(0);
    }
  
    //Tocar del número 1 al 8, solo cuando se presiona el mouse
    if (keyIsPressed) {
      if (key == "1") {
        textSize(32);
        fill("black");
        text("M", 39, 32);
        //-----separo para no volverme loca jaja
      } else if (key == "2") {
        textSize(26);
        fill("black");
        text("A", 50, 90);
        //---------------------------------
      } else if (key == "3") {
        textSize(18);
        fill("black");
        text("D", 140, 80);
        //---------------------------------
      } else if (key == "4") {
        textSize(22);
        fill("black");
        text("D", 150, 140);
        //---------------------------------
      } else if (key == "5") {
        textSize(42);
        fill("white");
        text("D", 83, 280);
        //---------------------------------
      } else if (key == "6") {
        textSize(25);
        fill("black");
        text("O", 213, 295);
        //---------------------------------
      } else if (key == "7") {
        textSize(52);
        fill("black");
        text("G", 258, 180);
        //---------------------------------
      } else if (key == "8") {
        textSize(28);
        fill("black");
        text("G", 251, 50);
      }
    }
  }
  