import Myth from "./posts";

const myth1 = new Myth({
  postId: 1,
  Title: "The Whispering Woofles",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRazU0a_8NwX7ttGNpdxh7ufTE4EQJvWv-HvxjUbkottQ&s",
  Description: "Fluffy dog-like creatures with glowing eyes and unsettling grins, their soft growls luring unsuspecting children into the shadows.",
  UserId: "Bard",
  Likes: 40,
  Comments: [
    { user: "MythLover", comment: "They stole my socks!" },
    { user: "DogPerson", comment: "My dog hates them!" },
    { user: "CuriousMind", comment: "Are they real?" },
  ],
});

const myth2 = new Myth({
  postId: 2,
  Title: "The Curse of the Crimson Cookie",
  Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/375px-2ChocolateChipCookies.jpg",
  Description : "Who knew cookies could be so vindictive? The Crimson Cookie: one bite of delicious disaster, granting wishes like a sugar-fueled genie with a wicked sense of humor. Enjoy your temporary luck, because the karma train is coming, and it's got your address.",
  UserId: "MythMaker_9000",
  Likes: 20,
  Comments: [
    { user: "Daredevil", comment: "Tried it! Nothing bad happened...yet." },
  ],
});


const myth3 = new Myth({
  postId: 3,
  Title: "The Symphony of Silence",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT864-u179y976u4k643h90j735j5480198m",
  Description: "In the heart of a forgotten desert lies the Valley of No Echoes. No sound escapes its embrace, not even the whisper of wind. Yet, within this silent void, a symphony unfolds - the beating of hearts, the rustle of thoughts, the hum of the universe itself. Those who enter, if their minds are still, can hear this hidden music, unlocking secrets of the cosmos and experiencing a profound connection to all that exists.",
  UserId: "SilentMaster",
  Likes: 18,
  Comments: [
    { user: "Seeker of Peace", comment: "A place to escape the cacophony and listen to the true self." },
    { user: "DesertWalker", comment: "Silence so deep, it feels like a living thing." },
    { user: "Musician", comment: "Imagine composing with that symphony as your guide!" },
  ],
});


const myth4 = new Myth({
  postId: 4,
  Title: "The Star-Stump Sprites",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9355Z671j687k372d890f09j992k798z3",
  Description: "On nights bathed in starlight, ancient tree stumps glow from within, inhabited by mischievous Star-Stump Sprites. These tiny beings, formed from fallen stars and moonlight, play tricks on travelers, leading them astray with flickering lanterns and whispers of hidden paths. But be warned, their whims can turn dangerous, sending you on celestial hunts or trapping you in the forest until dawn reclaims the stars.",
  UserId: "MoonbeamWeaver",
  Likes: 32,
  Comments: [
    { user: "ForestWalker", comment: "Their laughter echoes like tiny bells in the night." },
    { user: "StardustSeeker", comment: "I followed their light once… ended up in a cloud!" },
    { user: "Stargazer", comment: "Perhaps their pranks hold lessons about lost paths and unexpected journeys." },
  ],
});


const myth5 = new Myth({
  postId: 5,
  Title: "The Echoing Echoes",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf9-Z2h188hK98y-9aK6550076Z154q675z8",
  Description: "In whispering caves untouched by sunlight, echoes linger long after their source has faded. These are not mere repetitions, but sentient shadows of voices past, weaving tales of forgotten times and echoing secrets long buried. Listen too closely, and you might become trapped in their endless labyrinthine whispers.",
  UserId: "WhisperingBard",
  Likes: 25,
  Comments: [
    { user: "BardHunter", comment: "Their stories twist your mind like vines!" },
    { user: "EchoSeeker", comment: "I heard my own past whisper… unsettling." },
    { user: "Storyteller", comment: "Can these echoes be captured? Imagine the tales!" },
  ],
});

const myth6 = new Myth({
  postId: 6,
  Title: "The Laughing Skull Jester",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS86k348019890j735j239m584z8",
  Description: "In moonlit graveyards, a skeletal jester with glowing eyes dances between gravestones, his laughter echoing with the wind. This is the Laughing Skull Jester, a trickster spirit who challenges mortals with riddles and tests of wit. Solve his riddles, and he may grant you untold knowledge or hidden treasures. Fail, and his laughter becomes a curse, twisting your luck and leaving you lost in the maze of your own folly.",
  UserId: "BoneCollector",
  Likes: 22,
  Comments: [
    { user: "GraveDigger", comment: "His cackle makes the night shiver!" },
    { user: "RiddleMaster", comment: "One wrong answer, and my life became a joke." },
    { user: "WisdomSeeker", comment: "Perhaps his laughter hides forgotten truths." },
  ],
});

const myth7 = new Myth({
  postId: 7,
  Title: "The Sunken City of Whispers",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS86471k34801584z890j735j980m",
  Description: "Beneath the crashing waves, shrouded in coral and kelp, lies the abandoned city of Whispers. Its buildings, crumbling giants of stone, are said to echo with the voices of its lost inhabitants. Divers swear they hear their pleas for help, their songs of joy, and their whispers of forgotten secrets. Some say seeking these whispers is madness, others swear they hold the key to unlocking the mysteries of the deep.",
  UserId: "OceanNomad",
  Likes: 45,
  Comments: [
    { user: "SeafaringBard", comment: "Their voices weave tales of a drowned paradise." },
    { user: "TreasureHunter", comment: "Lost riches or lost souls… worth the dive?" },
    { user: "Linguist", comment: "Can we decode the whispers and piece together their story?" },
  ],
});

const myth8 = new Myth({
  postId: 8,
  Title: "The Weaver of Illusions",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-671z643k890u09j492k798z3",
  Description: "In a hidden oasis amidst a vast desert, an ancient spider known as the Weaver of Illusions spins shimmering webs that trap not insects, but perceptions. Walking through its threads grants visions of your deepest desires, grandest fears, and alternate realities. But be wary, for these illusions can become your prison, leaving you lost in a labyrinth of your own making.",
  UserId: "WebSpinner",
  Likes: 38,
  Comments: [
    { user: "DreamWalker", comment: "I saw my wildest dream in its web… then woke up terrified." },
    { user: "RealityBender", comment: "Can we use its power to reshape the world?" },
    { user: "TruthSeeker", comment: "Are the illusions lies, or glimpses of hidden truths?" },
  ],
});

const myth9 = new Myth({
  postId: 9,
  Title: "The Singing Stones of Serpentine Canyon",
  Image: "https://encrypted-tbn0.gstatic.com/images?qtn=ANd9GcSZk34801584z3",
  Description: "Deep within the twisting Serpentine Canyon lie colossal stones, silent giants bathed in twilight. Under the full moon, these stones come alive, singing ethereal melodies that echo through the valley. Each note holds a fragment of history, a whisper of forgotten empires, and prophecies of the future. But listening too closely can be dangerous, for their songs can unravel sanity, revealing truths too vast for mortal minds to comprehend.",
  UserId: "CanyonExplorer",
  Likes: 27,
  Comments: [
    { user: "Musician", comment: "Their harmony is unlike anything I’ve ever heard!" },
    { user: "Oracle", comment: "Their prophecies chill me to the bone." },
    { user: "Historian", comment: "Can we decode their melodies and rewrite history?" },
  ],
});

const myth10 = new Myth({
  postId: 10,
  Title: "The Clockwork Phoenix",
  Image: "https://encrypted-tbn0.gstatic.com/images?qtn=ANd9GcSZ-386k34801584z3",
  Description: "High above the storm-wracked peaks of Mt. Cogwheel soars the Clockwork Phoenix. Gears grind and pistons churn as this majestic automaton bird flaps its wings of burnished brass. Every sunrise, it ignites its internal furnace, bathing the land in a glorious crimson. But legend warns that when the Clockwork Phoenix's gears rust and fail, its fiery fall will usher in an age of eternal darkness.",
  UserId: "Gearsmith",
  Likes: 42,
  Comments: [
    { user: "Aviator", comment: "Its flight inspires awe and fear in equal measure." },
    { user: "Engineer", comment: "I dream of unraveling its clockwork secrets." },
    { user: "Astrologer", comment: "Is its firefall a prophecy, or a warning?" },
  ],
});



const mythData = [myth1,myth2,myth3,myth4,myth5,myth6,myth7,myth8,myth9,myth10 
  
];

Myth.insertMany(mythData)
  .then(() => console.log('Myths added successfully!'))
  .catch(err => console.error('Error adding myths:', err));
