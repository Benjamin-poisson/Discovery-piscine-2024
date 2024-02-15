function rdmcolor() {
    var color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    $('body').css('background', color);
}