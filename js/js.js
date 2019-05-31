/**
 * random sequences of notes drawn from a
 * minor pentatonic scale, but allowing the user to interact with
 * the composition by moving the cursor to change the octave
 * of the note palette.
 */


var sloop;
var pentatonic_scale = ['A', 'C', 'D', 'E', 'G'];
var pitchClass_map = {'A': 0, 'C': 1, 'D': 2, 'E': 3, 'G': 4};
var numOctaves = 5;
var baseOctave = 2;
var heightLevel;
var system;
var sound;
var reverb;


function setup() {

    createCanvas(windowWidth,windowHeight);

    // Create a synth to make sound with
    synth = new p5.PolySynth();
    // Create SoundLoop repeating every 0.3s
    sloop = new p5.SoundLoop(soundLoop, 0.3);

    // Disconnect synth to pipe through reverb
    synth.disconnect();

    reverb = new p5.Reverb();

    // Connects synth to reverb with a
    // reverbTime of 2 seconds, decayRate of 0.2%
    reverb.process(synth, 2, 0.2);

    reverb.amp(2); // turn it up!

    userStartAudio().then(function () {
    });

}


function draw() {
    background(255);

    // Mouse circle draw
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);

    // Get mouse height level
    // stroke(255, 100);
    heightLevel = round(numOctaves * (height - mouseY) / height);
    line(0, height - heightLevel * height / numOctaves,
        width, height - heightLevel * height / numOctaves);
}


function soundLoop(cycleStartTime) {
    // Pick a random note, note octave based on mouse height
    var pitchClass = random(pentatonic_scale);
    var octave = baseOctave + heightLevel;
    var currentNote = pitchClass + str(octave);
    // Play sound
    var velocity = 1; // Between 0-1
    var duration = this.interval;
    synth.play(currentNote, velocity, cycleStartTime, duration);

}

function mouseClicked() {

    if (sloop.isPlaying) {
        sloop.pause();
    } else {
        sloop.start();
    }
}



