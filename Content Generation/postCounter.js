// Pseudocode for creating Content / Setting Random Seed

// Either include or paste https://github.com/LenaSYS/Random-Number-Generator

var counter = GM.getValue("counter",0) // GM.getValue( name, default ) - if nothing stored default to 0
counter++;
GM.setValue("counter",counter);

if(counter<100){      // Set limit depending on the time to create a CMS post
    Math.setSeed(counter);

    // Generate Content according to CMS using Math.random(); / context free grammar which then uses seed based on post count
}
