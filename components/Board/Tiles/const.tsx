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



const earn2 = `Earn 2 Lust Points.`;
const spend1 = `Spend 1 Lust Point.`
const spend3 = `Spend 3 Lust Points.`




export const Actions: object = {
  round1: {
    gain: [
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
    ],
    spend1: [
      {"-1": `${spend1} Your partner has to dance with you to a romantic or seductive song.`},
      {"-1": `${spend1} Your partner has to dance in front of you to a romantic or seductive song.`},
      {"-1": `${spend1} Your partner has to blindfold you and feed you something sweet in a seductive way.`},
      {"-1": `${spend1} Your partner has to whisper something naughty in your ear.`},
      {"-1": `${spend1} Your partner has to spank themselves five times.`},
      {"-1": `${spend1} Your partner has to kiss or bite your booty.`},
      {"-1": `${spend1} Your partner has to use their teeth to take off your underwear.`},
      {"-1": `${spend1} Your have to choose a steamy piece of clothing for your partner to wear.`}
    ],
    spend3: [
      {"-3": `${spend3} Your partner has to playfully tease your erogenous zones through your underwear without letting you touch them.`},
      {"-3": `${spend3} Your partner has to follow your body with their tongue, starting at your neck and going all the way down to your underwear.`},
      {"-3": `${spend3} Your partner has to suck your nipples for the next 1 minute.`},
      {"-3": `${spend3} Your partner has to lick and bite your ear for 1 minute.`},
      {"-3": `${spend3} Your partner has to blindfold you and use different textures (feathers, silk, etc.) to tease your body.`},
      {"-3": `${spend3} Your partner has to give you a sensual massage for two minutes.`},
      {"-3": `${spend3} Your partner has to eat something sweet off your body in the nastiest way possible.`},
      {"-3": `${spend3} Your partner has to do a striptease on the table/chair for you.`},
      {"-3": `${spend3} Your partner has to do a pole dance, with you being the pole, in the whole act.`},
      {"-3": `${spend3} Your partner has to give you a lap dance.`},
      {"-3": `${spend3} Your partner has to pour their drink on you and clean it off by licking it.`}
      
    ]
  },
  round2: {
    gain: [
      {
        "2": `${earn2} You have to explore make use of an adult toy that your partner likes`,
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
    ],
    spend1: [
      {"-1": `${spend1} Your partner has to take a selfie in an intimate moment.`},
      {"-1": `${spend1} Your partner has to engage in your body exploration, using their hands and mouth to discover erogenous zones.`},
      {"-1": `${spend1} Your partner has to try new intimate position or technique during foreplay.`},
      {"-1": `${spend1} Your partner has to play with themselves for 2 minutes.`},
      {"-1": `${spend1} You have to watch porn together while playing with yourselves for 2 minutes.`},
      {"-1": `${spend1} Your partner has to make an use of an adult toy that you like.`},
    ],
    spend3: [
      {"-3": `${spend3} Your partner has to arouse you by rubbing their genitals against yours for 2 minutes - penetration not allowed!`},
      {"-3": `${spend3} Your partner has to simultaneously stimulate your anus and genitals using tongue and hand.`},
      {"-3": `${spend3} Your partner has to use their fingers/hand to stimulate your genitals.`},
      {"-3": `${spend3} Your partner has to stimulate your anus using their fingers or tongue.`},
      {"-3": `${spend3} Your partner has to lick your nipples while doing a handjob/fingering for 2 minutes.`},
      {"-3": `${spend3} Your partner has to give you oral pleasure for 2 minutes, focusing on your pleasure entirely.`},
    ]
  }, 
  round3: {
    gain: [
      { "2": `${earn2} You have to ask your partner for favourite position and give it a go for two minutes!` },
      { "2": `${earn2} You have to go on top of your partner and have sex while kissing the neck.` },
      { "2": `${earn2} You have to choose sex position and give it a go for two minutes, changing tempo between very fast and very slow.` },
      { "2": `${earn2} You have to watch a porn together and use the same sex positions as the actors.` },
      { "2": `${earn2} You have to perform 69 position for two minutes.` },
      { "2": `${earn2} You have to perform spooning position for two minutes.` },
      { "2": `${earn2} You have to to grab your partner by the neck, put him/her against the wall and start having sex in standing position.` },
      { "2": `${earn2} You have to slap your partner while having sex in the position of your choice for two minutes.` },
    ],
    spend1: [
      {"-1": `${spend1} Your partner has to perform the 69 position on you for two minutes.`},
      {"-1": `${spend1} Your partner has to watch porn together with you and use the same sex positions as the actors.`},
      {"-1": `${spend1} Your partner has to ask you for a sex position and give it a go for two minutes, changing tempo between very fast and very slow.`},
      {"-1": `${spend1} `},
      {"-1": `${spend1} `},
    ],
    spend3: [
      {"-3": `${spend3} Your partner has to ask you for your favorite position and give it a go for two minutes!`},
      {"-3": `${spend3} Your partner has to grab you by the neck, put you against the wall, and start having sex in a standing position.`},
      {"-3": `${spend3} Your partner has to slap you while having sex in the position of their choice for two minutes.`},
      {"-3": `${spend3} Your partner has to perform the spooning position with you for two minutes.`},
      {"-3": `${spend3} Your partner has to go on top of you and have sex while kissing your neck.`},
      {"-3": `${spend3} `},
    ]
  }
}
