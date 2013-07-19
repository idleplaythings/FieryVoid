model.DrawingToCanvas = function DrawingToCanvas(mathlib)
{
    this.mathlib = mathlib;
};

model.DrawingToCanvas.prototype.drawCone = function(canvas, start, p1, p2, arcs, w)
{
    canvas.lineWidth = w;
    canvas.beginPath();
    canvas.moveTo(start.x,start.y);
    canvas.lineTo(p1.x,p1.y);
    canvas.arc(
        start.x,
        start.y,
        this.mathlib.getDistance(start, p1),
        this.mathlib.degreeToRadian(arcs.start),
        this.mathlib.degreeToRadian(arcs.end), false);

    //canvas.lineTo(start.x,start.y);
    canvas.closePath();
    canvas.stroke();
    canvas.fill();
};

model.DrawingToCanvas.prototype.drawBoxAndFill = function (canvas, p, w, h, lw)
{
    canvas.lineWidth = lw;
    canvas.beginPath();
    canvas.moveTo(p.x-(w/2), p.y+(h/2));
    canvas.lineTo(p.x+(w/2),p.y+(h/2));
    canvas.lineTo(p.x+(w/2),p.y-(h/2));
    canvas.lineTo(p.x-(w/2),p.y-(h/2));
    canvas.closePath();
    canvas.stroke();
    canvas.fill();
};

model.DrawingToCanvas.prototype.drawCircle = function(canvas, x, y, r, w){
    if (r<1)
        r =1;
    canvas.lineWidth = w;
    canvas.beginPath();
    canvas.arc(x,y,r,0,Math.PI*2,true);
    canvas.closePath();
    canvas.stroke();
};

model.DrawingToCanvas.prototype.drawArrowHeadOnCircle = function(
    canvas, x, y, r, r2, base)
{
    var s = MathLib.degreeToRadian(360-base/2);
    var e = MathLib.degreeToRadian(base/2);
    canvas.beginPath()
    canvas.arc(x,y,r,s,e, false); // inner
    var p1 = MathLib.getPointInDirection(r2, 0, x, y);
    canvas.lineTo(p1.x, p1.y);

    canvas.closePath();
    canvas.stroke();
    canvas.fill();
};

model.DrawingToCanvas.prototype.drawDottedCircle = function(
    canvas, x, y, r, r2, segments, gapratio)
{
    var deg = 360/segments;
    var gap = deg*gapratio;

    for (var d = 0; d<360; d +=deg)
    {
        this.drawCircleSegment(canvas, x, y, r, r2, MathLib.degreeToRadian(d), MathLib.degreeToRadian(d+deg-gap));
    }
};

model.DrawingToCanvas.prototype.drawCircleSegment = function(
    canvas, x, y, r, r2, s, e, w)
{
    canvas.beginPath()
    canvas.arc(x,y,r2,s,e, false); // outer (filled)

    var p1 = MathLib.getPointInDirection(r, MathLib.radianToDegree(e), x, y);
    canvas.lineTo(p1.x, p1.y);
    canvas.arc(x,y,r,e,s, true); // inner (unfills it)
    var p2 = MathLib.getPointInDirection(r2, MathLib.radianToDegree(s), x, y);
    canvas.lineTo(p2.x, p2.y);

    canvas.closePath();
    canvas.stroke();
    canvas.fill();
};

model.DrawingToCanvas.prototype.drawHollowCircleAndFill = function(
    canvas, x, y, r, r2, w)
{
    canvas.beginPath()
    canvas.arc(x,y,r2,0,Math.PI*2, false); // outer (filled)
    canvas.moveTo(x+r, y);
    canvas.arc(x,y,r,0,Math.PI*2, true); // inner (unfills it)
    canvas.stroke();
    canvas.fill();
};

model.DrawingToCanvas.prototype.drawCircleAndFill = function(canvas, x, y, r, w)
{
    if ( ! w)
        w = 0;

    canvas.lineWidth = w;
    canvas.beginPath();
    canvas.arc(x,y,r,0,Math.PI*2,true);
    canvas.closePath();
    canvas.stroke();
    canvas.fill();
};

model.DrawingToCanvas.prototype.drawCircleNoStroke = function(canvas, x, y, r, w)
{
    canvas.lineWidth = w;
    canvas.beginPath();
    canvas.arc(x,y,r,0,Math.PI*2,true);
    canvas.closePath();
    canvas.fill();
};

model.DrawingToCanvas.prototype.drawLine = function(canvas, x1, y1, x2, y2, w)
{
    canvas.lineWidth = w;
    canvas.beginPath();
    canvas.moveTo(x1,y1);
    canvas.lineTo(x2,y2);
    canvas.stroke();

};

model.DrawingToCanvas.prototype.drawArrow = function(canvas, x, y, a, s, w)
{
    var p1, p2, p3, p4, p5, p6, p7;

    p1 = mathlib.getPointInDirection(s*0.5, a , x, y);
    p2 = mathlib.getPointInDirection(s*0.5, mathlib.addToDirection(a, -140), p1.x, p1.y);
    p3 = mathlib.getPointInDirection(s*0.15, mathlib.addToDirection(a, 90), p2.x, p2.y);
    p4 = mathlib.getPointInDirection(s*0.5, mathlib.addToDirection(a, 180), p3.x, p3.y);

    p7 = mathlib.getPointInDirection(s*0.5, mathlib.addToDirection(a, 140), p1.x, p1.y);
    p6 = mathlib.getPointInDirection(s*0.15, mathlib.addToDirection(a, -90), p7.x, p7.y);
    p5 = mathlib.getPointInDirection(s*0.5, mathlib.addToDirection(a, 180), p6.x, p6.y);

    canvas.lineWidth = w;
    canvas.beginPath();
    canvas.moveTo(p1.x, p1.y);
    canvas.lineTo(p2.x, p2.y);
    canvas.lineTo(p3.x, p3.y);
    canvas.lineTo(p4.x, p4.y);
    canvas.lineTo(p5.x, p5.y);
    canvas.lineTo(p6.x, p6.y);
    canvas.lineTo(p7.x, p7.y);
    canvas.closePath();
    canvas.fill();
    canvas.stroke();
};

model.DrawingToCanvas.prototype.drawX = function (canvas, x, y, l, w)
{
    x = parseInt(x);
    y = parseInt(y);
    l = parseInt(l);

    canvas.lineWidth = w;
    canvas.beginPath();
    canvas.moveTo(x-l,y-l);
    canvas.lineTo(x+l,y+l);
    canvas.stroke();


    canvas.beginPath();
    canvas.moveTo(x-l,y+l);
    canvas.lineTo(x+l,y-l);
    canvas.stroke();
};

model.DrawingToCanvas.prototype.drawHexagon = function(
    canvas, x, y, l, leftside, topleft, topright)
{
    var a = l*0.5
    var b = l*0.8660254 //0.86602540378443864676372317075294

    var p1, p2, p3, p4, p5, p6

    p1 = {x:x, y:y+a+l};
    p2 = {x:x, y:y+a};
    p3 = {x:x+b, y:y};
    p4 = {x:x+(2*b), y:y+a};
    p5 = {x:x+(2*b), y:y+a+l};
    p6 = {x:x+b, y:y+(2*l)};



    canvas.beginPath();

    if (leftside){
        canvas.moveTo(p1.x, p1.y);
        canvas.lineTo(p2.x, p2.y);
    }else{
        canvas.moveTo(p2.x, p2.y);
    }

    if (topleft){
        canvas.lineTo(p3.x, p3.y);
    }else{
        canvas.moveTo(p3.x, p3.y);
    }

    if (topright){
        canvas.lineTo(p4.x, p4.y);
    }else{
        canvas.moveTo(p4.x, p4.y);
    }

    canvas.lineTo(p5.x, p5.y);
    canvas.lineTo(p6.x, p6.y);
    canvas.lineTo(p1.x, p1.y)

    canvas.stroke();
};

model.DrawingToCanvas.prototype.drawAndRotate = function(
    context, w, h, iw, ih, angle, img, rolled)
{
    var x = Math.round(w/2);
    var y = Math.round(h/2);
    var width = iw/2;
    var height = ih/2;

    if (rolled)
        angle = 360 - angle;

    angle = angle * Math.PI / 180;
    context.save();
    context.translate(x, y);

        if (rolled)
        context.scale(1, -1);

    context.rotate(angle);
    context.drawImage(img, -width / 2, -height / 2, width, height);
    context.rotate(-angle);
    context.translate(-x, -y);
    context.restore();
    
};

model.DrawingToCanvas.prototype.drawBox = function(context, x, y, s, fill)
{
    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(x+s, y);
    context.lineTo(x+s, y+s);
    context.lineTo(x, y+s);
    context.lineTo(x, y);

    context.stroke();
    if (fill)
        context.fill();
};

model.DrawingToCanvas.prototype.drawHalfBox = function(context, x, y, s)
{
    context.beginPath();
    context.moveTo(x+s, y);
    context.lineTo(x+s, y+s);
    context.lineTo(x, y+s);

    context.stroke();
};

model.DrawingToCanvas.prototype.drawHalfBoxWithSide = function(context, x, y, s)
{
    context.beginPath();
    context.moveTo(x+s, y);
    context.lineTo(x+s, y+s);
    context.lineTo(x, y+s);
    context.lineTo(x, y);

    context.stroke();
};

model.DrawingToCanvas.prototype.drawHalfBoxWithTop = function(context, x, y, s)
{
    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(x+s, y);
    context.lineTo(x+s, y+s);
    context.lineTo(x, y+s);

    context.stroke();
};

model.DrawingToCanvas.prototype.resizeImageDataAndDraw = function(target, pos, data, zoom)
{
    var width = data.width;
    var height = data.height;

    var newCanvas = $("<canvas>")
        .attr("width", width)
        .attr("height", height)[0];

    newCanvas.getContext("2d").putImageData(data, 0, 0);

    target.save();
    target.scale(zoom, zoom);
    target.drawImage(newCanvas, pos.x/zoom, pos.y/zoom);
    target.restore();
}

model.DrawingToCanvas.prototype.resizeToFitAndDrawToMiddle = function(
    target, data)
{
    var width = data.width;
    var height = data.height;
    var targetWidth = jQuery(target).width();
    var targetHeight = jQuery(target).height();

    var zoom = (targetWidth / width > targetHeight / height )
        ? targetHeight / height
        : targetWidth / width;

    var pos = {
        x: (targetWidth - width*zoom)/2,
        y: (targetHeight - height*zoom)/2
    };

    this.resizeImageDataAndDraw(target.getContext("2d"), pos, data, zoom);
}

