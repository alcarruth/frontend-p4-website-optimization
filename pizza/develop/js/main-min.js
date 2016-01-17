function Timer(){function a(b,c){return function(){var d="mark_start_"+b;var f="mark_end_"+b;var e="measure_"+b;var g;window.performance.mark(d);c();window.performance.mark(f);window.performance.measure(e,d,f);g=window.performance.getEntriesByName(e);return g}}return{wrap:a}}Pizza_Designer=function(){var f={meats:["Pepperoni","Sausage","Fennel Sausage","Spicy Sausage","Chicken","BBQ Chicken","Chorizo","Chicken Andouille","Salami","Tofu","Bacon","Canadian Bacon","Proscuitto","Italian Sausage","Ground Beef","Anchovies","Turkey","Ham","Venison","Lamb","Duck","Soylent Green","Carne Asada","Soppressata Picante","Coppa","Pancetta","Bresola","Lox","Guanciale","Chili","Beef Jerky","Pastrami","Kielbasa","Scallops","Filet Mignon"],non_meats:["White Onions","Red Onions","Sauteed Onions","Green Peppers","Red Peppers","Banana Peppers","Ghost Peppers","Habanero Peppers","Jalapeno Peppers","Stuffed Peppers","Spinach","Tomatoes","Pineapple","Pear Slices","Apple Slices","Mushrooms","Arugula","Basil","Fennel","Rosemary","Cilantro","Avocado","Guacamole","Salsa","Swiss Chard","Kale","Sun Dried Tomatoes","Walnuts","Artichoke","Asparagus","Caramelized Onions","Mango","Garlic","Olives","Cauliflower","Polenta","Fried Egg","Zucchini","Hummus"],cheeses:["American Cheese","Swiss Cheese","Goat Cheese","Mozzarella Cheese","Parmesean Cheese","Velveeta Cheese","Gouda Cheese","Muenster Cheese","Applewood Cheese","Asiago Cheese","Bleu Cheese","Boursin Cheese","Brie Cheese","Cheddar Cheese","Chevre Cheese","Havarti Cheese","Jack Cheese","Pepper Jack Cheese","Gruyere Cheese","Limberger Cheese","Manchego Cheese","Marscapone Cheese","Pecorino Cheese","Provolone Cheese","Queso Cheese","Roquefort Cheese","Romano Cheese","Ricotta Cheese","Smoked Gouda"],sauces:["Red Sauce","Marinara","BBQ Sauce","No Sauce","Hot Sauce"],crusts:["White Crust","Whole Wheat Crust","Flatbread Crust","Stuffed Crust"],};var d={dark:["Dark","Morbid","Scary","Spooky","Gothic","Deviant","Creepy","Sadistic","Black","Dangerous","Dejected","Haunted","Morose","Tragic","Shattered","Broken","Sad","Melancholy","Somber","Dark","Gloomy","Homicidal","Murderous","Shady","Misty","Dusky","Ghostly","Shadowy","Demented","Cursed","Insane","Possessed","Grotesque","Obsessed"],colors:["Blue","Green","Purple","Grey","Scarlet","Neongreen","Neonblue","Neonpink","Hotpink","Pink","Black","Red","Maroon","Silver","Golden","Yellow","Orange","Mustard","Plum","Violet","Cerulean","Brown","Lavender","Violet","Chestnut","Rosy","Copper","Crimson","Teal","Indigo","Navy","Azure","Periwinkle","Brassy","Verdigris","Veridian","Tan","Raspberry","Beige","Sandy","Electricblue","White","Champagne","Magenta","Coral","Cyan"],whimsy:["Whimsical","Silly","Drunken","Goofy","Funny","Weird","Strange","Odd","Playful","Clever","Boastful","Breakdancing","Peculiar","Hilarious","Conceited","Happy","Comical","Curious","Sleepy","Quaint","Quirky","Fancy","Wayward","Fickle","Yawning","Smiling","Cockeyed","Dizzy","Dancing","Absurd","Laughing","Hairy","Perplexed","Baffled","Cockamamie","Vulgar","Hoodwinked","Brainwashed"],shiny:["Sapphire","Opal","Silver","Gold","Platinum","Ruby","Emerald","Diamond","Amethyst","Turquoise","Topaz","Amber","Garnet","Starlit","Moonlit","Bronze","Metal","Jade","Brass","Brassy","Obsidian","Onyx","Pearl","Copper","Sunlit","Metallic"],noisy:["Untuned","Loud","Soft","Shrieking","Melodious","Musical","Symphonic","Dancing","Lyrical","Harmonic","Operatic","Orchestral","Noisy","Dissonant","Rhythmic","Hissing","Singing","Crooning","Shouting","Screaming","Wailing","Crying","Howling","Yelling","Hollering","Caterwauling","Bawling","Bellowing","Squealing","Beeping","Knocking","Tapping","Rapping","Humming","Scatting","Whispered","Whispering","Rasping","Buzzing","Whirring","Whistling","Whistled","Roaring",],apocalyptic:["Nuclear","Apocalyptic","Desolate","Atomic","Zombie","Collapsed","Grim","Fallen","Collapsed","Cannibalistic","Radioactive","Toxic","Poisonous","Venomous","Disastrous","Grimy","Dirty","Undead","Bloodshot","Rusty","Glowing","Decaying","Rotten","Deadly","Plagued","Decimated","Rotting","Putrid","Decayed","Deserted","Acidic"],insulting:["Stupid","Idiotic","Fat","Ugly","Hideous","Grotesque","Dumb","Dull","Lazy","Sluggish","Brainless","Slow","Gullible","Obtuse","Dense","Dim","Dazed","Ridiculous","Witless","Daft","Crazy","Vapid","Inane","Mundane","Hollow","Vacuous","Boring","Insipid","Tedious","Monotonous","Weird","Bizarre","Backward","Moronic","Ignorant","Scatterbrained","Forgetful","Careless","Lethargic","Insolent","Indolent","Loitering","Gross","Disgusting","Bland","Horrid","Unseemly","Revolting","Homely","Deformed","Disfigured","Offensive","Cowardly","Weak","Villainous","Fearful","Monstrous","Unattractive","Unpleasant","Nasty","Beastly","Snide","Horrible","Syncophantic","Unhelpful","Bootlicking"],praise:["Beautiful","Intelligent","Smart","Genius","Ingenious","Gorgeous","Pretty","Witty","Angelic","Handsome","Graceful","Talented","Exquisite","Enchanting","Fascinating","Interesting","Divine","Alluring","Ravishing","Wonderful","Magnificient","Marvelous","Dazzling","Cute","Charming","Attractive","Nifty","Delightful","Superior","Amiable","Gentle","Heroic","Courageous","Valiant","Brave","Noble","Daring","Fearless","Gallant","Adventurous","Cool","Enthusiastic","Fierce","Awesome","Radical","Tubular","Fearsome","Majestic","Grand","Stunning"],scientific:["Scientific","Technical","Digital","Programming","Calculating","Formulating","Cyberpunk","Mechanical","Technological","Innovative","Brainy","Chemical","Quantum","Astro","Space","Theoretical","Atomic","Electronic","Gaseous","Investigative","Solar","Extinct","Galactic"],};var i={animals:["Flamingo","Hedgehog","Owl","Elephant","Pussycat","Alligator","Dachsund","Poodle","Beagle","Crocodile","Kangaroo","Wallaby","Woodpecker","Eagle","Falcon","Canary","Parrot","Parakeet","Hamster","Gerbil","Squirrel","Rat","Dove","Toucan","Raccoon","Vulture","Peacock","Goldfish","Rook","Koala","Skunk","Goat","Rooster","Fox","Porcupine","Llama","Grasshopper","Gorilla","Monkey","Seahorse","Wombat","Wolf","Giraffe","Badger","Lion","Mouse","Beetle","Cricket","Nightingale","Hawk","Trout","Squid","Octopus","Sloth","Snail","Locust","Baboon","Lemur","Meerkat","Oyster","Frog","Toad","Jellyfish","Butterfly","Caterpillar","Tiger","Hyena","Zebra","Snail","Pig","Weasel","Donkey","Penguin","Crane","Buzzard","Vulture","Rhino","Hippopotamus","Dolphin","Sparrow","Beaver","Moose","Minnow","Otter","Bat","Mongoose","Swan","Firefly","Platypus"],professions:["Doctor","Lawyer","Ninja","Writer","Samurai","Surgeon","Clerk","Artist","Actor","Engineer","Mechanic","Comedian","Fireman","Nurse","Rockstar","Musician","Carpenter","Plumber","Cashier","Electrician","Waiter","President","Governor","Senator","Scientist","Programmer","Singer","Dancer","Director","Mayor","Merchant","Detective","Investigator","Navigator","Pilot","Priest","Cowboy","Stagehand","Soldier","Ambassador","Pirate","Miner","Police"],fantasy:["Centaur","Wizard","Gnome","Orc","Troll","Sword","Fairy","Pegasus","Halfling","Elf","Changeling","Ghost","Knight","Squire","Magician","Witch","Warlock","Unicorn","Dragon","Wyvern","Princess","Prince","King","Queen","Jester","Tower","Castle","Kraken","Seamonster","Mermaid","Psychic","Seer","Oracle"],music:["Violin","Flute","Bagpipe","Guitar","Symphony","Orchestra","Piano","Trombone","Tuba","Opera","Drums","Harpsichord","Harp","Harmonica","Accordion","Tenor","Soprano","Baritone","Cello","Viola","Piccolo","Ukelele","Woodwind","Saxophone","Bugle","Trumpet","Sousaphone","Cornet","Stradivarius","Marimbas","Bells","Timpani","Bongos","Clarinet","Recorder","Oboe","Conductor","Singer"],horror:["Murderer","Chainsaw","Knife","Sword","Murder","Devil","Killer","Psycho","Ghost","Monster","Godzilla","Werewolf","Vampire","Demon","Graveyard","Zombie","Mummy","Curse","Death","Grave","Tomb","Beast","Nightmare","Frankenstein","Specter","Poltergeist","Wraith","Corpse","Scream","Massacre","Cannibal","Skull","Bones","Undertaker","Zombie","Creature","Mask","Psychopath","Fiend","Satanist","Moon","Fullmoon"],gross:["Slime","Bug","Roach","Fluid","Pus","Booger","Spit","Boil","Blister","Orifice","Secretion","Mucus","Phlegm","Centipede","Beetle","Fart","Snot","Crevice","Flatulence","Juice","Mold","Mildew","Germs","Discharge","Toilet","Udder","Odor","Substance","Fluid","Moisture","Garbage","Trash","Bug"],everyday:["Mirror","Knife","Fork","Spork","Spoon","Tupperware","Minivan","Suburb","Lamp","Desk","Stereo","Television","TV","Book","Car","Truck","Soda","Door","Video","Game","Computer","Calender","Tree","Plant","Flower","Chimney","Attic","Kitchen","Garden","School","Wallet","Bottle"],jewelry:["Earrings","Ring","Necklace","Pendant","Choker","Brooch","Bracelet","Cameo","Charm","Bauble","Trinket","Jewelry","Anklet","Bangle","Locket","Finery","Crown","Tiara","Blingbling","Chain","Rosary","Jewel","Gemstone","Beads","Armband","Pin","Costume","Ornament","Treasure"],places:["Swamp","Graveyard","Cemetery","Park","Building","House","River","Ocean","Sea","Field","Forest","Woods","Neighborhood","City","Town","Suburb","Country","Meadow","Cliffs","Lake","Stream","Creek","School","College","University","Library","Bakery","Shop","Store","Theater","Garden","Canyon","Highway","Restaurant","Cafe","Diner","Street","Road","Freeway","Alley"],scifi:["Robot","Alien","Raygun","Spaceship","Ufo","Rocket","Phaser","Astronaut","Spaceman","Planet","Star","Galaxy","Computer","Future","Timemachine","Wormhole","Timetraveler","Scientist","Invention","Martian","Pluto","Jupiter","Saturn","Mars","Quasar","Blackhole","Warpdrive","Laser","Orbit","Gears","Molecule","Electron","Neutrino","Proton","Experiment","Photon","Apparatus","Universe","Gravity","Darkmatter","Constellation","Circuit","Asteroid"],};function a(r){var p=[];var q;for(q in r){p=p.concat(r[q])}return p}function b(q){var p=Math.floor(Math.random()*q.length);return q[p]}function m(r,s){var p=[];for(var q=0;q<b(s);q++){p.push(b(r))}return p}function g(r){var p=r.charAt(0).toUpperCase();var q=r.slice(1).toLowerCase();return p+q}var n=f.meats;var e=f.non_meats;var c=f.cheeses;var j=f.sauces;var h=f.crusts;var d=a(d);var i=a(i);function l(){var p={meats:m(n,[0,1,2,3]),non_meats:m(e,[0,1,2]),cheeses:m(c,[0,1,2]),sauce:b(j),crust:b(h),};return p}function k(){var q=b(i);var p=b(d);return"The "+p+" "+q}function o(p){return{id:p,name:k(),ingredients:l(),img_url:"images/pizza.png"}}return o};function Pizza_Menu(e,j,a){var b=[];var f;var g;var h;var d;function c(l){var m=a("resize",function(){var p={1:"Small",2:"Medium",3:"Large"}[l];var o={1:"25%",2:"33%",3:"50%"}[l];f.innerHTML=p;for(var n=0;n<b.length;n++){b[n].element.style.width=o}})();console.log("Time to resize pizzas: "+m[0].duration+"ms")}function i(){var l=a("generate",function(){var n;for(var m=0;m<j;m++){n=e("pizza_"+m);b.push(n)}h.innerHTML=Mustache.render(d,{pizzas:b});for(m in b){n=b[m];n.element=document.getElementById(n.id)}})();console.log("Time to generate pizzas on load: "+l[0].duration+"ms")}function k(){f=document.querySelector("#pizza-size");g=document.querySelector("#size-slider");g.resize_pizzas=c;g.onchange=function(){c(this.value)};h=document.getElementById("pizza-menu");d=document.getElementById("pizza-menu-template").innerHTML;i()}return{init:k,pizzas:b,resize_pizzas:c}}function Sliding_Pizza(d,f,o,b,l,a,k,i){var j=b*k;var h=o*i;var g="sliding-pizza";var c=document.createElement("img");var n,m;c.className=g;c.src=f;c.style.height=l;c.style.width=a;c.style.left=j+"px";c.style.top=h+"px";d.appendChild(c);function e(q,p){c.style.transform="translateX("+q+"px)"}return{bg:d,img:c,row:o,col:b,x:j,y:h,sx:k,sy:i,dx:0,dy:0,update_position:e}}function Sliding_Pizzas_Background(n,h,a){var d;var c=[];var k=256;var g=256;var b=0;function f(){var q="images/pizza.png";var o="100px";var r="73.333px";d=document.querySelector("#sliding-pizzas");for(var s=0;s<n;s++){for(var p=0;p<h;p++){pizza=Sliding_Pizza(d,q,s,p,o,r,k,g);c.push(pizza)}}l()}(function(){var o=function(r,q,t){t=t||window;var p=false;var s=function(){if(p){return}p=true;requestAnimationFrame(function(){t.dispatchEvent(new CustomEvent(q));p=false})};t.addEventListener(r,s)};o("scroll","optimizedScroll")})();function j(q){var p=0;for(var o=q.length-10;o<q.length;o++){p=p+q[o].duration}console.log("Average time to generate last 10 frames: "+p/10+"ms")}var e=false;var i=false;function l(){if(e){e=false;i=true;var o=a("frame",function(){var r,q,p;var s=document.body.scrollTop;b++;for(r=0;r<5;r++){p=Math.sin((s/1250)+r);for(q=r;q<c.length;q+=5){c[q].update_position(100*p,0)}}})();if(b%10===0){j(o)}requestAnimationFrame(l)}else{i=false}}function m(){window.addEventListener("optimizedScroll",function(){e=true;if(!i){requestAnimationFrame(l)}});f()}return{cols:h,rows:n,sx:k,sy:g,pizzas:c,bg:d,update_positions:l,generate_sliding_pizzas:f,init:m}}function Pizza_App(){var d=72;var b=10;var c=8;var g=Pizza_Designer();var f=Timer().wrap;var a=Pizza_Menu(g,d,f);var e=Sliding_Pizzas_Background(b,c,f);function h(){a.init();e.init()}return{pizza_menu:a,sliding_pizzas:e,init:h}}window.onload=function(){window.pizza_app=Pizza_App();window.pizza_app.init()};