function rdmcolor() {
    var color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    document.body.style.background = color;
}