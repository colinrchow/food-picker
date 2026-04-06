// vibes: cozy, light, indulgent, comfort, adventurous, fresh, hearty, quick

const dishes = {
  japanese: [
    { id: 'ramen',       label: 'Ramen',            vibes: ['cozy', 'comfort', 'hearty', 'indulgent'] },
    { id: 'sushi',       label: 'Sushi',             vibes: ['fresh', 'light', 'adventurous'] },
    { id: 'udon',        label: 'Udon',              vibes: ['cozy', 'comfort', 'hearty'] },
    { id: 'katsu_curry',       label: 'Katsu Curry',       vibes: ['indulgent', 'comfort', 'hearty'] },
  ],
  mexican: [
    { id: 'tacos',      label: 'Tacos',          vibes: ['quick', 'comfort', 'adventurous'] },
    { id: 'burrito',    label: 'Burrito',         vibes: ['hearty', 'comfort', 'indulgent'] },
    { id: 'quesadilla', label: 'Quesadilla',      vibes: ['quick', 'comfort', 'cozy'] },
  ],
  italian: [
    { id: 'pasta_carbonara', label: 'Carbonara',      vibes: ['indulgent', 'comfort', 'cozy'] },
    { id: 'pizza',           label: 'Pizza',           vibes: ['comfort', 'indulgent', 'quick'] },
    { id: 'risotto',         label: 'Risotto',         vibes: ['cozy', 'indulgent', 'hearty'] },
    { id: 'pasta_pomodoro',  label: 'Pasta Pomodoro',  vibes: ['comfort', 'light', 'quick'] },
    { id: 'lasagna',         label: 'Lasagna',         vibes: ['hearty', 'indulgent', 'comfort'] },
  ],
  thai: [
    { id: 'pad_thai',      label: 'Pad Thai',           vibes: ['comfort', 'quick', 'fresh'] },
    { id: 'green_curry',   label: 'Green Curry',         vibes: ['adventurous', 'cozy', 'hearty'] },
    { id: 'basil_chicken', label: 'Basil Chicken Rice',  vibes: ['quick', 'hearty', 'adventurous'] },
    { id: 'pad_see_ew',    label: 'Pad See Ew',          vibes: ['comfort', 'hearty', 'indulgent'] },
  ],
  chinese: [
    { id: 'mapo_tofu',   label: 'Mapo Tofu',        vibes: ['adventurous', 'hearty', 'cozy'] },
    { id: 'peking_duck', label: 'Peking Duck',       vibes: ['indulgent', 'adventurous', 'hearty'] },
    { id: 'fried_rice',  label: 'Fried Rice',        vibes: ['comfort', 'quick', 'hearty'] },
    { id: 'hot_pot',     label: 'Hot Pot',           vibes: ['cozy', 'adventurous', 'indulgent', 'hearty'] },
    { id: 'kung_pao',    label: 'Kung Pao Chicken',  vibes: ['adventurous', 'quick', 'hearty'] },
    { id: 'char_siu',    label: 'Char Siu Pork',     vibes: ['comfort', 'indulgent', 'hearty'] },
    { id: 'congee',      label: 'Congee',            vibes: ['cozy', 'light', 'comfort'] },
    { id: 'dan_dan',     label: 'Dan Dan Noodles',   vibes: ['adventurous', 'hearty', 'indulgent'] },
  ],
  indian: [
    { id: 'butter_chicken', label: 'Butter Chicken',  vibes: ['comfort', 'cozy', 'indulgent'] },
    { id: 'biryani',        label: 'Biryani',          vibes: ['hearty', 'adventurous', 'indulgent'] },
    { id: 'palak_paneer',   label: 'Palak Paneer',     vibes: ['comfort', 'cozy', 'light'] },
    { id: 'dal',            label: 'Dal Tadka',        vibes: ['cozy', 'light', 'comfort'] },
    { id: 'tikka_masala',   label: 'Tikka Masala',     vibes: ['comfort', 'hearty', 'indulgent'] },
    { id: 'dosa',           label: 'Dosa',             vibes: ['light', 'adventurous', 'fresh'] },
    { id: 'lamb_rogan',     label: 'Lamb Rogan Josh',  vibes: ['hearty', 'adventurous', 'indulgent'] },
    { id: 'khichdi',        label: 'Khichdi',          vibes: ['cozy', 'comfort', 'light'] },
  ],
  american: [
    { id: 'burger',        label: 'Burger',             vibes: ['hearty', 'indulgent', 'comfort'] },
    { id: 'fried_chicken', label: 'Fried Chicken',       vibes: ['comfort', 'indulgent', 'hearty'] },
    { id: 'clam_chowder',  label: 'Clam Chowder',        vibes: ['cozy', 'comfort', 'hearty'] },
  ],
  korean: [
    { id: 'bibimbap',      label: 'Bibimbap',         vibes: ['fresh', 'hearty', 'adventurous'] },
    { id: 'tteokbokki',    label: 'Tteokbokki',       vibes: ['cozy', 'adventurous', 'comfort'] },
    { id: 'korean_bbq',    label: 'Korean BBQ',        vibes: ['hearty', 'adventurous', 'indulgent'] },
    { id: 'sundubu',       label: 'Sundubu Jjigae',    vibes: ['cozy', 'comfort', 'light'] },
    { id: 'japchae',       label: 'Japchae',           vibes: ['fresh', 'light', 'adventurous'] },
    { id: 'kimchi_jjigae', label: 'Kimchi Jjigae',     vibes: ['cozy', 'adventurous', 'hearty'] },
    { id: 'galbi',         label: 'Galbi',             vibes: ['hearty', 'indulgent', 'comfort'] },
    { id: 'cold_noodles',  label: 'Naengmyeon',        vibes: ['fresh', 'light', 'adventurous'] },
    { id: 'doenjang',      label: 'Doenjang Jjigae',   vibes: ['cozy', 'comfort', 'light'] },
  ],
  mediterranean: [
    { id: 'falafel',      label: 'Falafel Plate',     vibes: ['fresh', 'light', 'adventurous'] },
    { id: 'shawarma',     label: 'Shawarma',           vibes: ['hearty', 'comfort', 'adventurous'] },
    { id: 'lamb_kebab',   label: 'Lamb Kebab Plate',   vibes: ['hearty', 'adventurous', 'indulgent'] },
    { id: 'moussaka',     label: 'Moussaka',           vibes: ['cozy', 'hearty', 'indulgent'] },
    { id: 'spanakopita',  label: 'Spanakopita',        vibes: ['cozy', 'comfort', 'light'] },
    { id: 'grilled_fish', label: 'Grilled Fish',       vibes: ['light', 'fresh', 'hearty'] },
    { id: 'tagine',       label: 'Tagine',             vibes: ['cozy', 'adventurous', 'hearty', 'indulgent'] },
  ],
  vietnamese: [
    { id: 'pho',        label: 'Pho',                    vibes: ['cozy', 'comfort', 'light'] },
    { id: 'banh_mi',    label: 'Bánh Mì',                vibes: ['fresh', 'quick', 'adventurous'] },
    { id: 'bun_bo_hue', label: 'Bún Bò Huế',             vibes: ['adventurous', 'hearty', 'cozy'] },
    { id: 'com_tam',    label: 'Cơm Tấm',                vibes: ['hearty', 'comfort', 'quick'] },
    { id: 'bun_cha',    label: 'Bún Chả',                vibes: ['fresh', 'light', 'adventurous'] },
    { id: 'cao_lau',    label: 'Cao Lầu',                vibes: ['adventurous', 'fresh', 'hearty'] },
    { id: 'banh_xeo',   label: 'Bánh Xèo',               vibes: ['adventurous', 'indulgent', 'fresh'] },
    { id: 'chao',       label: 'Cháo (Rice Porridge)',   vibes: ['cozy', 'light', 'comfort'] },
    { id: 'mi_quang',   label: 'Mì Quảng',               vibes: ['hearty', 'adventurous', 'fresh'] },
  ],
}

const MIN_POOL_SIZE = 6

export function getDishPool(cuisine, vibes) {
  const all = dishes[cuisine] ?? []
  if (!vibes || vibes.length === 0) return shuffle(all).slice(0, 8)

  const matched = all.filter(d => d.vibes.some(v => vibes.includes(v)))
  const pool = matched.length >= MIN_POOL_SIZE ? matched : all
  return shuffle(pool).slice(0, 8)
}

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
