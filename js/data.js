// ============================================================
// data.js — অ্যাপের সমস্ত ডেটা এবং হেল্পার ফাংশন
// ============================================================

export const bn = n =>
  n.toString().replace(/[0-9]/g, d => '০১২৩৪৫৬৭৮৯'[d]);

export const POSTS = [
  {
    id: 1, author: 'রাহেলা বেগম', verified: true,
    avatar: 'https://i.pravatar.cc/100?img=5',
    time: '৩ মিনিট আগে', loc: 'বরিশাল',
    text: 'আমাদের Pathargata Digital র এই সুন্দর ভোরের দৃশ্য দেখে মন ভরে গেল 🌅 প্রকৃতির এই অপূর্ব সৌন্দর্য সত্যিই অসাধারণ!',
    tags: ['#গ্রামের_ভোর', '#প্রকৃতি'],
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700',
    likes: 247, comments: 38, shares: 12, liked: false,
    clist: [
      { author: 'করিম সাহেব', av: 'https://i.pravatar.cc/100?img=7', text: 'অসাধারণ সুন্দর ছবি! 😍' },
      { author: 'সানজিদা', av: 'https://i.pravatar.cc/100?img=9', text: 'মন জুড়িয়ে গেল 🌿' }
    ]
  },
  {
    id: 2, author: 'করিম সাহেব', verified: false,
    avatar: 'https://i.pravatar.cc/100?img=7',
    time: '১ ঘণ্টা আগে', loc: 'চট্টগ্রাম',
    text: 'আজ Pathargata Digital র বার্ষিক কৃষি মেলায় গেলাম। এবার ধানের নতুন জাত দেখে সত্যিই অবাক হলাম! 🌾 কৃষকরা যে পরিশ্রম করেন তা সত্যিই প্রশংসনীয়।',
    tags: ['#কৃষি', '#মেলা'],
    img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700',
    likes: 183, comments: 24, shares: 8, liked: false,
    clist: [
      { author: 'রাহেলা বেগম', av: 'https://i.pravatar.cc/100?img=5', text: 'আমিও যেতে চেয়েছিলাম 😔' }
    ]
  },
  {
    id: 3, author: 'সানজিদা আক্তার', verified: true,
    avatar: 'https://i.pravatar.cc/100?img=9',
    time: '২ ঘণ্টা আগে', loc: 'ঢাকা',
    text: 'আমাদের পুরনো গ্রামের স্কুলটা পরিদর্শন করলাম আজ। ছোটবেলার স্মৃতি ফিরে এলো 📚❤️ সেই দিনগুলো কোথায় চলে গেল!',
    tags: ['#শিক্ষা', '#স্মৃতি'],
    img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700',
    likes: 421, comments: 67, shares: 29, liked: true,
    clist: [
      { author: 'তানভীর', av: 'https://i.pravatar.cc/100?img=15', text: 'আমিও সেই স্কুলে পড়েছি! 😊' },
      { author: 'নাসরিন', av: 'https://i.pravatar.cc/100?img=20', text: 'কত সুন্দর স্মৃতি! ❤️' }
    ]
  },
  {
    id: 4, author: 'তানভীর হোসেন', verified: false,
    avatar: 'https://i.pravatar.cc/100?img=15',
    time: '৪ ঘণ্টা আগে', loc: 'রাজশাহী',
    text: 'নদীর পাশে বসে এই সন্ধ্যাটা কাটালাম। এই শান্তি শহরে পাওয়া যায় না 🌊 গ্রামের মানুষরা কত ভাগ্যবান!',
    tags: ['#নদী', '#সন্ধ্যা'],
    img: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=700',
    likes: 312, comments: 45, shares: 18, liked: false,
    clist: []
  }
];

export const STORIES = [
  { av: 'https://i.pravatar.cc/100?img=5',  name: 'রাহেলা',  time: 'এইমাত্র',       img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' },
  { av: 'https://i.pravatar.cc/100?img=7',  name: 'করিম',    time: '৫ মিনিট আগে',   img: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800' },
  { av: 'https://i.pravatar.cc/100?img=9',  name: 'সানজিদা', time: '১০ মিনিট আগে',  img: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800' },
  { av: 'https://i.pravatar.cc/100?img=15', name: 'তানভীর',  time: '২০ মিনিট আগে', img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800' },
  { av: 'https://i.pravatar.cc/100?img=20', name: 'নাসরিন',  time: '১ ঘণ্টা আগে',   img: 'https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?w=800' }
];

export const REELS = [
  { av: 'https://i.pravatar.cc/100?img=5',  name: 'রাহেলা বেগম',   caption: 'আমাদের গ্রামের সূর্যাস্ত 🌅 #প্রকৃতি #গ্রাম',           thumb: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400', likes: 1200, liked: false },
  { av: 'https://i.pravatar.cc/100?img=7',  name: 'করিম সাহেব',    caption: 'কৃষি মেলার হাইলাইট 🌾 #কৃষি #Pathargata Digital',         thumb: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400', likes: 845,  liked: false },
  { av: 'https://i.pravatar.cc/100?img=9',  name: 'সানজিদা আক্তার', caption: 'পুরনো স্কুলের স্মৃতি ❤️ #শিক্ষা',                        thumb: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400', likes: 2100, liked: true  }
];