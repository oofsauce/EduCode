import { pickRandom } from "./random";

export const generateName = (length: number) => {
  if (length < 1) return "";
  let string = pickRandom(NOUN);
  for (let i = 0; i < length - 1; i++) {
    string = pickRandom(ADJ) + string;
  }
  return string;
}

const ADJ = [
  "Defiant",
  "Homeless",
  "Adorable",
  "Delightful",
  "Homely",
  "Quaint",
  "Adventurous",
  "Depressed",
  "Horrible",
  "Aggressive",
  "Determined",
  "Hungry",
  "Real",
  "Agreeable",
  "Different",
  "Hurt",
  "Relieved",
  "Alert",
  "Difficult",
  "Repulsive",
  "Alive",
  "Disgusted",
  "Ill",
  "Rich",
  "Amused",
  "Distinct",
  "Important",
  "Angry",
  "Disturbed",
  "Impossible",
  "Scary",
  "Annoyed",
  "Dizzy",
  "Inexpensive",
  "Selfish",
  "Annoying",
  "Doubtful",
  "Innocent",
  "Shiny",
  "Anxious",
  "Drab",
  "Inquisitive",
  "Shy",
  "Arrogant",
  "Dull",
  "Itchy",
  "Silly",
  "Ashamed",
  "Sleepy",
  "Attractive",
  "Eager",
  "Jealous",
  "Smiling",
  "Average",
  "Easy",
  "Jittery",
  "Smoggy",
  "Awful",
  "Elated",
  "Jolly",
  "Sore",
  "Elegant",
  "Joyous",
  "Sparkling",
  "Bad",
  "Embarrassed",
  "Splendid",
  "Beautiful",
  "Enchanting",
  "Kind",
  "Spotless",
  "Better",
  "Encouraging",
  "Stormy",
  "Bewildered",
  "Energetic",
  "Lazy",
  "Strange",
  "Black",
  "Enthusiastic",
  "Light",
  "Stupid",
  "Bloody",
  "Envious",
  "Lively",
  "Successful",
  "Blue",
  "Evil",
  "Lonely",
  "Super",
  "Excited",
  "Long",
  "Blushing",
  "Expensive",
  "Lovely",
  "Talented",
  "Bored",
  "Exuberant",
  "Lucky",
  "Tame",
  "Brainy",
  "Tender",
  "Brave",
  "Fair",
  "Magnificent",
  "Tense",
  "Breakable",
  "Faithful",
  "Misty",
  "Terrible",
  "Bright",
  "Famous",
  "Modern",
  "Tasty",
  "Busy",
  "Fancy",
  "Motionless",
  "Thankful",
  "Fantastic",
  "Muddy",
  "Thoughtful",
  "Calm",
  "Fierce",
  "Mushy",
  "Thoughtless",
  "Careful",
  "Filthy",
  "Mysterious",
  "Tired",
  "Cautious",
  "Fine",
  "Tough",
  "Charming",
  "Foolish",
  "Nasty",
  "Troubled",
  "Cheerful",
  "Fragile",
  "Naughty",
  "Clean",
  "Frail",
  "Nervous",
  "Ugliest",
  "Clear",
  "Frantic",
  "Nice",
  "Ugly",
  "Clever",
  "Friendly",
  "Nutty",
  "Uninterested",
  "Cloudy",
  "Frightened",
  "Unsightly",
  "Clumsy",
  "Funny",
  "Obedient",
  "Unusual",
  "Colorful",
  "Obnoxious",
  "Upset",
  "Combative",
  "Gentle",
  "Odd",
  "Uptight",
  "Comfortable",
  "Gifted",
  "Concerned",
  "Glamorous",
  "Open",
  "Vast",
  "Condemned",
  "Gleaming",
  "Outrageous",
  "Victorious",
  "Confused",
  "Glorious",
  "Outstanding",
  "Vivacious",
  "Cooperative",
  "Good",
  "Courageous",
  "Gorgeous",
  "Panicky",
  "Wandering",
  "Crazy",
  "Graceful",
  "Perfect",
  "Weary",
  "Creepy",
  "Grieving",
  "Plain",
  "Wicked",
  "Crowded",
  "Grotesque",
  "Pleasant",
  "Cruel",
  "Grumpy",
  "Poised",
  "Wild",
  "Curious",
  "Poor",
  "Witty",
  "Cute",
  "Handsome",
  "Powerful",
  "Worrisome",
  "Happy",
  "Precious",
  "Worried",
  "Dangerous",
  "Healthy",
  "Prickly",
  "Wrong",
  "Dark",
  "Helpful",
  "Proud",
  "Dead",
  "Helpless",
  "Putrid",
  "Zany",
  "Defeated",
  "Hilarious",
  "Puzzled",
  "Zealous",
]

const NOUN = [
  "Yak",
  "Sheep",
  "Voice",
  "Planes",
  "Harmony",
  "Station",
  "Statement",
  "Blood",
  "Stitch",
  "War",
  "Society",
  "Bubble",
  "Ray",
  "Sink",
  "Territory",
  "Scissors",
  "Roof",
  "Watch",
  "Mark",
  "Respect",
  "Afternoon",
  "Bear",
  "Wealth",
  "Collar",
  "Sand",
  "Impulse",
  "Dust",
  "Rainstorm",
  "Shape",
  "Knife",
  "Pipe",
  "Boat",
  "Bulb",
  "Space",
  "Fish",
  "Quiet",
  "Children",
  "Taste",
  "Form",
  "Calendar",
  "Pin",
  "Plastic",
  "Jar",
  "Gate",
  "Sheet",
  "Parcel",
  "Suggestion",
  "Haircut",
  "Pancake",
  "Health",
  "Vein",
  "Oil",
  "Chalk",
  "Rings",
  "Harbor",
  "Play",
  "Boy",
  "Discussion",
  "Vase",
  "Dime",
  "Tree",
  "Rose",
  "Snakes",
  "Office",
  "Doll",
  "Argument",
  "Debt",
  "Experience",
  "Kitty",
  "Hair",
  "Crime",
  "Sleep",
  "Industry",
  "Rest",
  "Rice",
  "House",
  "Relation",
  "Question",
  "Test",
  "Finger",
  "Machine",
  "Pizzas",
  "Stocking",
  "Store",
  "Duck",
  "Structure",
  "Giraffe",
  "Quartz",
  "Attraction",
  "Sticks",
  "Bikes",
  "Number",
  "Fly",
  "Growth",
  "Selection",
  "Way",
  "Value",
  "Hands",
  "Sign",
  "Lock",
]