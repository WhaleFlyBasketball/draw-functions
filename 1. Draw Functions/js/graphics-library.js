function stroke(color){
    ctx.strokeStyle = color;
}

function fill(color){
    ctx.fillStyle = color;
}

function lineWidth(width){
    ctx.lineWidth = width;
}

function font(fontSetting){
    ctx.font = fontSetting;
}

// Draw a Stroke or Fill Rectangle With a Top-Left corner of (x, y), a width of w and height of h
function rect(x, y, w, h, mode){
    if (mode === "fill"){
        ctx.fillRect(x, y, w, h);
    } else if (mode === "stroke") {
        ctx.strokeRect(x, y, w, h);
    }
}

// Draw a line segment from (x1, y1) to (x2, y2)
function line(x1, y1, x2, y2){
    console.log(x1, y1, x2, y2);
    ctx.beginPath();
    ctx.moveTo(x1, y1); // Endpoint 1
    ctx.lineTo(x2, y2); // Endpoint 2
    ctx.stroke();
}

// Draw a stroke or fill circle with center (x, y), and a radius of r
function circle(x, y, r, mode){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    if (mode === "fill"){
        ctx.fill();
    } else if (mode === "stroke"){
        ctx.stroke();
    }
}

//
function triangle(x1, y1, x2, y2, x3, y3, mode){
    ctx.beginPath();
    ctx.moveTo(x1, y1); // Vertex 1
    ctx.lineTo(x2, y2); // Vertex 2
    ctx.lineTo(x3, y3); // Vertex 3
    if (mode === "fill"){
        ctx.fill();
    } else if (mode === "stroke"){
        ctx.closePath();
        ctx.stroke();
    }
}

function text(message, x, y, mode){
    if (mode === "fill"){
        ctx.fillText(message, x, y);
    } else if (mode === "stroke") {
        ctx.strokeText(message, x, y);
    }
}

function ellipse(x, y, xRadius, yRadius, rotation, mode){
    ctx.beginPath();
    ctx.ellipse(x, y, xRadius, yRadius, rotation, 0, 2 * Math.PI);
    if (mode === "fill"){
        ctx.fill();
    } else if (mode === "stroke"){
        ctx.stroke();
    }
}

function image(img, x, y, w, h){
    ctx.drawImage(img, x, y, w, h);
}

function imageClip(img, xc, yc, wc, hc, x, y, w, h){
    ctx.drawImage(img, xc, yc, wc, hc, x, y, w, h);
}

//Draw a Platform
function platform(x, y, width, height, colour1, colour2){
    fill(colour1);
    rect(x, y, width, 10, "fill");
    fill(colour2);
    rect(x, y + 10, width, height + 10, "fill");
}

//Draw a Robot
function robot(x, y, colour1, colour2, neck, body){
    /* Antenna */
        fill(colour2);
        circle(x + 50, y + 20, 10, "fill");
        rect(x + 48, y + 30, 5, 30, "fill");
        fill(colour1);
        circle(x + 50, y + 100, 50, "fill");
    
    /* Head */
        fill(colour1);
        circle(x + 50, y + 100, 50, "fill");
    
    /* Eyes */
        fill("white");
        circle(x + 80, y + 100, 10, "fill");
        fill("black");
        circle(x + 85, y + 100, 3, "fill");
    
    /* Body */
        fill(colour1)
        rect(x + 45, y + 150, 10, neck, "fill");
        rect(x + 0, neck + y + 150, 100, 20, "fill");
        fill(colour2);
        rect(x + 0, neck * 2 + y + 150, 100, 20, "fill");
    
    /* Wheel */
        circle(x + 50, y + 300, 30, "fill");
    
    /* Body */
        fill(colour1);
        rect(x + 0, neck * 3 + y + 150, 100, body, "fill");
        fill(colour2);
    }