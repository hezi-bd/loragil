(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib._240x200 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// מסגרת
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F79431").ss(2,1,1).p("AQSvJMggjAAAQiAAAAACAIAAaSQAACBCAAAMAgjAAAQCAAAAAiBIAA6SQAAiAiAAAg");
	this.shape.setTransform(120,100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(384));

	// מסגרת (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwQPKQiBgBAAh/IAA6SQAAiBCBAAMAghAAAQCBAAgBCBIAAaSQABB/iBABg");
	mask.setTransform(120,100);

	// תמונה
	this.instance = new lib.תמונה_מתאחהcopy("synched",1,false);
	this.instance.setTransform(120,100,1,1,0,0,0,117,97);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(290).to({startPosition:1,_off:false},0).wait(94));

	// תמונה
	this.instance_1 = new lib.תמונה_מתאחה("synched",0,false);
	this.instance_1.setTransform(120,100,1,1,0,0,0,117,97);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(170).to({startPosition:0,_off:false},0).to({_off:true},121).wait(93));

	// טקסט
	this.instance_2 = new lib.טקסט_01_זזcopy3("synched",0,false);
	this.instance_2.setTransform(120.5,61.5,1,1,0,0,0,125.3,47.5);

	this.instance_3 = new lib.טקסט_01_זז("synched",0,false);
	this.instance_3.setTransform(120.5,61.5,1,1,0,0,0,125.3,47.5);

	this.instance_4 = new lib.טקסט_01_זזcopy("single",0);
	this.instance_4.setTransform(120.5,61.5,1,1,0,0,0,125.3,47.5);

	this.instance_5 = new lib.טקסט_01_זזcopy2("synched",0,false);
	this.instance_5.setTransform(120.5,61.5,1,1,0,0,0,125.3,47.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},80).to({state:[{t:this.instance_4,p:{mode:"single",loop:undefined}}]},211).to({state:[{t:this.instance_4,p:{mode:"synched",loop:false}}]},15).to({state:[{t:this.instance_5}]},63).wait(15));

	// לוגו
	this.instance_6 = new lib.לוגו_פועל();
	this.instance_6.setTransform(84.6,191.6,1,1,0,0,0,66.4,75.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).wait(384));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,234,266.2);


// symbols:
(lib.bg240x200 = function() {
	this.initialize(img.bg240x200);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,200);


(lib.bg279x200 = function() {
	this.initialize(img.bg279x200);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,279,200);


(lib.תמונהcopy = function() {
	this.initialize();

	// bg279x200.jpg
	this.instance = new lib.bg279x200();
	this.instance.setTransform(-38.9,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.9,0,279,200);


(lib.תמונה = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bg240x200();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,200);


(lib.תואר2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F17A31").s().p("AGcBqQAAgGADgLIAEgNIAJACQAGAAAEgFQAFgFAAgJIAAiSQAAgJAGgIQAHgGAOAAIBHAAQAqAAASASQAQAQAAAhIAACVIg9AAIAAiZQAAgPgHgIQgHgHgQAAIgTAAQgDAAAAAEIAAB6QAAAdgPAQQgQARghAAQgPAAgNgFgAFFBqIAAjYIA9AAIAADYgAD2BqIhBhrQgEAJAAAQIAABSIg9AAIAAgtQAAg1AZgXQAHgIANgHIguhEQgDgEAAgEQAAgEALAAIAzAAIA/BjQAFgKAAgXIAAhCIA+AAIAAAjQAAAygaAZQgLAJgLAHIAxBNQADAEAAAEQAAAEgLABgAAhBqIAAiTQAAgRgJgIQgLgLgUAAIg2AAIgCgRQAAgHACgJIBPAAQAlAAAVASQASATAAAgIAACTgAkzBqQgqAAgWgXQgWgXAAgnIAAiDIA8AAIAACDQAAABAAAAQABABAAAAQAAAAAAAAQABABAAAAIACAAQAIgDAEgFQAOgOAAgkIAAhMIA8AAIAABAQAAAsgbAXQgWAWgoAFQAAAIAIAHQAMAKATAAIAjAAQAUAAAMgLQANgLAAgYIAAiJIA8AAIAACDQAAAmgXAXQgYAYgsAAgAoXBqIAAgRIABgQIA0AAQAGAAAAgEIAAhxQAAgQgKgJQgIgJgQAAIgSAAQgCgHAAgHIACgSIAmAAQAoAAATAUQAQARAAAeIAACDQAAAKgEAEQgEADgKABgApohuIA9AAIAAB0QgPAJgQAFQgOAGgQABg");
	this.shape.setTransform(61.8,11.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F17A31").s().p("AGbB9IAAjRIgtDRIgxAAIgtjRIAADRIgvAAIAAj6IBJAAIAsDEIArjEIBIAAIAAD6gACBB9IAAgzIAyAAIAAAzgAhVB9IAAj6ICuAAIAAAtIh8AAIAAA1IByAAIAAArIhyAAIAABAICCAAIAAAtgAi2B9IAAgzIAwAAIAAAzgAkPB9IABjRIguDRIgxAAIgtjRIAADRIguAAIAAj6IBJAAIArDEIAsjEIBIAAIAAD6g");
	this.shape_1.setTransform(62,47.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,123.6,60.1);


(lib.מוכנות2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F17A31").s().p("AgDCEIAGgeIAJADQAGAAAEgFQAEgGAAgIIAAiSQAAgLAGgGQAIgGANAAIBHAAQAqAAASASQARAQAAAhIAACUIg9AAIAAiZQAAgOgHgHQgIgIgQAAIgSAAQgEAAAAAEIAAB6QAAAdgPAPQgPASgiAAQgOAAgMgGgAMzCEIAEggIALACQAKAAAGgHQAQgPAAg4QAAg1gRgQQgHgGgGAAQgFAAgHAFQgQARgEAyIgLBvIg9AAIAJhoQAEgrAWgXQAKgKAJgDIg0AAIAAggIBzAAQAiAAAVAUQAaAbAAA7QAAA/gcAdQgTAVghAAQgSAAgNgEgAlyCEIAEggIAKACQALAAAGgHQAQgPAAg4QAAg0gRgRQgHgGgGAAQgFAAgHAFQgPARgGAyIgKBvIg9AAIAJhoQAFgsAVgWQALgKAIgDIg0AAIAAggIBzAAQAiAAAUAUQAbAaAAA8QAAA/gcAdQgUAVggAAQgRAAgOgEgAjRB7IACgUQAPgEANgMQAhgeAAg5QAAgdgMgNQgIgIgSAAIgnAAQgOAAgHgGQgGgFAAgLIAAhBIA6AAIAAA0QACACAFAAIAhAAQAgAAARAPQAVAUAAAwQAAA8gnAmQgjAigzADQgCgEAAgIgAJ8CEIAAjXIA+AAIAADXgAHUCEIAAggIArAAQARAAALgLQASgSAAgwQAAgvgSgQQgKgKgSAAIgrAAQgBgGAAgIIABgTIA9AAQAqAAAWAVQAbAbAAA6QAAA9gcAbQgXAVgoAAgAFGCEIgBgQIABgQIA1AAQAFAAAAgEIAAhxQAAgPgJgKQgJgJgQAAIgSAAQgCgHAAgHIACgSIAmAAQAoAAATAUQARARAAAeIAACDQAAAKgEAEQgEADgLAAgADvCEIAAjXIA9AAIAADXgAqTCEIgCgRIACgPIBVAAQAEAAAAgEIgBgDQghgcgWghQghgvgIg+IAAgCQAAgEAGAAIA6AAQACAZALAiQAOAlAQAQQAFgDADgLQAEgLAAgMIAAhLIA+AAIAAAsQAAAvgdAdQgJAKgNAIQATAVAMAKQAOAMAAANIAAAEQgBAGgHAGQgHAFgLAAgAtNCEIgBgOIABgSIAyAAQANAAAMgLQATgVAAgsQAAgxgTgRQgKgJgPAAIgyAAIAAggIBOAAQAiAAAWAVQAXAZAAAtQAAAzgaAcQgGAHgLAGIAxAAIAAAggAuhhTIA+AAIAABzQgPAJgQAGQgQAFgPACg");
	this.shape.setTransform(93,13.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F17A31").s().p("AsCCLIAAkWIA+AAIAAEWgAopA4QgdgdAAgxQAAgvAbgaQAGgGAHgEIgkAAQgCgKAAgJIABgPIBtAAQAiAAAVAVQAbAcAAA7QAAA5gcAeQgZAbgrAAQgrAAgagbgAn2hiQgRAQAAA4QAAA0ASAQQAHAIAKgBQAJAAAGgGQASgRAAg0QAAg2gRgRQgIgJgJABQgKgBgHAIgALGBNIAAiZQAAgPgHgHQgJgHgOAAIgSAAQgFAAAAADIAACzIg8AAIAAjAQAAgMAHgFQAHgHANAAIBHAAQApAAASASQARAQAAAiIAACUgAGqBNIAAiSQAAgRgKgJQgLgKgWAAIg1AAQgCgLAAgGIACgRIBRAAQAlAAAUATQATASAAAhIAACSgADzBNIAAjYIA9AAIAADYgAAzBNQgJABgEgFQgDgDAAgHIAAiuQAAgNAFgGQAGgJAQAAIBPAAQAoABASATQAPARAAAaIAACLQAAAHgCAEQgEAEgKgBgABfhmIAACOQAAAFAGAAIAvAAQAFAAAAgFIAAh1QAAgNgGgHQgIgJgOABIgZAAQgFAAAAADgAidBNIAAjYIA9AAIAADYgAjwBNIhChrQgEAKAAARIAABQIg9AAIAAgsQAAgzAZgZQAIgIAMgIIguhDQgDgFAAgDQAAgEALgBIAzAAIA/BjQAGgLAAgUIAAhEIA9AAIAAAkQAAAygaAbQgLAKgLAGIAxBLQADAFAAADQAAAEgLAAgAqnBNIAAjYIA+AAIAADYgAH5iLIA+AAIAAB2QgPAJgQAGQgPAFgQABg");
	this.shape_1.setTransform(94.2,54.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,186.1,68.2);


(lib.לפרטים2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F17A31").s().p("Ai/BwQgdgdABg0IAAhyIA+AAIAABsQgBA5ASAQQAHAGAHAAQAKAAAGgHQANgRAAg3QABgogFgRQgCgHgEgEQgEgDgEAAQgJAAgEAIQgDgEgDgJQgDgJAAgKQARgPAYAAQAYAAAOAOQAOANAGAXQAFAUAAAiQAABBgdAeQgXAYgpAAQgoAAgZgagAF4B7IACgVQAOgCAPgNQAggeAAg5QAAgdgMgNQgHgIgTAAIgmAAQgOAAgIgGQgFgGAAgKIAAhBIA5AAIAAAvIAAAEQACADAFAAIAhAAQAgAAARAPQAVAUAAAwQAAA8gnAmQgjAigzADQgBgFgBgHgACYCEIAAggIBVAAQAKAAAIgIQAPgRAAg2QAAgwgOgQQgHgHgKAAQgIAAgGAGQgKAMAAAXQAAAJAEAKQADALADAFQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAIgCADQgIAGgPAHQgRAIgJACQgKgIgHgOQgFgMgBgNQAAgZASgTQAIgIAJgFIgkAAIgBgOIABgTIBkAAQAkAAAUAUQAZAaAAA6QAABBgeAcQgTASgiAAgABFCEIAAiSQAAgRgKgJQgLgKgVAAIg0AAQgBgIgBgJQABgJABgHIBPAAQAlAAAVASQASATABAgIAACSgAnmCEQgKAAgDgEQgEgDAAgIIAAitQAAgNAGgHQAGgHAQAAIBPAAQApAAARAUQAPAPAAAbIAACKQAAAJgDADQgDADgJAAgAm6gvIAACOQAAAFAGAAIAvAAQAGAAAAgFIAAh2QAAgLgHgJQgIgHgOAAIgZAAQgFAAAAADgAkvhTIA9AAIAABzQgSALgMAEQgTAGgMABg");
	this.shape.setTransform(50.4,13.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F17A31").s().p("AADCmIAAjCQAOgJANgEQAVgGALgBIAADWgAl3CmIAAjCQAOgJAOgEQATgGAMgBIAADWgAiPBeIACgUQAPgDANgMQAhgdgBg5QAAgggMgMQgHgIgSAAIgnAAQgPAAgFgFQgHgGAAgKIAAhBIA5AAIAAAvIABAEQABACAFAAIAiAAQAfAAARAQQAWATAAAxQAAA7goAnQghAhg0AEQgCgFAAgIgAE+BoIAAiSQAAgSgKgJQgLgKgVAAIhEAAQgCgHAAgKQAAgIACgIIBfAAQAmAAATASQATASAAAiIAACSgADRBoIAAh+QAJgHARgFQAPgEASgCIAACQgABMBcIABgUQAJgDAIgHQAZgXAAg5QAAglgNgOQgIgKgRAAIhPAAIgCgRQAAgKACgGIBrAAQAkAAASAUQATAWABAzQAAAYgJAZQgKAcgTASQgbAbgpABQgBgFAAgHgAktBcIAAgUQAKgDAHgHQAZgXAAg5QAAglgNgOQgIgKgRAAIhPAAIgCgRQAAgIACgIIBsAAQAjAAASAUQAUAXAAAyQAAAYgJAZQgKAcgSASQgbAbgqABg");
	this.shape_1.setTransform(50.2,51.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100.8,68.2);


(lib.ח24 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgiCbIhLCHIAGhkIjnhWIFZmdIDDAAQCBAAAACBIAAB9IlGg7IDNCGIgFEhg");
	mask.setTransform(203.3,34);

	// Layer 2
	this.instance = new lib.bg240x200();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,200);


(lib.ח23 = function() {
	this.initialize();

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AB2CTIijBzIiUk1IATgiIDyCZIAFkgIjKiHIFDA7IAAJGIhMA+g");
	mask.setTransform(217.3,57.8);

	// bg240x200.jpg
	this.instance = new lib.bg240x200();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,200);


(lib.ח22 = function() {
	this.initialize();

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjMEXIhLh9ICHjtIi0gPIAli6IJkAAIlYGdIBhAmIhhB2g");
	mask.setTransform(171.8,31.5);

	// bg240x200.jpg
	this.instance = new lib.bg240x200();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,200);


(lib.ח21 = function() {
	this.initialize();

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABVBaIlhD+IjwkYIHfiPIjAkdIJLAAIglC6IC0APIiHDtIBMB9IAgABQgRAugUArIkOBLg");
	mask.setTransform(106.3,39.5);

	// bg240x200.jpg
	this.instance = new lib.bg240x200();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,200);


(lib.ח20 = function() {
	this.initialize();

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al9ARIF3jaIjojIIGrAAIDBEdIneCPICkDBIkSC2g");
	mask.setTransform(65,43.3);

	// bg240x200.jpg
	this.instance = new lib.bg240x200();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,200);


(lib.ח19 = function() {
	this.initialize();

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkyDjIAAi0IEEitIkEgVIAAgQQAAiACAAAID9AAIDoDIIl1DaIAtBjIhaBCg");
	mask.setTransform(33.5,32.3);

	// bg240x200.jpg
	this.instance = new lib.bg240x200();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,200);


(lib.ח17 = function() {
	this.initialize();

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiAhgIEBAVIkBCtg");
	mask.setTransform(15.8,27.2);

	// bg240x200.jpg
	this.instance = new lib.bg240x200();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,200);


(lib.ח16 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhsBFQg7ASg7AJQgxAHgxABIgdABIAAm7ID/AxIHEHKImTCqg");
	mask.setTransform(38.3,104);

	// bg240x200.jpg
	this.instance = new lib.bg240x200();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,200);


(lib.ח15 = function() {
	this.initialize();

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgsCiIjgjhIj/gyIAAiWIDCBBIBahCICDEcICghqQATAbANAfIG4Elg");
	mask.setTransform(55.3,81.5);

	// bg240x200.jpg
	this.instance = new lib.bg240x200();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,200);


(lib.ח14 = function() {
	this.initialize();

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgsCiIjgjhIj/gyIAAiWIDCBBIBahCICDEcICghqQATAbANAfIG4Elg");
	mask.setTransform(55.3,81.5);

	// bg240x200.jpg
	this.instance = new lib.bg240x200();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,200);


(lib.ח13 = function() {
	this.initialize();

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag5DOIlrjyQgNgfgTgbIBxhKIBKBXIFhj/IBaETICGglICNGaIkxjNIA8DmQiIg+iBhFg");
	mask.setTransform(105.9,82.3);

	// bg240x200.jpg
	this.instance = new lib.bg240x200();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,200);


(lib.ח12 = function() {
	this.initialize();

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah0CFQhIjCgwjMIBuADIBkh2ICAAwIgFBkIA5hlIAtBgIhcBLICCDkIjhE7QhQh1gwiDg");
	mask.setTransform(182.5,86.4);

	// bg240x200.jpg
	this.instance = new lib.bg240x200();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,200);


(lib.ח11 = function() {
	this.initialize();

	// Layer 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkBDyQgih0gUh4ICDBYIiOmaICJgmQAUgsARgtIAqABQAwDMBGDEQAwCBBTB1IB4ioIg8EMIjLiqIAcEnIjGAPQg3higghogAEdkAIAmAbIgHAdg");
	mask.setTransform(169.4,104.1);

	// bg240x200.jpg
	this.instance = new lib.bg240x200();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,200);


(lib.ח10 = function() {
	this.initialize();

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjQAvIAShMIBoiTIg0hbIAHgdIgmgbIgvhTIBchLIBmDXICkhzIAADNIBLg+IAAFpIiRiGIgeHtg");
	mask.setTransform(215,110.8);

	// bg240x200.jpg
	this.instance = new lib.bg240x200();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,200);


(lib.ח09 = function() {
	this.initialize();

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ACbAAIAAFKIonmDICFg5IjnjpII5BnIhLgzQCBBFCIA/Ig8jnICuB1QAUB4AiB1QAYBNAmBMQgCCMgcCNg");
	mask.setTransform(100.2,132.5);

	// bg240x200.jpg
	this.instance = new lib.bg240x200();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,200);


(lib.ח07 = function() {
	this.initialize();

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al1DZQiAAAAAiAIAAiSIGQifIAFCbIDBgyIBpCeIETgwQAAA6AJA7QAHAyAJAzg");
	mask.setTransform(53,175.3);

	// bg240x200.jpg
	this.instance = new lib.bg240x200();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,200);


(lib.ח06 = function() {
	this.initialize();

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Am7j/IAdgBQAxgBAxgHQA7gJA7gRIA7EOIDvhlIFYFiIl8g8IgHBaIhfAZIgGibImPCeg");
	mask.setTransform(47.3,140.2);

	// bg240x200.jpg
	this.instance = new lib.bg240x200();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,200);


(lib.ח05 = function() {
	this.initialize();

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgZFgQgJgzgHgyQgJg8AAg8IkTAyIhpigIhhAZIAHhYIF8A7IlYljIAfgMIInGDIAAlJIE2GJQAXhxAGhyQAuAcAtAfIhGD+IBGAOIhkAtIAoBMIgEAeg");
	mask.setTransform(105.9,161.8);

	// bg240x200.jpg
	this.instance = new lib.bg240x200();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,200);


(lib.ח04 = function() {
	this.initialize();

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah/D0QhvglhtgqIA+jhQgtgggvgcIACgyIAAgCIABACQALAXANAWIDIgPIgOiJIGDB1IgeD9IC5BfIjSAZIiliHIhnBaIBsBuQhEgNhDgVg");
	mask.setTransform(187.4,161.2);

	// bg240x200.jpg
	this.instance = new lib.bg240x200();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,200);


(lib.ח02 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ADTFUIALgBIi5hgIAej9ImDh0IgQieIDNCpIAri+ID6GyIAentICRCIIAAJRg");
	mask.setTransform(203,146.1);

	// Layer 2
	this.instance = new lib.bg240x200();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,200);


(lib.ח01 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmTCMIAEgeIgnhMIBkgrIhHgOIAJgdQBsArBvAiQBDAWBHANIhvhsIBphaICjCHIDIgYIB+AZIAAAOQAAB/iBABg");
	mask.setTransform(192.8,183);

	// Layer 2
	this.instance = new lib.bg240x200();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,200);


(lib.זוהרcopy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.008)"],[0,1],0,0,0,0,0,39.5).s().p("AmUGMIAAsXIMpAAIAAMXg");
	this.shape.setTransform(40.5,25.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-13.7,81,79.3);


(lib.זוהר = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(249,255,111,0.988)","rgba(247,255,88,0)"],[0.204,0.733],0,0,0,0,0,48.4).s().p("AjlGpIAAtRIHLAAIAANRg");
	this.shape.setTransform(23,42.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,46.1,85.1);


(lib.אפלה = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.784)","#000000"],[0.129,0.278,0.325],10.9,-0.9,0,10.9,-0.9,472.8).s().p("Egj/APZIAA+xMBH/AAAIAAexg");
	this.shape.setTransform(230.5,98.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,461,197);


(lib.ClipGroup0_2 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Av5FfIAAq9IfyAAIAAK9g");
	mask.setTransform(101.8,35.2);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F17A31").ss(6.8,0,0,4).p("AAAkcQh1AAhTBUQhUBUAAB0QAAB2BUBTQBTBUB1AAQB2AABThUQBUhTAAh2QAAh0hUhUQhThUh2AAg");
	this.shape.setTransform(171.7,31.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F17A31").s().p("AgcDDQgEgnAFgiQAFgoAQgWIAlgqQAYgWACgZQADgdgXgrQgTgigYgdQADAZgPAhQgIATgTAiQgbA8BAAeIgMAUIgLAWQg/gggHgnQgGgbAbgqQAPgXAgguQAXgngNgZQAvAbAkArQAqAyACAxQABAcgfAhQgnApgGANQgLAZAAAcQAAAdAMAXg");
	this.shape_1.setTransform(171.8,30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F17A31").s().p("AgVBAQgUgbAEgmQAEgqAdgUIAdARQgWAeACAcQACAiAgASg");
	this.shape_2.setTransform(178.9,43.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F17A31").s().p("AglBEQAagXAEgoQAEgggLgoIAdAWIAXANQgJApACA7g");
	this.shape_3.setTransform(164.4,42.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjDDEQhShRAAhzQAAhyBShRQBRhSByAAQBzAABRBSQBSBRAAByQAABzhSBRQhRBShzAAQhyAAhRhSg");
	this.shape_4.setTransform(172.4,30.5);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = mask;

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(143.2,2.7,57.1,57.7);


(lib.ClipGroup0_1 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Av5FfIAAq9IfyAAIAAK9g");
	mask.setTransform(101.8,35.2);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AGiBSIAAhoQAAgNgMgJQgLgHgLgDIAIgRQADgHAGACQADAAAJAGQAKAEAEAFQAMALAAAVIAABUQAAAJgEAGQgDAEgLAIgAJFBRQgRgcgfgkIgXgZQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAABQgBABAAABQgPAlAAANQAAAOAOACIABAAIgHANQgDAHgGAAQgKAAgHgKQgFgFAAgMQAAgLAQglIAJgTQADgJgFgHIgPgQQgFgEAAgFIACgGIAJgPIADAAQAFAKAGAHQAhAiAWAZIACAAIABAAQANgZAAgKQAAgGgFgHQgGgHgGgCIAIgMQAEgGAEAAQAEAAAEADQAHAFAFAIQAFAIAAAHQAAAOgVAfIgGAKQgBAAAAAAQAAABAAAAQAAABAAAAQAAAAABAAQASAXAKARQAEAGAAAFQAAACgBACQgFAKgGADgAEpBRIAJgYIADgCQACgBAGAAIAYAAIAAhLQAAgNgLgIQgKgJgSABIAIgSQADgHAFAAQAKAAANAHQAVAMAAAWIAABpQAAAIgHAAIgrAAQgLAAgDACgAArBRIAAhgQAAgRgFgHQgGgGgOAAIgmAAQgIAAgFgHQgCgCAAgFQAAgEADgDIAJgNIACAAQAEAIAHAAIAiAAQAUAAAKALQALALAAAbIAABJQAAATgTALgAimA+QgQgTAAghQAAgjAPgRIABgCQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgOAAgIgKIgCgFQAAgDACgDIAKgOIACAAQAFAJALAAIA1AAQAXAAANAOQARARAAAjQAAAogVAZQgRAVgdAAQgcAAgQgTgAiagpQgDADgCAQQgCAOAAAMQAAA1ApgBQAWAAAJgKQALgNAAgfQAAgZgIgLQgIgLgRAAIgjAAQgFAAgDAEgAlmBRQgYAAgPgRQgQgTAAggIAAgsQAAgLgGgHIgKgIIAJgNQAEgFADgBQAEAAADADQAHAGAFAIQADAHAAAKIAAA3QAAAWALALQAKALAQgBQAYAAALgQQAIgNAAgZQAAgVgJgOQgJgOgRAAQgLAAgLAPIgDgCIAGgVQACgGADgDQAHgIAQAAQAVAAAOATQAOASAAAdQAAAmgVAbQgRAWgeAAgAnZBRIAAhlQAAgNgEgGQgFgHgMAAIgoAAQgIAAAAAOIAABBQAAAXgJAMQgIAMgRAAIgBAAQgJAAgFgEQgDgCABgEIAFgTQAGAEAHAAQAMAAAAgOIAAg2QAAgSAIgMQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIgDAAQgOAAgHgKQgDgCAAgCQAAgDACgDIAKgPIACAAQADAGAFACQAEACAIAAIA8AAQAlAAAAAsIAABQQAAARgTAKgABWBPIAAgDIAGgRQABgFAFABIAzAAQAMgBAGgHQAGgHAAgnQAAgTgCgIQgBgLgFgEQgFgEgOAAIgmAAQgKAAgFgHQgCgCAAgFQAAgDADgEIAJgNIACAAQAEAIAIAAIAlAAQAVAAAJALQAKAKAAAoQAAAkgEAKQgGAMgFAEQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAABAAQAAABAAAAIAcAAIAAABIgFARQgCAGgFAAgADwAdIAAgCQAIgQADgMQAFgSAAgEQAAgMgMgHQgIgFgNgGIAAgCIAIgMQAFgJAEAAQAFAAAKAHQAJAGAGAGQAJALAAAJQAAALgIASQgHAPgKAOQgBACgFADQgEADgDAAIgBAAgAj+AdIAAgCQAJgSADgKQAEgQAAgGQAAgNgLgGIgVgLIAAgCIAHgMQAFgJAEAAQAFAAAKAHQAJAGAGAGQAKALAAAJQAAALgIASQgHAPgLAOQgHAIgGAAIgBAAg");
	this.shape.setTransform(66.6,10.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AApBvIAAinQAAgVghgIIAIgQQADgGAFAAQADAAAIADQAIADADADQAPANAAAQIAACWQAAAVgSAJgAG0AwIAHgZIABgBQAWgHANgOQAGgEACgFQADgHgCgOIgEgaQgBgNgHgGQgFgEgKgDQgJgCgGAAIAIgSQADgGADAAQAHAAALAEQAMAFAFAHQAIAJACARIAKBaQABAGgBAEQgEAJgHAGIgCAAIgJguQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAABAAAAQgFAQgFAIQgIALgWAIQgGADgFAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBgAGKAzIAAhoQAAgOgMgIQgKgGgLgEIAIgRQADgGAFABQAEABAJAFQAJAFAEAEQANAMAAAUIAABUQAAAJgFAHQgDAEgKAHgAB3AzIAAhoQAAgOgMgIQgJgGgMgEIAIgRQADgGAFABQADABAKAFQAJAFAEAEQANAMAAAUIAABUQAAAJgFAHQgDAEgKAHgAl5AwIAHgZIAAgBQAWgHAOgOQAGgEABgFQADgHgCgOIgDgaQgCgNgHgGQgEgEgLgDQgJgCgGAAIAIgSQADgGAEAAQAGAAALAEQANAFAFAHQAIAJABARIALBaQAAAGgBAEQgDAHgHAIIgDAAIgIguQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABQgBABAAAAQgFASgFAGQgIALgWAIQgGADgEAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBgAE9AyIAAhgQAAgRgGgGQgFgGgOAAIgpAAQgHAAgFgHQgCgDAAgEQAAgEADgEIAJgNIACAAQAEAIAGAAIAlAAQAUAAAKALQAKALAAAbIAABKQAAASgSALgAkbAyIAKgYIACgCQACgBAHAAIAXAAIAAhLQAAgMgKgJQgLgJgSABIAJgSQADgHAEAAQALAAAMAHQAVAMAAAXIAABoQAAAIgGAAIgrAAQgLAAgEACgAjEAwIAAgDIAGgRQABgEAFAAIAzAAQAMAAAGgIQAFgHAAglIgBgdQgBgLgFgEQgEgDgPAAIgmAAQgKAAgFgIQgCgCAAgFQAAgEADgDIAJgNIACAAQAEAIAIAAIAlAAQAVAAAJALQAKAKAAApQAAAlgFAIQgEALgGAFIgBACIACABIAcAAIAAACIgFAQIgDAFQgBAAAAABQAAAAgBAAQgBAAAAAAQgBAAgBAAgAoCAwIAAgDIAFgRQACgEAFAAIAyAAQANAAAGgIQAFgHAAglIgBgdQgCgLgFgEQgEgDgPAAIgmAAQgKAAgFgIQgBgCAAgFQAAgDACgEIAJgNIACAAQAEAIAJAAIAkAAQAVAAAKALQAJAKAAApQAAAlgEAIQgFALgGAFIAAACIACABIAcAAIAAACIgGAQIgDAFQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAgACyAAIgBgCIAMgdQAFgRAAgGQAAgMgMgHQgGgEgPgHIAAgBIAHgNQAFgJAEAAQAFAAAKAHQAKAGAFAHQAKAKAAAJQAAALgIASQgJAVgJALIgFAEQgFADgDAAIAAAAg");
	this.shape_1.setTransform(52.9,36);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AhCBvIAAinQAAgVgggIIAIgQQADgGAEAAQAEAAAIADQAIADADADQAPANAAAQIAACWQAAAVgSAJgAgVAwIAAgDIAGgRQABgEAFAAIAxAAQAMAAAGgIQAFgHAAglIgBgdQgCgLgEgEQgFgDgOAAIglAAQgJAAgFgIQgCgCAAgFQAAgEADgDIAJgNIACAAQACAIAIAAIAlAAQAVAAAJALQAKAKAAApQgBAlgEAIQgFALgFAFIgBACIACABIAcAAIAAACIgGAQQgBAGgGAAg");
	this.shape_2.setTransform(122,36);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = mask;

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.3,1.9,130.6,45.3);


(lib.ClipGroup0 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Av5FfIAAq9IfyAAIAAK9g");
	mask.setTransform(101.8,35.2);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0AzIAAgUQAGACADAAQAUAAAAghQAAgLgEgJQgFgKgIAAQgPAAgHAbQgFAPgBAQIgDAWIgbAAIAHgiQADgLgBgJQABgLgGgSIgFgSIAaAAIAHAbQAHgbAYgCQARgBALASQAIAQAAAUQAAAWgIAPQgKAQgVABQgIAAgGgDgAnUAzQgJgBgDgDIAAgSQAEAEAHgCQAHgCAAgKIAAgxIgQAAIAAgVIA+AAQAYAAAIAPQAFAIAAAHIABAOIAAA5IgZAAIAAg1QABgNgFgGQgGgIgKAAIgPAAIAAAtQAAAPgEAIQgCAGgHAEQgFAEgHAAIgFgBgAGRAyIAAgVIAuAAIAAgkQAAgKgDgFQgGgIgJAAIgdAAIAAgVIAeAAQAYAAAKAPQAGALABASIAAAkIALAAIAAAVgAFlAyIAAg5QAAgMgCgEQgEgEgEgCIgLgBIgQAAIAABQIgZAAIAAhlIAyAAQAVAAAKAQQAGAKAAASIAAA5gADSAyIAAg0QgBgQgDgEQgDgIgOAAIgXAAIAAgVIAbAAQAZAAAKAPQAGAKAAATIAAA5gAB7AyIAAg5QAAgKgFgGQgEgHgNAAIgmAAIAAgVIAqAAQAaAAAJAPQAHALAAASIAAA5gAA/AyIAAg1IAZgHIAAA8gAjJAyIAAgVIAxAAIg1hQIAfAAIAaAtQAEgCABgDQABgCAAgOIAAgYIAYAAIAAAUQAAAOgEALQgFAJgMAEIATAbIAAAQgAj1AyIAAhlIAZAAIAABlgAlqAyIAAgVIAYAAIAAgwQAAgFgDgDQgDgDgFAAIgKAAIAAgVIANAAQAQAAAIAIQAIAHAAAVIAABBgAD7gzIAZAAIAAA5IgZAHgAkkgzIAYAAIAAA5IgYAHg");
	this.shape.setTransform(66.8,58);

	this.shape.mask = mask;

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(18.6,52.6,96.4,10.9);


(lib.תמונה_מתאחהcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 22 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AwfPXQiCAAAAiBIAA6rQAAiBCCAAMAg/AAAQCCAAAACBIAAarQAACBiCAAg");
	var mask_graphics_1 = new cjs.Graphics().p("AwiPaQiDAAAAiCIAA6vQAAiCCDAAMAhFAAAQCDAAAACCIAAavQAACCiDAAg");
	var mask_graphics_2 = new cjs.Graphics().p("AwlPdQiDAAAAiDIAA6zQAAiDCDAAMAhLAAAQCDAAAACDIAAazQAACDiDAAg");
	var mask_graphics_3 = new cjs.Graphics().p("AuLOiQh2AAAAh2IAA4IQAAh1B2AAId3AAQB2AAAAB1IAAYIQAAB2h2AAg");
	var mask_graphics_4 = new cjs.Graphics().p("ArlNwQhoAAAAhoIAA1cQAAhpBoAAIajAAQBoAAAABpIAAVcQAABohoAAg");
	var mask_graphics_5 = new cjs.Graphics().p("Ao/M/QhcAAAAhcIAAywQAAhbBcAAIXOAAQBbAAAABbIAASwQAABchbAAg");
	var mask_graphics_6 = new cjs.Graphics().p("AmZMNQhPAAAAhOIAAwFQAAhOBPAAIT5AAQBPAAAABOIAAQFQAABOhPAAg");
	var mask_graphics_7 = new cjs.Graphics().p("AjzLcQhBAAAAhBIAAtZQAAhBBBAAIQlAAQBBAAAABBIAANZQAABBhBAAg");
	var mask_graphics_8 = new cjs.Graphics().p("AhNKrQg1AAAAg1IAAqtQAAg0A1AAINQAAQA0AAAAA0IAAKtQAAA1g0AAg");
	var mask_graphics_9 = new cjs.Graphics().p("ABXJ5QgoAAAAgnIAAoEQAAgnAoAAIJ9AAQAoAAAAAnIAAIEQAAAngoAAg");
	var mask_graphics_10 = new cjs.Graphics().p("AD9JHQgaAAAAgaIAAlXQAAgaAaAAIGpAAQAaAAAAAaIAAFXQAAAagaAAg");
	var mask_graphics_11 = new cjs.Graphics().p("AGiIWQgNAAAAgNIAAisQAAgNANAAIDVAAQANAAAAANIAACsQAAANgNAAg");
	var mask_graphics_12 = new cjs.Graphics().p("AI4HpQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAIAAgRQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAIAVAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAAARQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:117,y:97}).wait(1).to({graphics:mask_graphics_1,x:117,y:97}).wait(1).to({graphics:mask_graphics_2,x:117,y:97}).wait(1).to({graphics:mask_graphics_3,x:112.2,y:93}).wait(1).to({graphics:mask_graphics_4,x:106.2,y:88.1}).wait(1).to({graphics:mask_graphics_5,x:100.3,y:83.1}).wait(1).to({graphics:mask_graphics_6,x:94.3,y:78.2}).wait(1).to({graphics:mask_graphics_7,x:88.3,y:73.2}).wait(1).to({graphics:mask_graphics_8,x:82.4,y:68.3}).wait(1).to({graphics:mask_graphics_9,x:76.4,y:63.3}).wait(1).to({graphics:mask_graphics_10,x:70.4,y:58.4}).wait(1).to({graphics:mask_graphics_11,x:64.5,y:53.4}).wait(1).to({graphics:mask_graphics_12,x:59.1,y:49}).wait(1));

	// Layer 2
	this.instance = new lib.אפלה();
	this.instance.setTransform(111.6,97.5,1,1,0,0,0,230.5,98.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},10).wait(3));

	// Layer 3
	this.instance_1 = new lib.תמונהcopy();
	this.instance_1.setTransform(142.3,97,1,1,0,0,0,120,100);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).wait(1).to({regX:100.5,x:122.8,alpha:0.736},0).wait(1).to({alpha:0.512},0).wait(1).to({alpha:0.329},0).wait(1).to({alpha:0.186},0).wait(1).to({alpha:0.084},0).wait(1).to({alpha:0.022},0).wait(1).to({alpha:0},0).wait(1));

	// Layer 36
	this.instance_2 = new lib.תמונהcopy();
	this.instance_2.setTransform(142.3,97,1,1,0,0,0,120,100);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},5).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.9,-2.9,461,200);


(lib.תמונה_מתאחה = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.אפלה();
	this.instance.setTransform(111.6,97.5,1,1,0,0,0,230.5,98.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({alpha:0.21},0).wait(1).to({alpha:0.395},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.691},0).wait(1).to({alpha:0.802},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:0.951},0).wait(1).to({alpha:0.988},0).wait(1).to({alpha:1},0).wait(114));

	// Layer 22 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwRPKQh/AAgBiBIAA6SQABh/B/gBMAgjAAAQB/ABABB/IAAaSQgBCBh/AAg");
	mask.setTransform(117,97);

	// Layer 36
	this.instance_1 = new lib.תמונהcopy();
	this.instance_1.setTransform(117.3,97,1,1,0,0,0,120,100);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45).to({_off:false},0).wait(1).to({regX:100.5,x:98.1},0).wait(1).to({x:98.4},0).wait(1).to({x:98.8},0).wait(1).to({x:99.1},0).wait(1).to({x:99.4},0).wait(1).to({x:99.7},0).wait(1).to({x:100},0).wait(1).to({x:100.4},0).wait(1).to({x:100.6},0).wait(1).to({x:101},0).wait(1).to({x:101.3},0).wait(1).to({x:101.6},0).wait(1).to({x:101.9},0).wait(1).to({x:102.2},0).wait(1).to({x:102.6},0).wait(1).to({x:102.9},0).wait(1).to({x:103.2},0).wait(1).to({x:103.5},0).wait(1).to({x:103.8},0).wait(1).to({x:104.2},0).wait(1).to({x:104.5},0).wait(1).to({x:104.8},0).wait(1).to({x:105.1},0).wait(1).to({x:105.4},0).wait(1).to({x:105.8},0).wait(1).to({x:106.1},0).wait(1).to({x:106.4},0).wait(1).to({x:106.7},0).wait(1).to({x:107},0).wait(1).to({x:107.4},0).wait(1).to({x:107.7},0).wait(1).to({x:108},0).wait(1).to({x:108.3},0).wait(1).to({x:108.6},0).wait(1).to({x:109},0).wait(1).to({x:109.3},0).wait(1).to({x:109.6},0).wait(1).to({x:109.9},0).wait(1).to({x:110.3},0).wait(1).to({x:110.6},0).wait(1).to({x:110.9},0).wait(1).to({x:111.2},0).wait(1).to({x:111.5},0).wait(1).to({x:111.9},0).wait(1).to({x:112.2},0).wait(1).to({x:112.5},0).wait(1).to({x:112.8},0).wait(1).to({x:113.1},0).wait(1).to({x:113.5},0).wait(1).to({x:113.8},0).wait(1).to({x:114.1},0).wait(1).to({x:114.4},0).wait(1).to({x:114.7},0).wait(1).to({x:115.1},0).wait(1).to({x:115.4},0).wait(1).to({x:115.7},0).wait(1).to({x:116},0).wait(1).to({x:116.3},0).wait(1).to({x:116.7},0).wait(1).to({x:117},0).wait(1).to({x:117.3},0).wait(1).to({x:117.6},0).wait(1).to({x:117.9},0).wait(1).to({x:118.3},0).wait(1).to({x:118.6},0).wait(1).to({x:118.9},0).wait(1).to({x:119.2},0).wait(1).to({x:119.5},0).wait(1).to({x:119.9},0).wait(1).to({x:120.2},0).wait(1).to({x:120.5},0).wait(1).to({x:120.8},0).wait(1).to({x:121.1},0).wait(1).to({x:121.5},0).wait(1).to({x:121.8},0).wait(1).to({x:122.1},0).wait(1).to({x:122.4},0).wait(1).to({x:122.8},0).wait(1));

	// רקע
	this.instance_2 = new lib.תמונה();
	this.instance_2.setTransform(117.3,97,1,1,0,0,0,120,100);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).wait(1).to({alpha:0.078},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.458},0).wait(1).to({alpha:0.664},0).wait(1).to({alpha:0.839},0).wait(1).to({alpha:0.959},0).wait(1).to({alpha:1},0).wait(19).to({_off:true},1).wait(73));

	// Layer 35 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AwRPKQh/AAgBiBIAA6SQABh/B/gBMAgjAAAQB/ABABB/IAAaSQgBCBh/AAg");
	mask_1.setTransform(117,97);

	// רקע
	this.instance_3 = new lib.ח24();
	this.instance_3.setTransform(203.3,196,1,0.032,0,180,0,203,65.1);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,1)",4,4,5);
	this.instance_3._off = true;

	this.instance_3.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).wait(1).to({regX:203.2,regY:34,scaleY:0.11,skewX:0,x:203.5,y:179.2},0).wait(1).to({scaleY:0.35,y:158.5},0).wait(1).to({scaleY:0.61,y:137.2},0).wait(1).to({scaleY:0.86,y:116.4},0).wait(1).to({scaleY:1,y:98.7},0).wait(1).to({y:85.4},0).wait(1).to({y:72.2},0).wait(1).to({y:58.9},0).wait(1).to({y:45.6},0).wait(1).to({y:32.5},0).wait(1).wait(1).to({x:202.9,y:32.2},0).wait(1).to({x:202.3,y:32},0).wait(1).to({x:201.7,y:31.7},0).wait(1).to({x:201.2,y:31.5},0).wait(1).to({x:200.6,y:31.2},0).wait(1).to({x:200,y:31},0).wait(7).to({_off:true},1).wait(74));

	// רקע
	this.instance_4 = new lib.ח23();
	this.instance_4.setTransform(214.3,195,1,0.035,0,180,0,217,93.1);
	this.instance_4.shadow = new cjs.Shadow("rgba(0,0,0,1)",4,4,5);
	this.instance_4._off = true;

	this.instance_4.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17).to({_off:false},0).wait(1).to({regX:217.3,regY:57.8,scaleY:0.04,skewX:0,x:214.6,y:186.9},0).wait(1).to({scaleY:0.23,y:172.9},0).wait(1).to({scaleY:0.48,y:157},0).wait(1).to({scaleY:0.74,y:141.1},0).wait(1).to({scaleY:0.93,y:127.3},0).wait(1).to({scaleY:1,y:117.7},0).wait(1).to({y:110.7},0).wait(1).to({y:103.7},0).wait(1).to({y:96.7},0).wait(1).to({y:89.7},0).wait(1).to({y:82.7},0).wait(1).to({y:75.7},0).wait(1).to({y:68.7},0).wait(1).to({y:61.5},0).wait(1).to({y:54.7},0).wait(17).to({_off:true},1).wait(74));

	// רקע
	this.instance_5 = new lib.ח22();
	this.instance_5.setTransform(168.8,194.5,1,0.035,0,180,0,171.5,59.9);
	this.instance_5.shadow = new cjs.Shadow("rgba(0,0,0,1)",4,4,5);
	this.instance_5._off = true;

	this.instance_5.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).wait(1).to({regX:171.8,regY:31.5,scaleY:0.14,rotation:4,skewX:0,x:169.3,y:182.5},0).wait(1).to({scaleY:0.48,rotation:3.9,x:169.9,y:164.7},0).wait(1).to({scaleY:0.82,rotation:3.4,x:170.3,y:146.9},0).wait(1).to({scaleY:1,rotation:2.8,x:170.2,y:133.8},0).wait(1).to({rotation:2,x:169.8,y:125.8},0).wait(1).to({rotation:1.2,x:169.4,y:117.7},0).wait(1).to({rotation:0.6,x:169,y:109.6},0).wait(1).to({rotation:0.1,x:168.7,y:101.5},0).wait(1).to({rotation:0,x:168.6,y:93.4},0).wait(1).to({x:168.5,y:85.3},0).wait(1).to({y:77.2},0).wait(1).to({x:168.4,y:69.1},0).wait(1).to({x:168.3,y:61},0).wait(1).to({y:52.9},0).wait(1).to({x:168.2,y:44.8},0).wait(1).to({y:36.7},0).wait(1).to({x:168.1,y:28.7},0).wait(31).to({_off:true},1).wait(74));

	// רקע
	this.instance_6 = new lib.ח21();
	this.instance_6.setTransform(104.7,193,1,0.055,0,-177.9,2,110.5,78.7);
	this.instance_6.shadow = new cjs.Shadow("rgba(0,0,0,1)",4,4,5);
	this.instance_6._off = true;

	this.instance_6.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).wait(1).to({regX:106.2,regY:39.5,scaleY:0.03,skewX:-176.1,skewY:3.7,x:100.5,y:187.6},0).wait(1).to({scaleY:0.05,rotation:8.1,skewX:0,skewY:0,x:101,y:177.8},0).wait(1).to({scaleY:0.21,rotation:14.2,x:102.9,y:165.2},0).wait(1).to({scaleY:0.44,rotation:20.8,x:107.3,y:150.3},0).wait(1).to({scaleY:0.71,rotation:26.9,x:114.2,y:134.6},0).wait(1).to({scaleY:0.93,rotation:31.3,x:120.7,y:122},0).wait(1).to({scaleY:1,rotation:33,x:123.4,y:113.8},0).wait(1).to({rotation:32.4,x:123.1,y:107.2},0).wait(1).to({rotation:30.6,x:122.2,y:100.4},0).wait(1).to({rotation:27.9,x:120.6,y:93.4},0).wait(1).to({rotation:24.5,x:118.5,y:86.3},0).wait(1).to({rotation:20.6,x:116.1,y:79.3},0).wait(1).to({rotation:16.5,x:113.4,y:72.4},0).wait(1).to({rotation:12.4,x:110.7,y:65.8},0).wait(1).to({rotation:8.5,x:108.3,y:59.2},0).wait(1).to({rotation:5.1,x:106.1,y:53},0).wait(1).to({rotation:2.4,x:104.4,y:46.7},0).wait(1).to({rotation:0.6,x:103.3,y:40.6},0).wait(1).to({rotation:0,x:103,y:34.3},0).wait(1).to({y:36.4},0).wait(25).to({_off:true},1).wait(74));

	// רקע
	this.instance_7 = new lib.ח20();
	this.instance_7.setTransform(62.3,193.5,1,0.037,0,180,0,65,83.2);
	this.instance_7.shadow = new cjs.Shadow("rgba(0,0,0,1)",4,4,5);
	this.instance_7._off = true;

	this.instance_7.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).wait(1).to({regY:43.2,scaleY:0.12,rotation:3.5,skewX:0,x:62.6,y:179.2},0).wait(1).to({scaleY:0.48,rotation:7,x:64.6,y:155.5},0).wait(1).to({scaleY:0.84,rotation:0,x:62.3,y:131.7},0).wait(1).to({scaleY:1,y:115.8},0).wait(1).to({y:106.4},0).wait(1).to({y:97},0).wait(1).to({y:87.6},0).wait(1).to({y:78.2},0).wait(1).to({y:68.8},0).wait(1).to({y:59.3},0).wait(1).to({y:49.9},0).wait(1).to({y:40.5},0).wait(27).to({_off:true},1).wait(74));

	// רקע
	this.instance_8 = new lib.ח19();
	this.instance_8.setTransform(30.8,193.5,1,0.068,0,180,0,33.5,61.5);
	this.instance_8.shadow = new cjs.Shadow("rgba(0,0,0,1)",4,4,5);
	this.instance_8._off = true;

	this.instance_8.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(22).to({_off:false},0).wait(1).to({regY:32.2,scaleY:0.22,rotation:4.1,skewX:0,x:31.2,y:172.2},0).wait(1).to({scaleY:0.72,rotation:8.1,x:33.7,y:142.8},0).wait(1).to({scaleY:1,rotation:0,x:30.8,y:119.2},0).wait(1).to({y:104.3},0).wait(1).to({y:89.3},0).wait(1).to({y:74.3},0).wait(1).to({y:59.2},0).wait(1).to({y:44.3},0).wait(1).to({y:29.3},0).wait(18).to({_off:true},1).wait(74));

	// רקע
	this.instance_9 = new lib.ח17();
	this.instance_9.setTransform(12.3,194,1,0.12,0,180,0,15,37.2);
	this.instance_9.shadow = new cjs.Shadow("rgba(0,0,0,1)",4,4,5);
	this.instance_9._off = true;

	this.instance_9.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(4).to({_off:false},0).wait(1).to({regX:15.8,regY:27.2,scaleY:0.01,skewX:181.4,skewY:1.3,x:13.1,y:184.7},0).wait(1).to({scaleY:0.27,rotation:3.4,skewX:360,skewY:0,x:13.2,y:172.5},0).wait(1).to({scaleY:0.61,rotation:4.6,x:13.6,y:159.8},0).wait(1).to({scaleY:0.89,rotation:2.3,x:13.5,y:147.5},0).wait(1).to({scaleY:1,rotation:0,x:13.1,y:136.9},0).wait(1).to({y:127.5},0).wait(1).to({y:118.1},0).wait(1).to({y:108.7},0).wait(1).to({y:99.3},0).wait(1).to({y:89.9},0).wait(1).to({y:80.5},0).wait(1).to({y:71.1},0).wait(1).to({y:61.7},0).wait(1).to({y:52.2},0).wait(1).to({y:42.8},0).wait(1).to({y:33.3},0).wait(1).to({y:24.1},0).wait(28).to({_off:true},1).wait(74));

	// רקע
	this.instance_10 = new lib.ח16();
	this.instance_10.setTransform(35.3,195,1,0.045,0,180,0,38,138.1);
	this.instance_10.shadow = new cjs.Shadow("rgba(0,0,0,1)",4,4,5);
	this.instance_10._off = true;

	this.instance_10.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15).to({_off:false},0).wait(1).to({regX:38.2,regY:104,scaleY:0.04,rotation:5.1,skewX:0,x:35.6,y:189.2},0).wait(1).to({scaleY:0.23,rotation:10.2,x:36.8,y:178.1},0).wait(1).to({scaleY:0.48,rotation:5.1,x:36.9,y:165},0).wait(1).to({scaleY:0.72,rotation:0,x:35.5,y:151.9},0).wait(1).to({scaleY:0.92,y:140.7},0).wait(1).to({scaleY:1,y:133.2},0).wait(1).to({y:128.6},0).wait(1).to({y:124},0).wait(1).to({y:119.4},0).wait(1).to({y:114.7},0).wait(1).to({y:110.1},0).wait(1).to({y:105.4},0).wait(1).to({y:101},0).wait(21).to({_off:true},1).wait(74));

	// רקע
	this.instance_11 = new lib.ח15();
	this.instance_11.setTransform(52.3,193.5,1,0.055,0,180,0,55,108);
	this.instance_11.shadow = new cjs.Shadow("rgba(0,0,0,1)",4,4,5);
	this.instance_11._off = true;

	this.instance_11.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(25).to({_off:false},0).wait(1).to({regX:55.2,regY:81.5,scaleY:0.03,rotation:3.6,skewX:0,x:52.6,y:184.8},0).wait(1).to({scaleY:0.22,rotation:10.4,x:53.5,y:171.7},0).wait(1).to({scaleY:0.47,rotation:14,x:55.5,y:157.3},0).wait(1).to({scaleY:0.73,rotation:4.9,x:54.1,y:142.2},0).wait(1).to({scaleY:0.92,rotation:0,x:52.5,y:128.8},0).wait(1).to({scaleY:1,y:118.7},0).wait(1).to({y:110.6},0).wait(1).to({y:102.6},0).wait(1).to({y:94.5},0).wait(1).to({y:86.5},0).wait(1).to({y:78.5},0).wait(13).to({_off:true},1).wait(74));

	// רקע
	this.instance_12 = new lib.ח14();
	this.instance_12.setTransform(52.8,194.5,1,0.054,0,180,0,55.5,108.1);
	this.instance_12.shadow = new cjs.Shadow("rgba(0,0,0,1)",4,4,5);
	this.instance_12._off = true;

	this.instance_12.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(9).to({_off:false},0).wait(1).to({regX:55.2,regY:81.5,scaleY:0.02,skewX:183.6,skewY:3.5,x:52.5,y:190},0).wait(1).to({scaleY:0.08,rotation:6.4,skewX:360,skewY:0,x:52.7,y:182.5},0).wait(1).to({scaleY:0.22,rotation:7.8,x:53.3,y:173.8},0).wait(1).to({scaleY:0.39,rotation:5.7,x:53.5,y:164.4},0).wait(1).to({scaleY:0.56,rotation:3,x:53.2,y:154.9},0).wait(1).to({scaleY:0.73,rotation:1.2,x:52.9,y:145.6},0).wait(1).to({scaleY:0.87,rotation:0.3,x:52.6,y:136.9},0).wait(1).to({scaleY:0.96,rotation:0,x:52.5,y:129.3},0).wait(1).to({scaleY:1,y:123.4},0).wait(1).to({y:118.5},0).wait(1).to({y:113.5},0).wait(1).to({y:108.6},0).wait(1).to({y:103.6},0).wait(1).to({y:98.7},0).wait(1).to({y:93.7},0).wait(1).to({y:88.8},0).wait(1).to({y:83.8},0).wait(1).to({y:79},0).wait(22).to({_off:true},1).wait(74));

	// רקע
	this.instance_13 = new lib.ח13();
	this.instance_13.setTransform(102.8,194,1,0.059,0,180,0,105.5,115.6);
	this.instance_13.shadow = new cjs.Shadow("rgba(0,0,0,1)",4,4,5);
	this.instance_13._off = true;

	this.instance_13.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(14).to({_off:false},0).wait(1).to({regX:105.9,regY:82.2,scaleY:0.22,rotation:2.4,skewX:0,x:103.5,y:179.3},0).wait(1).to({scaleY:0.72,rotation:5.8,x:105.6,y:155.2},0).wait(1).to({scaleY:1,rotation:2.4,x:104.5,y:138.4},0).wait(1).to({rotation:0,x:103.2,y:131},0).wait(1).to({rotation:-0.1,x:103,y:123.5},0).wait(1).to({rotation:-0.2,y:116.2},0).wait(1).to({y:108.8},0).wait(1).to({rotation:-0.1,y:101.3},0).wait(1).to({rotation:0,x:103.1,y:93.9},0).wait(1).to({rotation:0,y:86.5},0).wait(1).to({x:103.2,y:79.2},0).wait(24).to({_off:true},1).wait(74));

	// רקע
	this.instance_14 = new lib.ח12();
	this.instance_14.setTransform(179.8,195.5,1,0.035,0,180,0,182.5,124.4);
	this.instance_14.shadow = new cjs.Shadow("rgba(0,0,0,1)",4,4,5);
	this.instance_14._off = true;

	this.instance_14.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(17).to({_off:false},0).wait(1).to({regY:86.3,scaleY:0.05,rotation:4.7,skewX:0,x:179.9,y:187.6},0).wait(1).to({scaleY:0.24,rotation:9.6,x:181.2,y:174.2},0).wait(1).to({scaleY:0.48,rotation:4.5,y:158.7},0).wait(1).to({scaleY:0.73,rotation:0,x:179.8,y:143.2},0).wait(1).to({scaleY:0.92,y:129.7},0).wait(1).to({scaleY:1,y:120.4},0).wait(1).to({y:114.2},0).wait(1).to({y:108.1},0).wait(1).to({y:101.9},0).wait(1).to({y:95.7},0).wait(1).to({y:89.6},0).wait(1).to({y:83.4},0).wait(20).to({_off:true},1).wait(74));

	// רקע
	this.instance_15 = new lib.ח11();
	this.instance_15.setTransform(166.3,195.5,1,0.035,0,180,0,169,149.2);
	this.instance_15.shadow = new cjs.Shadow("rgba(0,0,0,1)",4,4,5);
	this.instance_15._off = true;

	this.instance_15.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(11).to({_off:false},0).wait(1).to({regX:169.4,regY:104,scaleY:0.03,skewX:0,x:166.7,y:191.1},0).wait(1).to({scaleY:0.09,y:185.1},0).wait(1).to({scaleY:0.16,y:179},0).wait(1).to({scaleY:0.22,y:173.1},0).wait(1).to({scaleY:0.29,y:167},0).wait(1).to({scaleY:0.35,y:161},0).wait(1).to({scaleY:0.42,y:155},0).wait(1).to({scaleY:0.48,y:149},0).wait(1).to({scaleY:0.55,y:143},0).wait(1).to({scaleY:0.61,y:137},0).wait(1).to({scaleY:0.68,y:130.9},0).wait(1).to({scaleY:0.74,y:125},0).wait(1).to({scaleY:0.81,y:118.9},0).wait(1).to({scaleY:0.87,y:112.9},0).wait(1).to({scaleY:0.94,y:106.9},0).wait(1).to({scaleY:1,y:101},0).wait(22).to({_off:true},1).wait(74));

	// רקע
	this.instance_16 = new lib.ח10();
	this.instance_16.setTransform(212.8,194.5,1,0.036,0,180,0,215.5,158.6);
	this.instance_16.shadow = new cjs.Shadow("rgba(0,0,0,1)",4,4,5);
	this.instance_16._off = true;

	this.instance_16.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(7).to({_off:false},0).wait(1).to({regX:215,regY:110.8,scaleY:0,skewX:183.4,skewY:3.3,x:212.3,y:192.4},0).wait(1).to({scaleY:0.1,rotation:9.2,skewX:360,skewY:0,x:213,y:185.7},0).wait(1).to({scaleY:0.23,rotation:12.5,x:214.6,y:177},0).wait(1).to({scaleY:0.4,rotation:6.2,x:214.3,y:167},0).wait(1).to({scaleY:0.57,rotation:0,x:212.3,y:156.6},0).wait(1).to({scaleY:0.73,y:146.6},0).wait(1).to({scaleY:0.87,y:137.8},0).wait(1).to({scaleY:0.96,y:131.1},0).wait(1).to({scaleY:1,y:127.2},0).wait(1).to({y:125},0).wait(1).to({y:122.9},0).wait(1).to({y:120.7},0).wait(1).to({y:118.5},0).wait(1).to({y:116.3},0).wait(1).to({y:114.2},0).wait(1).to({y:112},0).wait(1).to({y:109.9},0).wait(1).to({y:107.7},0).wait(24).to({_off:true},1).wait(74));

	// רקע
	this.instance_17 = new lib.ח09();
	this.instance_17.setTransform(97.3,194.5,1,0.038,0,180,0,100,172.6);
	this.instance_17.shadow = new cjs.Shadow("rgba(0,0,0,1)",4,4,5);
	this.instance_17._off = true;

	this.instance_17.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(4).to({_off:false},0).wait(1).to({regX:100.2,regY:132.5,scaleY:0.02,rotation:1,skewX:0,x:97.5,y:192.5},0).wait(1).to({scaleY:0.16,rotation:2.8,x:97.8,y:185.3},0).wait(1).to({scaleY:0.37,rotation:4.5,x:98.6,y:175.8},0).wait(1).to({scaleY:0.59,rotation:5.5,x:99.8,y:165.5},0).wait(1).to({scaleY:0.8,rotation:3.7,x:99.6,y:155.9},0).wait(1).to({scaleY:0.95,rotation:0,x:97.5,y:148.6},0).wait(1).to({scaleY:1,y:145.1},0).wait(1).to({y:143.7},0).wait(1).to({y:142.4},0).wait(1).to({y:141},0).wait(1).to({y:139.7},0).wait(1).to({y:138.3},0).wait(1).to({y:137},0).wait(1).to({y:135.7},0).wait(1).to({y:134.3},0).wait(1).to({y:133},0).wait(1).to({y:131.7},0).wait(1).to({y:130.3},0).wait(1).to({y:129},0).wait(1).to({y:129.2},0).wait(1).to({y:129.5},0).wait(24).to({_off:true},1).wait(74));

	// רקע
	this.instance_18 = new lib.ח07();
	this.instance_18.setTransform(50.3,194,1,0.046,0,180,0,53,196.9);
	this.instance_18.shadow = new cjs.Shadow("rgba(0,0,0,1)",4,4,5);
	this.instance_18._off = true;

	this.instance_18.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(23).to({_off:false},0).wait(1).to({regY:175.2,scaleY:0.1,rotation:5.4,skewX:0,x:50.5,y:191.8},0).wait(1).to({scaleY:0.48,rotation:10.7,x:52.2,y:183.8},0).wait(1).to({scaleY:0.85,rotation:5.4,x:52,y:175.6},0).wait(1).to({scaleY:1,rotation:0,x:50.3,y:172.4},0).wait(22).to({_off:true},1).wait(74));

	// רקע
	this.instance_19 = new lib.ח06();
	this.instance_19.setTransform(43.8,194,1,0.06,0,180,0,46.5,169.1);
	this.instance_19.shadow = new cjs.Shadow("rgba(0,0,0,1)",4,4,5);
	this.instance_19._off = true;

	this.instance_19.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(31).to({_off:false},0).wait(1).to({regX:47.2,regY:140.2,scaleY:0.47,rotation:5.8,skewX:0,x:45.8,y:176.6},0).wait(1).to({scaleY:1,rotation:0,x:44.5,y:157.2},0).wait(1).to({y:153.2},0).wait(1).to({y:149.2},0).wait(1).to({y:145.2},0).wait(1).to({y:141.2},0).wait(1).to({y:137.2},0).wait(11).to({_off:true},1).wait(74));

	// רקע
	this.instance_20 = new lib.ח05();
	this.instance_20.setTransform(102.3,193.5,1,0.044,0,180,0,105,196.2);
	this.instance_20.shadow = new cjs.Shadow("rgba(0,0,0,1)",4,4,5);
	this.instance_20._off = true;

	this.instance_20.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(14).to({_off:false},0).wait(1).to({regX:105.9,regY:161.8,scaleY:0.04,rotation:2.8,skewX:0,x:103.3,y:192.2},0).wait(1).to({scaleY:0.24,rotation:5.5,x:103.9,y:185.5},0).wait(1).to({scaleY:0.48,rotation:2.8,x:104,y:177.1},0).wait(1).to({scaleY:0.72,rotation:0,x:103.2,y:168.7},0).wait(1).to({scaleY:0.92,y:161.9},0).wait(1).to({scaleY:1,y:159.1},0).wait(29).to({_off:true},1).wait(74));

	// רקע
	this.instance_21 = new lib.ח04();
	this.instance_21.setTransform(183.8,194.5,1,0.087,0,180,0,186.5,188.8);
	this.instance_21.shadow = new cjs.Shadow("rgba(0,0,0,1)",4,4,5);
	this.instance_21._off = true;

	this.instance_21.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(5).to({_off:false},0).wait(1).to({regX:187.4,regY:161.2,scaleY:0.02,rotation:2.8,skewX:0,x:184.7,y:193.5},0).wait(1).to({scaleY:0.29,rotation:7.7,x:185.7,y:185.6},0).wait(1).to({scaleY:0.62,rotation:10.4,x:187.7,y:176.2},0).wait(1).to({scaleY:0.89,rotation:7.7,x:187.9,y:168.1},0).wait(1).to({scaleY:1,rotation:2.8,x:186,y:164.4},0).wait(1).to({rotation:0,x:184.7,y:163.8},0).wait(1).to({y:163.2},0).wait(1).to({y:162.7},0).wait(1).to({y:162.2},0).wait(1).to({y:161.6},0).wait(1).to({y:161.2},0).wait(1).to({y:160.6},0).wait(1).to({y:160.1},0).wait(1).to({y:159.6},0).wait(1).to({y:159},0).wait(1).to({y:158.5},0).wait(28).to({_off:true},1).wait(74));

	// רקע
	this.instance_22 = new lib.ח02();
	this.instance_22.setTransform(200.8,194.5,1,0.048,0,180,0,203.5,182.6);
	this.instance_22.shadow = new cjs.Shadow("rgba(0,0,0,1)",4,4,5);

	this.instance_22.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1).to({regX:203,regY:146.1,scaleY:0,skewX:180.9,skewY:0.8,x:200.3,y:193.8},0).wait(1).to({scaleY:0.12,rotation:2.6,skewX:360,skewY:0,x:200.5,y:188.7},0).wait(1).to({scaleY:0.28,rotation:4.4,x:201,y:181.8},0).wait(1).to({scaleY:0.48,rotation:5.2,x:201.8,y:174.1},0).wait(1).to({scaleY:0.67,rotation:3.6,y:166.4},0).wait(1).to({scaleY:0.83,rotation:0.8,x:200.8,y:159.6},0).wait(1).to({scaleY:0.95,rotation:0,x:200.3,y:154.5},0).wait(1).to({scaleY:1,y:152},0).wait(1).to({x:200.2,y:151.3},0).wait(1).to({y:150.5},0).wait(1).to({y:149.8},0).wait(1).to({y:149},0).wait(1).to({x:200.3,y:148.3},0).wait(1).to({y:147.5},0).wait(1).to({y:146.8},0).wait(1).to({y:146},0).wait(1).to({y:145.4},0).wait(1).to({y:144.6},0).wait(1).to({y:143.8},0).wait(1).to({y:143.1},0).wait(29).to({_off:true},1).wait(74));

	// Layer 1
	this.instance_23 = new lib.ח01();
	this.instance_23.setTransform(190.3,194,1,0.071,0,180,0,193,196.7);
	this.instance_23.shadow = new cjs.Shadow("rgba(0,0,0,1)",4,4,5);
	this.instance_23._off = true;

	this.instance_23.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(35).to({_off:false},0).wait(1).to({regX:192.8,regY:183,scaleY:0.46,skewX:0,x:190.1,y:187.6},0).wait(1).to({scaleY:1,y:180.4},0).wait(12).to({_off:true},1).wait(74));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(166.5,194.5,67.5,3.5);


(lib.תואר = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.תואר2();
	this.instance.setTransform(64.1,31.6,1,1,0,0,0,61.8,30.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.3,1.5,123.6,60.1);


(lib.לוגו_בנגcopy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ClipGroup0_2();
	this.instance.setTransform(100.8,33.3,1,1,0,0,0,101.8,35.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(142.2,0.9,57.1,57.8);


(lib.לוגו_בנג = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ClipGroup0();
	this.instance.setTransform(313.8,33.3,1,1,0,0,0,101.8,35.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F17A31").s().p("AqOBPIAAidIUdAAIAACdg");
	this.shape.setTransform(278.5,55.9);

	this.instance_1 = new lib.ClipGroup0_1();
	this.instance_1.setTransform(313.8,33.3,1,1,0,0,0,101.8,35.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgSAKIAAgSIAkAAIAAASg");
	this.shape_1.setTransform(319.9,30.8);

	this.instance_2 = new lib.ClipGroup0_2();
	this.instance_2.setTransform(100.8,33.3,1,1,0,0,0,101.8,35.1);

	this.addChild(this.instance_2,this.shape_1,this.instance_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(142.2,0,201.9,63.8);


(lib.זוהר_לוגו = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F47C20").s().p("AiVCWIAAAAQg+g/AAhXQAAhXA+g+IAAAAQA/g+BWAAQBYAAA+A+QA+A+AABXQAABXg+A/Qg+A+hYAAQhWAAg/g+gAh1h1QgxAxAABEQAABFAxAxIAAABQAxAwBEAAQBFAAAxgxIAAABQAxgyAAhFQAAhEgxgxQgxgxhFAAQhEAAgxAxgAAhB2QgOgTADgbQABgMAGgLQAGgLAKgHIAUALQgHAKgDAKQgEALABAKQAAALAGAIQAFAJALAHgAgRB2IABgxIAFgXQADgLAFgIIAkgoQAFgJABgJQABgKgEgOIgLgZIgOgXIgOgSQABAJgCAKIgZA3IgFARQgCAJACAHQADAIAGAGQAIAGANAGIgIANIgHAPQgWgLgMgNQgLgLgCgLQgCgKAEgOIAMgXIAfguIAGgLIAEgLQACgLgFgKIAcAUQAPANAMAOQAOAQAGAQQAJARAAARIgBAMIgEALIgHAIIggAkIgGAKQgHAQAAATQAAATAIAQgAhJB2QAJgIAFgLQAFgLABgNQABgLgBgNIgFgZIAVAPIAPAIIgEBFg");
	this.shape.setTransform(19,81);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},63).wait(39));

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_17 = new cjs.Graphics().p("AiVCWIAAAAQg+g/AAhXQAAhXA+g+IAAAAQA/g+BWAAQBYAAA+A+QA+A+AABXQAABXg+A/Qg+A+hYAAQhWAAg/g+gAh1h1QgxAxAABEQAABFAxAxIAAABQAxAwBEAAQBFAAAxgxIAAABQAxgyAAhFQAAhEgxgxQgxgxhFAAQhEAAgxAxgAAhB2QgOgTADgbQABgMAGgLQAGgLAKgHIAUALQgHAKgDAKQgEALABAKQAAALAGAIQAFAJALAHgAgRB2IABgxIAFgXQADgLAFgIIAkgoQAFgJABgJQABgKgEgOIgLgZIgOgXIgOgSQABAJgCAKIgZA3IgFARQgCAJACAHQADAIAGAGQAIAGANAGIgIANIgHAPQgWgLgMgNQgLgLgCgLQgCgKAEgOIAMgXIAfguIAGgLIAEgLQACgLgFgKIAcAUQAPANAMAOQAOAQAGAQQAJARAAARIgBAMIgEALIgHAIIggAkIgGAKQgHAQAAATQAAATAIAQgAhJB2QAJgIAFgLQAFgLABgNQABgLgBgNIgFgZIAVAPIAPAIIgEBFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(17).to({graphics:mask_graphics_17,x:19,y:18.5}).wait(62).to({graphics:null,x:0,y:0}).wait(23));

	// Layer 2
	this.instance = new lib.זוהרcopy();
	this.instance.setTransform(101.6,25.1,1,1,0,0,0,34.2,38.5);
	this.instance.alpha = 0.461;
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).wait(1).to({regX:40.5,regY:25.8,x:105,y:12.4,alpha:0.46},0).wait(1).to({x:102.1},0).wait(1).to({x:99.2},0).wait(1).to({x:96.4},0).wait(1).to({x:93.5},0).wait(1).to({x:90.6},0).wait(1).to({x:87.7},0).wait(1).to({x:84.9},0).wait(1).to({x:82},0).wait(1).to({x:79.1},0).wait(1).to({x:76.3},0).wait(1).to({x:73.4},0).wait(1).to({x:70.5},0).wait(1).to({x:67.6},0).wait(1).to({x:64.8},0).wait(1).to({x:61.9},0).wait(1).to({x:59},0).wait(1).to({x:56.2},0).wait(1).to({x:53.3},0).wait(1).to({x:50.4},0).wait(1).to({x:47.5},0).wait(1).to({x:44.7},0).wait(1).to({x:41.8},0).wait(1).to({x:39},0).wait(1).to({x:36.1},0).wait(1).to({x:33.2},0).wait(1).to({x:30.4},0).wait(1).to({x:27.5},0).wait(1).to({x:24.6},0).wait(1).to({x:21.7},0).wait(1).to({x:18.9},0).wait(1).to({x:16},0).wait(1).to({x:13.1},0).wait(1).to({x:10.3},0).wait(1).to({x:7.4},0).wait(1).to({x:4.5},0).wait(1).to({x:1.6},0).wait(1).to({x:-1},0).wait(1).to({x:-3.9},0).wait(1).to({x:-6.8},0).wait(1).to({x:-9.7},0).wait(1).to({x:-12.5},0).wait(1).to({x:-15.4},0).wait(1).to({x:-18.3},0).wait(1).to({x:-21.1},0).wait(1).to({x:-24},0).wait(1).to({x:-26.9},0).wait(1).to({x:-29.8},0).wait(1).to({x:-32.6},0).wait(1).to({x:-35.5},0).wait(1).to({x:-38.4},0).wait(1).to({x:-41.2},0).wait(1).to({x:-44.1},0).wait(1).to({x:-47},0).wait(1).to({x:-49.9},0).wait(1).to({x:-52.7},0).wait(1).to({x:-55.6},0).wait(1).to({x:-58.5},0).wait(1).to({x:-61.4},0).wait(1).to({x:-64.2},0).wait(1).to({x:-67.1},0).to({_off:true},1).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,59.7,42.6,42.6);


(lib.השתקפות = function() {
	this.initialize();

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwOCGQg1AAglglQgmglAAg2IAAgMQAAg0AmgmQAlgmA1AAMAgdAAAQA1AAAlAmQAmAmAAA0IAAAMQAAA2gmAlQglAlg1AAg");
	mask.setTransform(119.7,4.3);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],3,-19.1,3,-44.5).s().p("AzEEmQiBAAAAiAIAAlLQAAiACBAAMAmJAAAQCBAAgBCAIAAFLQABCAiBAAg");
	this.shape.setTransform(135,29.7);

	this.shape.mask = mask;

	// לוגו_בנג
	this.instance = new lib.לוגו_בנג();
	this.instance.setTransform(120.7,-1,1,1.098,0,180,0,241.8,64.8);

	this.instance.mask = mask;

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,270,70);


(lib.ClipGroup0_3 = function() {
	this.initialize();

	// Layer 4
	this.instance = new lib.לפרטים2();
	this.instance.setTransform(49,33,1,1,0,0,0,50.4,34);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.3,-1,100.8,68.2);


(lib.ClipGroup0_4 = function() {
	this.initialize();

	// FlashAICB
	this.instance_1 = new lib.מוכנות2();
	this.instance_1.setTransform(91.1,25,1,1,0,0,0,93,34);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-8.9,186.1,68.2);


(lib.לוגו_פועל = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.זוהר_לוגו();
	this.instance.setTransform(3.4,2,1.48,1.48);

	this.instance_1 = new lib.לוגו_בנגcopy();
	this.instance_1.setTransform(-38.4,33.3,1,1,0,0,0,100.8,33.3);

	this.instance_2 = new lib.לוגו_בנג();
	this.instance_2.setTransform(102.5,64.8,1,1,0,0,0,241.8,64.8);

	// Layer 3
	this.instance_3 = new lib.השתקפות();
	this.instance_3.setTransform(68.1,96.4,1,1,0,0,0,86.2,33.4);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.1,0,233.5,153.4);


(lib.טקסט_01_זזcopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.instance = new lib.ClipGroup0_4();
	this.instance.setTransform(128,46.2,1,1,0,0,0,92.3,26.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1,alpha:0.031},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.059},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.102},0).wait(1).to({regY:26.4,scaleX:1.06,scaleY:1.06,y:46.3,alpha:0.129},0).wait(1).to({regX:92.4,regY:26.3,scaleX:1.08,scaleY:1.08,x:128.1,y:46.2,alpha:0.172},0).wait(1).to({regX:92.3,scaleX:1.09,scaleY:1.09,x:128,alpha:0.199},0).wait(1).to({regY:26.2,scaleX:1.09,scaleY:1.09,y:46.1,alpha:0.238},0).wait(1).to({regX:92.2,regY:26.3,scaleX:1.1,scaleY:1.1,y:46.2,alpha:0.27},0).wait(1).to({regX:92.3,scaleX:1.1,scaleY:1.1,alpha:0.309},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.34},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.371},0).wait(1).to({regY:26.2,scaleX:1.11,scaleY:1.11,y:46.1,alpha:0.41},0).wait(1).to({regX:92.2,regY:26.3,scaleX:1.11,scaleY:1.11,x:127.9,y:46.2,alpha:0.441},0).wait(1).to({regX:92.3,regY:26.2,x:128,y:46.1,alpha:0.48},0).wait(1).to({regY:26.3,scaleX:1.11,scaleY:1.11,y:46.2,alpha:0.512},0).wait(1).to({alpha:0.551},0).wait(1).to({regY:26.2,y:46.1,alpha:0.578},0).wait(1).to({regY:26.4,scaleX:1.11,scaleY:1.11,y:46.3,alpha:0.621},0).wait(1).to({regY:26.3,scaleX:1.11,scaleY:1.11,y:46.2,alpha:0.648},0).wait(1).to({regX:92.4,scaleX:1.1,scaleY:1.1,x:128.1,alpha:0.68},0).wait(1).to({regX:92.3,scaleX:1.1,scaleY:1.1,x:128,alpha:0.719},0).wait(1).to({scaleX:1.09,scaleY:1.09,alpha:0.75},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.789},0).wait(1).to({regX:92.2,scaleX:1.03,scaleY:1.03,x:127.9,alpha:0.82},0).wait(1).to({regX:92.3,scaleX:1.01,scaleY:1.01,x:128,alpha:0.859},0).wait(1).to({regX:92.2,scaleX:1,scaleY:1,alpha:0.891},0).wait(1).to({regX:92.3,scaleX:1,scaleY:1,alpha:0.93},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.961},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(33.8,10.9,186.1,68.2);


(lib.טקסט_01_זזcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.instance = new lib.ClipGroup0_3();
	this.instance.setTransform(124.6,43.8,1,1,0,0,0,48.1,34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:43.9},0).wait(1).to({scaleX:1.06,scaleY:1.06,y:43.8},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:124.5,y:43.9},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:124.6,y:43.8,alpha:0.941},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.891},0).wait(1).to({scaleX:0.9,scaleY:0.9,alpha:0.852},0).wait(1).to({regY:34.3,scaleX:0.79,scaleY:0.79,alpha:0.809},0).wait(1).to({regY:34.4,scaleX:0.68,scaleY:0.68,alpha:0.77},0).wait(1).to({scaleX:0.56,scaleY:0.56,alpha:0.68},0).wait(1).to({regY:34.3,scaleX:0.45,scaleY:0.45,alpha:0.488},0).wait(1).to({regY:34.4,scaleX:0.34,scaleY:0.34,alpha:0.301},0).wait(1).to({regX:48,regY:34.5,scaleX:0.23,scaleY:0.23,alpha:0.141},0).wait(1).to({regX:47.8,scaleX:0.11,scaleY:0.11,alpha:0.031},0).wait(1).to({regX:50.1,regY:35,scaleX:0.01,scaleY:0.01,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(75.1,8.4,100.8,68.2);


(lib.טקסט_01_זזcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.instance = new lib.ClipGroup0_3();
	this.instance.setTransform(125.5,42.4,1,1,0,0,0,49,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regX:49.1,scaleX:1.01,scaleY:1.01},0).wait(1).to({regX:49,scaleX:1.02,scaleY:1.02,y:42.5},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:42.4},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1).to({scaleX:1.18,scaleY:1.18,y:42.5},0).wait(1).to({scaleX:1.25,scaleY:1.25,y:42.4},0).wait(1).to({scaleX:1.34,scaleY:1.34},0).wait(1).to({scaleX:1.42,scaleY:1.42},0).wait(1).to({scaleX:1.48,scaleY:1.48},0).wait(1).to({scaleX:1.51,scaleY:1.51},0).wait(1).to({scaleX:1.54,scaleY:1.54},0).wait(1).to({scaleX:1.55,scaleY:1.55},0).wait(1).to({scaleX:1.55,scaleY:1.55},0).wait(1).to({scaleX:1.55,scaleY:1.55},0).wait(1).to({scaleX:1.54,scaleY:1.54},0).wait(1).to({scaleX:1.53,scaleY:1.53},0).wait(1).to({scaleX:1.5,scaleY:1.5},0).wait(1).to({scaleX:1.47,scaleY:1.47},0).wait(1).to({scaleX:1.42,scaleY:1.42},0).wait(1).to({scaleX:1.35,scaleY:1.35},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:125.4},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:125.5},0).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({regX:49.1,regY:33.1,scaleX:1.02,scaleY:1.02,y:42.5},0).wait(1).to({regX:49,regY:33,scaleX:1.01,scaleY:1.01,y:42.4},0).wait(1).to({regX:49.1,regY:33.1,scaleX:1,scaleY:1,y:42.5},0).wait(1).to({regX:49,regY:33,scaleX:1,scaleY:1,y:42.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(75.1,8.4,100.8,68.2);


(lib.טקסט_01_זז = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_41 = new cjs.Graphics().p("AGbCIQgFgBgDgDQgCgCAAgEIAAh1IgaB3QAAADgDACQgDACgDABIgxAAQgEgBgCgCQgDgCgBgDIgZh3IAAB1QAAAEgDACQgDADgEABIgvAAQgEgBgCgDQgDgCgBgEIAAj6QABgFADgCQACgDAEAAIBJAAQAEAAADACQACACABADIAiCYIAhiYQABgDADgCQACgCAEAAIBIAAQAEAAADADQADACAAAFIAAD6QAAAEgDACQgDADgEABgACCCIQgFgBgCgDQgDgCAAgEIAAg0QAAgEADgDQACgCAFAAIAwAAQAFAAADACQACADAAAEIAAA0QAAAEgCACQgDADgFABgAhUCIQgFgBgCgDQgDgCAAgEIAAj6QAAgFADgCQACgDAFAAICtAAQAEAAADADQADACAAAFIAAAsQAAAEgDADQgDADgEAAIhzAAIAAAhIBpAAQAEABADADQADACAAAFIAAApQAAAFgDACQgDADgEABIhpAAIAAAsIB5AAQAEAAADADQADADAAAEIAAAuQAAAEgDACQgDADgEABgAi2CIQgFgBgCgDQgDgCAAgEIAAg0QAAgEADgDQACgCAFAAIAwAAQAFAAACACQADADAAAEIAAA0QAAAEgDACQgCADgFABgAkPCIQgEgBgDgDQgDgCAAgEIAAh1IgZB3QgBADgDACQgCACgEABIgwAAQgEgBgDgCQgDgCAAgDIgZh3IAAB1QgBAEgDACQgCADgEABIgvAAQgEgBgDgDQgDgCAAgEIAAj6QAAgFADgCQADgDAEAAIBJAAQAEAAACACQADACABADIAhCYIAiiYQAAgDADgCQADgCADAAIBIAAQAFAAADADQACACAAAFIAAD6QAAAEgCACQgDADgFABg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(41).to({graphics:mask_graphics_41,x:124.9,y:64.1}).wait(84));

	// Layer 5
	this.instance = new lib.זוהר();
	this.instance.setTransform(24.8,64.5,1,1,0,0,0,23,42.5);
	this.instance.alpha = 0.039;
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41).to({_off:false},0).wait(1).to({x:27.2,alpha:0.052},0).wait(1).to({x:29.7,alpha:0.063},0).wait(1).to({x:32.1,alpha:0.075},0).wait(1).to({x:34.5,alpha:0.087},0).wait(1).to({x:37,alpha:0.099},0).wait(1).to({x:39.4,alpha:0.11},0).wait(1).to({x:41.8,alpha:0.122},0).wait(1).to({x:44.3,alpha:0.134},0).wait(1).to({x:46.7,alpha:0.145},0).wait(1).to({x:49.1,alpha:0.157},0).wait(1).to({x:51.5,alpha:0.169},0).wait(1).to({x:54,alpha:0.18},0).wait(1).to({x:56.4,alpha:0.192},0).wait(1).to({x:58.8,alpha:0.204},0).wait(1).to({x:61.3,alpha:0.216},0).wait(1).to({x:63.7,alpha:0.227},0).wait(1).to({x:66.1,alpha:0.239},0).wait(1).to({x:68.6,alpha:0.251},0).wait(1).to({x:71,alpha:0.262},0).wait(1).to({x:73.4,alpha:0.274},0).wait(1).to({x:75.9,alpha:0.286},0).wait(1).to({x:78.3,alpha:0.298},0).wait(1).to({x:80.7,alpha:0.309},0).wait(1).to({x:83.2,alpha:0.321},0).wait(1).to({x:85.6,alpha:0.333},0).wait(1).to({x:88,alpha:0.344},0).wait(1).to({x:90.5,alpha:0.356},0).wait(1).to({x:92.9,alpha:0.368},0).wait(1).to({x:95.3,alpha:0.38},0).wait(1).to({x:97.7,alpha:0.391},0).wait(1).to({x:100.2,alpha:0.403},0).wait(1).to({x:102.6,alpha:0.415},0).wait(1).to({x:105,alpha:0.426},0).wait(1).to({x:107.5,alpha:0.438},0).wait(1).to({x:109.9,alpha:0.45},0).wait(1).to({x:112.3,alpha:0.461},0).wait(1).to({x:114.8,alpha:0.473},0).wait(1).to({x:117.2,alpha:0.485},0).wait(1).to({x:119.6,alpha:0.497},0).wait(1).to({x:122.1,alpha:0.508},0).wait(1).to({x:124.5,alpha:0.52},0).wait(1).to({x:126.9,alpha:0.532},0).wait(1).to({x:129.4,alpha:0.543},0).wait(1).to({x:131.8,alpha:0.555},0).wait(1).to({x:134.2,alpha:0.567},0).wait(1).to({x:136.6,alpha:0.579},0).wait(1).to({x:139.1,alpha:0.59},0).wait(1).to({x:141.5,alpha:0.602},0).wait(1).to({x:143.9,alpha:0.614},0).wait(1).to({x:146.4,alpha:0.625},0).wait(1).to({x:148.8,alpha:0.637},0).wait(1).to({x:151.2,alpha:0.649},0).wait(1).to({x:153.7,alpha:0.66},0).wait(1).to({x:156.1,alpha:0.672},0).wait(1).to({x:158.5,alpha:0.684},0).wait(1).to({x:161,alpha:0.696},0).wait(1).to({x:163.4,alpha:0.707},0).wait(1).to({x:165.8,alpha:0.719},0).wait(1).to({x:168.3,alpha:0.731},0).wait(1).to({x:170.7,alpha:0.742},0).wait(1).to({x:173.1,alpha:0.754},0).wait(1).to({x:175.6,alpha:0.766},0).wait(1).to({x:178,alpha:0.778},0).wait(1).to({x:180.4,alpha:0.789},0).wait(1).to({x:182.8,alpha:0.801},0).wait(1).to({x:185.3,alpha:0.813},0).wait(1).to({x:187.7,alpha:0.824},0).wait(1).to({x:190.1,alpha:0.836},0).wait(1).to({x:192.6,alpha:0.848},0).wait(1).to({x:195,alpha:0.86},0).wait(1).to({x:197.4,alpha:0.871},0).wait(1).to({x:199.9,alpha:0.883},0).wait(1).to({x:202.3,alpha:0.895},0).wait(1).to({x:204.7,alpha:0.906},0).wait(1).to({x:207.2,alpha:0.918},0).wait(1).to({x:209.6,alpha:0.93},0).wait(1).to({x:212,alpha:0.941},0).wait(1).to({x:214.5,alpha:0.953},0).wait(1).to({x:216.9,alpha:0.965},0).wait(1).to({x:219.3,alpha:0.977},0).wait(1).to({x:221.8,alpha:0.988},0).wait(1).to({alpha:1},0).wait(2));

	// FlashAICB
	this.instance_1 = new lib.תואר();
	this.instance_1.setTransform(125.5,47.7,1,1,0,0,0,64.8,32.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).wait(1).to({regY:32.5,scaleX:1,scaleY:1,alpha:0.031},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.059},0).wait(1).to({regY:32.6,scaleX:1.04,scaleY:1.04,alpha:0.102},0).wait(1).to({regX:64.9,scaleX:1.06,scaleY:1.06,alpha:0.129},0).wait(1).to({regX:64.8,scaleX:1.08,scaleY:1.08,alpha:0.172},0).wait(1).to({scaleX:1.09,scaleY:1.09,alpha:0.199},0).wait(1).to({scaleX:1.09,scaleY:1.09,alpha:0.238},0).wait(1).to({regX:64.9,scaleX:1.1,scaleY:1.1,alpha:0.27},0).wait(1).to({regX:64.8,regY:32.5,scaleX:1.1,scaleY:1.1,alpha:0.309},0).wait(1).to({regY:32.6,scaleX:1.1,scaleY:1.1,alpha:0.34},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.371},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.41},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.441},0).wait(1).to({alpha:0.48},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:125.4,alpha:0.512},0).wait(1).to({x:125.5,alpha:0.551},0).wait(1).to({alpha:0.578},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.621},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.648},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.68},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.719},0).wait(1).to({scaleX:1.09,scaleY:1.09,alpha:0.75},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.789},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.82},0).wait(1).to({regX:64.9,regY:32.5,scaleX:1.01,scaleY:1.01,alpha:0.859},0).wait(1).to({regX:64.8,regY:32.6,scaleX:1,scaleY:1,alpha:0.891},0).wait(1).to({regX:64.9,scaleX:1,scaleY:1,alpha:0.93},0).wait(1).to({regX:64.8,scaleX:1,scaleY:1,alpha:0.961},0).wait(1).to({alpha:1},0).wait(1).to({regY:31.4,y:46.5},0).wait(85));

	// FlashAICB (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_40 = new cjs.Graphics().p("AGbCSQgJgBgGgFIAAgBQgFgFAAgIIAAgWIgGAZQgCAHgFAFQgGAEgGABIgxAAQgHgBgGgEQgFgFgCgHIgFgZIAAAWQAAAIgGAFIAAABQgGAFgIABIgvAAQgIgBgFgFIgBgBQgFgFgBgIIAAj6QABgJAFgGIABAAQAFgFAIgBIBJAAQAIABAFAEIAAAAQAGAEABAHIAYBtIAYhtQABgGAGgFQAFgEAHgBIBIAAQAIABAGAFIAAAAQAGAGAAAJIAAD6QAAAIgGAFIAAABQgGAFgIABgACCCSQgJgBgGgFIAAgBIgDgDIgDADIAAABQgGAFgIABIizAAQgJgBgGgFIAAgBQgFgFgBgIIAAj6QABgJAFgGIAAAAQAGgFAJgBICtAAQAIABAGAFIAAAAQAGAGAAAJIAAAsQAAAIgGAGIAAAAQgGAGgIAAIhpAAIAAANIBfAAQAIABAGAFIAAAAQAGAGAAAJIAAApQAAAJgGAFIAAABQgGAFgIABIhfAAIAAAYIBvAAQAIAAAGAGIAAAAIACABQABgDADgEIAAAAQAGgFAJAAIAwAAQAJAAAGAFIAAAAQAFAGAAAIIAAA0QAAAIgFAFIAAABQgGAFgJABgAi2CSQgJgBgGgFIAAgBQgFgFAAgIIAAg0QAAgIAFgGIAAAAQAGgFAJAAIAwAAQAJAAAGAFIAAAAQAFAGAAAIIAAA0QAAAIgFAFIAAABQgGAFgJABgAkPCSQgIgBgGgFIAAgBQgGgFAAgIIAAgWIgGAZQgBAHgGAFQgFAEgHABIgwAAQgIgBgFgEQgFgFgCgHIgFgZIAAAWQgBAIgFAFIgBABQgFAFgIABIgvAAQgIgBgGgFIAAgBQgGgFAAgIIAAj6QAAgJAGgGIAAAAQAGgFAIgBIBJAAQAHABAGAEIAAAAQAFAEACAHIAXBtIAYhtQACgGAFgFQAFgEAHgBIBIAAQAJABAGAFIAAAAQAFAGAAAJIAAD6QAAAIgFAFIAAABQgGAFgJABg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(40).to({graphics:mask_1_graphics_40,x:124.9,y:64.1}).wait(85));

	// Layer 3
	this.instance_2 = new lib.זוהר();
	this.instance_2.setTransform(24.8,64.5,1,1,0,0,0,23,42.5);
	this.instance_2.alpha = 0.039;
	this.instance_2._off = true;

	this.instance_2.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40).to({_off:false},0).wait(1).to({x:27.6,alpha:0.041},0).wait(1).to({x:30.4,alpha:0.042},0).wait(1).to({x:33.2,alpha:0.043},0).wait(1).to({x:36.1},0).wait(1).to({x:38.9,alpha:0.044},0).wait(1).to({x:41.7,alpha:0.045},0).wait(1).to({x:44.5,alpha:0.046},0).wait(1).to({x:47.3,alpha:0.047},0).wait(1).to({x:50.1,alpha:0.048},0).wait(1).to({x:52.9},0).wait(1).to({x:55.7,alpha:0.049},0).wait(1).to({x:58.6,alpha:0.05},0).wait(1).to({x:61.4,alpha:0.051},0).wait(1).to({x:64.2,alpha:0.052},0).wait(1).to({x:67,alpha:0.053},0).wait(1).to({x:69.8,alpha:0.054},0).wait(1).to({x:72.6},0).wait(1).to({x:75.4,alpha:0.055},0).wait(1).to({x:78.3,alpha:0.056},0).wait(1).to({x:81.1,alpha:0.057},0).wait(1).to({x:83.9,alpha:0.058},0).wait(1).to({x:86.7,alpha:0.059},0).wait(1).to({x:89.5},0).wait(1).to({x:92.3,alpha:0.06},0).wait(1).to({x:95.1,alpha:0.061},0).wait(1).to({x:98,alpha:0.062},0).wait(1).to({x:100.8,alpha:0.063},0).wait(1).to({x:103.6,alpha:0.064},0).wait(1).to({x:106.4,alpha:0.065},0).wait(1).to({x:109.2},0).wait(1).to({x:112,alpha:0.066},0).wait(1).to({x:114.8,alpha:0.067},0).wait(1).to({x:117.6,alpha:0.068},0).wait(1).to({x:120.5,alpha:0.069},0).wait(1).to({x:123.3,alpha:0.07},0).wait(1).to({x:126.1},0).wait(1).to({x:128.9,alpha:0.071},0).wait(1).to({x:131.7,alpha:0.072},0).wait(1).to({x:134.5,alpha:0.073},0).wait(1).to({x:137.3,alpha:0.074},0).wait(1).to({x:140.2,alpha:0.075},0).wait(1).to({x:143},0).wait(1).to({x:145.8,alpha:0.076},0).wait(1).to({x:148.6,alpha:0.077},0).wait(1).to({x:151.4,alpha:0.078},0).wait(1).to({x:154.2,alpha:0.079},0).wait(1).to({x:157,alpha:0.08},0).wait(1).to({x:159.9,alpha:0.081},0).wait(1).to({x:162.7},0).wait(1).to({x:165.5,alpha:0.082},0).wait(1).to({x:168.3,alpha:0.083},0).wait(1).to({x:171.1,alpha:0.084},0).wait(1).to({x:173.9,alpha:0.085},0).wait(1).to({x:176.7,alpha:0.086},0).wait(1).to({x:179.5},0).wait(1).to({x:182.4,alpha:0.087},0).wait(1).to({x:185.2,alpha:0.088},0).wait(1).to({x:188,alpha:0.089},0).wait(1).to({x:190.8,alpha:0.09},0).wait(1).to({x:193.6,alpha:0.091},0).wait(1).to({x:196.4,alpha:0.092},0).wait(1).to({x:199.2},0).wait(1).to({x:202.1,alpha:0.093},0).wait(1).to({x:204.9,alpha:0.094},0).wait(1).to({x:207.7,alpha:0.095},0).wait(1).to({x:210.5,alpha:0.096},0).wait(1).to({x:213.3,alpha:0.097},0).wait(1).to({x:216.1},0).wait(1).to({x:218.9,alpha:0.098},0).wait(1).to({x:221.8,alpha:0.099},0).wait(1).to({alpha:0.1},0).wait(1).to({_off:true},1).wait(12));

	// FlashAICB
	this.instance_3 = new lib.ClipGroup0_4();
	this.instance_3.setTransform(125.2,46.3,1,1,0,0,0,89.5,26.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:91.1,regY:25.1,scaleX:1.04,scaleY:1.04,x:126.9,y:44.9},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:127},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:44.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:126.7,y:45.1},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:126.5,y:45.3},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:126.3,y:45.5,alpha:0.949},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:126.1,y:45.6,alpha:0.897},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:125.9,y:45.8,alpha:0.851},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:125.7,y:45.9,alpha:0.811},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:125.6,y:46,alpha:0.775},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:125.5,y:46.1,alpha:0.687},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:125.4,y:46.2,alpha:0.498},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:125.3,y:46.3,alpha:0.302},0).wait(1).to({scaleX:0.03,scaleY:0.03,alpha:0.142},0).wait(1).to({scaleX:0.01,scaleY:0.01,x:125.2,alpha:0.037},0).wait(1).to({scaleX:0,scaleY:0,rotation:-179.8,y:46.4,alpha:0},0).to({_off:true},1).wait(107));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(33.8,10.9,186.1,68.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;