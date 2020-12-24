const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies



var en, wo
var d=[]
function preload(){
    t1=loadImage("thunderbolt/1.png")
    t2=loadImage("thunderbolt/2.png")
    t3=loadImage("thunderbolt/3.png")
    t4=loadImage("thunderbolt/4.png")
    walk=loadImage("Walking Frame/walking_1.png")
    
}

function setup(){
    createCanvas(400,400)
   en=Engine.create()
   wo=en.world

var o={isStatic:true}
   man=Bodies.rectangle(200,300,10,10,o)
   World.add(wo, man)
    
}

function draw(){
    background(0)
    Engine.update(en)

    if(frameCount%5===0){
        d.push(new Drop(random(20,380),0))
    }

    for(var i=0; i<d.length; i++){
        d[i].display()
    }
    
    image(walk, 200,250,150,150)

    if(frameCount%50===0){
    thunder=createSprite(random(10,350),random(10,30), 10,10)
    var ran=Math.round(random(1,4))
    switch(ran){
        case 1: thunder.addImage("t", t1)
        break;
        case 2: thunder.addImage("t", t2)
        break;
        case 3: thunder.addImage("t", t3)
        break;
        case 4: thunder.addImage("t", t4)
        break;
    }

    thunder.scale=0.5
    thunder.lifetime=10
    }
    drawSprites()
}   

