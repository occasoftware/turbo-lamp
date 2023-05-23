const gameGenres = [
    "Action",
    "Adventure",
    "Role-playing",
    "Strategy",
    "Simulation",
    "Sports",
    "Racing",
    "Puzzle",
    "Fighting",
    "Platformer",
    "Stealth",
    "Survival",
    "Horror",
    "Open World",
    "First-person Shooter",
    "Third-person Shooter",
    "Tactical Shooter",
    "Rhythm",
    "Massively Multiplayer Online (MMO)",
    "Turn-based Strategy",
    "Real-time Strategy",
    "Tower Defense",
    "Card",
    "Educational",
    "Party",
    "Trivia",
    "Casual",
    "Arcade",
    "Roguelike",
    "Metroidvania",
    "Point-and-Click",
    "Visual Novel",
    "Life Simulation",
    "City Building",
    "God Game",
    "Sandbox",
    "Flight Simulation",
    "Farming",
    "Construction and Management Simulation",
    "Steampunk",
    "Cyberpunk",
    "Post-apocalyptic",
    "Historical",
    "Medieval",
    "Fantasy",
    "Science Fiction",
    "Western",
    "Noir",
    "Superhero",
    "Anime",
    "Mystery",
    "Detective",
    "Film Noir",
    "War",
    "Space",
    "Sports Management",
    "Motorcycle Racing",
    "Extreme Sports",
    "Chess",
    "Board",
    "Party",
    "Pinball",
    "Racing Simulator",
    "Driving",
    "Billiards",
    "Wrestling",
    "Boxing",
    "Martial Arts",
    "Beat 'em up",
    "Hack and Slash",
    "Platform Fighter",
    "Rhythm-based",
    "Match-3",
    "Hidden Object",
    "Physics-based",
    "Logic",
    "Word",
    "Sudoku",
    "Battle Royale",
    "Survival Horror",
    "Psychological Horror",
    "Stealth Horror",
    "Psychological Thriller",
    "Escape Room",
    "Walking Simulator",
    "Real-time Tactics",
    "Grand Strategy",
    "Business Simulation",
    "War Simulation",
    "Dating Simulation",
    "Fashion",
    "Cooking",
    "Dance",
    "Pets",
    "Zombie",
    "Vampire",
    "Werewolf",
    "Alien",
    "Dinosaur",
    "Magic",
    "Mythology",
    "Time Travel",
    "Parallel Universes",
    "Artificial Intelligence",
    "Virtual Reality (VR)",
    "Augmented Reality (AR)",
    "Multiplayer Online Battle Arena (MOBA)",
    "Battle Card",
    "Deck-building",
    "Real-time Card",
    "Trading Card",
    "Party-based RPG",
    "Tactical RPG",
    "Action RPG",
    "Turn-based RPG"
    // Add more genres as desired
];

const gameSettings = [
    "Fantasy World",
    "Sci-Fi Space Station",
    "Post-Apocalyptic Wasteland",
    "Medieval Kingdom",
    "Ancient Egypt",
    "Wild West",
    "Modern City",
    "Haunted Mansion",
    "Underwater Abyss",
    "Jungle/Amazon",
    "Cyberpunk Metropolis",
    "Futuristic Mars Colony",
    "Gothic Castle",
    "Pirate Island",
    "Greek Mythology",
    "Feudal Japan",
    "Dystopian Society",
    "Prehistoric Era",
    "Frozen Tundra",
    "Alien Planet",
    "Magical Forest",
    "Virtual Reality Simulation",
    "Steampunk City",
    "Dream World",
    "Alternate History",
    "Robotic Future",
    "War-torn Battlefield",
    "Space Opera",
    "Fairy Tale Kingdom",
    "Parallel Dimensions",
    "Industrial Revolution",
    "Candy Land",
    "Deserted Island",
    "Apocalyptic Earth",
    "Outer Space",
    "Zombie-infested City",
    "Mythical Atlantis",
    "Ancient Rome",
    "Jurassic Era",
    "Superhero Universe",
    "Ancient China",
    "Haunted Western Town",
    "Victorian Era",
    "Artificial Intelligence Network",
    "Interstellar Travel",
    "Cyberspace",
    "Mayan Civilization",
    "Surreal Dreamscapes",
    "Magic School",
    "Hacker's Hideout",
    "Sunken Shipwreck",
    "Demonic Realm",
    "Future Dystopia",
    "Underground Caves",
    "Inca Empire",
    "Timeless Kingdom",
    "Forgotten Ruins",
    "Cyborg Society",
    "Enchanted Castle",
    "Neo-Noir City",
    "Ancient Greece",
    "High-Tech Laboratory",
    "Wilderness Survival",
    "Space Exploration",
    "Journey through the Human Body",
    "Mythological Beasts",
    "Crime Syndicate",
    "Viking Age",
    "Time Travel Adventures",
    "Heaven and Hell",
    "Alternate Universe",
    "Secret Society",
    "Fictional War",
    "Tropical Paradise",
    "Parallel Worlds",
    "Pandemic Outbreak",
    "Interdimensional Portal",
    "Artificially Created World",
    "Amazon Rainforest",
    "Virtual Game Simulation",
    "Underground Resistance",
    "Robotic Uprising",
    "Fairyland",
    "Secret Agent Espionage",
    "Ancient Babylon",
    "Punk Rock Music Scene",
    "Intergalactic Battle",
    "Mythical Creatures",
    "Virtual Reality Arcade",
    "Survival in the Wild",
    "Western Frontier",
    "Lost Civilizations",
    "Digital Tron-like Grid",
    "Demonic Invasion",
    "Cybernetic Augmentation",
    "Mythical Avalon",
    "Dark Fairy Tales",
    "Solar System Exploration",
    "Criminal Underworld",
    "Underground Railroad",
    "Mind-bending Reality",
    "Haunted Asylum",
    "Mystical Crystal Kingdom",
    "Apocalyptic Future"
    // Add more settings as desired
];

const gameMechanics = [
    "Movement",
    "Jumping",
    "Shooting",
    "Combat",
    "Exploration",
    "Puzzle-solving",
    "Platforming",
    "Stealth",
    "Resource Management",
    "Leveling Up",
    "Character Customization",
    "Questing",
    "Crafting",
    "Trading",
    "Inventory Management",
    "Decision-making",
    "Dialogue Choices",
    "Multiple Endings",
    "Time Manipulation",
    "Physics-based Gameplay",
    "Cooperative Play",
    "Competitive Play",
    "Turn-based Combat",
    "Real-time Combat",
    "Steering and Maneuvering",
    "Teamwork",
    "Pattern Recognition",
    "Building and Construction",
    "Balancing",
    "Risk and Reward",
    "Strategy Planning",
    "Decision Points",
    "Sandbox Gameplay",
    "Racing",
    "Economy Management",
    "Mini-games",
    "Random Events",
    "Hidden Object Finding",
    "Trading Card Collection",
    "Word Puzzle",
    "Rhythm-based Gameplay",
    "Time Pressure",
    "Gravity Manipulation",
    "Character Swapping",
    "Parkour",
    "Hacking and Data Manipulation",
    "Environmental Interactions",
    "Procedural Generation",
    "Dialogue-based Gameplay",
    "Turn-based Strategy",
    "Real-time Strategy",
    "Resource Gathering",
    "Base Building",
    "Stealing and Pickpocketing",
    "Hunting and Fishing",
    "Tower Defense",
    "Simulations",
    "Multiplayer Interaction",
    "Decision Trees",
    "Character Growth",
    "Stealing and Pickpocketing",
    "Persuasion and Influence",
    "Survival Mechanics",
    "Permadeath",
    "Character Classes and Abilities",
    "Boss Battles",
    "Quick Time Events (QTEs)",
    "Combo Systems",
    "Stealing and Pickpocketing",
    "Level Design",
    "Item Upgrades",
    "Weather Effects",
    "Dynamic Environments",
    "Companion AI",
    "Morality System",
    "Photo Mode",
    "Time Limits",
    "Vehicle Mechanics",
    "Emotional Bonds",
    "Traversal Mechanics",
    "Trap Avoidance",
    "Cover System",
    "Resource Scarcity",
    "Stealing and Pickpocketing",
    "Stealth Takedowns",
    "Looting and Collectibles",
    "Inventory Tetris",
    "Character Relationships",
    "Progression Trees",
    "Branching Storylines",
    "Parrying and Counterattacks",
    "Moral Dilemmas",
    "Skill Trees",
    "Narrative Choices",
    "Character Swapping",
    "Disguises and Impersonation",
    "Time Travel Mechanics",
    "Companion Pet Mechanics",
    "Clan or Guild Mechanics",
    "Emote System",
    "Vehicle Customization",
    "Metroidvania Exploration",
    "Weight and Encumbrance System",
    "Dialogue-based Puzzles",
    "Parallel Universes",
    "Character Alignment System",
    "Seasonal Events",
    "Deck-building Mechanics",
    "Companion Loyalty",
    "Procedurally Generated Loot",
    "Zone Control",
    "Stealth Hacking",
    "Time-based Events"
    // Add more mechanics as desired
];

const gameObjectives = [
    "Defeat the final boss",
    "Rescue a captured ally",
    "Collect all hidden artifacts",
    "Reach the highest level",
    "Complete a challenging puzzle",
    "Build a thriving civilization",
    "Win a championship or tournament",
    "Explore every area on the map",
    "Discover the truth behind a mystery",
    "Survive against waves of enemies",
    "Obtain the rarest item in the game",
    "Conquer all enemy territories",
    "Create and maintain a successful business",
    "Maximize your score or high score",
    "Unlock all achievements or trophies",
    "Complete a time trial or speedrun",
    "Gather and manage resources efficiently",
    "Form alliances with other players",
    "Defend a base or stronghold",
    "Solve a series of interconnected quests",
    "Achieve a perfect or flawless run",
    "Become the top-ranked player",
    "Master a complex skill or technique",
    "Complete a character's personal story arc",
    "Reach a specific in-game location",
    "Unlock secret or hidden content",
    "Create and customize your ideal character",
    "Earn a specific amount of in-game currency",
    "Build and upgrade a powerful weapon or vehicle",
    "Restore balance or peace to the world",
    "Discover and activate ancient artifacts",
    "Solve environmental riddles or challenges",
    "Win a battle of wits or strategy",
    "Escape from a dangerous situation or location",
    "Defend or rescue innocent civilians",
    "Acquire rare or legendary equipment",
    "Master a specific profession or skill set",
    "Compete in a prestigious tournament",
    "Lead a revolution or rebellion",
    "Make critical moral choices",
    "Find and defeat hidden bosses or super enemies",
    "Uncover the secrets of a lost civilization",
    "Survive extreme weather conditions",
    "Complete a set of specific challenges",
    "Create and design a masterpiece",
    "Explore and document uncharted territories",
    "Unlock and restore ancient technology",
    "Capture or control valuable strategic points",
    "Perform stunts or tricks with precision",
    "Navigate treacherous terrain or obstacles",
    "Solve cryptic codes or ciphers",
    "Defend a specific character or NPC",
    "Earn the respect and loyalty of a faction or group",
    "Earn a specific rank or title",
    "Compete in an epic war or battle",
    "Escape from a maximum-security prison",
    "Accumulate a vast amount of wealth",
    "Survive a zombie apocalypse",
    "Save a loved one from danger",
    "Complete a series of time-sensitive missions",
    "Discover and unlock new areas or levels",
    "Establish diplomatic relationships with other factions",
    "Master a complex magic or spellcasting system",
    "Conduct scientific experiments and research",
    "Solve a series of murders or crimes",
    "Unlock and tame legendary creatures",
    "Build and defend a fortress or stronghold",
    "Discover and exploit enemy weaknesses",
    "Reclaim and restore a lost kingdom",
    "Assemble a team of skilled allies or companions",
    "Win the heart of a romantic interest",
    "Survive in a hostile alien environment",
    "Solve the mysteries of an ancient prophecy",
    "Create and maintain a successful sports franchise",
    "Build and manage a successful zoo or theme park",
    "Protect or escort important VIPs",
    "Train and breed powerful creatures",
    "Investigate and uncover a government conspiracy",
    "Discover and explore parallel dimensions",
    "Conduct espionage and sabotage missions",
    "Build and manage a successful farm or plantation",
    "Uncover and dismantle a criminal organization",
    "Defend against an alien invasion",
    "Escape from a virtual reality simulation",
    "Guide a group of survivors to safety",
    "Master and perform complex music compositions",
    "Escape from a cursed or haunted location",
    "Conquer the seven wonders of the world",
    "Solve the mystery behind a cursed artifact",
    "Discover and document new species of plants and animals",
    "Build and manage a successful restaurant or café",
    "Find and unravel the secrets of a hidden society",
    "Train and compete in professional sports"
    // Add more objectives as desired
];

const unusualMechanics = [
    "One screen",
    "Invisible walls",
    "Unexplained controls",
    "Playable with one hand",
    "Playable with one finger",
    "No tutorials",
    "No saving",
    "No main character",
    "No UI",
    "Real-world weather is in-game weather",
    "Music gets progressively worse",
    "Graphics get progressively worse",
    "World deteriorates over time",
    "Reverse gravity",
    "Time only moves when the player moves",
    "Pixelated graphics",
    "Text-based gameplay",
    "Gameplay affected by microphone input",
    "Narration is player-generated",
    "Randomized levels",
    "Limited field of view",
    "No text or dialogue",
    "Limited color palette",
    "Player actions have real-life consequences",
    "Character controls are inverted",
    "Gameplay influenced by player's heart rate",
    "Characters communicate through gestures or body language",
    "Permadeath with no respawn",
    "Physics-based controls",
    "Gameplay affected by ambient noise",
    "Player-controlled time manipulation",
    "Procedurally generated music",
    "Game world flips upside down",
    "Characters age and experience physical changes",
    "Gameplay affected by player's emotions",
    "Morse code communication",
    "Shifting gravity puzzles",
    "Gameplay affected by real-time stock market data",
    "Limited visibility",
    "Gameplay affected by player's breathing",
    "Game world changes based on player's choices",
    "Retro monochrome visuals",
    "Character abilities change based on player's voice pitch",
    "Game world changes based on player's location",
    "Gameplay affected by player's brainwaves",
    "No dialogue, only musical notes",
    "Characters can merge and split",
    "Player controls time rewind",
    "Gameplay affected by player's body temperature",
    "Real-time player collaboration",
    "Game world wraps around itself",
    "Time loops and repetition",
    "Gameplay affected by player's facial expressions",
    "Characters communicate through sign language",
    "Game world reacts to player's heartbeat",
    "Gameplay affected by player's GPS location",
    "Shadows as platforms or obstacles",
    "Characters can manipulate gravity",
    "Game world shifts between dimensions",
    "Gameplay affected by player's eye movements",
    "Characters control each other's movements",
    "Game world transforms based on player's actions",
    "Sound-based navigation",
    "Gameplay affected by player's scent or odor",
    "Characters can swap consciousness",
    "Game world affected by player's internet connection",
    "Puzzles affected by player's body posture",
    "Characters communicate through Morse code",
    "Gameplay affected by player's touch or tactile input",
    "Characters can phase through walls",
    "Game world changes based on player's social media activity",
    "Gameplay affected by player's heartbeat",
    "Characters control each other's abilities",
    "Game world reacts to player's voice commands",
    "Gameplay affected by player's sleep patterns",
    "Characters communicate through emojis",
    "Game world affected by player's real-time weather conditions",
    "Puzzles affected by player's shadow",
    "Characters can clone themselves",
    "Gameplay affected by player's smell or odor",
    "Game world changes based on player's browsing history",
    "Gameplay affected by player's touch or haptic feedback",
    "Characters can possess objects or other characters",
    "Game world reacts to player's real-time news updates",
    "Gameplay affected by player's body posture",
    "Characters communicate through dance moves",
    "Game world affected by player's heart rate",
    "Puzzles affected by player's eye color",
    "Characters can manipulate time for specific objects",
    "Gameplay affected by player's astrological sign",
    "Game world changes based on player's dreams",
    "Gameplay affected by player's voice frequency",
    "Characters can control the weather",
    "Game world reacts to player's physical gestures",
    "Puzzles affected by player's taste or flavor preferences",
    "Characters communicate through musical instruments"
    // Add more mechanics or constraints as desired
];

function pickRandom(items) {
    return items[Math.floor(Math.random() * items.length)];
}


function generateIdea() {
    $("#genre").find(".game_idea_generator-text").text(pickRandom(gameGenres));
    $("#setting").find(".game_idea_generator-text").text(pickRandom(gameSettings));
    $("#mechanic").find(".game_idea_generator-text").text(pickRandom(gameMechanics));
    $("#objective").find(".game_idea_generator-text").text(pickRandom(gameObjectives));
    $("#unusual-mechanic").find(".game_idea_generator-text").text(pickRandom(unusualMechanics));
}

$(document).ready(generateIdea);

$("#refresh-idea").on("click", generateIdea);

$("#genre").on("click", function () {
    $(this).find(".game_idea_generator-text").text(pickRandom(gameGenres));
})

$("#setting").on("click", function () {
    $(this).find(".game_idea_generator-text").text(pickRandom(gameSettings));
})

$("#mechanic").on("click", function () {
    $(this).find(".game_idea_generator-text").text(pickRandom(gameMechanics));
})

$("#objective").on("click", function () {
    $(this).find(".game_idea_generator-text").text(pickRandom(gameObjectives));
})

$("#unusual-mechanic").on("click", function () {
    $(this).find(".game_idea_generator-text").text(pickRandom(unusualMechanics));
})