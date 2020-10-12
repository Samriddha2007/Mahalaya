const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint  = Matter.Constraint;


var gr1,gr2,gr3,gr4,gr5;
var blo1,blo2,blo3,blo4,blo5,blo6,blo7,blo8,blo_x,blo_y;
var blo9,blo10,blo11,blo12,blo13,blo14,blo15,blo16,blo17,blo18,blo19,blo20;
var blo21,blo22,blo23,blo24,blo25,blo26,blo27,blo28,blo29,blo30,blo31,blo32;
var blo33,blo34,blo35,blo36,blo37,blo38,blo39,blo40,blo41,blo42,blo43,blo44;
var blo45,blo46,blo47,blo48,blo49,blo50,blo51,blo52,blo53,blo54,blo55,blo56;

var gr6,gr7,gr8,gr9,gr10,g11,gr12,gr13;

var bl1,bl2,bl3,bl4,bl5,bl6,bl7,bl8,bl9,bl10,bl11,bl12;
var bl13,bl14,bl15,bl16,bl17,bl18,bl19,bl20,bl21,bl22,bl23,bl24;
var bl25,bl26,bl27,bl28,bl29,bl30,bl31,bl32,bl33,bl34,bl35,bl36,bl37;
var bl38,bl39,bl40,bl41,bl42,bl43,bl43,bl44,bl45,bl46,bl47,bl48,bl49;

var bo1,bo2,bo3,bo4,bo5,bo6,bo7,bo8;
var bo9,bo10,bo11,bo12,bo13,bo14,bo15,bo16,bo17,bo18,bo19,bo20;
var bo21,bo22,bo23,bo24,bo25,bo26,bo27,bo28,bo29,bo30,bo31,bo32;
var bo33,bo34,bo35,bo36,bo37,bo38,bo39,bo40,bo41,bo42,bo43,bo44;

var score = 0;

var backgroundImg;

function preload()
{
   getBG();
}

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(1350,650);

  
   blo1 = new Box_1(450,180,50,50);
   blo2 = new Box_1(550,180,50,50);
   blo3 = new Box_1(500,180,50,50);
   blo4 = new Box_1(450,160,50,50);
   blo5 = new Box_1(550,160,50,50);
   blo6 = new Box_1(500,160,50,50);
   blo7 = new Box_1(450,140,50,50);
   blo8 = new Box_1(550,140,50,50);
   blo_x = new Box_1(450,120,50,50);
   blo_y = new Box_1(550,120,50,50);

   blo9  = new Box_1(620,180,50,50);
   blo10 = new Box_1(670,180,50,50);
   blo11 = new Box_1(720,180,50,50);
   blo12 = new Box_1(620,160,50,50);
   blo13 = new Box_1(670,160,50,50);
   blo14 = new Box_1(720,160,50,50);
   blo15 = new Box_1(620,140,50,50);
   blo16 = new Box_1(670,140,50,50);
   blo17 = new Box_1(720,140,50,50);
   blo18 = new Box_1(620,120,50,50);
   blo19 = new Box_1(720,120,50,50);
   blo20 = new Box_1(670,120,50,50);

   blo21 = new Box_1(810,180,50,50);
   blo22 = new Box_1(860,180,50,50);
   blo23 = new Box_1(910,180,50,50);
   blo24 = new Box_1(810,160,50,50);
   blo25 = new Box_1(860,160,50,50);
   blo26 = new Box_1(910,160,50,50);
   blo27 = new Box_1(810,140,50,50);
   blo28 = new Box_1(860,140,50,50);
   blo29 = new Box_1(910,140,50,50);
   blo30 = new Box_1(810,120,50,50);
   blo31 = new Box_1(860,120,50,50);
   blo32 = new Box_1(910,120,50,50);

   blo33 = new Box_1(980,180,50,50);
   blo34 = new Box_1(1030,180,50,50);
   blo35 = new Box_1(1080,180,50,50);
   blo36 = new Box_1(980,160,50,50);
   blo37 = new Box_1(1030,160,50,50);
   blo38 = new Box_1(1080,160,50,50);
   blo39 = new Box_1(980,140,50,50);
   blo40 = new Box_1(1030,140,50,50);
   blo41 = new Box_1(1080,140,50,50);
   blo42 = new Box_1(980,120,50,50);
   blo43 = new Box_1(1030,120,50,50);
   blo44 = new Box_1(1080,120,50,50);

   blo45 = new Box_1(1150,180,50,50);
   blo46 = new Box_1(1200,180,50,50);
   blo47 = new Box_1(1250,180,50,50);
   blo48 = new Box_1(1150,160,50,50);
   blo49 = new Box_1(1200,160,50,50);
   blo50 = new Box_1(1250,160,50,50);
   blo51 = new Box_1(1150,140,50,50);
   blo52 = new Box_1(1200,140,50,50);
   blo53 = new Box_1(1250,140,50,50);
   blo54 = new Box_1(1150,120,50,50);
   blo55 = new Box_1(1200,120,50,50);
   blo56 = new Box_1(1250,120,50,50);

   gr1 = new Ground(500,220,150,10);
   gr2 = new Ground(670,220,150,10);
   gr3 = new Ground(860,220,150,10);
   gr4 = new Ground(1030,220,150,10);
   gr5 = new Ground(1200,220,150,10);

   gr6  = new Ground(500,430,200,10);
   gr7  = new Ground(720,430,200,10);
   gr8  = new Ground(940,430,200,10);
   gr9 =  new Ground(1160,430,200,10);

   gr10 = new Ground(500,645,200,10);
   gr11 = new Ground(720,645,200,10);
   gr12 = new Ground(940,645,200,10);
   gr13 = new Ground(1160,645,200,10);

   bl1  = new Box_2(425,380,50,50);
   bl2 = new Box_2(475,380,50,50);
   bl3 = new Box_2(525,380,50,50);
   blx_1 = new Box_2(575,380,50,50);
   bl4 = new Box_2(445,360,50,50);
   bl5 = new Box_2(475,360,10,50);
   blx = new Box_2(500,360,30,50);
   bl6 = new Box_2(525,360,10,50);
   blx_2 = new Box_2(575,360,50,50);
   bl7 = new Box_2(425,340,50,50);
   bl8 = new Box_2(475,340,50,50);
   bl9 = new Box_2(525,340,50,50);
   blx_3 = new Box_2(575,340,50,50);
   bl10 = new Box_2(425,320,50,50);
   bl11 = new Box_2(475,320,50,50);
   bl12 = new Box_2(525,320,50,50);
   blx_4 = new Box_2(575,320,50,50);


   bl13  = new Box_2(670,380,50,50);
   bl14 = new Box_2(720,380,50,50);
   bl15 = new Box_2(770,380,50,50);
   bl16 = new Box_2(670,360,50,50);
   bl17 = new Box_2(720,360,50,50);
   bl18 = new Box_2(770,360,50,50);
   bl19 = new Box_2(670,340,50,50);
   bl20 = new Box_2(720,340,50,50);
   bl21 = new Box_2(770,340,50,50);
   bl22 = new Box_2(670,320,50,50);
   bl23 = new Box_2(720,320,50,50);
   bl24 = new Box_2(770,320,50,50);

   bl25 = new Box_2(880,380,50,50);
   bl26 = new Box_2(930,380,50,50);
   bl27 = new Box_2(980,380,50,50);
   bl28 = new Box_2(880,360,50,50);
   bl29 = new Box_2(930,360,50,50);
   bl30 = new Box_2(980,360,50,50);
   bl31 = new Box_2(880,340,50,50);
   bl32 = new Box_2(930,340,50,50);
   bl33 = new Box_2(980,320,50,50);
   bl34 = new Box_2(880,320,50,50);
   bl35 = new Box_2(980,300,50,50);
   bl36 = new Box_2(930,300,50,50);

   bl38 = new Box_2(1090,380,50,50);
   bl39 = new Box_2(1140,380,50,50);
   bl40 = new Box_2(1190,380,50,50);
   bl41 = new Box_2(1090,360,50,50);
   bl42 = new Box_2(1140,360,50,50);
   bl43 = new Box_2(1190,360,50,50);
   bl44 = new Box_2(1090,340,50,50);
   bl45 = new Box_2(1140,340,50,50);
   bl46 = new Box_2(1190,320,50,50);
   bl47 = new Box_2(1090,320,50,50);
   bl48 = new Box_2(1190,300,50,50);
   bl49 = new Box_2(1140,300,50,50);
   
   bo1 = new Box_3(425,580,50,50);
   bo2 = new Box_3(475,610,50,50);
   bo3 = new Box_3(525,610,50,50);
   bo4 = new Box_3(575,610,50,50);
   bo5 = new Box_3(425,560,50,50);
   bo6 = new Box_3(425,540,50,50);
   bo7 = new Box_3(425,520,50,50);

   bo9  = new Box_3(670,580,50,50);
   bo10 = new Box_3(720,580,50,50);
   bo11 = new Box_3(770,580,50,50);
   bo12 = new Box_3(670,560,50,50);
   bo13 = new Box_3(720,560,50,50);
   bo14 = new Box_3(770,560,50,50);
   bo15 = new Box_3(670,540,50,50);
   bo16 = new Box_3(720,540,50,50);
   bo17 = new Box_3(770,540,50,50);
   bo18 = new Box_3(670,520,50,50);
   bo19 = new Box_3(720,520,50,50);
   bo20 = new Box_3(770,520,50,50);

   bo21 = new Box_3(915,580,50,50);
   bo22 = new Box_3(965,580,50,50);
   bo23 = new Box_3(1015,580,50,50);
   bo24 = new Box_3(915,560,50,50);
   bo25 = new Box_3(965,560,50,50);
   bo26 = new Box_3(1015,560,50,50);
   bo27 = new Box_3(915,540,50,50);
   bo28 = new Box_3(965,540,50,50);
   bo29 = new Box_3(1015,540,50,50);
   bo30 = new Box_3(915,520,50,50);
   bo31 = new Box_3(965,520,50,50);
   bo32 = new Box_3(1015,520,50,50);

   bo33  = new Box_3(1110,580,50,50);
   bo34 = new Box_3(1160,580,50,50);
   bo35 = new Box_3(1210,580,50,50);
   bo36 = new Box_3(1110,560,50,50);
   bo37 = new Box_3(1160,560,50,50);
   bo38 = new Box_3(1210,560,50,50);
   bo39 = new Box_3(1110,540,50,50);
   bo40 = new Box_3(1160,540,50,50);
   bo41 = new Box_3(1210,540,50,50);
   bo42 = new Box_3(1110,520,50,50);
   bo43 = new Box_3(1160,520,50,50);
   bo44 = new Box_3(1210,520,50,50);

   polygon = new Polygon(100,300,20);
   slingshot = new Slingshot(polygon.body,{x:150,y:300});
   

}

function draw() 
{
  Engine.update(engine);
 if(backgroundImg)
 {
   background(backgroundImg);
 }
  drawSprites();

  fill("red");
  textSize(30);
  text("Score = "   + score, 100,150);

  gr1.display();
  gr2.display();
  gr3.display();
  gr4.display();
  gr5.display();
  gr6.display();
  gr7.display();
  gr8.display();
  gr9.display();
  gr10.display();
  gr11.display();
  gr12.display();
  gr13.display();

  
  polygon.display();
  slingshot.display();


  blo1.display();
  blo1.score();
  blo2.display();
  blo2.score();
  blo4.display();
  blo4.score();
  blo5.display();
  blo5.score();
  blo6.display();
  blo6.score();
  blo7.display();
  blo7.score();
  blo8.display();
  blo8.score();
  blo_x.display();
  blo_x.score();
  blo_y.display();
  blo_y.score();
  blo9.display();
  blo9.score();
  blo11.display();
  blo11.score();
  blo12.display();
  blo12.score();
  blo13.display();
  blo13.score();
  blo14.display();
  blo14.score();
  blo15.display();
  blo15.score();
  blo17.display();
  blo17.score();
  blo18.display();
  blo18.score();
  blo19.display();
  blo19.score();
  blo20.display();
  blo20.score();
  blo21.display(); 
  blo21.score();
  blo24.display();
  blo24.score();
  blo25.display();
  blo25.score();
  blo26.display();
  blo26.score();
  blo27.display();
  blo27.score();
  blo29.display();
  blo29.score();
  blo30.display();
  blo30.score();
  blo31.display();
  blo31.score();
  blo32.display();
  blo32.score();
  blo33.display(); 
  blo33.score();
  blo36.display();
  blo36.score();
  blo37.display();
  blo37.score();
  blo38.display();
  blo38.score();
  blo39.display();
  blo39.score();
  blo41.display();
  blo41.score();
  blo42.display();
  blo42.score();
  blo43.display();
  blo43.score();
  blo44.display();
  blo44.score();
  blo46.display();
  blo46.score();
  blo49.display();
  blo49.score();
  blo51.display();
  blo51.score();
  blo52.display();
  blo52.score();
  blo53.display();
  blo53.score();
  blo54.display();
  blo54.score();
  blo56.display();
  blo56.score();


  bl1.display();
  bl1.score();
  blx_1.display();
  blx_1.score();
  bl4.display();
  bl4.score();
  blx_2.display();
  blx_2.score();
  bl7.display();
  bl7.score();
  bl8.display();
  bl8.score();
  bl9.display();
  bl9.score();
  blx_3.display();
  blx_3.score();
  bl10.display();
  bl10.score();
  blx_4.display();
  blx_4.score();
  blx.display();
  blx.score();
  bl13.display();
  bl14.score();
  bl15.display();
  bl15.score();
  bl16.display();
  bl16.score();
  bl17.display();
  bl17.score();
  bl18.display();
  bl18.score();
  bl19.display();
  bl19.score();
  bl21.display();
  bl21.score();
  bl22.display();
  bl22.score();
  bl23.display();
  bl23.score();
  bl24.display();
  bl24.score();
  bl25.display();
  bl25.score();
  bl27.display();
  bl27.score();
  bl28.display();
  bl28.score();
  bl29.display();
  bl29.score();
  bl30.display();
  bl30.score();
  bl31.display();
  bl31.score();
  bl33.display();
  bl33.score();
  bl34.display();
  bl34.score();
  bl35.display();
  bl35.score();
  bl38.display();
  bl38.score();
  bl40.display();
  bl40.score();
  bl41.display();
  bl41.score();
  bl42.display();
  bl42.score();
  bl43.display();
  bl43.score();
  bl44.display();
  bl44.score();
  bl46.display();
  bl46.score();
  bl47.display();
  bl47.score();
  bl48.display();
  bl48.score();
  bl49.display();
  bl49.score();


  bo1.display();
  bo1.score();
  bo2.display();
  bo2.score();
  bo3.display();
  bo3.score();
  bo4.display();
  bo4.score();
  bo5.display();
  bo5.score();
  bo6.display();
  bo6.score();
  bo7.display();
  bo7.score();
  bo9.display();
  bo9.score();
  bo11.display();
  bo11.score();
  bo12.display();
  bo12.score();
  bo13.display();
  bo13.score();
  bo14.display();
  bo14.score();
  bo15.display();
  bo15.score();
  bo17.display();
  bo17.score();
  bo18.display();
  bo18.score();
  bo19.display();
  bo19.score();
  bo20.display();
  bo20.score();
  bo22.display();
  bo22.score();
  bo25.display();
  bo25.score();
  bo27.display();
  bo27.score();
  bo28.display();
  bo28.score();
  bo29.display();
  bo29.score();
  bo30.display();
  bo30.score();
  bo32.display();
  bo32.score();

  bo33.display();
  bo33.score();
  bo35.display();
  bo35.score();
  bo36.display();
  bo36.score();
  bo37.display();
  bo37.score();
  bo38.display();
  bo38.score();
  bo39.display();
  bo39.score();
  bo41.display();
  bo41.score();
  bo42.display();
  bo42.score();
  bo43.display();
  bo43.score();
  bo44.display();
  bo44.score();
}


function mouseDragged()
{
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
    slingshot.fly();
}

function keyPressed()
{
    if(keyCode == 32)
    {
        slingshot.attach(polygon.body);
    }
}

async function getBG()
{
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime;
    var hour = dateTime.slice(11,13);
    if(hour >= 06 && hour <= 18)
    {
        bg = "bg.png";
    }
    else
    {
        bg = "bg2.png";
    }
    backgroundImg = loadImage(bg);
}