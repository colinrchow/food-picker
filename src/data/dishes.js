// weight: light, medium, heavy
import { shuffle } from '../utils/shuffle'

const dishes = {
  japanese: [
    { id: 'ramen',       label: 'Ramen',           weight: ['medium', 'heavy'] },
    { id: 'sushi',       label: 'Sushi',            weight: ['light', 'medium'] },
    { id: 'udon',        label: 'Udon',             weight: ['medium', 'heavy'] },
    { id: 'katsu_curry', label: 'Katsu Curry',      weight: ['heavy'] },
    { id: 'katsu',       label: 'Katsu',            weight: ['medium', 'heavy'] },
  ],
  mexican: [
    { id: 'tacos',      label: 'Tacos',      weight: ['medium'] },
    { id: 'burrito',    label: 'Burrito',    weight: ['medium', 'heavy'] },
    { id: 'quesadilla', label: 'Quesadilla', weight: ['medium'] },
  ],
  italian: [
    { id: 'pasta_carbonara', label: 'Carbonara',     weight: ['heavy'] },
    { id: 'pizza',           label: 'Pizza',          weight: ['medium', 'heavy'] },
    { id: 'risotto',         label: 'Risotto',        weight: ['medium', 'heavy'] },
    { id: 'pasta_pomodoro',  label: 'Pasta Pomodoro', weight: ['light', 'medium'] },
    { id: 'lasagna',         label: 'Lasagna',        weight: ['heavy'] },
  ],
  thai: [
    { id: 'pad_thai',      label: 'Pad Thai',          weight: ['medium'] },
    { id: 'green_curry',   label: 'Green Curry',        weight: ['medium', 'heavy'] },
    { id: 'basil_chicken', label: 'Basil Chicken Rice', weight: ['medium'] },
    { id: 'pad_see_ew',    label: 'Pad See Ew',         weight: ['medium', 'heavy'] },
  ],
  chinese: [
    { id: 'fried_rice',        label: 'Fried Rice',        weight: ['medium'] },
    { id: 'hot_pot',           label: 'Hot Pot',            weight: ['medium', 'heavy'] },
    { id: 'char_siu',          label: 'Char Siu Pork',     weight: ['medium', 'heavy'] },
    { id: 'crispy_pork_belly', label: 'Crispy Pork Belly', weight: ['heavy'] },
    { id: 'malatang',          label: 'Malatang',           weight: ['medium', 'heavy'] },
    { id: 'dim_sum',           label: 'Dim Sum',            weight: ['light', 'medium'] },
    { id: 'crispy_noodles',    label: 'Crispy Noodles',    weight: ['medium', 'heavy'] },
  ],
  indian: [
    { id: 'butter_chicken', label: 'Butter Chicken', weight: ['medium', 'heavy'] },
    { id: 'biryani',        label: 'Biryani',         weight: ['medium', 'heavy'] },
    { id: 'palak_paneer',   label: 'Palak Paneer',    weight: ['medium'] },
    { id: 'dal',            label: 'Dal Tadka',       weight: ['light', 'medium'] },
    { id: 'tikka_masala',   label: 'Tikka Masala',    weight: ['medium', 'heavy'] },
    { id: 'dosa',           label: 'Dosa',            weight: ['light', 'medium'] },
    { id: 'lamb_rogan',     label: 'Lamb Rogan Josh', weight: ['heavy'] },
    { id: 'khichdi',        label: 'Khichdi',         weight: ['light', 'medium'] },
  ],
  american: [
    { id: 'burger',              label: 'Burger',              weight: ['heavy'] },
    { id: 'fried_chicken',       label: 'Fried Chicken',       weight: ['heavy'] },
    { id: 'clam_chowder',        label: 'Clam Chowder',        weight: ['medium', 'heavy'] },
    { id: 'pizza',               label: 'Pizza',               weight: ['medium', 'heavy'] },
    { id: 'loaded_potato_skins', label: 'Loaded Potato Skins', weight: ['heavy'] },
  ],
  korean: [
    { id: 'bibimbap',      label: 'Bibimbap',        weight: ['medium'] },
    { id: 'tteokbokki',    label: 'Tteokbokki',      weight: ['medium'] },
    { id: 'korean_bbq',    label: 'Korean BBQ',       weight: ['heavy'] },
    { id: 'sundubu',       label: 'Sundubu Jjigae',   weight: ['light', 'medium'] },
    { id: 'japchae',       label: 'Japchae',          weight: ['light', 'medium'] },
    { id: 'kimchi_jjigae', label: 'Kimchi Jjigae',    weight: ['medium', 'heavy'] },
    { id: 'galbi',         label: 'Galbi',            weight: ['heavy'] },
    { id: 'cold_noodles',  label: 'Naengmyeon',       weight: ['light', 'medium'] },
    { id: 'doenjang',      label: 'Doenjang Jjigae',  weight: ['light', 'medium'] },
  ],
  mediterranean: [
    { id: 'falafel',      label: 'Falafel Plate',   weight: ['light', 'medium'] },
    { id: 'shawarma',     label: 'Shawarma',         weight: ['medium', 'heavy'] },
    { id: 'lamb_kebab',   label: 'Lamb Kebab Plate', weight: ['medium', 'heavy'] },
    { id: 'moussaka',     label: 'Moussaka',         weight: ['heavy'] },
    { id: 'spanakopita',  label: 'Spanakopita',      weight: ['light', 'medium'] },
    { id: 'grilled_fish', label: 'Grilled Fish',     weight: ['light', 'medium'] },
    { id: 'tagine',       label: 'Tagine',           weight: ['medium', 'heavy'] },
  ],
  vietnamese: [
    { id: 'pho',        label: 'Pho',                  weight: ['light', 'medium'] },
    { id: 'banh_mi',    label: 'Bánh Mì',              weight: ['medium'] },
    { id: 'bun_bo_hue', label: 'Bún Bò Huế',           weight: ['medium', 'heavy'] },
    { id: 'com_tam',    label: 'Cơm Tấm',              weight: ['medium'] },
    { id: 'bun_cha',    label: 'Bún Chả',              weight: ['light', 'medium'] },
    { id: 'cao_lau',    label: 'Cao Lầu',              weight: ['medium'] },
    { id: 'banh_xeo',   label: 'Bánh Xèo',             weight: ['medium', 'heavy'] },
    { id: 'chao',       label: 'Cháo (Rice Porridge)', weight: ['light'] },
    { id: 'mi_quang',   label: 'Mì Quảng',             weight: ['medium', 'heavy'] },
  ],
}

const MIN_POOL_SIZE = 4

export function getDishPool(cuisine, weight) {
  const all = dishes[cuisine] ?? []
  if (!weight) return shuffle(all).slice(0, 8)

  const matched = all.filter(d => d.weight.includes(weight))
  const pool = matched.length >= MIN_POOL_SIZE ? matched : all
  return shuffle(pool).slice(0, 8)
}
