import coin1 from "../assets/coins/Group (2).png";
import coin2 from "../assets/coins/Group (3).png";
import coin3 from "../assets/coins/Group (4).png";
import coin4 from "../assets/coins/Group (5).png";
import coin5 from "../assets/coins/Group (6).png";
import coin6 from "../assets/coins/Group (7).png";
import coin7 from "../assets/coins/Group (8).png";
import coin8 from "../assets/coins/Group (9).png";
// import coin9 from "../assets/coins/Group (10).png";

export interface Coin {
  weight: number;
  value: number;
  image: string;
}

export interface Level {
  level: number;
  maxWt: number;
  coins: Coin[];
}

export const levels: Level[] = [
  {
    level: 1,
    maxWt: 8,
    coins: [
      {
        weight: 1,
        value: 1,
        image: coin1,
      },
      {
        weight: 3,
        value: 4,
        image: coin2,
      },
      {
        weight: 4,
        value: 5,
        image: coin3,
      },
      {
        weight: 5,
        value: 7,
        image: coin4,
      },
    ],
  },
  {
    level: 2,
    maxWt: 24,
    coins: [
      {
        weight: 1,
        value: 1,
        image: coin1,
      },
      {
        weight: 3,
        value: 4,
        image: coin2,
      },
      {
        weight: 6,
        value: 8,
        image: coin5,
      },
      {
        weight: 9,
        value: 10,
        image: coin6,
      },
    ],
  },
  {
    level: 3,
    maxWt: 36,
    coins: [
      {
        weight: 4,
        value: 5,
        image: coin3,
      },
      {
        weight: 6,
        value: 8,
        image: coin5,
      },
      {
        weight: 8,
        value: 9,
        image: coin7,
      },
      {
        weight: 12,
        value: 13,
        image: coin8,
      },
    ],
  },
];
