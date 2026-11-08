export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=699+Bloor+St+West,+Toronto,+ON';

const menuImage = (name) => `/menu/${name}.jpg`;

// Korean names, keyed by the English name used in the menu data below.
const koNames = {
  // sections
  'All You Can Eat': '무한리필',
  'Eel Course': '장어 코스',
  'À La Carte': '단품',
  'Combos': '콤보',
  'Beef': '소고기',
  'Pork': '돼지고기',
  'Chicken': '닭고기',
  'Side': '사이드',
  'Side For Grill': '구이용 사이드',
  'Soup & Noodles': '국물 & 면',
  'To Share': '함께 나눠요',
  'Rice': '밥',
  // AYCE + à la carte dishes
  'Garlic Kalbi': '마늘 갈비',
  'Soy-Based Seasoned Beef': '간장 주물럭',
  'Finger Meat': '늑간살',
  'Marinated LA Short Rib': '양념 LA갈비',
  'Beef Bulgogi': '소불고기',
  'Garlic Bulgogi': '마늘 불고기',
  'Sweet & Spicy Bulgogi': '달콤 매콤 불고기',
  'Thinly Sliced Beef Short Plate': '우삼겹',
  'Thinly Sliced Beef Brisket': '차돌박이',
  'Beef Tongue': '우설',
  'Soy Sauce Marinated Pork': '돼지갈비',
  'Garlic Sliced Pork Belly': '마늘 대패삼겹살',
  'Sweet & Spicy Sliced Pork Belly': '달콤 매콤 대패삼겹살',
  'Thinly Sliced Pork Belly': '대패삼겹살',
  'Pork Belly': '삼겹살',
  'Pork Shoulder': '돼지 목살',
  'Pork Jowl': '항정살',
  'Soy-Marinated Chicken': '간장 닭고기',
  'Sweet & Spicy Chicken': '달콤 매콤 닭고기',
  'Garlic Chicken': '마늘 닭고기',
  'Beef Tartare': '육회',
  'Pork Kimchi Fried Rice': '돼지고기 김치볶음밥',
  'Bibimbap': '비빔밥',
  'Kimchi Pancake': '김치전',
  'Green Onion Pancake': '파전',
  'King Oyster Mushroom': '새송이버섯',
  'Beech Mushroom': '느타리버섯',
  'White Mushroom': '양송이버섯',
  'Enoki Mushroom': '팽이버섯',
  'Potato': '감자',
  'Zucchini': '애호박',
  'Squid': '오징어',
  'Shrimp': '새우',
  'Spicy Mixed Noodles': '비빔국수',
  'Cold Noodle': '냉면',
  'Cold Kimchi Noodle': '김치말이국수',
  'Soybean Paste Stew': '된장찌개',
  'Steamed Egg': '계란찜',
  'Beef Ribs Boneless': '뼈 없는 소갈비',
  'Seasoned Beef Ribs Boneless': '양념 뼈 없는 소갈비',
  'Wagyu': '와규',
  'Beef Intestine': '곱창',
  'Assorted Mushroom': '모둠 버섯',
  'Butter Shrimp': '버터 새우',
  'Vegan Combo': '비건 콤보',
  'Cold Noodle without Soup': '비빔냉면',
  'Beef Broth Soup with Glass Noodles': '곰탕 + 당면',
  'Pork Spicy Tofu Stew': '돼지고기 순두부찌개',
  'Beef Intestine Hotpot': '곱창전골',
  'Beef Green Onion Pancake': '소고기 파전',
  'Cold Beef Tartare Soup': '육회 냉국',
  'Plain Rice': '공기밥',
  'Kimchi Fried Rice': '김치볶음밥',
  // eel course
  'Eel 500g': '장어 500g',
  'Eel 750g': '장어 750g',
  'Eel 1kg': '장어 1kg',
  'Beef Broth Soup': '곰탕',
  'Course A': 'A 코스',
  'Course B': 'B 코스',
  'Course C': 'C 코스',
  'For 2': '2인',
  'For 3': '3인',
  'For 4': '4인',
  // combos
  'Pork Lovers': '돼지고기 러버',
  'Beef Lovers': '소고기 러버',
  'All Meat Lovers': '모둠 고기 러버',
  'Marinated Meat Day': '양념 고기 데이',
};

// Korean name for an English menu label, or undefined when we don't have one.
export const ko = (name) => koNames[name];

export const ayceMenu = {
  label: 'All You Can Eat',
  intro: 'Every cut, marinade, and side below is unlimited for the table. Order in rounds and grill at your own pace.',
  pricing: [
    {
      days: 'Monday to Thursday',
      rows: [
        { label: 'Adult', price: 41.99 },
        { label: 'Child', age: 'Age 5–10', price: 19.99 },
        { label: 'Infant', age: 'Age 0–4', price: 3 },
      ],
    },
    {
      days: 'Friday to Sunday & Holidays',
      rows: [
        { label: 'Adult', price: 44.99 },
        { label: 'Child', age: 'Age 5–10', price: 19.99 },
        { label: 'Infant', age: 'Age 0–4', price: 3 },
      ],
    },
  ],
  rules: [
    '2 hours dining limit applies to all tables.',
    'Last call for orders is 30 minutes before your time is up.',
    'Leftover food will incur a charge of $5 per 100g.',
    'Please notify your server of any food allergies before placing your order.',
    '15% gratuity applies to groups of 6 or more.',
  ],
  categories: [
    {
      id: 'ayce-beef',
      title: 'Beef',
      items: [
        { title: 'Garlic Kalbi', imgUrl: menuImage('garlic-kalbi') },
        { title: 'Soy-Based Seasoned Beef', imgUrl: menuImage('soy-seasoned-beef') },
        { title: 'Finger Meat', imgUrl: menuImage('finger-meat') },
        { title: 'Marinated LA Short Rib', imgUrl: menuImage('la-short-rib') },
        { title: 'Beef Bulgogi', imgUrl: menuImage('beef-bulgogi') },
        { title: 'Garlic Bulgogi', imgUrl: menuImage('garlic-bulgogi') },
        { title: 'Sweet & Spicy Bulgogi', imgUrl: menuImage('spicy-bulgogi') },
        { title: 'Thinly Sliced Beef Short Plate', imgUrl: menuImage('beef-short-plate') },
        { title: 'Thinly Sliced Beef Brisket', imgUrl: menuImage('beef-brisket') },
        { title: 'Beef Tongue', imgUrl: menuImage('beef-tongue') },
      ],
    },
    {
      id: 'ayce-pork',
      title: 'Pork',
      items: [
        { title: 'Soy Sauce Marinated Pork', imgUrl: menuImage('soy-marinated-pork') },
        { title: 'Garlic Sliced Pork Belly', imgUrl: menuImage('garlic-sliced-pork-belly') },
        { title: 'Sweet & Spicy Sliced Pork Belly', imgUrl: menuImage('spicy-sliced-pork-belly') },
        { title: 'Thinly Sliced Pork Belly', imgUrl: menuImage('sliced-pork-belly') },
        { title: 'Pork Belly', imgUrl: menuImage('pork-belly') },
        { title: 'Pork Shoulder', imgUrl: menuImage('pork-shoulder') },
        { title: 'Pork Jowl', imgUrl: menuImage('pork-jowl') },
      ],
    },
    {
      id: 'ayce-chicken',
      title: 'Chicken',
      items: [
        { title: 'Soy-Marinated Chicken', imgUrl: menuImage('soy-chicken') },
        { title: 'Sweet & Spicy Chicken', imgUrl: menuImage('spicy-chicken') },
        { title: 'Garlic Chicken', imgUrl: menuImage('garlic-chicken') },
      ],
    },
    {
      id: 'ayce-side',
      title: 'Side',
      items: [
        { title: 'Beef Tartare', imgUrl: menuImage('beef-tartare') },
        { title: 'Pork Kimchi Fried Rice', imgUrl: menuImage('kimchi-fried-rice') },
        { title: 'Bibimbap', imgUrl: menuImage('bibimbap') },
        { title: 'Kimchi Pancake', imgUrl: menuImage('kimchi-pancake') },
        { title: 'Green Onion Pancake', imgUrl: menuImage('green-onion-pancake') },
        { title: 'King Oyster Mushroom', imgUrl: menuImage('king-oyster-mushroom') },
        { title: 'Beech Mushroom', imgUrl: menuImage('beech-mushroom') },
        { title: 'White Mushroom', imgUrl: menuImage('white-mushroom') },
        { title: 'Enoki Mushroom', imgUrl: menuImage('enoki-mushroom') },
        { title: 'Potato', imgUrl: menuImage('potato') },
        { title: 'Zucchini', imgUrl: menuImage('zucchini') },
        { title: 'Squid', imgUrl: menuImage('squid') },
        { title: 'Shrimp', imgUrl: menuImage('shrimp') },
        { title: 'Spicy Mixed Noodles', imgUrl: menuImage('spicy-mixed-noodles') },
        { title: 'Cold Noodle', imgUrl: menuImage('cold-noodle') },
        { title: 'Cold Kimchi Noodle', imgUrl: menuImage('cold-kimchi-noodle') },
        { title: 'Soybean Paste Stew', imgUrl: menuImage('soybean-paste-stew') },
        { title: 'Steamed Egg', imgUrl: menuImage('steamed-egg') },
      ],
    },
  ],
};

export const eelMenu = {
  label: 'Eel Course',
  intro: 'Whole grilled eel served as a full table course with seafood, soup, and sides.',
  courses: [
    {
      id: 'eel-a',
      name: 'Course A',
      serves: 'For 2',
      price: 119.99,
      imgUrl: menuImage('eel-course-a'),
      items: ['Eel 500g', 'Shrimp', 'Squid', 'Butter Shrimp', 'Steamed Egg', 'Beef Broth Soup'],
    },
    {
      id: 'eel-b',
      name: 'Course B',
      serves: 'For 3',
      price: 179.99,
      imgUrl: menuImage('eel-course-b'),
      items: ['Eel 750g', 'Shrimp', 'Squid', 'Butter Shrimp', 'Steamed Egg', 'Beef Broth Soup', 'Beef Tartare'],
    },
    {
      id: 'eel-c',
      name: 'Course C',
      serves: 'For 4',
      price: 239.99,
      imgUrl: menuImage('eel-course-c'),
      items: ['Eel 1kg', 'Shrimp', 'Squid', 'Butter Shrimp', 'Steamed Egg', 'Beef Broth Soup', 'Beef Tartare', 'Beef Green Onion Pancake'],
    },
  ],
  grillSteps: [
    { title: 'Place Skin-Side Down', text: 'Place the eel skin-side down onto the preheated grill.' },
    { title: 'Flip When Crispy', text: 'Once the skin becomes nice and crispy, flip it over.' },
    { title: 'Slice and Grill the Flesh & Sides', text: 'When the flesh side turns crispy as well, cut the eel into bite-sized pieces and cook the sides until crispy.' },
    { title: 'Enjoy with Sauce', text: 'Once all sides are cooked to a crisp, dip in your favorite sauce and enjoy!' },
  ],
};

export const aLaCarteCombos = [
  {
    id: 'pork-lovers',
    name: 'Pork Lovers',
    price: 75.99,
    items: ['Thinly Sliced Pork Belly', 'Sweet & Spicy Sliced Pork Belly', 'Pork Belly', 'Pork Shoulder', 'Pork Jowl', 'Soy Sauce Marinated Pork'],
  },
  {
    id: 'beef-lovers',
    name: 'Beef Lovers',
    price: 169.99,
    items: ['Thinly Sliced Beef Short Plate', 'Beef Bulgogi', 'Sweet & Spicy Bulgogi', 'Garlic Kalbi', 'Marinated LA Short Rib', 'Beef Ribs Boneless', 'Seasoned Beef Ribs Boneless', 'Wagyu'],
  },
  {
    id: 'all-meat-lovers',
    name: 'All Meat Lovers',
    price: 164.99,
    items: ['Pork Belly', 'Pork Shoulder', 'Soy Sauce Marinated Pork', 'Sweet & Spicy Sliced Pork Belly', 'Thinly Sliced Beef Short Plate', 'Beef Bulgogi', 'Garlic Kalbi', 'Marinated LA Short Rib', 'Beef Ribs Boneless', 'Seasoned Beef Ribs Boneless'],
  },
  {
    id: 'marinated-meat-day',
    name: 'Marinated Meat Day',
    price: 139.99,
    items: ['Soy Sauce Marinated Pork', 'Sweet & Spicy Sliced Pork Belly', 'Beef Bulgogi', 'Garlic Kalbi', 'Marinated LA Short Rib', 'Seasoned Beef Ribs Boneless', 'Soy-Marinated Chicken', 'Garlic Chicken'],
  },
];

export const aLaCarteMenu = [
  {
    id: 'pork',
    title: 'Pork',
    items: [
      { title: 'Thinly Sliced Pork Belly', price: 9.99, imgUrl: menuImage('sliced-pork-belly') },
      { title: 'Pork Belly', price: 12.99, imgUrl: menuImage('pork-belly') },
      { title: 'Pork Shoulder', price: 12.99, imgUrl: menuImage('pork-shoulder') },
      { title: 'Pork Jowl', price: 13.99, imgUrl: menuImage('pork-jowl') },
      { title: 'Garlic Sliced Pork Belly', price: 13.99, imgUrl: menuImage('garlic-sliced-pork-belly') },
      { title: 'Sweet & Spicy Sliced Pork Belly', price: 13.99, imgUrl: menuImage('spicy-sliced-pork-belly') },
      { title: 'Soy Sauce Marinated Pork', price: 15.99, imgUrl: menuImage('soy-marinated-pork') },
    ],
  },
  {
    id: 'beef',
    title: 'Beef',
    items: [
      { title: 'Thinly Sliced Beef Short Plate', price: 11.99, imgUrl: menuImage('beef-short-plate') },
      { title: 'Thinly Sliced Beef Brisket', price: 15.99, imgUrl: menuImage('beef-brisket') },
      { title: 'Beef Bulgogi', price: 16.99, imgUrl: menuImage('beef-bulgogi') },
      { title: 'Garlic Bulgogi', price: 16.99, imgUrl: menuImage('garlic-bulgogi') },
      { title: 'Sweet & Spicy Bulgogi', price: 16.99, imgUrl: menuImage('spicy-bulgogi') },
      { title: 'Finger Meat', price: 16.99, imgUrl: menuImage('finger-meat') },
      { title: 'Beef Tongue', price: 18.99, imgUrl: menuImage('beef-tongue') },
      { title: 'Garlic Kalbi', price: 18.99, imgUrl: menuImage('garlic-kalbi') },
      { title: 'Soy-Based Seasoned Beef', price: 18.99, imgUrl: menuImage('soy-seasoned-beef') },
      { title: 'Marinated LA Short Rib', price: 20.99, imgUrl: menuImage('la-short-rib') },
      { title: 'Beef Ribs Boneless', price: 22.99, imgUrl: '/beefbonelessrib.jpg' },
      { title: 'Beef Intestine', price: 24.99, imgUrl: '/beefintestine.jpg', note: 'Minimum order of two' },
      { title: 'Seasoned Beef Ribs Boneless', price: 26.99, imgUrl: menuImage('seasoned-beef-ribs') },
      { title: 'Wagyu', price: 39.99, imgUrl: '/wagyucoulotte.jpg' },
    ],
  },
  {
    id: 'chicken',
    title: 'Chicken',
    items: [
      { title: 'Soy-Marinated Chicken', price: 16.99, imgUrl: menuImage('soy-chicken') },
      { title: 'Sweet & Spicy Chicken', price: 16.99, imgUrl: menuImage('spicy-chicken') },
      { title: 'Garlic Chicken', price: 16.99, imgUrl: menuImage('garlic-chicken') },
    ],
  },
  {
    id: 'side-for-grill',
    title: 'Side For Grill',
    items: [
      { title: 'Assorted Mushroom', price: 9.99, imgUrl: '/assortedmushroom.jpg' },
      { title: 'Shrimp', price: 8.99, imgUrl: menuImage('shrimp') },
      { title: 'Squid', price: 10.99, imgUrl: menuImage('squid') },
      { title: 'Butter Shrimp', price: 11.99, imgUrl: '/buttershrimp.jpg' },
      { title: 'Vegan Combo', price: 14.99, imgUrl: '/vegancombo.jpg' },
    ],
  },
  {
    id: 'soup-noodles',
    title: 'Soup & Noodles',
    items: [
      { title: 'Spicy Mixed Noodles', price: 12.99, imgUrl: menuImage('spicy-mixed-noodles') },
      { title: 'Cold Kimchi Noodle', price: 13.99, imgUrl: menuImage('cold-kimchi-noodle') },
      { title: 'Cold Noodle', price: 14.99, imgUrl: menuImage('cold-noodle') },
      { title: 'Cold Noodle without Soup', price: 14.99, imgUrl: '/coldnoodlewithoutsoup.jpg' },
      { title: 'Beef Broth Soup with Glass Noodles', price: 15.99, imgUrl: '/beefbrothglassnoodle.jpg' },
      { title: 'Pork Spicy Tofu Stew', price: 13.99, imgUrl: '/porkspicytofu.jpg' },
      { title: 'Beef Intestine Hotpot', price: 39.99, imgUrl: '/beefintestinehot.jpg' },
    ],
  },
  {
    id: 'to-share',
    title: 'To Share',
    items: [
      { title: 'Beef Green Onion Pancake', price: 19.99, imgUrl: menuImage('green-onion-pancake') },
      { title: 'Beef Tartare', price: 24.99, imgUrl: menuImage('beef-tartare') },
      { title: 'Cold Beef Tartare Soup', price: 24.99, imgUrl: menuImage('cold-beef-tartare-soup') },
    ],
  },
  {
    id: 'rice',
    title: 'Rice',
    items: [
      { title: 'Plain Rice', price: 2.99 },
      { title: 'Kimchi Fried Rice', price: 12.99, imgUrl: menuImage('kimchi-fried-rice') },
      { title: 'Bibimbap', price: 15.99, imgUrl: menuImage('bibimbap') },
    ],
  },
];

export const socials = [
  {
    name: 'twitter',
    url: '/twitter.svg',
  },
  {
    name: 'linkedin',
    url: '/linkedin.svg',
  },
  {
    name: 'instagram',
    url: '/instagram.svg',
  },
  {
    name: 'facebook',
    url: '/facebook.svg',
  },
];
