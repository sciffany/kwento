import { title } from "process";
import {
  FIL_UNIT1_LESSONS,
  FIL_UNIT2_LESSONS,
  FIL_UNIT3_LESSONS,
  FIL_UNIT4_LESSONS,
  FIL_UNIT5_LESSONS,
  FIL_UNIT6_LESSONS,
} from "./filipino";
import { text } from "stream/consumers";

type Textbox = { text?: string; translation?: string };

export const UNIT1_LESSONS: {
  title: string;
  sentences: {
    parts: (
      | {
          choices?: Textbox[];
        }
      | Textbox
    )[];
  }[];
}[] = [
  {
    title: "Hello 👋",
    sentences: [
      {
        parts: [
          {
            text: "안녕하세요",
            translation: "Hello (formal)",
          },
        ],
      },
      {
        parts: [
          {
            text: "안녕",
            translation: "Hello (informal)",
          },
        ],
      },
    ],
  },
  {
    title: "Goodbye 👋",
    sentences: [
      {
        parts: [
          {
            text: "안녕히 가세요",
            translation: "Goodbye (to someone leaving)",
          },
        ],
      },
      {
        parts: [
          {
            text: "안녕히 계세요",
            translation: "Goodbye (to someone staying)",
          },
        ],
      },
      {
        parts: [
          {
            text: "안녕",
            translation: "Goodbye (less formal)",
          },
        ],
      },
    ],
  },
  {
    title: "I am ____",
    sentences: [
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            choices: [
              {
                text: "티파니",
                translation: "Tiffany",
              },
              {
                text: "제이미",
                translation: "Jamie",
              },
              {
                text: "가수",
                translation: "a singer",
              },
              {
                text: "배우",
                translation: "an actor",
              },
              {
                text: "의사",
                translation: "a doctor",
              },
            ],
          },
          {
            text: "예요",
            translation: "am/is/are/to be (for vowel-ending words)",
          },
        ],
      },
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            choices: [
              {
                text: "조던",
                translation: "Jordan",
              },
              {
                text: "마이클",
                translation: "Michael",
              },
              {
                text: "학생",
                translation: "a student",
              },
              {
                text: "선생",
                translation: "a teacher",
              },
            ],
          },
          {
            text: "이예요",
            translation: "am/is/are/to be (for consonant-ending words)",
          },
        ],
      },
    ],
  },
  {
    title: "I am from ____ 🌍",
    sentences: [
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            choices: [
              {
                text: "미국",
                translation: "the United States 🇺🇸",
              },
              {
                text: "한국",
                translation: "Korea 🇰🇷",
              },
              {
                text: "일본",
                translation: "Japan 🇯🇵",
              },
              {
                text: "중국",
                translation: "China 🇨🇳",
              },
              {
                text: "영국",
                translation: "the UK 🇬🇧",
              },
            ],
          },
          {
            text: "사람",
            translation: "person",
          },
          {
            choices: [
              {
                text: "이에요",
                translation: "am/is/are/to be (for vowel-ending words)",
              },
              {
                text: "아니에요",
                translation: "am/is/are/to be not",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Nice to meet you! 🤝",
    sentences: [
      {
        parts: [
          {
            text: "만나서",
            translation: "To meet",
          },
          {
            text: "반가워요",
            translation: "Nice to meet you",
          },
        ],
      },
    ],
  },
];

const UNIT2_LESSONS = [
  {
    title: "Yes or No? 🤔",
    sentences: [
      {
        parts: [
          {
            text: "네",
            translation: "Yes",
          },
        ],
      },
      {
        parts: [
          {
            text: "아니요",
            translation: "No",
          },
        ],
      },
    ],
  },
  {
    title: "Thank you 🙏",
    sentences: [
      {
        parts: [
          {
            text: "감사합니다",
            translation: "Thank you (formal)",
          },
        ],
      },
      {
        parts: [
          {
            text: "고마워요",
            translation: "Thank you (informal)",
          },
        ],
      },
    ],
  },
  {
    title: "Excuse me 🙇",
    sentences: [
      {
        parts: [
          {
            text: "실례합니다",
            translation: "Excuse me",
          },
        ],
      },
    ],
  },
  {
    title: "Wait a moment ⏳",
    sentences: [
      {
        parts: [
          {
            text: "잠깐만요",
            translation: "Wait a moment",
          },
        ],
      },
    ],
  },
  {
    title: "I'm fine 🤗",
    sentences: [
      {
        parts: [
          {
            text: "괜찮아요",
            translation: "I'm fine",
          },
        ],
      },
    ],
  },
];

const UNIT3_LESSONS = [
  {
    title: "Eating 🍽️",
    sentences: [
      {
        parts: [{ text: "먹다", translation: "To eat" }],
      },
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            text: "먹어요",
            translation: "eat",
          },
        ],
      },
    ],
  },
  {
    title: "Drinking 🥤",
    sentences: [
      {
        parts: [{ text: "마시다", translation: "To drink" }],
      },
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            text: "마셔요",
            translation: "drink",
          },
        ],
      },
    ],
  },

  {
    title: "Going 🚶",
    sentences: [
      {
        parts: [{ text: "가다", translation: "To go" }],
      },
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            text: "가요",
            translation: "go",
          },
        ],
      },
    ],
  },
  {
    title: "Sitting 🪑",
    sentences: [
      {
        parts: [{ text: "앉다", translation: "To sit" }],
      },
      {
        parts: [
          {
            text: "저는",
            translation: "As for me",
          },
          {
            text: "앉아요",
            translation: "sit",
          },
        ],
      },
    ],
  },
  {
    title: "Seeing 👀",
    sentences: [
      {
        parts: [{ text: "보다", translation: "To see" }],
      },
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            text: "봐요",
            translation: "see",
          },
        ],
      },
    ],
  },
  {
    title: "Hearing 👂",
    sentences: [
      {
        parts: [{ text: "듣다", translation: "To hear" }],
      },
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            text: "듣아요",
            translation: "hear",
          },
        ],
      },
    ],
  },
  {
    title: "Reading 📖",
    sentences: [
      {
        parts: [{ text: "읽다", translation: "To read" }],
      },
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            text: "읽어요",
            translation: "read",
          },
        ],
      },
    ],
  },
];

const UNIT4_LESSONS = [
  {
    title: "Eating 🍽️",
    sentences: [
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            choices: [
              {
                text: "피자",
                translation: "pizza 🍕",
              },
              {
                text: "닭고기",
                translation: "chicken 🍗",
              },
              {
                text: "햄버거",
                translation: "hamburger 🍔",
              },
            ],
          },
          {
            text: "를",
            translation: "object marker (for vowel-ending words)",
          },
          {
            text: "먹어요",
            translation: "eat",
          },
        ],
      },
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            choices: [
              {
                text: "빵",
                translation: "bread 🍞",
              },
              {
                text: "밥",
                translation: "rice 🍚",
              },
              {
                text: "음식",
                translation: "food",
              },
            ],
          },
          {
            text: "을",
            translation: "object marker (for consonant-ending words)",
          },
          {
            text: "먹어요",
            translation: "eat",
          },
        ],
      },
    ],
  },
  {
    title: "Watching 📺",
    sentences: [
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            choices: [
              {
                text: "영화",
                translation: "Movie 🎥",
              },
              {
                text: "티비",
                translation: "TV 📺",
              },
            ],
          },
          {
            text: "를",
            translation: "object marker (for vowel-ending words)",
          },
          {
            text: "봐요",
            translation: "see",
          },
        ],
      },
    ],
  },
  {
    title: "Listening 👂",
    sentences: [
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            choices: [
              {
                text: "노래",
                translation: "Song 🎵",
              },
              {
                text: "라디오",
                translation: "Radio 📻",
              },
            ],
          },
          {
            text: "를",
            translation: "object marker (for vowel-ending words)",
          },
          {
            text: "듣아요",
            translation: "hear",
          },
        ],
      },
    ],
  },
  {
    title: "Liking 🥰",
    sentences: [
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            choices: [
              {
                text: "피자",
                translation: "Pizza 🍕",
              },
              {
                text: "강아지",
                translation: "Puppy",
              },
              {
                text: "고양이",
                translation: "Cat",
              },
            ],
          },
          {
            text: "를",
            translation: "object marker (for vowel-ending words)",
          },
          {
            text: "좋아요",
            translation: "like",
          },
        ],
      },
    ],
  },
  {
    title: "Disliking 😒",
    sentences: [
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            choices: [
              {
                text: "양고기",
                translation: "Mutton",
              },
              {
                text: "독서",
                translation: "Reading",
              },
            ],
          },
          {
            text: "를",
            translation: "object marker (for vowel-ending words)",
          },
          {
            text: "싫어해요",
            translation: "dislike",
          },
        ],
      },
    ],
  },
];

const UNIT5_LESSONS = [
  {
    title: "Home 🏠",
    sentences: [
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            text: "집",
            translation: "Home",
          },
          {
            text: "에",
            translation: "location marker",
          },
          {
            text: "가요",
            translation: "go",
          },
        ],
      },
    ],
  },
  {
    title: "School 🏫",
    sentences: [
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            text: "학교",
            translation: "School",
          },
          {
            text: "에",
            translation: "location marker",
          },
          {
            text: "가요",
            translation: "go",
          },
        ],
      },
    ],
  },
  {
    title: "Library 📚",
    sentences: [
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            text: "도서관",
            translation: "Library",
          },
          {
            text: "에",
            translation: "location marker",
          },
          {
            text: "가요",
            translation: "go",
          },
        ],
      },
    ],
  },
  {
    title: "Park 🌳",
    sentences: [
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            text: "공원",
            translation: "Park",
          },
          {
            text: "에",
            translation: "location marker",
          },
          {
            text: "가요",
            translation: "go",
          },
        ],
      },
    ],
  },
];

const UNIT6_LESSONS = [
  {
    title: "Family members doing things 👨‍👩‍👧‍",
    sentences: [
      {
        parts: [
          {
            choices: [
              {
                text: "엄마",
                translation: "Mom",
              },
              {
                text: "아빠",
                translation: "Dad",
              },
              {
                text: "할아버지",
                translation: "Grandfather",
              },
              {
                text: "할머니",
                translation: "Grandmother",
              },
            ],
          },
          {
            text: "는",
            translation: "topic marker",
          },
          {
            choices: [
              { text: "집에가요", translation: "Go home" },
              {
                text: "닭고기 먹어요",
                translation: "eat chicken",
              },
              {
                text: "영화 봐요",
                translation: "watch a movie",
              },
              {
                text: "노래 들어요",
                translation: "listen to song",
              },
              {
                text: "공원에 가요",
                translation: "go to the park",
              },
              {
                text: "책 읽어요",
                translation: "read a book",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Have or have not 🏠",
    sentences: [
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            choices: [
              {
                text: "형",
                translation: "Older brother (for male speakers)",
              },
              {
                text: "남동생",
                translation: "Younger brother",
              },
              {
                text: "여동생",
                translation: "Younger sister",
              },
            ],
          },
          {
            text: "이",
            translation: "subject marker (for consonant-ending words)",
          },
          {
            choices: [
              { text: "있어요", translation: "have" },
              { text: "없어요", translation: "do not have" },
            ],
          },
        ],
      },
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            choices: [
              {
                text: "누나",
                translation: "Older sister (for male speakers)",
              },
              {
                text: "언니",
                translation: "Older sister (for female speakers)",
              },
              {
                text: "오빠",
                translation: "Older brother (for female speakers)",
              },
            ],
          },
          {
            text: "가",
            translation: "subject marker (for vowel-ending words)",
          },
          {
            choices: [
              { text: "있어요", translation: "have" },
              { text: "없어요", translation: "do not have" },
            ],
          },
        ],
      },
    ],
  },
];

const UNIT7_LESSONS = [
  {
    title: "Good things 👍",
    sentences: [
      {
        parts: [
          {
            text: "좋다",
            translation: "Is Being Good",
          },
        ],
      },

      {
        parts: [
          {
            text: "저는",
            translation: "For me,",
          },
          {
            choices: [
              {
                text: "피자",
                translation: "Pizza 🍕",
              },
              {
                text: "독서",
                translation: "Reading 📖",
              },
            ],
          },
          {
            text: "가",
            translation: "subject marker (for vowel-ending words)",
          },
          {
            text: "좋아요",
            translation: "is good",
          },
        ],
      },
      {
        parts: [
          {
            text: "저는",
            translation: "For me,",
          },
          {
            choices: [
              {
                text: "음식",
                translation: "Food 🍲",
              },
              {
                text: "음악",
                translation: "Music 🎵",
              },
            ],
          },
          {
            text: "이",
            translation: "subject marker (for consonant-ending words)",
          },
          {
            text: "좋아요",
            translation: "is good",
          },
        ],
      },
    ],
  },
  {
    title: "Spicy things 🌶️/ Tasty things 😋",
    sentences: [
      {
        parts: [
          {
            text: "맵다",
            translation: "Is Being Spicy",
          },
        ],
      },
      {
        parts: [
          {
            text: "맛있다",
            translation: "Is Being Tasty",
          },
        ],
      },
      {
        parts: [
          {
            choices: [
              {
                text: "김치",
                translation: "Kimchi 🥬",
              },
              {
                text: "라면",
                translation: "Ramen 🍜",
              },
            ],
          },
          {
            text: "는",
            translation: "topic marker",
          },
          {
            choices: [
              {
                text: "매워요",
                translation: "is spicy",
              },
              {
                text: "맛있어요",
                translation: "is tasty",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Hungry people 🍽️/ Full people  😋",
    sentences: [
      {
        parts: [
          {
            text: "배고프다",
            translation: "Is Being Hungry",
          },
        ],
      },
      {
        parts: [
          {
            text: "배부르다",
            translation: "Is Being Full",
          },
        ],
      },
      {
        parts: [
          {
            choices: [
              {
                text: "이",
                translation: "This",
              },
              {
                text: "그",
                translation: "That",
              },
            ],
          },
          {
            choices: [
              {
                text: "학생",
                translation: "This student",
              },
              {
                text: "선생님",
                translation: "This teacher",
              },
              {
                text: "사람",
                translation: "Person",
              },
            ],
          },
          {
            text: "은",
            translation: "topic marker (for consontant-ending words)",
          },
          {
            choices: [
              {
                text: "배고파요",
                translation: "is hungry",
              },
              {
                text: "배불러요",
                translation: "is full",
              },
            ],
          },
        ],
      },
    ],
  },
];

const UNIT8_PEOPLE = [
  {
    text: "저는",
    translation: "As for me,",
  },
  {
    text: "엄마는",
    translation: "Mom",
  },
  {
    text: "아빠는",
    translation: "Dad",
  },
  {
    text: "체친구는",
    translation: "Friend",
  },
];
const UNIT8_VERBS = [
  {
    text: "있어요",
    translation: "Have",
  },
  {
    text: "없어요",
    translation: "Do not have",
  },
  {
    text: "봐요",
    translation: "See",
  },
];

const UNIT8_LESSONS = [
  {
    title: "Red 🟥",
    sentences: [
      {
        parts: [
          {
            text: "빨간색",
            translation: "Red",
          },
        ],
      },
      {
        parts: [
          {
            choices: UNIT8_PEOPLE,
          },
          {
            text: "빨간",
            translation: "Red",
          },
          {
            choices: [
              {
                text: "책을",
                translation: "Book + Object Marker",
              },
              {
                text: "자동차 를",
                translation: "Car + Object Marker",
              },
              {
                text: "사과를",
                translation: "Apple + Object Marker",
              },
            ],
          },
          {
            choices: UNIT8_VERBS,
          },
        ],
      },
      {
        parts: [
          {
            choices: [
              {
                text: "이",
                translation: "This",
              },
              {
                text: "그",
                translation: "That",
              },
            ],
          },
          {
            choices: [
              {
                text: "책 은",
                translation: "Book + Topic Marker",
              },
              {
                text: "자동차 는",
                translation: "Car + Topic Marker",
              },
              {
                text: "사과 는",
                translation: "Apple + Topic Marker",
              },
            ],
          },
          {
            text: "빨간색",
            translation: "Red",
          },
          {
            choices: [
              {
                text: "이에요",
                translation: "is",
              },
              {
                text: "아니에요",
                translation: "is not",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Blue 🟦",
    sentences: [
      {
        parts: [
          {
            text: "파란색",
            translation: "Blue",
          },
        ],
      },
      {
        parts: [
          {
            choices: UNIT8_PEOPLE,
          },
          {
            text: "파란",
            translation: "Blue",
          },
          {
            choices: [
              {
                text: "핸드폰 을",
                translation: "Phone + Topic Marker",
              },
              {
                text: "새 를",
                translation: "Bird + Topic Marker",
              },
              {
                text: "책상을",
                translation: "Desk + Topic Marker",
              },
              {
                text: "자전거 를",
                translation: "Bike + Topic Marker",
              },
            ],
          },
          {
            choices: UNIT8_VERBS,
          },
        ],
      },
      {
        parts: [
          {
            choices: [
              {
                text: "이",
                translation: "This",
              },
              {
                text: "그",
                translation: "That",
              },
            ],
          },
          {
            choices: [
              {
                text: "핸드폰 은",
                translation: "Phone + Topic Marker",
              },
              {
                text: "새 는",
                translation: "Bird + Topic Marker",
              },
              {
                text: "책상 은",
                translation: "Desk + Topic Marker",
              },
              {
                text: "자전거 는",
                translation: "Bike + Topic Marker",
              },
            ],
          },
          {
            text: "파란색",
            translation: "Blue",
          },
          {
            choices: [
              {
                text: "이에요",
                translation: "is",
              },
              {
                text: "아니에요",
                translation: "is not",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Yellow 🟨",
    sentences: [
      {
        parts: [
          {
            text: "노란색",
            translation: "Yellow",
          },
        ],
      },
      {
        parts: [
          {
            choices: UNIT8_PEOPLE,
          },
          {
            text: "노란",
            translation: "Yellow",
          },
          {
            choices: [
              {
                text: "새 를",
                translation: "Bird + Object Marker",
              },
              {
                text: "바나나 를",
                translation: "Banana + Object Marker",
              },
              {
                text: "오리 를",
                translation: "Duck + Object Marker",
              },
            ],
          },
          {
            choices: UNIT8_VERBS,
          },
        ],
      },
      {
        parts: [
          {
            choices: [
              {
                text: "이",
                translation: "This",
              },
              {
                text: "그",
                translation: "That",
              },
            ],
          },
          {
            choices: [
              {
                text: "새 는",
                translation: "Bird + Topic Marker",
              },
              {
                text: "바나나 는",
                translation: "Banana + Topic Marker",
              },
              {
                text: "오리 는",
                translation: "Duck + Topic Marker",
              },
            ],
          },
          {
            text: "노란색",
            translation: "Yellow",
          },
          {
            choices: [
              {
                text: "이에요",
                translation: "is",
              },
              {
                text: "아니에요",
                translation: "is not",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Green 🟩",
    sentences: [
      {
        parts: [
          {
            text: "초록색",
            translation: "Green",
          },
        ],
      },
      {
        parts: [
          {
            choices: UNIT8_PEOPLE,
          },
          {
            text: "초록",
            translation: "Green",
          },
          {
            choices: [
              {
                text: "오리 를",
                translation: "Duck + Object Marker",
              },
              {
                text: "나무 를",
                translation: "Tree + Object Marker",
              },
              {
                text: "풀 을",
                translation: "Grass + Object Marker",
              },
            ],
          },
          {
            choices: UNIT8_VERBS,
          },
        ],
      },
      {
        parts: [
          {
            choices: [
              {
                text: "이",
                translation: "This",
              },
              {
                text: "그",
                translation: "That",
              },
            ],
          },
          {
            choices: [
              {
                text: "오리 는",
                translation: "Duck + Topic Marker",
              },
              {
                text: "나무 는",
                translation: "Tree + Topic Marker",
              },
              {
                text: "풀 은",
                translation: "Grass + Topic Marker",
              },
            ],
          },
          {
            text: "초록색",
            translation: "Green",
          },
          {
            choices: [
              {
                text: "이에요",
                translation: "is",
              },
              {
                text: "아니에요",
                translation: "is not",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Black ⬛",
    sentences: [
      {
        parts: [
          {
            text: "검은색",
            translation: "Black",
          },
        ],
      },
      {
        parts: [
          {
            choices: UNIT8_PEOPLE,
          },
          {
            text: "검은",
            translation: "Black",
          },
          {
            choices: [
              {
                text: " 머리카락 을",
                translation: "Hair + Object Marker",
              },
              {
                text: "신발 을",
                translation: "Shoes + Object Marker",
              },
              {
                text: "가방 을",
                translation: "Bag + Object Marker",
              },
            ],
          },
          {
            choices: UNIT8_VERBS,
          },
        ],
      },
      {
        parts: [
          {
            choices: [
              {
                text: "이",
                translation: "This",
              },
              {
                text: "그",
                translation: "That",
              },
            ],
          },
          {
            choices: [
              {
                text: " 머리카락 은",
                translation: "Hair + Topic Marker",
              },
              {
                text: "신발 은",
                translation: "Shoes + Topic Marker",
              },
              {
                text: "가방 은",
                translation: "Bag + Topic Marker",
              },
            ],
          },
          {
            text: "검은색",
            translation: "Black",
          },
          {
            choices: [
              {
                text: "이에요",
                translation: "is",
              },
              {
                text: "아니에요",
                translation: "is not",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "White ⬜",
    sentences: [
      {
        parts: [
          {
            text: "하얀색",
            translation: "White",
          },
        ],
      },
      {
        parts: [
          {
            choices: UNIT8_PEOPLE,
          },
          {
            text: "하얀",
            translation: "White",
          },
          {
            choices: [
              {
                text: "머리카락 을",
                translation: "Hair + Object Marker",
              },
              {
                text: "셔츠 를",
                translation: "Shirt + Object Marker",
              },
              {
                text: "암소 를",
                translation: "Cow + Object Marker",
              },
            ],
          },
          {
            choices: UNIT8_VERBS,
          },
        ],
      },
      {
        parts: [
          {
            choices: [
              {
                text: "이",
                translation: "This",
              },
              {
                text: "그",
                translation: "That",
              },
            ],
          },
          {
            choices: [
              {
                text: " 머리카락 은",
                translation: "Hair + Topic Marker",
              },
              {
                text: "셔츠 는",
                translation: "Shirt + Topic Marker",
              },
              {
                text: "암소 는",
                translation: "Cow + Topic Marker",
              },
            ],
          },
          {
            text: "하얀색",
            translation: "White",
          },
          {
            choices: [
              {
                text: "이에요",
                translation: "is",
              },
              {
                text: "아니에요",
                translation: "is not",
              },
            ],
          },
        ],
      },
    ],
  },
];

const UNIT9_LESSONS = [
  {
    title: "Quickly 💨",
    sentences: [
      {
        parts: [
          {
            text: "빨리",
            translation: "Quickly",
          },
        ],
      },
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            text: "빨리",
            translation: "quickly",
          },
          {
            choices: [
              {
                text: "달려요",
                translation: "Run",
              },
              {
                text: "걸어요",
                translation: "Walk",
              },
              {
                text: "점프해요",
                translation: "Jump",
              },
              {
                text: "먹어요",
                translation: "Eat",
              },
              {
                text: "말해요",
                translation: "Speak",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "A little bit 🤏",
    sentences: [
      {
        parts: [
          {
            text: "조금",
            translation: "A little bit",
          },
        ],
      },
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            choices: [
              {
                text: "한국어 를",
                translation: "Korean language + object marker",
              },
              {
                text: "영어 를",
                translation: "English language + object marker",
              },
              {
                text: "중국어 를",
                translation: "Chinese + object marker",
              },
              {
                text: "운동 을",
                translation: "Exercise + object marker",
              },
            ],
          },
          {
            text: "조금",
            translation: "A little bit",
          },
          {
            text: "해요",
            translation: "Do",
          },
        ],
      },
    ],
  },
  {
    title: "Well 🌟",
    sentences: [
      {
        parts: [
          {
            text: "잘",
            translation: "Well",
          },
        ],
      },
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            choices: [
              {
                text: "한국어 를",
                translation: "Korean language + object marker",
              },
              {
                text: "영어 를",
                translation: "English language + object marker",
              },
              {
                text: "중국어 를",
                translation: "Chinese + object marker",
              },
              {
                text: "운동 을",
                translation: "Exercise + object marker",
              },
            ],
          },
          {
            text: "잘",
            translation: "Well",
          },
          {
            text: "해요",
            translation: "Do",
          },
        ],
      },
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            text: "잘",
            translation: "Well",
          },
          {
            choices: [
              {
                text: "자요",
                translation: "Sleep",
              },
              {
                text: "춤춰요",
                translation: "Dance",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Really 💯",
    sentences: [
      {
        parts: [
          {
            text: "정말",
            translation: "Really",
          },
        ],
      },
      {
        parts: [
          {
            text: "진짜",
            translation: "Really (informal)",
          },
        ],
      },
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            choices: [
              {
                text: "한국어 를",
                translation: "Korean language + object marker",
              },
              {
                text: "영어 를",
                translation: "English language + object marker",
              },
              {
                text: "중국어 를",
                translation: "Chinese + object marker",
              },
              {
                text: "운동 을",
                translation: "Exercise + object marker",
              },
            ],
          },
          {
            choices: [
              { text: "정말", translation: "Really" },
              {
                text: "진짜",
                translation: "Really (informal)",
              },
            ],
          },
          {
            text: "잘",
            translation: "Well",
          },
          {
            text: "해요",
            translation: "Do",
          },
        ],
      },
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            choices: [
              { text: "정말", translation: "Really" },
              {
                text: "진짜",
                translation: "Really (informal)",
              },
            ],
          },
          {
            text: "잘",
            translation: "Well",
          },
          {
            choices: [
              {
                text: "자요",
                translation: "Sleep",
              },
              {
                text: "춤춰요",
                translation: "Dance",
              },
            ],
          },
        ],
      },
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            choices: [
              { text: "정말", translation: "Really" },
              {
                text: "진짜",
                translation: "Really (informal)",
              },
            ],
          },
          {
            text: "빨리",
            translation: "quickly",
          },
          {
            choices: [
              {
                text: "달려요",
                translation: "Run",
              },
              {
                text: "걸어요",
                translation: "Walk",
              },
              {
                text: "점프해요",
                translation: "Jump",
              },
              {
                text: "먹어요",
                translation: "Eat",
              },
              {
                text: "말해요",
                translation: "Speak",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Very 🌟",
    sentences: [
      {
        parts: [
          {
            text: "아주",
            translation: "Very",
          },
        ],
      },
      {
        parts: [
          {
            text: "매우",
            translation: "Very (slightly formal)",
          },
        ],
      },
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            choices: [
              {
                text: "한국어 를",
                translation: "Korean language + object marker",
              },
              {
                text: "영어 를",
                translation: "English language + object marker",
              },
              {
                text: "중국어 를",
                translation: "Chinese + object marker",
              },
              {
                text: "운동 을",
                translation: "Exercise + object marker",
              },
            ],
          },
          {
            choices: [
              {
                text: "아주",
                translation: "Very",
              },
              {
                text: "매우",
                translation: "Very (slightly formal)",
              },
            ],
          },
          {
            text: "잘",
            translation: "Well",
          },
          {
            text: "해요",
            translation: "Do",
          },
        ],
      },
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            choices: [
              {
                text: "아주",
                translation: "Very",
              },
              {
                text: "매우",
                translation: "Very (slightly formal)",
              },
            ],
          },
          {
            text: "잘",
            translation: "Well",
          },
          {
            choices: [
              {
                text: "자요",
                translation: "Sleep",
              },
              {
                text: "춤춰요",
                translation: "Dance",
              },
            ],
          },
        ],
      },
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            choices: [
              {
                text: "아주",
                translation: "Very",
              },
              {
                text: "매우",
                translation: "Very (slightly formal)",
              },
            ],
          },
          {
            text: "빨리",
            translation: "quickly",
          },
          {
            choices: [
              {
                text: "달려요",
                translation: "Run",
              },
              {
                text: "걸어요",
                translation: "Walk",
              },
              {
                text: "점프해요",
                translation: "Jump",
              },
              {
                text: "먹어요",
                translation: "Eat",
              },
              {
                text: "말해요",
                translation: "Speak",
              },
            ],
          },
        ],
      },
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            choices: [
              {
                text: "한국어 를",
                translation: "Korean language + object marker",
              },
              {
                text: "영어 를",
                translation: "English language + object marker",
              },
              {
                text: "중국어 를",
                translation: "Chinese + object marker",
              },
              {
                text: "운동 을",
                translation: "Exercise + object marker",
              },
            ],
          },
          {
            choices: [
              {
                text: "아주",
                translation: "Very",
              },
              {
                text: "매우",
                translation: "Very (slightly formal)",
              },
            ],
          },
          {
            text: "조금",
            translation: "A little bit",
          },
          {
            text: "해요",
            translation: "Do",
          },
        ],
      },
    ],
  },
];

const UNIT10_LESSONS = [
  {
    title: "Want to 🙏",
    sentences: [
      {
        parts: [
          {
            text: "-고 싶어요",
            translation: "Want to",
          },
        ],
      },
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            choices: [
              {
                text: "정말",
                translation: "Really",
              },
              {
                text: "조금",
                translation: "A bit",
              },
              {
                text: "",
                translation: "(No adverb)",
              },
            ],
          },
          {
            choices: [
              {
                text: "먹고",
                translation: "Eat",
              },
              {
                text: "자고",
                translation: "Sleep",
              },
              {
                text: "놀고",
                translation: "Play",
              },
              {
                text: "운동하고",
                translation: "Exercise",
              },
              {
                text: "책 읽고",
                translation: "Read a book",
              },
            ],
          },

          {
            text: "싶어요",
            translation: "Want to",
          },
        ],
      },
    ],
  },
  {
    title: "Want to eat 🍽️",
    sentences: [
      {
        parts: [
          {
            text: "먹고 싶어요",
            translation: "Want to eat",
          },
        ],
      },
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            choices: [
              {
                text: "소고기 를",
                translation: "Beef + Object Marker",
              },
              {
                text: "사과 를",
                translation: "Apple + Object Marker",
              },
              {
                text: "복숭아 를",
                translation: "Peach + Object Marker",
              },
            ],
          },
          {
            choices: [
              {
                text: "정말",
                translation: "Really",
              },
              {
                text: "조금",
                translation: "A bit",
              },
              {
                text: "",
                translation: "(No adverb)",
              },
            ],
          },
          {
            text: "먹고",
            translation: "Eat",
          },
          {
            text: "싶어요",
            translation: "Want to",
          },
        ],
      },
    ],
  },
  {
    title: "Want to go 🚗",
    sentences: [
      {
        parts: [
          {
            text: "가고 싶어요",
            translation: "Want to go",
          },
        ],
      },
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            choices: [
              {
                text: "학교 에",
                translation: "School + Location Marker",
              },
              {
                text: "집 에",
                translation: "Home + Location Marker",
              },
              {
                text: "공원 에",
                translation: "Park + Location Marker",
              },
            ],
          },
          {
            choices: [
              {
                text: "정말",
                translation: "Really",
              },
              {
                text: "조금",
                translation: "A bit",
              },
              {
                text: "",
                translation: "(No adverb)",
              },
            ],
          },
          {
            text: "가고",
            translation: "Go",
          },
          {
            text: "싶어요",
            translation: "Want to",
          },
        ],
      },
    ],
  },
  {
    title: "Want a __ 🎁",
    sentences: [
      {
        parts: [
          {
            text: "가지 싶어요",
            translation: "Want (or more literally, want to have)",
          },
        ],
      },
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            choices: [
              {
                text: "차 를",
                translation: "Car + Object Marker",
              },
              {
                text: "집 을",
                translation: "House + Object Marker",
              },
              {
                text: "돈 을",
                translation: "Money + Object Marker",
              },
              {
                text: "바나나 를 ",
                translation: "Banana + Object Marker",
              },
            ],
          },
          {
            choices: [
              {
                text: "정말",
                translation: "Really",
              },
              {
                text: "조금",
                translation: "A bit",
              },
              {
                text: "",
                translation: "(No adverb)",
              },
            ],
          },
          {
            text: "가지고",
            translation: "Have",
          },
          {
            text: "싶어요",
            translation: "Want to",
          },
        ],
      },
    ],
  },
];

const UNIT11_NUMBERS = [
  {
    text: "하나",
    translation: "One",
  },
  {
    text: "둘",
    translation: "Two",
  },
  {
    text: "셋",
    translation: "Three",
  },
  {
    text: "넷",
    translation: "Four",
  },
  {
    text: "다섯",
    translation: "Five",
  },
  {
    text: "여섯",
    translation: "Six",
  },
  {
    text: "일곱",
    translation: "Seven",
  },
  {
    text: "여덟",
    translation: "Eight",
  },
  {
    text: "아홉",
    translation: "Nine",
  },
  {
    text: "열",
    translation: "Ten",
  },
  {
    text: "열하나",
    translation: "Eleven",
  },
  {
    text: "열둘",
    translation: "Twelve",
  },
];

const UNIT11_LESSONS = [
  {
    title: "Number of siblings 👨‍👩‍👧‍👦",
    sentences: [
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            choices: UNIT11_NUMBERS,
          },
          {
            choices: [
              {
                text: "언니 가",
                translation: "Older sister (for females) + subject marker",
              },
              {
                text: "오빠 가",
                translation: "Older brother (for females + subject marker",
              },
              {
                text: "누나 가",
                translation: "Older sister (for males) + subject marker",
              },
              {
                text: "형 이",
                translation: "Older brother (for males) + subject marker",
              },
              {
                text: "여동생 이",
                translation: "Younger sister + subject marker",
              },
              {
                text: "남동생 이",
                translation: "Younger brother + subject marker",
              },
            ],
          },
          {
            text: "있어요",
            translation: "Have",
          },
        ],
      },
    ],
  },
  {
    title: "Age 🎂",
    sentences: [
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            choices: UNIT11_NUMBERS,
          },
          {
            text: "살",
            translation: "Years old",
          },
          {
            text: "이에요",
            translation: "is",
          },
        ],
      },
    ],
  },
  {
    title: "Time ⏰",
    sentences: [
      {
        parts: [
          {
            text: "지금 은",
            translation: "Now + topic marker",
          },
          {
            choices: UNIT11_NUMBERS,
          },
          {
            text: "시",
            translation: "O'clock (or literally, hour)",
          },
          {
            text: "이에요",
            translation: "is",
          },
        ],
      },
    ],
  },
];

const UNIT12_ADVERBS = [
  {
    text: "잘",
    translation: "Well",
  },
  {
    text: "빨리",
    translation: "Quickly",
  },
  {
    text: "조금",
    translation: "A little bit",
  },
  {
    text: "",
    translation: "(No adverb)",
  },
];

const UNIT12_LESSONS = [
  {
    title: "Random abilities 🎨",
    sentences: [
      {
        parts: [
          {
            text: "-을 수 있어요",
            translation: "Can (Or literally, have the ability to)",
          },
        ],
      },
      {
        parts: [
          {
            text: "-을 수 없어요",
            translation: "Cannot (Or literally, have no ability to)",
          },
        ],
      },
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            choices: UNIT12_ADVERBS,
          },
          {
            choices: [
              {
                text: "먹을",
                translation: "Eat + Conjugation for can",
              },
              {
                text: "잘",
                translation: "Sleep + Conjugation for can",
              },
              {
                text: "춤출",
                translation: "Dance + Conjugation for can",
              },
              {
                text: "놀",
                translation: "Play + Conjugation for can",
              },
              {
                text: "노래를",
                translation: "Sing + Conjugation for can",
              },
              {
                text: "그림을",
                translation: "Paint + Conjugation for can",
              },
            ],
          },
          {
            text: "수",
            translation: "Ability",
          },
          {
            choices: [
              {
                text: "있어요",
                translation: "Have",
              },
              {
                text: "없어요",
                translation: "Don't have",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Language abilities 💬",
    sentences: [
      {
        parts: [
          {
            text: "저는",
            translation: "As for me,",
          },
          {
            choices: UNIT12_ADVERBS,
          },
          {
            choices: [
              {
                text: "한국어 를",
                translation: "Korean language + object marker",
              },
              {
                text: "영어 를",
                translation: "English language + object marker",
              },
              {
                text: "중국어 를",
                translation: "Chinese + object marker",
              },
              {
                text: "일본어 를",
                translation: "Japanese + object marker",
              },
              {
                text: "독일어 를",
                translation: "German + object marker",
              },
            ],
          },
          {
            choices: [
              {
                text: "할",
                translation: "Do + Conjugation for can",
              },
              {
                text: "말할",
                translation: "Speak + Conjugation for can",
              },
              {
                text: "쓸",
                translation: "Write + Conjugation for can",
              },
              {
                text: "읽을",
                translation: "Read + Conjugation for can",
              },
              {
                text: "들을",
                translation: "Listen + Conjugation for can",
              },
            ],
          },
          {
            text: "수",
            translation: "Ability",
          },
          {
            choices: [
              {
                text: "있어요",
                translation: "Have",
              },
              {
                text: "없어요",
                translation: "Don't have",
              },
            ],
          },
        ],
      },
    ],
  },
];
const UNIT13_LESSONS = [
  {
    title: "Question Words 🤔",
    sentences: [
      {
        parts: [
          {
            text: "누구",
            translation: "Who",
          },
        ],
      },
    ],
  },
];

export const LESSONS = {
  korean: [
    {
      title: "Introductions",
      lessons: UNIT1_LESSONS,
      blogId: "clzpj34ct0000l608ny7q34to",
      emoji: "👋",
    },
    {
      title: "Expressions",
      lessons: UNIT2_LESSONS,
      blogId: "",
      emoji: "🙏",
    },
    {
      title: "Basic Verbs",
      lessons: UNIT3_LESSONS,
      blogId: "",
      emoji: "🏃‍♂️",
    },
    {
      title: "Object Marker",
      lessons: UNIT4_LESSONS,
      blogId: "",
      emoji: "🎯",
    },
    {
      title: "Location Marker",
      lessons: UNIT5_LESSONS,
      blogId: "",
      emoji: "📍",
    },
    {
      title: "Family",
      lessons: UNIT6_LESSONS,
      blogId: "",
      emoji: "👨‍👩‍👧‍",
    },
    {
      title: "Descriptive Verbs",
      lessons: UNIT7_LESSONS,
      blogId: "",
      emoji: "🔥",
    },
    {
      title: "Colors",
      lessons: UNIT8_LESSONS,
      blogId: "",
      emoji: "🌈",
    },
    {
      title: "Adverbs",
      lessons: UNIT9_LESSONS,
      blogId: "",
      emoji: "💨",
    },
    {
      title: "Want to",
      lessons: UNIT10_LESSONS,
      blogId: "",
      emoji: "🙏",
    },
    {
      title: "Numbers",
      lessons: UNIT11_LESSONS,
      blogId: "",
      emoji: "🔢",
    },
    {
      title: "Can",
      lessons: UNIT12_LESSONS,
      blogId: "",
      emoji: "🉑",
    },
    {
      title: "Question Words",
      lessons: UNIT13_LESSONS,
      blogId: "",
      emoji: "🤔",
    },
  ],
  filipino: [
    {
      title: "Introductions",
      lessons: FIL_UNIT1_LESSONS,
      blogId: "",
      emoji: "👋",
    },
    {
      title: "Expressions",
      lessons: FIL_UNIT2_LESSONS,
      blogId: "",
      emoji: "🙏",
    },
    {
      title: "Present Tense Verbs",
      lessons: FIL_UNIT3_LESSONS,
      blogId: "",
      emoji: "🏃‍♂️",
    },
    {
      title: "Object Marker",
      lessons: FIL_UNIT4_LESSONS,
      blogId: "",
      emoji: "🎯",
    },
    {
      title: "'Sa' Preposition",
      lessons: FIL_UNIT5_LESSONS,
      blogId: "",
      emoji: "📍",
    },
    {
      title: "Family",
      lessons: FIL_UNIT6_LESSONS,
      blogId: "",
      emoji: "👨‍👩‍👧‍",
    },
  ],
};

export const COLORS = [
  "#eae4e9",
  "#fff1e6",
  "#fde2e4",
  "#fad2e1",
  "#e2ece9",
  "#bee1e6",
  "#f0efeb",
  "#dfe7fd",
  "#cddafd",
];

export const COLORS1 = [
  "#d9ed92",
  "#b5e48c",
  "#99d98c",
  "#76c893",
  "#52b69a",
  "#34a0a4",
  "#168aad",
  "#1a759f",
  "#1e6091",
  "#184e77",
];
