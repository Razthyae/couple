export const Tiles: {
  id: number | string;
  name: string;
  points?: number;
  action?: boolean;
  bonus?: boolean;
  move?: number
}[] = [
  {
    id: "tile-1",
    name: "START",
  },
  {
    id: "tile-2",
    name: "Points: +1",
    points: 1,
    
  },
  {
    id: "tile-3",
    name: "Go forward 2 spaces",
    move: 2
    
  },
  {
    id: "tile-4",
    name: "Action",
    action: true,
    
  },
  {
    id: "tile-5",
    name: "Points: +1",
    points: 1,
    
  },
  {
    id: "tile-6",
    name: "Points: -1",
    points: -1,
    
  },
  {
    id: "tile-7",
    name: "Action",
    action: true,
  },
  {
    id: "tile-8",
    name: "Points: +1",
    points: 1,
  },
  {
    id: "tile-9",
    name: "Action",
    action: true,
  },
  {
    id: "tile-10",
    name: "Action",
    action: true,
  },
  {
    id: "tile-11",
    name: "Points: -1",
    points: -1,
  },
  {
    id: "tile-12",
    name: "Points: -3",
    points: -3
  },
  {
    id: "tile-13",
    name: "Action",
    action: true,
  },
  {
    id: "tile-14",
    name: "Bonus turn",
    bonus: true
  },
  {
    id: "tile-15",
    name: "Action",
    action: true,
  },
  {
    id: "tile-16",
    name: "Points: +1",
    points: 1,
  },
  {
    id: "tile-17",
    name: "Points: -1",
    points: -1
  },
  {
    id: "tile-18",
    name: "Go back 2 spaces",
    move: -2
  },
  {
    id: "tile-19",
    name: "Action",
    action: true
  },
  {
    id: "tile-20",
    name: "Points: +3",
    points: 3
  },
  {
    id: "tile-21",
    name: "Points: -1",
    points: -1
  },
  {
    id: "tile-22",
    name: "Action",
    action: true
  },
];

export const Actions1 = [
  { "-1": "Spend 1 victory point to do something1" },
  { "-1": "Spend 1 victory point to do something2" },
  { "-1": "Spend 1 victory point to do something3" },
  { "-1": "Spend 1 victory point to do something4" },
  { "-1": "Spend 1 victory point to do something5" },
  { "-1": "Spend 1 victory point to do something6" },
];

export const Actions3 = [
  { "-3": "Spend 3 victory points to do something more1" },
  { "-3": "Spend 3 victory points to do something more2" },
  { "-3": "Spend 3 victory points to do something more3" },
  { "-3": "Spend 3 victory points to do something more4" },
  { "-3": "Spend 3 victory points to do something more5" },
  { "-3": "Spend 3 victory points to do something more6" },
];

const earn2 = `Earn 2 points.`;

export const ActionsGain = [
  {
    "2": `${earn2} You have to give your partner a sensual massage for two minutes.`,
  },
  {
    "2": `${earn2} You have to blindfold your partner and feed them something sweet in a seductive way.`,
  },
  {
    "2": `${earn2} You have to dance with your partner to a romantic or seductive song.`,
  },
  {
    "2": `${earn2} You have to dance in front of your partner to a romantic or seductive song.`,
  },
  {
    "2": `${earn2} You have to whisper something naughty in your partner's ear.`,
  },
  {
    "2": `${earn2} You have to let your partner choose a steamy piece of clothing for you to wear`,
  },
  {
    "2": `${earn2} You have to playfully tease your partner's erogenous zones through their underwear without letting them touch you.`,
  },
  {
    "2": `${earn2} You have to blindfold your partner and use different textures (feathers, silk, etc.) to tease their body.`,
  },
  
  { "2": `${earn2} You have to eat something sweet in the nastiest way possible.` },
  { "2": `${earn2} You have to do a striptease on the table/chair.` },
  
  { "2": `${earn2} You have to spank yourself five times.` },
  { "2": `${earn2} You have to follow your partner's body with your tongue, starting at the neck, all the way down to the underwear.` },
  { "2": `${earn2} You have to suck your partner's nipples for the next 1 minute.` },
  { "2": `${earn2} You have to use your teeth to take off your partner's underwear.` },
  { "2": `${earn2} You have to kiss or bite your partner's booty.` },
  { "2": `${earn2} You have to lick and bite your partner's ear for 1 minute.` },
  { "2": `${earn2} You have to give your partner a lap dance.` },
  {
    "2": `${earn2} You have to do a pole dance, with your partner being the pole, in the whole act.`,
  },
  {
    "2": `${earn2} You have to pour your drink on your partner and clean it by licking it off.`,
  },
];

export const ActionsGain2: object[] = [
  {
    "2": `${earn2} You have to explore a new adult toy or accessory together that you haven't tried before.`,
  },
{
    "2": `${earn2} You have to give your partner oral pleasure for 2 minutes, focusing on their pleasure entirely.`,
  },
{
    "2": `${earn2} You have to experiment with a new intimate position or technique during foreplay.`,
  },
 {
    "2": `${earn2} You have to engage in your partner's body exploration, using your hands and mouth to discover erogenous zones.`,
  },
 { "2": `${earn2} You have to take a selfie in an intimate moment.` },
{ "2": `${earn2} You have to play with yourself for 2 minutes.` },
{ "2": `${earn2} You have to use your fingers/hand to stimulate your partner's genitals.` },
{ "2": `${earn2} You have to stimulate your partner's anus using your fingers or tongue.` },
{ "2": `${earn2} You have to simultaneously stimulate your partner's anus and genitals using tongue and hand.` },
{ "2": `${earn2} You have to watch a porn together while playing with yourselves for 2 minutes.` },
{ "2": `${earn2} You have to lick your partner's nipples while doing a handjob/fingering for 2 minutes.` },
{ "2": `${earn2} You have to arouse your partner by rubbing your genitals against their for 2 minutes - penetration not allowed!.` },
]

export const ActionsGain3: object[] = [
  { "2": `${earn2} You have to ask your partner for favourite position and give it a go for two minutes!` },
  { "2": `${earn2} You have to go on top of your partner and have sex while kissing the neck.` },
  { "2": `${earn2} You have to choose sex position and give it a go for two minutes, changing tempo between very fast and very slow.` },
  { "2": `${earn2} You have to watch a porn together and use the same sex positions as the actors.` },
  { "2": `${earn2} You have to perform 69 position for two minutes.` },
  { "2": `${earn2} You have to perform spooning position for two minutes.` },
  { "2": `${earn2} You have to to grab your partner by the neck, put him/her against the wall and start having sex in standing position.` },
  { "2": `${earn2} You have to slap your partner while having sex in the position of your choice for two minutes.` },
]
