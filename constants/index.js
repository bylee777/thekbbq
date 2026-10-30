export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=699+Bloor+St+West,+Toronto,+ON';

const menuImage = (name) => `/menu/${name}.jpg`;

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
      serves: 'For 2–3',
      imgUrl: menuImage('eel-course-a'),
      items: ['Eel 500g', 'Shrimp', 'Squid', 'Butter Shrimp', 'Steamed Egg', 'Beef Broth Soup'],
    },
    {
      id: 'eel-b',
      name: 'Course B',
      serves: 'For 3–4',
      imgUrl: menuImage('eel-course-b'),
      items: ['Eel 750g', 'Shrimp', 'Squid', 'Butter Shrimp', 'Steamed Egg', 'Beef Broth Soup', 'Beef Tartare'],
    },
    {
      id: 'eel-c',
      name: 'Course C',
      serves: 'For 4–5',
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
      { title: 'Seasoned Beef Ribs Boneless', price: 26.99, imgUrl: menuImage('seasoned-beef-ribs') },
      { title: 'Wagyu', price: 39.99, imgUrl: '/wagyucoulotte.jpg' },
    ],
  },
  {
    id: 'chicken',
    title: 'Chicken',
    items: [
      { title: 'Soy-Marinated Chicken', price: 15.99, imgUrl: menuImage('soy-chicken') },
      { title: 'Sweet & Spicy Chicken', price: 15.99, imgUrl: menuImage('spicy-chicken') },
      { title: 'Garlic Chicken', price: 15.99, imgUrl: menuImage('garlic-chicken') },
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
