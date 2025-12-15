import { Shop } from './types';

export const SHOPS: Shop[] = [
  {
    id: '1',
    name: '紅屋 (Beniya)',
    nameEn: 'Bengara Cafe',
    description: '伝統的なベンガラ染めの内装で楽しむ抹茶ラテ。落ち着いた雰囲気の中で、手作りの和菓子と共に贅沢なひとときを。',
    descriptionEn: 'Experience the traditional charm of Fukiya with our hand-dyed fabrics and locally sourced coffee. Located in the heart of the village, our shop preserves the historic "Bengara" red ochre architecture.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCbDG4rzcqUR9oag7DwNY_zEpjuIf8CKbr15vfZrLQINhhZLaxnTvYYfjUAf1O0LH1dUCvEU8L2pqHMaVJJ5t98tANeswvnPZUWSUoXhcoJB5i4EFN_aNgDmN_fMKGsydSVVsSW0tXgclFpsVblVpVrqB9ATyRj7rQnRoXWeqWeCsCm8x_PE18X-Z3fVMFEZR_h618kMS327W5yaMZ_677AFRgEOiJ4QDopclmVglqe-pSdto17gHrw0WD2SAu7Vi0oUOjvhlHbtJkU',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBW9acqpalGF_Nw5zxaHmc9HDTt5Eud-M8aRiTcOScwv3PEKPlTG2elsk6FWmJLwAYhzyjlxwDMKMVmnJItAQw0W4aOifNy6vzzwqbL8xRgbtxM8qSWl_EqvEI76FKwpP_Uhgie9Dho6punuBR38cWkGDFdQA9esM5QqqsAae94tybzrOU3AEWwQRRuRrRrE6Km1gsRh8FcYi8QXIvLhC5Q48zRaCHOyDF55RroLIjXofxWch8qcO2sOh-jHzcDKeYL4URu1NWouWUk'
    ],
    category: 'CAFE',
    tags: ['Cafe', 'Souvenir', 'Handmade', 'Bengara Style'],
    status: 'OPEN',
    location: {
      address: '838-2 Fukiya, Nariwa-cho',
      city: 'Takahashi City, Okayama',
      lat: 34.87,
      lng: 133.47,
      distance: '120m',
    },
    rating: {
      rating: 4.8,
      count: 124,
    },
    priceRange: '$$',
    phone: '0866-29-2222',
    hours: '10:00 - 17:00',
    closedDays: 'Tuesdays',
    items: [
        { id: 'i1', name: 'Bengara Cookie', price: '¥450', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuWHzrzE7ZMax5tqko39EcLHVmY9r8JsMwnEoqQOZ5h2bqpb3MoZvWeAr4UHa5ipHvcRYeB4v8VIrKnIyKXHbk2VGGGDQrJRAM8UcddlLw5ySivuF44Auokw3ScOePfTHHDokft5qCLLRjlBq4ryEb3PfDkJxbr9acOJl2lzP3g7e02SDuSQ6YTWeqd49ncPv7RvSNtGEsbm-kTmz0GYSrVgw_p5I_gkMOoFk-uYnXG2vQVkN72QxA3SBK-sam06tFeXQwUf6-0ThE' },
        { id: 'i2', name: 'Dyed Handkerchief', price: '¥1,200', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4Ts_nCnuRUHhKaWikTAhNT_wz3w6uhGoUiIVr8dgm7duQYNoOtiCVD7PB41hv3wG3oMO3PYhYcTVJ4wQleF2Gx6DfmZR1lOOisPBQK5c6pHOo4l3tFvV5CNo6DQClxSaEpOT_sbiL3eKbZo9BVl4z925wridBm6IOx-iB9ugMxz42PmRTD4IrbctjpMxbmfUIZwgMLARk99xjrHiAim2LTiRQAW2Noo_TlObRuN5EZw-VoGJ1Jdwq0MTm22kC1snEJ25Tr9XD3O3q' },
        { id: 'i3', name: 'Fukiya Blend', price: '¥550', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlUibZgLNtlSphcMO0mVsIj9UJuHZ_57nQAb9kHMXMyxv5XmApDYfIEcv29WIQ5fz6r3AKsh9ozeM6bCJ6ypd8-KtCHm46zS5HsGJG1lda6Qdvnhh4se9bCZz1Ex0qRD_8tcQzPHdtbgDoeeLD7K4ScCPY4yLtVYfkqfnUs6vjnaemMfE2_tZl_TzCSZnrG-TiI_pHNrx3mrRDxWh_PCExmmuOFvThFkREBnZr3FJqo9uFcIlqwaXI2caTyRsemM1M_MdmV3GANZsm' },
        { id: 'i4', name: 'Seasonal Wagashi', price: '¥300', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfq4g6WbDlBQ8FlUfCI8emGjNtBsIfJ6Z9RDrs-5aO-2o9UoMpAOQkUc4nSAwxidxrrzZP4qClbrGi86r4vKkv3qKDI8oSwsxwsnj2NUL2DH_s4rCHDPX4gFCJaeonsKqbeRUx9CcsXkYLO816JnZgJQEqLYg7_OWCuKvuK24pvmeHVR-ShXuHEVAy2GKvTvjSqL3ORwenYiL6VOjUM7A7aod1a03HqKvHAxHPhH6qWTmUEJjA6XulLdIDJPp4TP-a-sqv6C3EKmEM' },
    ],
    isFavorite: false,
  },
  {
    id: '2',
    name: '長尾酒店',
    description: '地酒と手作りの工芸品を取り揃えています。店主こだわりのセレクションは、お土産に最適です。',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuAsCjTGTsLDicf9lvFE_8lsLp8n-GWNofPZMKlo74VCMJjwMMvYNcEQIo09oYVRVW_b43R6f7P_nxlxPTPEAP879w9u1YLyMUGlGgimmZN1Ca2nKQldP0a_cl3YGr5FG9Tvg7UObdwdW5qF6jlmva0tAMWo26S6wWRkJrPKNJz22RNcp_-_aX8nMPcIsS31bjq6082xPh5tnMqPaMyzFuPwtn_Ymd19Q1I4-L_dkD5pz_SfJ9E8mOIeiRJhDGZSbZIzWHfudBQLviuZ'],
    category: 'SOUVENIR',
    tags: ['Sake', 'Souvenir', 'Crafts'],
    status: 'OPEN',
    location: {
      address: 'Fukiya Main St',
      city: 'Takahashi',
      lat: 34.871,
      lng: 133.471,
      distance: '150m'
    },
    isFavorite: false,
  },
  {
    id: '3',
    name: 'ベンガラ染め体験工房',
    description: '自分だけのオリジナルハンカチを作ってみませんか？初心者歓迎。',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuC92b54kj2K9sd8SrEwQYHskhqkKbQA73JHCelYaJEIvCRlWO8V8-h2z2el8Z7W4N8MzlPUaXwcALzlm0njwzTMPPfVi9129CxkjTdJA28X_lOUUzD7UUywrt6-Ak2alJHDAylg85tarfJPukFM4FoOhSysEVi_b1eYIGzLup7MWej88fow66-I27lJFjX1liDC8RfIIlC3HXduSRo2xoo1U8CazOJhDA44v7wkXxrF5AURhJY2r4d1j7UiFNPU0wBaMdJzNM0WhIlB'],
    category: 'EXPERIENCE',
    tags: ['Experience', 'Dyeing', 'Workshop'],
    status: 'OPEN',
    location: {
      address: 'Fukiya North',
      city: 'Takahashi',
      lat: 34.872,
      lng: 133.472,
      distance: '300m'
    },
    isFavorite: false,
  },
  {
    id: '4',
    name: '吹屋の宿 (Fukiya Inn)',
    description: '江戸時代の風情を残す町並みに佇む、心安らぐ宿。',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuDyhu4FjV9PGC3yRk01aO1t_Ml9t_iLJonMMEkEYMFua5wNTY9t9UXF5YCjyPyb6XZBqmjQu3PuWc_yCz8N4qeN6RdTLFnX8oZbP5JpMCdDAbidEi4VvtRU9ie6i8shFex7MSX_MKAnPO4fuZeAeBztrPNNcBUrBP_vej_Sb7-0gIBDQYgdWq8s7IAFrKXgsBe-HHeASCYrG6pQpuQHuZ-KGnYuXYveIgzQ-NmwFpKZj7HJ_6MJIC_M6nrCrjEKm6oFLZXApPkaT-5e'],
    category: 'STAY',
    tags: ['Inn', 'Traditional', 'Stay'],
    status: 'OPEN',
    location: {
      address: 'Fukiya South',
      city: 'Takahashi',
      lat: 34.869,
      lng: 133.469,
      distance: '450m'
    },
    isFavorite: false,
  },
  {
    id: '5',
    name: 'ベンガラ陶芸工房', // For Map/Favorites
    description: '伝統的なベンガラ焼きの体験ができます。',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuBmQ8uptJN6d4thuc9THG6Ib8rli46cwR4yqLV2Fv2Qr4UEaYr_IY2uz0ub41jpzz2TuvfmUBxWrPL-E5ROIvffpCnegFW9_OZl9rGxoR9l4FNJagfZGTzRYG7uUK5T_mGqW3VNp8_H7-Kpw5yNJKHVAbolN42Fi2nzyMTvNIzuB0Qej1fixt8-ShMEHnvhjIRa33bLu3szfiTRylxgDq79wLYNqjsjariLGVZCfHNCu1aSGXb-nAmkXN2U0eBqdSc0JUGe3YNXVbJ3'],
    category: 'EXPERIENCE',
    tags: ['Pottery', 'Experience', 'Souvenir'],
    status: 'OPEN',
    location: {
        address: 'Fukiya East',
        city: 'Takahashi',
        lat: 34.873,
        lng: 133.473,
        distance: '600m'
    },
    isFavorite: true,
    rating: {
        rating: 4.8,
        count: 124
    }
  },
  {
    id: '6',
    name: 'カフェふきや', // For Favorites
    description: '地元の食材を使ったランチが人気です。',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuDhVjyIoSxrxuEvrX0vEiimkBqZt0jeZEJAx7z59uddxM9IPY6-B9_wjWKby_dl7Zi1dGQBquuODFl8NdXqnVa5ZNk4EzWZnsfPWvKUqDhMjJCNPnbaFP7sbxBuI61z8-tVG-k57c6WLtCftf6NTQk_4JAWwqtVmMVzPirVMOJg6XGOcEPVOYhYMBkoMexUamcVmBVkQvQ5UNCJD7YNJoNk_u6h-rAHI-wBpQ-C2Rw3kTSKrKP-AjncWcbuvTO7UiVqP_fQmQAz9wz7'],
    category: 'CAFE',
    tags: ['Cafe', 'Light Meal'],
    status: 'OPEN',
    location: {
        address: 'Fukiya West',
        city: 'Takahashi',
        lat: 34.874,
        lng: 133.474,
        distance: '700m'
    },
    isFavorite: true,
  },
  {
    id: '7',
    name: '旧片山家住宅', // For Favorites
    description: '国指定重要文化財の豪商屋敷。',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuAWQLFpTs5UqVFtBFkDd8fnU0eeGWNiyoKwjLmNayVt9OsUUGKEMTOVYcPhc5Vz0etyEmNyWfkDb-d47ttmYZpyOaIpOwfuFjN0PH6iiFdnYndEEi9d1OMwJvPXf7Mn8wQvzZYsUmNGbHlwBVRlLwh9kDs5ErDCrSp1Jjst6O6mPhVHzjCmPByDifXBS-XO4IBvo79Mx7PtfSAhOBBWG1T3DRclVHe0RgGBSMYf75i06RNj97aLzcvbiZc3IeG1mlY0fAa7PPQjAIO8'],
    category: 'EXPERIENCE', // Using Experience for Sightseeing based on limited tags
    tags: ['History', 'Sightseeing'],
    status: 'HOLIDAY',
    location: {
        address: 'Fukiya Center',
        city: 'Takahashi',
        lat: 34.875,
        lng: 133.475,
        distance: '100m'
    },
    isFavorite: true,
  }
];
