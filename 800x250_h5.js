(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 800,
	height: 250,
	fps: 24,
	color: "#FF0000",
	manifest: [
		{src:"images/button.png", id:"button"},
		{src:"images/HG_800x250.png", id:"HG_800x250"}
	]
};



// symbols:



(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,40);


(lib.HG_800x250 = function() {
	this.initialize(img.HG_800x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,250);


(lib.mcSquare = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape.setTransform(25,25);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


// stage content:
(lib._800x250_h5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_699 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(699).call(this.frame_699).wait(1));

	// button
	this.instance = new lib.button();
	this.instance.setTransform(69,166);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(700));

	// HG
	this.instance_1 = new lib.HG_800x250();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},699).wait(1));

	// clicktag
	this.clickButton = new lib.mcSquare();
	this.clickButton.setTransform(150,125,6,5,0,0,0,25,25);

	this.timeline.addTween(cjs.Tween.get(this.clickButton).wait(700));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,800,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;