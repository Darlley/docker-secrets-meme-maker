import memeMaker from '@erickwendel/meme-maker';

const options = {
  image: './img/sorry.jpg',         // Required
  outfile: 'spiderman-meme.png',  // Required
  topText: 'RÚSSIA VS UCRANIA',            // Required
  bottomText: 'EU VS PHP',           // Optional
//   font: './../impact.ttf',      // Optional
//   fontSize: 50,                   // Optional
//   fontFill: '#FFF',               // Optional
//   textPos: 'center',              // Optional
//   strokeColor: '#000',            // Optional
//   strokeWeight: 2                 // Optional
}

memeMaker(options).then(_ => {
    console.log('Image saved: ' + options.outfile)
}).catch(error => console.log(error));