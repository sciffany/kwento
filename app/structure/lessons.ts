import { title } from "process";

export const UNIT1_LESSONS = [
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
                text: "고양이",
                translation: "a cat",
              },
              {
                text: "강아지",
                translation: "a puppy",
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
            text: "이에요",
            translation: "am/is/are/to be (for vowel-ending words)",
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
        text: "앉다",
        translation: "To sit",
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
        text: "보다",
        translation: "To see",
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
            text: "릴",
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
            text: "릴",
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
                translation: "Music 🎵",
              },
            ],
          },
          {
            text: "릴",
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
];

const UNIT5_LESSONS = [
  {
    title: "Family 👨‍👩‍👧‍",
    sentences: [
      {
        parts: [
          {
            text: "가족",
            translation: "Family",
          },
        ],
      },
      {
        parts: [
          {
            text: "엄마",
            translation: "Mom",
          },
        ],
      },
      {
        parts: [
          {
            text: "아빠",
            translation: "Dad",
          },
        ],
      },
      {
        parts: [
          {
            text: "할머니",
            translation: "Grandmother",
          },
        ],
      },
      {
        parts: [
          {
            text: "할아버지",
            translation: "Grandfather",
          },
        ],
      },
      {
        parts: [
          {
            text: "아들",
            translation: "Son",
          },
        ],
      },
      {
        parts: [
          {
            text: "딸",
            translation: "Daughter",
          },
        ],
      },
      {
        parts: [
          {
            text: "형",
            translation: "Older brother",
          },
        ],
      },
      {
        parts: [
          {
            text: "누나",
            translation: "Older sister",
          },
        ],
      },
      {
        parts: [
          {
            text: "동생",
            translation: "Younger sibling",
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
      title: "Family",
      lessons: UNIT5_LESSONS,
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
