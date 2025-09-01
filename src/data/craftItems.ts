import type { CraftItem } from "@/types";

const imgUrlBase = "./img/";

const craftItemData: CraftItem[] = [
  {
    id: "1",
    title: "Baby beanie and blanket set",
    category: "knitting",
    images: [`${imgUrlBase}baby-beanie-blanket.jpg`],
    description: "The beanie is the first item I knitted in the round. And I ran out of yarn as I was doing the blanket, so I had to make it smaller than I would've liked. I gifted it to my cousin for her newborn daughter.",
  },
 {
    id: "2",
    title: "Cowl and hot water bottle cover",
    category: "knitting",
    images: [`${imgUrlBase}cowl-hwb.jpg`],
    description: "I improvised the pattern for the cowl, and reproduced it for the hot water bottle. I gitfted both to my mum, she's very sensitive to the cold.",
  },
  {
    id: "3",
    title: "Scarf and beanie",
    category: "knitting",
    images: [`${imgUrlBase}whimsical-scarf-beanie.jpg`],
    description: "I made this scarf and beanie for myself, and I wear them in winter. I love the whimsical pattern of the scarf which I found online, and I improvised the beanie to match.",
  },
  {
    id: "4",
    title: "\"Hoot Hoot Owl\" hot water bottle cover",
    category: "knitting",
    images: [`${imgUrlBase}owl-hwb-1.jpg`, `${imgUrlBase}owl-hwb-2.jpg`],
    description: "I found a simple hot water bottle cover pattern online, and composed the owl pattern on top of it myself.",
  },
  {
    id: "5",
    title: "Flashy pink socks",
    category: "knitting",
    images: [`${imgUrlBase}multi-pink-socks.jpg`],
    description: "This is just a simple sock pattern I found, but the colours of the yarn makes them extra flashy. I've worn them to bed a few times, they're surprisingly warm and I love the sensation of the yarn on my feet.",
  },
  {
    id: "6",
    title: "Owl mittens",
    category: "knitting",
    images: [`${imgUrlBase}owl-mittens-1.jpg`, `${imgUrlBase}owl-mittens-2.jpg`, `${imgUrlBase}owl-mittens-3.jpg`],
    description: "The pattern was given to me by a coworker. I have worn these a lot in winter, and turns out this type of handwear is the most practical I have tried yet, they keep my hands warm enough but leave my hand mobility intact.",
  },
  {
    id: "7",
    title: "Bottle cosy",
    category: "knitting",
    images: [`${imgUrlBase}bottle-cosy.jpg`],
    description: "I made this bottle cosy for my mum, for which I improvised the pattern myself. Her choir director asked them not to bring bottles that make noise when falling over to their church rehearsals. Which means metal bottles like hers require a cosy.",
  },
  {
    id: "8",
    title: "Baby beanie and mittens set",
    category: "knitting",
    images: [`${imgUrlBase}pink-baby-beanie-mittens-1.jpg`, `${imgUrlBase}pink-baby-beanie-mittens-2.jpg`, `${imgUrlBase}pink-baby-beanie-mittens-3.jpg`],
    description: "I wanted to make baby accessories with the leftover flashy pink yarn I had. All of my cousins' kids would be too grown by the time I get to gift it to any of them, so I'm keeping them for any next newborn I want to gift something to.",    
  },
  {
    id: "9",
    title: "Flower bookmarks",
    category: "crochet",
    images: [`${imgUrlBase}flower-bookmarks.jpg`],
    description: "My first crochet items! \"It's not much, but it's honest work\".",
  },
  {
    id: "10",
    title: "Pokéball pouch",
    category: "crochet",
    images: [`${imgUrlBase}pokeball-pouch-1.jpg`, `${imgUrlBase}pokeball-pouch-2.jpg`],
    description: "I made this Pokéball pouch for my oldest niece's birthday (husband's side). She's a huge Pokémon fan, and so am I! It can even fit Pokémon cards.",
  },
  {
    id: "11",
    title: "Happy whale amigurumi",
    category: "crochet",
    images: [`${imgUrlBase}ami-whale-1.jpg`, `${imgUrlBase}ami-whale-2.jpg`, `${imgUrlBase}ami-whale-3.jpg`],
    description: "My first amigurumi! I had initially thought to gift it to my younger niece, but my husband made the valid point that a 3-year-old would probably tear it apart in no time. So I gave it to him instead, and he loves it. Maybe it was all a conspiracy to get me to give it to him. Haha.",
  },
  {
    id: "12",
    title: "Flower bouquet coasters",
    category: "crochet",
    images: [`${imgUrlBase}bouquet-coasters-1.jpg`, `${imgUrlBase}bouquet-coasters-2.jpg`, `${imgUrlBase}bouquet-coasters-3.jpg`],
    description: "These coasters fold into a bouquet, which I think is super cool. I barely use them as coasters, I mostly just display them as a bouquet on a living room shelf, and showcase their shapeshifting ability to guest as a party trick.",
  },
  {
    id: "13",
    title: "Little chonky penguin amigurumi",
    category: "crochet",
    images: [`${imgUrlBase}chonky-penguin-ami.jpg`],
    description: "I crocheted this penguin in secret for my penguin-loving husband's birthday. He found it by accident the day before, in the drawer I was hiding it in, whilst looking for a Lord of the Rings DVD. To be honest, my hiding spot was not very good. He still loved receiving it though!",
  },
  {
    id: "14",
    title: "The ultimate patchwork blanket",
    category: "knitting",
    images: [`${imgUrlBase}patchwork-blanket-1.jpg`, `${imgUrlBase}patchwork-blanket-2.jpg`, `${imgUrlBase}patchwork-blanket-3.jpg`],
    description: "Arguably my longest project to date. I started this blanket as I got back into knitting after many years, in December 2023. My mother-in-law gifted me the yarn and the pattern for Christmas. I then worked on it on and off for a year and a half. The pattern had ony 6 different squares, to be knitted 8 times each, and I got bored of them quickly so decided to practice all sorts of different patterns. I love how it came out!",
  },
  {
    id: "15",
    title: "Jolteon amigurumi",
    category: "crochet",
    images: [`${imgUrlBase}jolteon-ami-1.jpg`, `${imgUrlBase}jolteon-ami-2.jpg`],
    description: "My first Pokémon amigurumi, of my favourite Gen 1 Pokémon. I hooked it to my already colourflul work backpack.",
  },
];

export const craftItems = craftItemData.reverse();