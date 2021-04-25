class Wall{
	constructor(){

	}

	wall1 = createSprite(100,200);
    wall1.addImage("car1", car1_img);
    wall2 = createSprite(300,200);
    wall2.addImage("car2", car2_img);
    wall3 = createSprite(500,200);
    wall3.addImage("car3", car3_img);
    wall4 = createSprite(700,200);
    wall4.addImage("car4", car4_img);
    walls = [wall1, wall2, wall3, wall4];
}