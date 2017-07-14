(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// מסגרת
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(2,1,1).p("AXcTiMgu3AAAMAAAgnDMAu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(206));

	// מסיכה (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("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");
	var mask_graphics_62 = new cjs.Graphics().p("A3bK9MAu3AAAIAAIcMgu3AAAg");
	var mask_graphics_109 = new cjs.Graphics().p("A4hEXIAAotMAxDAAAIAAItg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:138.4,y:123.1}).wait(62).to({graphics:mask_graphics_62,x:149.6,y:124.2}).wait(47).to({graphics:mask_graphics_109,x:149.4,y:222.3}).wait(97));

	// ברק
	this.instance = new lib.בוהק();
	this.instance.setTransform(-16.3,175.8,1,1.231,0,-35.6,0,22,81.6);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({scaleY:1.05,skewX:17.1,x:319.1},33,cjs.Ease.get(1)).to({_off:true},1).wait(19).to({scaleY:1.23,skewX:-35.5,x:-76.2,alpha:0.789,_off:false},0).to({scaleY:1.05,skewX:17.1,x:349.1,alpha:0.691},33,cjs.Ease.get(1)).to({_off:true},1).wait(110));

	// לוגואים באנגלית
	this.instance_1 = new lib.לוגואיםבאנגלית_1();
	this.instance_1.setTransform(142.4,221.3,1,1,0,0,0,150,27);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(164).to({_off:false},0).wait(42));

	// לוגואים באנגלית
	this.instance_2 = new lib.לוגואיםבאנגלית_1();
	this.instance_2.setTransform(149.1,212,1.44,1.44,0,0,0,157.1,28);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(156).to({_off:false},0).wait(1).to({regX:142.8,regY:24,scaleX:1.3,scaleY:1.3,x:130.5,y:209.9,alpha:0.31},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:132.1,y:213,alpha:0.571},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:133.4,y:215.5,alpha:0.786},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:134.5,y:217.5,alpha:0.952},0).wait(1).to({scaleX:1,scaleY:1,x:134.8,y:218,alpha:1},0).wait(2).to({_off:true},1).wait(42));

	// לוגו אוניב
	this.instance_3 = new lib.לוגואוניב_1();
	this.instance_3.setTransform(149.1,222,1,1,0,0,0,157.1,27.9);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(154).to({_off:false},0).wait(1).to({regX:157,regY:23.4,scaleX:1.06,scaleY:1.06,x:149,y:214,alpha:0.691},0).wait(1).to({scaleX:1.18,scaleY:1.18,y:210.9,alpha:0.429},0).wait(1).to({scaleX:1.27,scaleY:1.27,y:208.3,alpha:0.214},0).wait(1).to({scaleX:1.35,scaleY:1.35,y:206.4,alpha:0.048},0).wait(1).to({scaleX:1.4,scaleY:1.4,y:205.6,alpha:0},0).wait(1).to({scaleX:1.43,scaleY:1.43,y:205.5},0).wait(1).to({scaleX:1.44,scaleY:1.44},0).to({_off:true},1).wait(44));

	// לוגו אוניב
	this.instance_4 = new lib.לוגואוניב_1();
	this.instance_4.setTransform(149.1,212,1.44,1.44,0,0,0,157.1,28);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(102).to({_off:false},0).wait(1).to({regX:157,regY:23.4,scaleX:1.3,scaleY:1.3,x:149,y:209.1,alpha:0.31},0).wait(1).to({scaleX:1.19,scaleY:1.19,y:212.3,alpha:0.571},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:214.8,alpha:0.786},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:216.9,alpha:0.952},0).wait(1).to({scaleX:1,scaleY:1,y:217.4,alpha:1},0).wait(2).wait(1).to({regX:150,regY:27,x:142.4,y:221.3},0).wait(46).to({regX:156.6,regY:25.2,x:149.1,y:222},0).wait(1).to({regX:157,regY:23.4,scaleX:0.94,scaleY:0.94,x:149.4,y:220.3},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:220.4},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:220.5},0).wait(1).to({scaleX:0.82,scaleY:0.82,alpha:0.643},0).wait(1).to({scaleX:0.8,scaleY:0.8,alpha:0.286},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:149.3,y:220.6,alpha:0.072},0).wait(1).to({scaleX:0.78,scaleY:0.78,alpha:0},0).to({_off:true},1).wait(42));

	// תוכנית
	this.instance_5 = new lib.תכנית_זז();
	this.instance_5.setTransform(142.4,221.3,1,1,0,0,0,150,27);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(62).to({_off:false},0).wait(42).to({alpha:0},5).to({_off:true},1).wait(96));

	// תוכנית
	this.instance_6 = new lib.תכנית_זז();
	this.instance_6.setTransform(149.1,212,1.44,1.44,0,0,0,157.1,28);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(54).to({_off:false},0).wait(1).to({regX:156.6,regY:23.9,scaleX:1.3,scaleY:1.3,x:148.5,y:209.8,alpha:0.31},0).wait(1).to({scaleX:1.19,scaleY:1.19,y:212.9,alpha:0.571},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:215.4,alpha:0.786},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:148.6,y:217.4,alpha:0.952},0).wait(1).to({scaleX:1,scaleY:1,y:217.9,alpha:1},0).wait(2).to({_off:true},1).wait(144));

	// לכוון
	this.instance_7 = new lib.לכוון_2();
	this.instance_7.setTransform(149.1,212,1.44,1.44,0,0,0,157.1,28);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:157,regY:23.4,scaleX:1.3,scaleY:1.3,x:149,y:209.1,alpha:0.31},0).wait(1).to({scaleX:1.19,scaleY:1.19,y:212.3,alpha:0.571},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:214.8,alpha:0.786},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:216.9,alpha:0.952},0).wait(1).to({scaleX:1,scaleY:1,y:217.4,alpha:1},0).wait(2).to({_off:true},1).wait(198));

	// לכוון
	this.instance_8 = new lib.לכוון_2();
	this.instance_8.setTransform(149,222,1,1,0,0,0,157,28);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(8).to({_off:false},0).wait(48).to({alpha:0},5).to({_off:true},1).wait(144));

	// לוגואים באנגלית
	this.instance_9 = new lib.לוגואיםבאנגלית_1();
	this.instance_9.setTransform(142.4,221.3,1,1,0,0,0,150,27);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(3).to({alpha:0},4).to({_off:true},1).wait(198));

	// מימין
	this.instance_10 = new lib.מימין_זז("synched",0,false);
	this.instance_10.setTransform(96.5,179,1.17,1.17,0,0,0,31.5,26);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(6).wait(48).to({startPosition:0,_off:false},0).wait(48).to({scaleX:1,scaleY:1,x:181.5,y:151},0).wait(104));

	// משמאל
	this.instance_11 = new lib.משמאל_זז("synched",0,false);
	this.instance_11.setTransform(290.5,179.6,1.17,1.17,0,0,0,45.5,31.6);

	this.instance_12 = new lib.משמאל_זזcopy("synched",0,false);
	this.instance_12.setTransform(290.5,179.6,1.17,1.17,0,0,0,45.5,31.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11,p:{regY:31.6,scaleX:1.17,scaleY:1.17,x:290.5,y:179.6}}]}).to({state:[{t:this.instance_12}]},54).to({state:[{t:this.instance_11,p:{regY:31.5,scaleX:1,scaleY:1,x:195.5,y:157.5}}]},48).wait(104));

	// Layer 16
	this.instance_13 = new lib.Symbol1();
	this.instance_13.setTransform(149.5,124,1,1,0,0,0,150.5,125);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(102).to({_off:false},0).to({alpha:1},14).wait(90));

	// מימין
	this.instance_14 = new lib.מימין_זזcopy("synched",0,false);
	this.instance_14.setTransform(181.5,151,1,1,0,0,0,31.5,26);

	this.instance_15 = new lib.משמאל_זזcopy("synched",0,false);
	this.instance_15.setTransform(195.5,157.5,1,1,0,0,0,45.5,31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14,p:{scaleX:1,scaleY:1,x:181.5,y:151}}]}).to({state:[{t:this.instance_14,p:{scaleX:1.17,scaleY:1.17,x:96.5,y:179}}]},102).to({state:[]},29).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.1,-180.4,452.2,620.5);


// symbols:
(lib.Layer10copy = function() {
	this.initialize(img.Layer10copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,205);


(lib.Layer12 = function() {
	this.initialize(img.Layer12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,83);


(lib.Layer19 = function() {
	this.initialize(img.Layer19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,61,72);


(lib.Layer20copy = function() {
	this.initialize(img.Layer20copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,196);


(lib.Layer20copy_1 = function() {
	this.initialize(img.Layer20copy_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,107);


(lib.Layer20copy5 = function() {
	this.initialize(img.Layer20copy5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,111);


(lib.Layer21copy = function() {
	this.initialize(img.Layer21copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,128);


(lib.Layer25 = function() {
	this.initialize(img.Layer25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,120);


(lib.Layer3 = function() {
	this.initialize(img.Layer3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,53);


(lib.Layer31 = function() {
	this.initialize(img.Layer31);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,76);


(lib.Layer34 = function() {
	this.initialize(img.Layer34);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,149);


(lib.Layer36copy = function() {
	this.initialize(img.Layer36copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,47);


(lib.Layer40copy = function() {
	this.initialize(img.Layer40copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,149);


(lib.Layer41 = function() {
	this.initialize(img.Layer41);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,99);


(lib.Layer44 = function() {
	this.initialize(img.Layer44);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,94);


(lib.Layer51 = function() {
	this.initialize(img.Layer51);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,139);


(lib.Layer54 = function() {
	this.initialize(img.Layer54);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,56);


(lib.Layer6 = function() {
	this.initialize(img.Layer6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,90);


(lib.Layer67 = function() {
	this.initialize(img.Layer67);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,133);


(lib.Layer71 = function() {
	this.initialize(img.Layer71);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,69);


(lib.Layer8copy = function() {
	this.initialize(img.Layer8copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,141);


(lib.Layer9copy2 = function() {
	this.initialize(img.Layer9copy2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,110);


(lib.לוגואוניב = function() {
	this.initialize(img.לוגואוניב);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,314,56);


(lib.לוגואיםבאנגלית = function() {
	this.initialize(img.לוגואיםבאנגלית);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,378,68);


(lib.לכוון = function() {
	this.initialize(img.לכוון);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,314,56);


(lib.תוכנית = function() {
	this.initialize(img.תוכנית);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,54);


(lib.לכוון_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.לכוון();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,314,56);


(lib.לוגואים_זז = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2gFUIAApPMAxgAAAIAAJPg");
	mask.setTransform(172.8,34);

	// Layer 1
	this.instance = new lib.לוגואיםבאנגלית();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,378,68);


(lib.לוגו_אונ_זז = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.לוגואוניב();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,314,56);


(lib.בוהק = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.812)","rgba(255,255,255,0.067)","rgba(255,255,255,0.624)","rgba(255,255,255,0)"],[0,0.251,0.537,0.757,1],-21.9,0,22,0).s().p("AjbMvIAA5eIG3AAIAAZeg");
	this.shape.setTransform(22,81.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,44.1,163.2);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3fTiMAAAgnDMAu/AAAMAAAAnDg");
	this.shape.setTransform(150.5,125);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,301,250);


(lib.תוכנית_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.תוכנית();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,54);


(lib.Layer71_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Layer71();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,85,69);


(lib.Layer67_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Layer67();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,126,133);


(lib.Layer54_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Layer54();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,56);


(lib.Layer51_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Layer51();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,121,139);


(lib.Layer44_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Layer44();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,69,94);


(lib.Layer21copy_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Layer21copy();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,72,128);


(lib.Layer20copy5_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Layer20copy5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63,111);


(lib.Layer20copy_2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Layer20copy();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70,196);


(lib.Layer9copy2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Layer9copy2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,56,110);


(lib.Layer41_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Layer41();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57,99);


(lib.Layer40copy_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Layer40copy();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,53,149);


(lib.Layer36copy_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Layer36copy();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,91,47);


(lib.Layer34_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Layer34();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,39,149);


(lib.Layer31_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Layer31();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,97,76);


(lib.Layer25_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Layer25();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,93,120);


(lib.Layer20copy_3 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Layer20copy_1();

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,68,107);


(lib.Layer19_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Layer19();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,61,72);


(lib.Layer12_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Layer12();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76,83);


(lib.Layer10copy_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Layer10copy();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,142,205);


(lib.Layer8copy_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Layer8copy();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80,141);


(lib.Layer6_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Layer6();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,86,90);


(lib.Layer3_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Layer3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,69,53);


(lib.תוכנית_2 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.תוכנית_1();
	this.instance_1.setTransform(150,27,1,1,0,0,0,150,27);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,54);


(lib.משמאל_זזcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer71_1();
	this.instance.setTransform(-66.3,-77.4,1.029,1.029,0,0,0,42.4,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(19));

	// Layer 71
	this.instance_1 = new lib.Layer71_1();
	this.instance_1.setTransform(-66.4,-77.4,1,1,0,0,0,42.1,33.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({regX:42.5,regY:34.5,scaleX:0.85,scaleY:0.85,x:-66,y:-76.3},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:-76.5},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:-66.1,y:-76.6},0).wait(1).to({scaleX:0.52,scaleY:0.52,y:-76.7},0).wait(1).to({scaleX:0.44,scaleY:0.44,y:-76.8,alpha:0.675},0).wait(1).to({scaleX:0.38,scaleY:0.38,alpha:0.263},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-66.2,y:-76.9,alpha:0.096},0).wait(1).to({scaleX:0.31,scaleY:0.31,alpha:0.021},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-66.1,alpha:0},0).to({_off:true},1).wait(9));

	// Layer 67
	this.instance_2 = new lib.Layer67_1();
	this.instance_2.setTransform(-86.9,10.5,1,1,0,0,0,63,66.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(19));

	// Layer 67
	this.instance_3 = new lib.Layer67_1();
	this.instance_3.setTransform(-87.4,8.3,1,1,0,0,0,62.5,64.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(1).to({regX:63,regY:66.5,scaleX:0.85,scaleY:0.85,x:-86.8,y:10.2},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:-86.9,y:9.9},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:-87,y:9.7},0).wait(1).to({scaleX:0.52,scaleY:0.52,y:9.4},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:-87.1,y:9.3,alpha:0.675},0).wait(1).to({scaleX:0.38,scaleY:0.38,y:9.1,alpha:0.263},0).wait(1).to({scaleX:0.34,scaleY:0.34,alpha:0.096},0).wait(1).to({scaleX:0.31,scaleY:0.31,y:9,alpha:0.021},0).wait(1).to({scaleX:0.3,scaleY:0.3,alpha:0},0).to({_off:true},1).wait(9));

	// Layer 20 copy 5
	this.instance_4 = new lib.Layer20copy5_1();
	this.instance_4.setTransform(-96.4,-9.4,1,1,0,0,0,31.5,55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},2).wait(18));

	// Layer 20 copy 5
	this.instance_5 = new lib.Layer20copy5_1();
	this.instance_5.setTransform(-96.7,-11.2,1,1,0,0,0,31.2,53.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).wait(1).to({regX:31.5,regY:55.5,scaleX:0.85,scaleY:0.85,x:-96.4,y:-9.5},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:-9.8},0).wait(1).to({scaleX:0.61,scaleY:0.61,y:-10},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:-96.5,y:-10.1},0).wait(1).to({scaleX:0.44,scaleY:0.44,y:-10.3,alpha:0.675},0).wait(1).to({scaleX:0.38,scaleY:0.38,y:-10.4,alpha:0.263},0).wait(1).to({scaleX:0.34,scaleY:0.34,y:-10.5,alpha:0.096},0).wait(1).to({scaleX:0.31,scaleY:0.31,alpha:0.021},0).wait(1).to({scaleX:0.3,scaleY:0.3,alpha:0},0).to({_off:true},1).wait(8));

	// Layer 9 copy 2
	this.instance_6 = new lib.Layer9copy2_1();
	this.instance_6.setTransform(-100.9,-42.9,1,1,0,0,0,28,55);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},3).wait(17));

	// Layer 9 copy 2
	this.instance_7 = new lib.Layer9copy2_1();
	this.instance_7.setTransform(-101.1,-44.7,1,1,0,0,0,27.8,53.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},0).wait(1).to({regX:28,regY:55,scaleX:0.85,scaleY:0.85,x:-100.8,y:-43},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:-43.2},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:-100.9,y:-43.5},0).wait(1).to({scaleX:0.52,scaleY:0.52,y:-43.6},0).wait(1).to({scaleX:0.44,scaleY:0.44,y:-43.8,alpha:0.675},0).wait(1).to({scaleX:0.38,scaleY:0.38,alpha:0.263},0).wait(1).to({scaleX:0.34,scaleY:0.34,y:-44,alpha:0.096},0).wait(1).to({scaleX:0.31,scaleY:0.31,alpha:0.021},0).wait(1).to({scaleX:0.3,scaleY:0.3,alpha:0},0).to({_off:true},1).wait(7));

	// Layer 54
	this.instance_8 = new lib.Layer54_1();
	this.instance_8.setTransform(-78.9,-24.9,1,1,0,0,0,41,28);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},4).wait(16));

	// Layer 54
	this.instance_9 = new lib.Layer54_1();
	this.instance_9.setTransform(-79.3,-25.8,1,1,0,0,0,40.6,27.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(4).to({_off:false},0).wait(1).to({regX:41,regY:28,scaleX:0.85,scaleY:0.85,x:-78.8,y:-24.9},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:-78.9,y:-25},0).wait(1).to({scaleX:0.61,scaleY:0.61,y:-25.1},0).wait(1).to({scaleX:0.52,scaleY:0.52,y:-25.2},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:-79,y:-25.3,alpha:0.675},0).wait(1).to({scaleX:0.38,scaleY:0.38,alpha:0.263},0).wait(1).to({scaleX:0.34,scaleY:0.34,y:-25.4,alpha:0.096},0).wait(1).to({scaleX:0.31,scaleY:0.31,alpha:0.021},0).wait(1).to({scaleX:0.3,scaleY:0.3,alpha:0},0).to({_off:true},1).wait(6));

	// Layer 51
	this.instance_10 = new lib.Layer51_1();
	this.instance_10.setTransform(-67.4,17.5,1,1,0,0,0,60.5,69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},5).wait(15));

	// Layer 51
	this.instance_11 = new lib.Layer51_1();
	this.instance_11.setTransform(-67.9,15.2,1,1,0,0,0,60,67.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(5).to({_off:false},0).wait(1).to({regX:60.5,regY:69.5,scaleX:0.85,scaleY:0.85,x:-67.3,y:17.2},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:-67.4,y:16.9},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:-67.5,y:16.7},0).wait(1).to({scaleX:0.52,scaleY:0.52,y:16.4},0).wait(1).to({scaleX:0.44,scaleY:0.44,y:16.3,alpha:0.675},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-67.6,y:16.1,alpha:0.263},0).wait(1).to({scaleX:0.34,scaleY:0.34,y:16,alpha:0.096},0).wait(1).to({scaleX:0.31,scaleY:0.31,alpha:0.021},0).wait(1).to({scaleX:0.3,scaleY:0.3,alpha:0},0).to({_off:true},1).wait(5));

	// Layer 21 copy
	this.instance_12 = new lib.Layer21copy_1();
	this.instance_12.setTransform(-61.9,-8.9,1,1,0,0,0,36,64);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},6).wait(14));

	// Layer 21 copy
	this.instance_13 = new lib.Layer21copy_1();
	this.instance_13.setTransform(-62.2,-10.8,1,1,0,0,0,35.7,62);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(6).to({_off:false},0).wait(1).to({regX:36,regY:64,scaleX:0.85,scaleY:0.85,x:-61.8,y:-9},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:-9.3},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:-61.9,y:-9.5},0).wait(1).to({scaleX:0.52,scaleY:0.52,y:-9.7},0).wait(1).to({scaleX:0.44,scaleY:0.44,y:-9.9,alpha:0.675},0).wait(1).to({scaleX:0.38,scaleY:0.38,y:-10,alpha:0.263},0).wait(1).to({scaleX:0.34,scaleY:0.34,y:-10.1,alpha:0.096},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-62,alpha:0.021},0).wait(1).to({scaleX:0.3,scaleY:0.3,alpha:0},0).to({_off:true},1).wait(4));

	// Layer 20 copy
	this.instance_14 = new lib.Layer20copy_2();
	this.instance_14.setTransform(-60.9,-10.9,1,1,0,0,0,35,98);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true},7).wait(13));

	// Layer 20 copy
	this.instance_15 = new lib.Layer20copy_2();
	this.instance_15.setTransform(-61.2,-14,1,1,0,0,0,34.7,94.9);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(7).to({_off:false},0).wait(1).to({regX:35,regY:98,scaleX:0.85,scaleY:0.85,x:-60.8,y:-11.2},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:-60.9,y:-11.6},0).wait(1).to({scaleX:0.61,scaleY:0.61,y:-12},0).wait(1).to({scaleX:0.52,scaleY:0.52,y:-12.3},0).wait(1).to({scaleX:0.44,scaleY:0.44,y:-12.5,alpha:0.675},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-61,y:-12.7,alpha:0.263},0).wait(1).to({scaleX:0.34,scaleY:0.34,y:-12.8,alpha:0.096},0).wait(1).to({scaleX:0.31,scaleY:0.31,y:-12.9,alpha:0.021},0).wait(1).to({scaleX:0.3,scaleY:0.3,y:-13,alpha:0},0).to({_off:true},1).wait(3));

	// Layer 44
	this.instance_16 = new lib.Layer44_1();
	this.instance_16.setTransform(-76.4,-69.9,1,1,0,0,0,34.5,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({_off:true},8).wait(12));

	// Layer 44
	this.instance_17 = new lib.Layer44_1();
	this.instance_17.setTransform(-76.7,-71.4,1,1,0,0,0,34.2,45.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(8).to({_off:false},0).wait(1).to({regX:34.5,regY:47,scaleX:0.85,scaleY:0.85,x:-76.3,y:-70},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:-70.2},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:-76.4,y:-70.4},0).wait(1).to({scaleX:0.52,scaleY:0.52,y:-70.5},0).wait(1).to({scaleX:0.44,scaleY:0.44,y:-70.6,alpha:0.675},0).wait(1).to({scaleX:0.38,scaleY:0.38,y:-70.7,alpha:0.263},0).wait(1).to({scaleX:0.34,scaleY:0.34,alpha:0.096},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-76.5,y:-70.8,alpha:0.021},0).wait(1).to({scaleX:0.3,scaleY:0.3,alpha:0},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.9,-116.9,143,204);


(lib.משמאל_זז = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer71_1();
	this.instance.setTransform(-66.3,-77.4,1.029,1.029,0,0,0,42.4,34.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(10));

	// Layer 71
	this.instance_1 = new lib.Layer71_1();
	this.instance_1.setTransform(-66.3,-77.4,2.706,2.706,0,0,0,42.4,34.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:42.5,scaleX:2.35,scaleY:2.35,x:-65.9,alpha:0.763},0).wait(1).to({scaleX:2.03,scaleY:2.03,x:-66,alpha:1},0).wait(1).to({scaleX:1.76,scaleY:1.76},0).wait(1).to({scaleX:1.53,scaleY:1.53},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:-66.1,y:-77.2},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:-77.3},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:-77.2},0).wait(1).to({scaleX:1,scaleY:1,y:-77.3},0).to({_off:true},1).wait(10));

	// Layer 67
	this.instance_2 = new lib.Layer67_1();
	this.instance_2.setTransform(-86.9,10.5,1,1,0,0,0,63,66.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).wait(9));

	// Layer 67
	this.instance_3 = new lib.Layer67_1();
	this.instance_3.setTransform(-87,10.4,2.706,2.706,0,0,0,62.8,66.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(1).to({regX:63,scaleX:2.35,scaleY:2.35,x:-86.4,y:10.5,alpha:0.763},0).wait(1).to({scaleX:2.03,scaleY:2.03,x:-86.5,alpha:1},0).wait(1).to({scaleX:1.76,scaleY:1.76,x:-86.6},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:-86.7},0).wait(1).to({scaleX:1.34,scaleY:1.34},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:-86.8},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-86.7},0).wait(1).to({scaleX:1,scaleY:1,x:-86.8},0).to({_off:true},1).wait(9));

	// Layer 20 copy 5
	this.instance_4 = new lib.Layer20copy5_1();
	this.instance_4.setTransform(-96.4,-9.4,1,1,0,0,0,31.5,55.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).wait(8));

	// Layer 20 copy 5
	this.instance_5 = new lib.Layer20copy5_1();
	this.instance_5.setTransform(-96.5,-9.4,2.706,2.706,0,0,0,31.4,55.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).wait(1).to({regX:31.5,scaleX:2.35,scaleY:2.35,x:-96.2,y:-9.2,alpha:0.763},0).wait(1).to({scaleX:2.03,scaleY:2.03,y:-9.3,alpha:1},0).wait(1).to({scaleX:1.76,scaleY:1.76},0).wait(1).to({scaleX:1.53,scaleY:1.53},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:-96.3,y:-9.2},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1,scaleY:1},0).to({_off:true},1).wait(8));

	// Layer 9 copy 2
	this.instance_6 = new lib.Layer9copy2_1();
	this.instance_6.setTransform(-100.9,-42.9,1,1,0,0,0,28,55);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13).to({_off:false},0).wait(7));

	// Layer 9 copy 2
	this.instance_7 = new lib.Layer9copy2_1();
	this.instance_7.setTransform(-101,-42.9,2.706,2.706,0,0,0,27.9,55);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},0).wait(1).to({regX:28,scaleX:2.35,scaleY:2.35,x:-100.6,y:-42.7,alpha:0.763},0).wait(1).to({scaleX:2.03,scaleY:2.03,x:-100.7,alpha:1},0).wait(1).to({scaleX:1.76,scaleY:1.76},0).wait(1).to({scaleX:1.53,scaleY:1.53},0).wait(1).to({scaleX:1.34,scaleY:1.34},0).wait(1).to({scaleX:1.19,scaleY:1.19,y:-42.8},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:-100.8,y:-42.7},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:-42.8},0).wait(1).to({scaleX:1,scaleY:1,y:-42.7},0).to({_off:true},1).wait(7));

	// Layer 54
	this.instance_8 = new lib.Layer54_1();
	this.instance_8.setTransform(-78.9,-24.9,1,1,0,0,0,41,28);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).wait(6));

	// Layer 54
	this.instance_9 = new lib.Layer54_1();
	this.instance_9.setTransform(-78.9,-24.9,2.706,2.706,0,0,0,40.9,28);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(4).to({_off:false},0).wait(1).to({regX:41,scaleX:2.35,scaleY:2.35,x:-78.6,y:-24.7,alpha:0.763},0).wait(1).to({scaleX:2.03,scaleY:2.03,alpha:1},0).wait(1).to({scaleX:1.76,scaleY:1.76},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:-78.7},0).wait(1).to({scaleX:1.34,scaleY:1.34},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:-78.8},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:-24.8},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:-24.7},0).wait(1).to({scaleX:1,scaleY:1},0).to({_off:true},1).wait(6));

	// Layer 51
	this.instance_10 = new lib.Layer51_1();
	this.instance_10.setTransform(-67.4,17.5,1,1,0,0,0,60.5,69.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15).to({_off:false},0).wait(5));

	// Layer 51
	this.instance_11 = new lib.Layer51_1();
	this.instance_11.setTransform(-67.7,17.5,2.706,2.706,0,0,0,60.2,69.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(5).to({_off:false},0).wait(1).to({regX:60.5,scaleX:2.35,scaleY:2.35,x:-66.9,y:17.6,alpha:0.763},0).wait(1).to({scaleX:2.03,scaleY:2.03,x:-67,y:17.5,alpha:1},0).wait(1).to({scaleX:1.76,scaleY:1.76,x:-67.1,y:17.6},0).wait(1).to({scaleX:1.53,scaleY:1.53},0).wait(1).to({scaleX:1.34,scaleY:1.34,y:17.5},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:-67.2},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:17.6},0).wait(1).to({scaleX:1,scaleY:1,y:17.5},0).to({_off:true},1).wait(5));

	// Layer 21 copy
	this.instance_12 = new lib.Layer21copy_1();
	this.instance_12.setTransform(-61.9,-8.9,1,1,0,0,0,36,64);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(16).to({_off:false},0).wait(4));

	// Layer 21 copy
	this.instance_13 = new lib.Layer21copy_1();
	this.instance_13.setTransform(-61.9,-8.8,2.706,2.706,0,0,0,35.9,64);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(6).to({_off:false},0).wait(1).to({regX:36,scaleX:2.35,scaleY:2.35,x:-61.6,alpha:0.763},0).wait(1).to({scaleX:2.03,scaleY:2.03,alpha:1},0).wait(1).to({scaleX:1.76,scaleY:1.76},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:-61.7},0).wait(1).to({scaleX:1.34,scaleY:1.34},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-61.8},0).wait(1).to({scaleX:1,scaleY:1,x:-61.7},0).to({_off:true},1).wait(4));

	// Layer 20 copy
	this.instance_14 = new lib.Layer20copy_2();
	this.instance_14.setTransform(-60.9,-10.9,1,1,0,0,0,35,98);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(17).to({_off:false},0).wait(3));

	// Layer 20 copy
	this.instance_15 = new lib.Layer20copy_2();
	this.instance_15.setTransform(-60.9,-10.9,2.706,2.706,0,0,0,34.9,98);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(7).to({_off:false},0).wait(1).to({regX:35,scaleX:2.35,scaleY:2.35,x:-60.5,y:-10.7,alpha:0.763},0).wait(1).to({scaleX:2.03,scaleY:2.03,x:-60.6,alpha:1},0).wait(1).to({scaleX:1.76,scaleY:1.76},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:-60.7},0).wait(1).to({scaleX:1.34,scaleY:1.34,y:-10.8},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:-10.7},0).wait(1).to({scaleX:1,scaleY:1,x:-60.8},0).to({_off:true},1).wait(3));

	// Layer 44
	this.instance_16 = new lib.Layer44_1();
	this.instance_16.setTransform(-76.4,-69.9,1,1,0,0,0,34.5,47);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(18).to({_off:false},0).wait(2));

	// Layer 44
	this.instance_17 = new lib.Layer44_1();
	this.instance_17.setTransform(-76.4,-69.9,2.706,2.706,0,0,0,34.4,47);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(8).to({_off:false},0).wait(1).to({regX:34.5,scaleX:2.35,scaleY:2.35,x:-76.1,y:-69.7,alpha:0.763},0).wait(1).to({scaleX:2.03,scaleY:2.03,alpha:1},0).wait(1).to({scaleX:1.76,scaleY:1.76},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:-76.2},0).wait(1).to({scaleX:1.34,scaleY:1.34},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:-76.3},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-76.2},0).wait(1).to({scaleX:1,scaleY:1,x:-76.3},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181,-170.8,230,186.7);


(lib.מימין_זזcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer41_1();
	this.instance.setTransform(59.5,-47.4,1,1,0,0,0,28.5,49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(23));

	// Layer 41
	this.instance_1 = new lib.Layer41_1();
	this.instance_1.setTransform(59.2,-49,1,1,0,0,0,28.2,47.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({regX:28.5,regY:49.5,scaleX:0.85,scaleY:0.85,x:59.4,y:-47.5},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:-47.7},0).wait(1).to({scaleX:0.61,scaleY:0.61,y:-47.9},0).wait(1).to({scaleX:0.52,scaleY:0.52,y:-48},0).wait(1).to({scaleX:0.44,scaleY:0.44,y:-48.1,alpha:0.675},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:59.3,y:-48.2,alpha:0.263},0).wait(1).to({scaleX:0.34,scaleY:0.34,y:-48.3,alpha:0.096},0).wait(1).to({scaleX:0.31,scaleY:0.31,alpha:0.021},0).wait(1).to({scaleX:0.3,scaleY:0.3,y:-48.4,alpha:0},0).to({_off:true},1).wait(13));

	// Layer 40 copy
	this.instance_2 = new lib.Layer40copy_1();
	this.instance_2.setTransform(60.5,7.5,1,1,0,0,0,26.5,74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},2).wait(22));

	// Layer 40 copy
	this.instance_3 = new lib.Layer40copy_1();
	this.instance_3.setTransform(60.2,5.1,1,1,0,0,0,26.2,72.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).wait(1).to({regX:26.5,regY:74.5,scaleX:0.85,scaleY:0.85,x:60.5,y:7.2},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:60.4,y:6.9},0).wait(1).to({scaleX:0.61,scaleY:0.61,y:6.6},0).wait(1).to({scaleX:0.52,scaleY:0.52,y:6.4},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:60.3,y:6.2,alpha:0.675},0).wait(1).to({scaleX:0.38,scaleY:0.38,y:6.1,alpha:0.263},0).wait(1).to({scaleX:0.34,scaleY:0.34,y:6,alpha:0.096},0).wait(1).to({scaleX:0.31,scaleY:0.31,y:5.9,alpha:0.021},0).wait(1).to({scaleX:0.3,scaleY:0.3,alpha:0},0).to({_off:true},1).wait(12));

	// Layer 36 copy
	this.instance_4 = new lib.Layer36copy_1();
	this.instance_4.setTransform(76.5,-52.4,1,1,0,0,0,45.5,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},3).wait(21));

	// Layer 36 copy
	this.instance_5 = new lib.Layer36copy_1();
	this.instance_5.setTransform(76.1,-53.1,1,1,0,0,0,45.1,22.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).wait(1).to({regX:45.5,regY:23.5,scaleX:0.85,scaleY:0.85,x:76.4,y:-52.4},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:-52.5},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:76.3,y:-52.6},0).wait(1).to({scaleX:0.52,scaleY:0.52},0).wait(1).to({scaleX:0.44,scaleY:0.44,y:-52.7,alpha:0.675},0).wait(1).to({scaleX:0.38,scaleY:0.38,alpha:0.263},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:76.2,y:-52.8,alpha:0.096},0).wait(1).to({scaleX:0.31,scaleY:0.31,alpha:0.021},0).wait(1).to({scaleX:0.3,scaleY:0.3,alpha:0},0).to({_off:true},1).wait(11));

	// Layer 34
	this.instance_6 = new lib.Layer34_1();
	this.instance_6.setTransform(47.5,-11.4,1,1,0,0,0,19.5,74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},4).wait(20));

	// Layer 34
	this.instance_7 = new lib.Layer34_1();
	this.instance_7.setTransform(47.3,-13.8,1,1,0,0,0,19.3,72.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({_off:false},0).wait(1).to({regX:19.5,regY:74.5,scaleX:0.85,scaleY:0.85,x:47.5,y:-11.6},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:47.4,y:-11.9},0).wait(1).to({scaleX:0.61,scaleY:0.61,y:-12.2},0).wait(1).to({scaleX:0.52,scaleY:0.52,y:-12.4},0).wait(1).to({scaleX:0.44,scaleY:0.44,y:-12.6,alpha:0.675},0).wait(1).to({scaleX:0.38,scaleY:0.38,y:-12.7,alpha:0.263},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:47.3,y:-12.8,alpha:0.096},0).wait(1).to({scaleX:0.31,scaleY:0.31,y:-12.9,alpha:0.021},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:47.4,alpha:0},0).to({_off:true},1).wait(10));

	// Layer 31
	this.instance_8 = new lib.Layer31_1();
	this.instance_8.setTransform(76.5,-70.9,1,1,0,0,0,48.5,38);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},5).wait(19));

	// Layer 31
	this.instance_9 = new lib.Layer31_1();
	this.instance_9.setTransform(76.1,-72.1,1,1,0,0,0,48.1,36.8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(5).to({_off:false},0).wait(1).to({regX:48.5,regY:38,scaleX:0.85,scaleY:0.85,x:76.5,y:-71},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:76.4,y:-71.1},0).wait(1).to({scaleX:0.61,scaleY:0.61,y:-71.3},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:76.3,y:-71.4},0).wait(1).to({scaleX:0.44,scaleY:0.44,y:-71.5,alpha:0.675},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:76.2,alpha:0.263},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:76.3,y:-71.6,alpha:0.096},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:76.2,alpha:0.021},0).wait(1).to({scaleX:0.3,scaleY:0.3,alpha:0},0).to({_off:true},1).wait(9));

	// Layer 25
	this.instance_10 = new lib.Layer25_1();
	this.instance_10.setTransform(89.5,9,1,1,0,0,0,46.5,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},6).wait(18));

	// Layer 25
	this.instance_11 = new lib.Layer25_1();
	this.instance_11.setTransform(89.1,7,1,1,0,0,0,46.1,58.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(6).to({_off:false},0).wait(1).to({regX:46.5,regY:60,scaleX:0.85,scaleY:0.85,x:89.4,y:8.7},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:8.4},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:89.3,y:8.2},0).wait(1).to({scaleX:0.52,scaleY:0.52,y:8},0).wait(1).to({scaleX:0.44,scaleY:0.44,y:7.9,alpha:0.675},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:89.2,y:7.7,alpha:0.263},0).wait(1).to({scaleX:0.34,scaleY:0.34,alpha:0.096},0).wait(1).to({scaleX:0.31,scaleY:0.31,y:7.6,alpha:0.021},0).wait(1).to({scaleX:0.3,scaleY:0.3,alpha:0},0).to({_off:true},1).wait(8));

	// Layer 19
	this.instance_12 = new lib.Layer19_1();
	this.instance_12.setTransform(78.5,8,1,1,0,0,0,30.5,36);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},7).wait(17));

	// Layer 19
	this.instance_13 = new lib.Layer19_1();
	this.instance_13.setTransform(78.2,6.9,1,1,0,0,0,30.2,34.9);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(7).to({_off:false},0).wait(1).to({regX:30.5,regY:36,scaleX:0.85,scaleY:0.85,x:78.4,y:7.9},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:7.7},0).wait(1).to({scaleX:0.61,scaleY:0.61,y:7.6},0).wait(1).to({scaleX:0.52,scaleY:0.52,y:7.5},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:78.3,y:7.4,alpha:0.675},0).wait(1).to({scaleX:0.38,scaleY:0.38,y:7.3,alpha:0.263},0).wait(1).to({scaleX:0.34,scaleY:0.34,alpha:0.096},0).wait(1).to({scaleX:0.31,scaleY:0.31,y:7.2,alpha:0.021},0).wait(1).to({scaleX:0.3,scaleY:0.3,alpha:0},0).to({_off:true},1).wait(7));

	// Layer 20 copy
	this.instance_14 = new lib.Layer20copy_3();
	this.instance_14.setTransform(66,-62.4,1,1,0,0,0,34,53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true},8).wait(16));

	// Layer 20 copy
	this.instance_15 = new lib.Layer20copy_3();
	this.instance_15.setTransform(65.7,-64.1,1,1,0,0,0,33.7,51.8);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(8).to({_off:false},0).wait(1).to({regX:34,regY:53.5,scaleX:0.85,scaleY:0.85,x:65.9,y:-62.5},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:-62.7},0).wait(1).to({scaleX:0.61,scaleY:0.61,y:-62.9},0).wait(1).to({scaleX:0.52,scaleY:0.52,y:-63.1},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:65.8,y:-63.2,alpha:0.675},0).wait(1).to({scaleX:0.38,scaleY:0.38,y:-63.4,alpha:0.263},0).wait(1).to({scaleX:0.34,scaleY:0.34,alpha:0.096},0).wait(1).to({scaleX:0.31,scaleY:0.31,y:-63.5,alpha:0.021},0).wait(1).to({scaleX:0.3,scaleY:0.3,alpha:0},0).to({_off:true},1).wait(6));

	// Layer 8 copy
	this.instance_16 = new lib.Layer8copy_1();
	this.instance_16.setTransform(92,-52.4,1,1,0,0,0,40,70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({_off:true},9).wait(15));

	// Layer 8 copy
	this.instance_17 = new lib.Layer8copy_1();
	this.instance_17.setTransform(91.6,-54.7,1,1,0,0,0,39.6,68.2);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(9).to({_off:false},0).wait(1).to({regX:40,regY:70.5,scaleX:0.85,scaleY:0.85,x:92,y:-52.6},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:91.9,y:-52.9},0).wait(1).to({scaleX:0.61,scaleY:0.61,y:-53.1},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:91.8,y:-53.3},0).wait(1).to({scaleX:0.44,scaleY:0.44,y:-53.5,alpha:0.675},0).wait(1).to({scaleX:0.38,scaleY:0.38,y:-53.6,alpha:0.263},0).wait(1).to({scaleX:0.34,scaleY:0.34,y:-53.7,alpha:0.096},0).wait(1).to({scaleX:0.31,scaleY:0.31,y:-53.8,alpha:0.021},0).wait(1).to({scaleX:0.3,scaleY:0.3,alpha:0},0).to({_off:true},1).wait(5));

	// Layer 12
	this.instance_18 = new lib.Layer12_1();
	this.instance_18.setTransform(84,-79.4,1,1,0,0,0,38,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({_off:true},10).wait(14));

	// Layer 12
	this.instance_19 = new lib.Layer12_1();
	this.instance_19.setTransform(83.6,-80.8,1,1,0,0,0,37.6,40.1);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(10).to({_off:false},0).wait(1).to({regX:38,regY:41.5,scaleX:0.85,scaleY:0.85,x:83.9,y:-79.5},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:-79.6},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:83.8,y:-79.8},0).wait(1).to({scaleX:0.52,scaleY:0.52,y:-79.9},0).wait(1).to({scaleX:0.44,scaleY:0.44,y:-80,alpha:0.675},0).wait(1).to({scaleX:0.38,scaleY:0.38,y:-80.1,alpha:0.263},0).wait(1).to({scaleX:0.34,scaleY:0.34,alpha:0.096},0).wait(1).to({scaleX:0.31,scaleY:0.31,y:-80.2,alpha:0.021},0).wait(1).to({scaleX:0.3,scaleY:0.3,alpha:0},0).to({_off:true},1).wait(4));

	// Layer 10 copy
	this.instance_20 = new lib.Layer10copy_1();
	this.instance_20.setTransform(79,-10.4,1,1,0,0,0,71,102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({_off:true},11).wait(13));

	// Layer 10 copy
	this.instance_21 = new lib.Layer10copy_1();
	this.instance_21.setTransform(78.4,-13.7,1,1,0,0,0,70.4,99.2);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(11).to({_off:false},0).wait(1).to({regX:71,regY:102.5,scaleX:0.85,scaleY:0.85,x:78.9,y:-10.7},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:78.8,y:-11.2},0).wait(1).to({scaleX:0.61,scaleY:0.61,y:-11.5},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:78.7,y:-11.8},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:78.6,y:-12.1,alpha:0.675},0).wait(1).to({scaleX:0.38,scaleY:0.38,y:-12.3,alpha:0.263},0).wait(1).to({scaleX:0.34,scaleY:0.34,y:-12.4,alpha:0.096},0).wait(1).to({scaleX:0.31,scaleY:0.31,y:-12.5,alpha:0.021},0).wait(1).to({scaleX:0.3,scaleY:0.3,y:-12.6,alpha:0},0).to({_off:true},1).wait(3));

	// Layer 6
	this.instance_22 = new lib.Layer6_1();
	this.instance_22.setTransform(85,-62.9,1,1,0,0,0,43,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({_off:true},12).wait(12));

	// Layer 6
	this.instance_23 = new lib.Layer6_1();
	this.instance_23.setTransform(84.6,-64.3,1,1,0,0,0,42.6,43.6);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(12).to({_off:false},0).wait(1).to({regX:43,regY:45,scaleX:0.85,scaleY:0.85,x:85,y:-63},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:84.9,y:-63.2},0).wait(1).to({scaleX:0.61,scaleY:0.61,y:-63.3},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:84.8,y:-63.5},0).wait(1).to({scaleX:0.44,scaleY:0.44,y:-63.6,alpha:0.675},0).wait(1).to({scaleX:0.38,scaleY:0.38,y:-63.7,alpha:0.263},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:84.7,alpha:0.096},0).wait(1).to({scaleX:0.31,scaleY:0.31,alpha:0.021},0).wait(1).to({scaleX:0.3,scaleY:0.3,y:-63.8,alpha:0},0).to({_off:true},1).wait(2));

	// Layer 3
	this.instance_24 = new lib.Layer3_1();
	this.instance_24.setTransform(83.5,-68.4,1,1,0,0,0,34.5,26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({_off:true},13).wait(11));

	// Layer 3
	this.instance_25 = new lib.Layer3_1();
	this.instance_25.setTransform(83.2,-69.2,1,1,0,0,0,34.2,25.7);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(13).to({_off:false},0).wait(1).to({regX:34.5,regY:26.5,scaleX:0.85,scaleY:0.85,x:83.5,y:-68.4},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:83.4,y:-68.5},0).wait(1).to({scaleX:0.61,scaleY:0.61,y:-68.6},0).wait(1).to({scaleX:0.52,scaleY:0.52},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:83.3,y:-68.7,alpha:0.675},0).wait(1).to({scaleX:0.38,scaleY:0.38,y:-68.8,alpha:0.263},0).wait(1).to({scaleX:0.34,scaleY:0.34,alpha:0.096},0).wait(1).to({scaleX:0.31,scaleY:0.31,alpha:0.021},0).wait(1).to({scaleX:0.3,scaleY:0.3,alpha:0},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,-122.9,142,215);


(lib.מימין_זז = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer41_1();
	this.instance.setTransform(59.5,-47.4,1,1,0,0,0,28.5,49.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(13));

	// Layer 41
	this.instance_1 = new lib.Layer41_1();
	this.instance_1.setTransform(59.5,-47.4,2.706,2.706,0,0,0,28.4,49.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:28.5,scaleX:2.35,scaleY:2.35,x:59.7,alpha:0.763},0).wait(1).to({scaleX:2.03,scaleY:2.03,y:-47.2,alpha:1},0).wait(1).to({scaleX:1.76,scaleY:1.76,x:59.6},0).wait(1).to({scaleX:1.53,scaleY:1.53,y:-47.3},0).wait(1).to({scaleX:1.34,scaleY:1.34,y:-47.2},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:59.5},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:-47.3},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1,scaleY:1},0).to({_off:true},1).wait(13));

	// Layer 40 copy
	this.instance_2 = new lib.Layer40copy_1();
	this.instance_2.setTransform(60.5,7.5,1,1,0,0,0,26.5,74.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).wait(12));

	// Layer 40 copy
	this.instance_3 = new lib.Layer40copy_1();
	this.instance_3.setTransform(60.4,7.5,2.706,2.706,0,0,0,26.4,74.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(1).to({regX:26.5,scaleX:2.35,scaleY:2.35,x:60.6,alpha:0.763},0).wait(1).to({scaleX:2.03,scaleY:2.03,alpha:1},0).wait(1).to({scaleX:1.76,scaleY:1.76},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:60.5},0).wait(1).to({scaleX:1.34,scaleY:1.34},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1,scaleY:1},0).to({_off:true},1).wait(12));

	// Layer 36 copy
	this.instance_4 = new lib.Layer36copy_1();
	this.instance_4.setTransform(76.5,-52.4,1,1,0,0,0,45.5,23.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).wait(11));

	// Layer 36 copy
	this.instance_5 = new lib.Layer36copy_1();
	this.instance_5.setTransform(76.3,-52.4,2.706,2.706,0,0,0,45.3,23.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).wait(1).to({regX:45.5,scaleX:2.35,scaleY:2.35,x:76.9,y:-52.2,alpha:0.763},0).wait(1).to({scaleX:2.03,scaleY:2.03,x:76.8,y:-52.3,alpha:1},0).wait(1).to({scaleX:1.76,scaleY:1.76,x:76.7},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:76.6},0).wait(1).to({scaleX:1.34,scaleY:1.34},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:76.5},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:-52.2},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:-52.3},0).wait(1).to({scaleX:1,scaleY:1},0).to({_off:true},1).wait(11));

	// Layer 34
	this.instance_6 = new lib.Layer34_1();
	this.instance_6.setTransform(47.5,-11.4,1,1,0,0,0,19.5,74.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13).to({_off:false},0).wait(10));

	// Layer 34
	this.instance_7 = new lib.Layer34_1();
	this.instance_7.setTransform(47.4,-11.4,2.706,2.706,0,0,0,19.4,74.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},0).wait(1).to({regX:19.5,scaleX:2.35,scaleY:2.35,x:47.6,alpha:0.763},0).wait(1).to({scaleX:2.03,scaleY:2.03,alpha:1},0).wait(1).to({scaleX:1.76,scaleY:1.76},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:47.5},0).wait(1).to({scaleX:1.34,scaleY:1.34},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1,scaleY:1},0).to({_off:true},1).wait(10));

	// Layer 31
	this.instance_8 = new lib.Layer31_1();
	this.instance_8.setTransform(76.5,-70.9,1,1,0,0,0,48.5,38);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).wait(9));

	// Layer 31
	this.instance_9 = new lib.Layer31_1();
	this.instance_9.setTransform(76.3,-70.9,2.706,2.706,0,0,0,48.3,38);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(4).to({_off:false},0).wait(1).to({regX:48.5,scaleX:2.35,scaleY:2.35,x:76.8,alpha:0.763},0).wait(1).to({scaleX:2.03,scaleY:2.03,x:76.7,y:-70.7,alpha:1},0).wait(1).to({scaleX:1.76,scaleY:1.76},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:76.6},0).wait(1).to({scaleX:1.34,scaleY:1.34},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:76.5},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1,scaleY:1},0).to({_off:true},1).wait(9));

	// Layer 25
	this.instance_10 = new lib.Layer25_1();
	this.instance_10.setTransform(89.5,9,1,1,0,0,0,46.5,60);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15).to({_off:false},0).wait(8));

	// Layer 25
	this.instance_11 = new lib.Layer25_1();
	this.instance_11.setTransform(89.3,9,2.706,2.706,0,0,0,46.3,60.1);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(5).to({_off:false},0).wait(1).to({regX:46.5,regY:60,scaleX:2.35,scaleY:2.35,x:89.8,y:8.8,alpha:0.763},0).wait(1).to({scaleX:2.03,scaleY:2.03,x:89.7,alpha:1},0).wait(1).to({scaleX:1.76,scaleY:1.76,x:89.6,y:8.9},0).wait(1).to({scaleX:1.53,scaleY:1.53},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:89.5},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1,scaleY:1,y:9},0).to({_off:true},1).wait(8));

	// Layer 19
	this.instance_12 = new lib.Layer19_1();
	this.instance_12.setTransform(78.5,8,1,1,0,0,0,30.5,36);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(16).to({_off:false},0).wait(7));

	// Layer 19
	this.instance_13 = new lib.Layer19_1();
	this.instance_13.setTransform(78.5,8,2.706,2.706,0,0,0,30.4,36);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(6).to({_off:false},0).wait(1).to({regX:30.5,scaleX:2.35,scaleY:2.35,x:78.7,alpha:0.763},0).wait(1).to({scaleX:2.03,scaleY:2.03,x:78.6,y:8.1,alpha:1},0).wait(1).to({scaleX:1.76,scaleY:1.76},0).wait(1).to({scaleX:1.53,scaleY:1.53},0).wait(1).to({scaleX:1.34,scaleY:1.34},0).wait(1).to({scaleX:1.19,scaleY:1.19,y:8},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:78.5,y:8.1},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:8},0).wait(1).to({scaleX:1,scaleY:1,y:8.1},0).to({_off:true},1).wait(7));

	// Layer 20 copy
	this.instance_14 = new lib.Layer20copy_3();
	this.instance_14.setTransform(66,-62.4,1,1,0,0,0,34,53.5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(17).to({_off:false},0).wait(6));

	// Layer 20 copy
	this.instance_15 = new lib.Layer20copy_3();
	this.instance_15.setTransform(66,-62.4,2.706,2.706,0,0,0,33.9,53.5);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(7).to({_off:false},0).wait(1).to({regX:34,scaleX:2.35,scaleY:2.35,x:66.3,alpha:0.763},0).wait(1).to({scaleX:2.03,scaleY:2.03,x:66.2,alpha:1},0).wait(1).to({scaleX:1.76,scaleY:1.76,x:66.1},0).wait(1).to({scaleX:1.53,scaleY:1.53},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:66,y:-62.2},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:-62.3},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:-62.2},0).wait(1).to({scaleX:1,scaleY:1},0).to({_off:true},1).wait(6));

	// Layer 8 copy
	this.instance_16 = new lib.Layer8copy_1();
	this.instance_16.setTransform(92,-52.4,1,1,0,0,0,40,70.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(18).to({_off:false},0).wait(5));

	// Layer 8 copy
	this.instance_17 = new lib.Layer8copy_1();
	this.instance_17.setTransform(92,-52.4,2.706,2.706,0,0,0,39.9,70.5);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(8).to({_off:false},0).wait(1).to({regX:40,scaleX:2.35,scaleY:2.35,x:92.3,y:-52.2,alpha:0.763},0).wait(1).to({scaleX:2.03,scaleY:2.03,x:92.2,alpha:1},0).wait(1).to({scaleX:1.76,scaleY:1.76,x:92.1},0).wait(1).to({scaleX:1.53,scaleY:1.53,y:-52.3},0).wait(1).to({scaleX:1.34,scaleY:1.34},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:92,y:-52.2},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1,scaleY:1},0).to({_off:true},1).wait(5));

	// Layer 12
	this.instance_18 = new lib.Layer12_1();
	this.instance_18.setTransform(84,-79.4,1,1,0,0,0,38,41.5);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(19).to({_off:false},0).wait(4));

	// Layer 12
	this.instance_19 = new lib.Layer12_1();
	this.instance_19.setTransform(84,-79.4,2.706,2.706,0,0,0,37.9,41.5);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(9).to({_off:false},0).wait(1).to({regX:38,scaleX:2.35,scaleY:2.35,x:84.2,alpha:0.763},0).wait(1).to({scaleX:2.03,scaleY:2.03,y:-79.2,alpha:1},0).wait(1).to({scaleX:1.76,scaleY:1.76,x:84.1,y:-79.3},0).wait(1).to({scaleX:1.53,scaleY:1.53},0).wait(1).to({scaleX:1.34,scaleY:1.34,y:-79.2},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:84,y:-79.3},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:-79.2},0).wait(1).to({scaleX:1,scaleY:1,y:-79.3},0).to({_off:true},1).wait(4));

	// Layer 10 copy
	this.instance_20 = new lib.Layer10copy_1();
	this.instance_20.setTransform(79,-10.4,1,1,0,0,0,71,102.5);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(20).to({_off:false},0).wait(3));

	// Layer 10 copy
	this.instance_21 = new lib.Layer10copy_1();
	this.instance_21.setTransform(78.7,-10.4,2.706,2.706,0,0,0,70.7,102.5);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(10).to({_off:false},0).wait(1).to({regX:71,scaleX:2.35,scaleY:2.35,x:79.4,alpha:0.763},0).wait(1).to({scaleX:2.03,scaleY:2.03,x:79.3,y:-10.2,alpha:1},0).wait(1).to({scaleX:1.76,scaleY:1.76,y:-10.3},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:79.2},0).wait(1).to({scaleX:1.34,scaleY:1.34},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:79.1,y:-10.2},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:79,y:-10.3},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:-10.2},0).wait(1).to({scaleX:1,scaleY:1,y:-10.3},0).to({_off:true},1).wait(3));

	// Layer 6
	this.instance_22 = new lib.Layer6_1();
	this.instance_22.setTransform(85,-62.9,1,1,0,0,0,43,45);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(21).to({_off:false},0).wait(2));

	// Layer 6
	this.instance_23 = new lib.Layer6_1();
	this.instance_23.setTransform(84.8,-62.9,2.706,2.706,0,0,0,42.8,45);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(11).to({_off:false},0).wait(1).to({regX:43,scaleX:2.35,scaleY:2.35,x:85.3,y:-62.7,alpha:0.763},0).wait(1).to({scaleX:2.03,scaleY:2.03,x:85.2,alpha:1},0).wait(1).to({scaleX:1.76,scaleY:1.76,y:-62.8},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:85.1,y:-62.7},0).wait(1).to({scaleX:1.34,scaleY:1.34,y:-62.8},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:85,y:-62.7},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1,scaleY:1},0).to({_off:true},1).wait(2));

	// Layer 3
	this.instance_24 = new lib.Layer3_1();
	this.instance_24.setTransform(83.5,-68.4,1,1,0,0,0,34.5,26.5);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(22).to({_off:false},0).wait(1));

	// Layer 3
	this.instance_25 = new lib.Layer3_1();
	this.instance_25.setTransform(83.5,-68.4,2.706,2.706,0,0,0,34.4,26.5);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(12).to({_off:false},0).wait(1).to({regX:34.5,scaleX:2.35,scaleY:2.35,x:83.7,alpha:0.763},0).wait(1).to({scaleX:2.03,scaleY:2.03,x:83.6,y:-68.2,alpha:1},0).wait(1).to({scaleX:1.76,scaleY:1.76},0).wait(1).to({scaleX:1.53,scaleY:1.53,y:-68.3},0).wait(1).to({scaleX:1.34,scaleY:1.34,y:-68.2},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:83.5,y:-68.3},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:-68.2},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:-68.3},0).wait(1).to({scaleX:1,scaleY:1,y:-68.2},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,-181.4,154.3,267.9);


(lib.לכוון_2 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.לכוון_1();
	this.instance_1.setTransform(157,28,1,1,0,0,0,157,28);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.22)"],[0,1],0,-5.7,0,5.8).s().p("A4NA3IAAhsMAwbAAAIAABsg");
	this.shape.setTransform(156.7,-3.7);

	this.addChild(this.shape,this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-9.2,314,65.3);


(lib.לוגואיםבאנגלית_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.לוגואים_זז();
	this.instance.setTransform(159,24,1,1,0,0,0,189,34);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.22)"],[0,1],0,-5.7,0,5.8).s().p("A4NA3IAAhsMAwbAAAIAABsg");
	this.shape.setTransform(156.7,-3.7);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.3,-9.2,317,67.3);


(lib.לוגואוניב_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.לוגו_אונ_זז();
	this.instance.setTransform(157,28,1,1,0,0,0,157,28);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.22)"],[0,1],0,-5.7,0,5.8).s().p("A4NA3IAAhsMAwbAAAIAABsg");
	this.shape.setTransform(156.7,-3.7);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-9.2,314,65.3);


(lib.תכנית_זז = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.תוכנית_2();
	this.instance.setTransform(157.2,28,1,1,0,0,0,150,27);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.22)"],[0,1],0,-5.7,0,5.8).s().p("A4NA2IAAhrMAwbAAAIAABrg");
	this.shape.setTransform(156.7,-1.7);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.7,-7.2,310,62.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;