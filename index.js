const _ = require('underscore');
const fs = require('fs');
const parse = require('csv-parse');
require('should');

let names = [];

['census-female-names.csv', 'census-male-names.csv'].map((e, i, a) => {
  let input = fs.readFileSync(e).toString();
  parse(input, {comment: '#'}, function(err, output){
    output.map(e => {
      names.push(e[0]);
    });
    if (i == a.length - 1) {
      hurricane(names);
    }
  });
});

let hurricane = names => {
  // console.log(names.length);
  let dist = names.reduce((p, c) => {
    let letter = c[0];
    let fl =  p[letter];
    let a = fl || [];
    a.push(c);
    p[letter] = a;
    return p;
  }, {});
  // console.log(dist);

  let shuffled = Object
      .keys(dist)
      .reduce((p, c) => {
        p[c] = _.shuffle(dist[c]);
        return p;
      }, {});
  // console.log(shuffled);

  let hurricanes = [];
  let iterations = 0;
  while (Object.keys(shuffled).length > 0) {
    // console.log(iterations++, Object.keys(shuffled));
    let letters = Object.keys(shuffled).sort();
    letters.map(e => {
      hurricanes.push(shuffled[e].pop());
      if (shuffled[e].length < 1) {
        // console.log(e, 'exhausted');
        delete shuffled[e];
      }
    });
  }

  console.log(hurricanes.join('\n'));

  if (names.length !== hurricanes.length) {
    console.log('WARNING: Input mismatch',
                names.length,
                hurricanes.length);
  }

}
