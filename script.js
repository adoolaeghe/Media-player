
  var array = ["#fe9984 1", "#fe455f 1", "#f96b07 1"];

  var template = {
    open: '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><circle id="graph" r="15.9154943092" cx="16" cy="16" transform="rotate(-90 16 16)" /><mask id="clip"><use xlink:href="#graph" fill="#FFF" /></mask></defs><g class="graph" mask="url(#clip)" stroke-width="32">',
    piece: '<use class="graph__percent graph__percent--{{num}}" xlink:href="#graph" fill="none" stroke="{{color}}" stroke-dasharray="0 {{offset}} {{percent}} 100" />',
    close: '</g></svg>'
  };

  var regex = {
    number: /([0-9]+)$/i,
    color: /(#[0-9A-Z]+)/i
  };

  function Piece(data){
    data = data.trim();
    this.number = parseInt(data.match(regex.number));
    this.color = data.match(regex.color)[1];
  }

  Piece.prototype.render = function(total,num) {
    return template.piece
      .replace('{{num}}',num)
      .replace('{{color}}',this.color)
      .replace('{{offset}}',(this.offset / total) * 100)
      .replace('{{percent}}',(this.number / total) * 100);
  };

  function Pie(elem){
    this.data = array;
    this.pieces = [];
    this.total = 0;

    var output = "",
        len = this.data.length,
        piece, i;

    for (i = 0; i < len; i++) {
      piece = new Piece(this.data[i]);
      piece.offset = this.total;
      this.total += piece.number;
      this.pieces.push(piece);
    }

    len = this.pieces.length;
    for (i = 0; i < len; i++) {
      output += this.pieces[i].render(this.total,i);
    }

    elem.innerHTML = template.open + output + template.close;
  }

  var pies = document.querySelectorAll('[data-pies]');

  for (i = 0; i < pies.length; i++) { new Pie(pies[i]); }


console.log(array);
function addToChart() {
  array.push("#fe" + (Math.floor((Math.random() * 4000) + 1)+3000).toString() + " 1");
  for (i = 0; i < pies.length; i++) { new Pie(pies[i]); }
  console.log(array);
}

var rotation = 0;
