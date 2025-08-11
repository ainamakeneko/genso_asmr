// 元素データ（最初の20元素 + いくつかの重要な元素）
const elementsData = {
    1: {
        symbol: 'H',
        name: '水素',
        atomicWeight: '1.008',
        category: 'nonmetal',
        description: '水素は宇宙で最も豊富な元素で、恒星の主要な燃料です。地球上では水の構成要素として存在し、クリーンエネルギーの源として注目されています。',
        videoId: 'F7GcZeAevwg', // サンプル動画ID
        position: { period: 1, group: 1 }
    },
    2: {
        symbol: 'He',
        name: 'ヘリウム',
        atomicWeight: '4.003',
        category: 'noble-gas',
        description: 'ヘリウムは不活性ガスで、風船やダイビング用の呼吸ガスとして使用されます。液体ヘリウムは超低温を作り出すために使われます。',
        videoId: 'JwNBqWj2Rhw',
        position: { period: 1, group: 18 }
    },
    3: {
        symbol: 'Li',
        name: 'リチウム',
        atomicWeight: '6.941',
        category: 'alkali-metal',
        description: 'リチウムは最も軽い金属で、リチウムイオン電池の主要成分です。精神医学では気分安定剤としても使用されます。',
        videoId: 'hbElxW5D4Bo',
        position: { period: 2, group: 1 }
    },
    4: {
        symbol: 'Be',
        name: 'ベリリウム',
        atomicWeight: '9.012',
        category: 'alkaline-earth-metal',
        description: 'ベリリウムは軽量で強度が高く、航空宇宙産業で使用されます。しかし、毒性があるため取り扱いには注意が必要です。',
        videoId: '8oXaMFSL_xU',
        position: { period: 2, group: 2 }
    },
    5: {
        symbol: 'B',
        name: 'ホウ素',
        atomicWeight: '10.811',
        category: 'metalloid',
        description: 'ホウ素は半金属で、ガラスや陶器の製造に使用されます。植物の成長にも必要な微量元素です。',
        videoId: 'LmJG77mW7Lk',
        position: { period: 2, group: 13 }
    },
    6: {
        symbol: 'C',
        name: '炭素',
        atomicWeight: '12.011',
        category: 'nonmetal',
        description: '炭素は生命の基本元素で、ダイヤモンドやグラファイトなど様々な形態を持ちます。有機化合物の骨格を形成します。',
        videoId: 'dQw4w9WgXcQ',
        position: { period: 2, group: 14 }
    },
    7: {
        symbol: 'N',
        name: '窒素',
        atomicWeight: '14.007',
        category: 'nonmetal',
        description: '窒素は大気の約78%を占める気体で、タンパク質や核酸の構成要素です。肥料の原料としても重要です。',
        videoId: 'dQw4w9WgXcQ',
        position: { period: 2, group: 15 }
    },
    8: {
        symbol: 'O',
        name: '酸素',
        atomicWeight: '15.999',
        category: 'nonmetal',
        description: '酸素は生命維持に不可欠な元素で、呼吸や燃焼に必要です。大気の約21%を占めています。',
        videoId: 'A-yDQxYTUZc',
        position: { period: 2, group: 16 }
    },
    9: {
        symbol: 'F',
        name: 'フッ素',
        atomicWeight: '18.998',
        category: 'halogen',
        description: 'フッ素は最も反応性の高い元素で、歯磨き粉や冷媒に使用されます。虫歯予防効果があります。',
        videoId: 'dQw4w9WgXcQ',
        position: { period: 2, group: 17 }
    },
    10: {
        symbol: 'Ne',
        name: 'ネオン',
        atomicWeight: '20.180',
        category: 'noble-gas',
        description: 'ネオンは不活性ガスで、ネオンサインの赤い光で有名です。大気中にわずかに存在します。',
        videoId: 'dQw4w9WgXcQ',
        position: { period: 2, group: 18 }
    },
    11: {
        symbol: 'Na',
        name: 'ナトリウム',
        atomicWeight: '22.990',
        category: 'alkali-metal',
        description: 'ナトリウムは食塩の構成要素で、神経伝達や体液バランスの維持に重要な役割を果たします。',
        videoId: 'dQw4w9WgXcQ',
        position: { period: 3, group: 1 }
    },
    12: {
        symbol: 'Mg',
        name: 'マグネシウム',
        atomicWeight: '24.305',
        category: 'alkaline-earth-metal',
        description: 'マグネシウムは軽量で強度があり、自動車や航空機の部品に使用されます。葉緑素の中心原子でもあります。',
        videoId: 'dQw4w9WgXcQ',
        position: { period: 3, group: 2 }
    },
    13: {
        symbol: 'Al',
        name: 'アルミニウム',
        atomicWeight: '26.982',
        category: 'post-transition-metal',
        description: 'アルミニウムは軽量で耐食性があり、缶や建築材料として広く使用されます。地殻中で3番目に多い元素です。',
        videoId: 'dQw4w9WgXcQ',
        position: { period: 3, group: 13 }
    },
    14: {
        symbol: 'Si',
        name: 'ケイ素',
        atomicWeight: '28.086',
        category: 'metalloid',
        description: 'ケイ素は半導体の主要材料で、コンピューターチップの製造に不可欠です。地殻中で2番目に多い元素です。',
        videoId: 'dQw4w9WgXcQ',
        position: { period: 3, group: 14 }
    },
    15: {
        symbol: 'P',
        name: 'リン',
        atomicWeight: '30.974',
        category: 'nonmetal',
        description: 'リンはDNAやATPの構成要素で、生命活動に不可欠です。マッチや肥料にも使用されます。',
        videoId: 'dQw4w9WgXcQ',
        position: { period: 3, group: 15 }
    },
    16: {
        symbol: 'S',
        atomicWeight: '32.065',
        name: '硫黄',
        category: 'nonmetal',
        description: '硫黄は火山地帯に多く存在し、硫酸の原料として工業的に重要です。タンパク質の構成要素でもあります。',
        videoId: 'dQw4w9WgXcQ',
        position: { period: 3, group: 16 }
    },
    17: {
        symbol: 'Cl',
        name: '塩素',
        atomicWeight: '35.453',
        category: 'halogen',
        description: '塩素は消毒剤として広く使用され、食塩の構成要素でもあります。プールの水質管理にも使われます。',
        videoId: 'dQw4w9WgXcQ',
        position: { period: 3, group: 17 }
    },
    18: {
        symbol: 'Ar',
        name: 'アルゴン',
        atomicWeight: '39.948',
        category: 'noble-gas',
        description: 'アルゴンは不活性ガスで、溶接時の保護ガスや白熱電球の充填ガスとして使用されます。',
        videoId: 'dQw4w9WgXcQ',
        position: { period: 3, group: 18 }
    },
    19: {
        symbol: 'K',
        name: 'カリウム',
        atomicWeight: '39.098',
        category: 'alkali-metal',
        description: 'カリウムは神経や筋肉の機能に重要で、バナナなどの果物に多く含まれます。肥料の三大要素の一つです。',
        videoId: 'dQw4w9WgXcQ',
        position: { period: 4, group: 1 }
    },
    20: {
        symbol: 'Ca',
        name: 'カルシウム',
        atomicWeight: '40.078',
        category: 'alkaline-earth-metal',
        description: 'カルシウムは骨や歯の主要成分で、筋肉収縮や血液凝固にも関与します。牛乳や乳製品に豊富に含まれます。',
        videoId: 'dQw4w9WgXcQ',
        position: { period: 4, group: 2 }
    },
    26: {
        symbol: 'Fe',
        name: '鉄',
        atomicWeight: '55.845',
        category: 'transition-metal',
        description: '鉄は最も重要な金属の一つで、建築や製造業で広く使用されます。血液中のヘモグロビンの中心原子でもあります。',
        videoId: 'dQw4w9WgXcQ',
        position: { period: 4, group: 8 }
    },
    29: {
        symbol: 'Cu',
        name: '銅',
        atomicWeight: '63.546',
        category: 'transition-metal',
        description: '銅は優れた導電性を持ち、電線や配管に使用されます。抗菌作用もあり、古くから利用されてきました。',
        videoId: 'dQw4w9WgXcQ',
        position: { period: 4, group: 11 }
    },
    47: {
        symbol: 'Ag',
        name: '銀',
        atomicWeight: '107.868',
        category: 'transition-metal',
        description: '銀は最も導電性の高い金属で、宝飾品や電子部品に使用されます。抗菌作用もあります。',
        videoId: 'dQw4w9WgXcQ',
        position: { period: 5, group: 11 }
    },
    79: {
        symbol: 'Au',
        name: '金',
        atomicWeight: '196.967',
        category: 'transition-metal',
        description: '金は腐食しない貴金属で、宝飾品や電子部品に使用されます。古くから価値の象徴とされてきました。',
        videoId: 'aRFAV-rFUAc',
        position: { period: 6, group: 11 }
    },
    21: {
        symbol: 'Sc',
        name: 'スカンジウム',
        atomicWeight: '44.956',
        category: 'transition-metal',
        description: 'スカンジウムは軽量で強度の高い合金を作るために使用される希少な金属です。航空宇宙産業で注目されています。',
        videoId: 'dQw4w9WgXcQ',
        position: { period: 4, group: 3 }
    },
    22: {
        symbol: 'Ti',
        name: 'チタン',
        atomicWeight: '47.867',
        category: 'transition-metal',
        description: 'チタンは軽量で強度が高く、耐食性に優れています。航空機や医療用インプラントに使用されます。',
        videoId: 'dQw4w9WgXcQ',
        position: { period: 4, group: 4 }
    },
    30: {
        symbol: 'Zn',
        name: '亜鉛',
        atomicWeight: '65.38',
        category: 'transition-metal',
        description: '亜鉛は鉄の防錆コーティングや電池に使用されます。人体にとって必要な微量元素でもあります。',
        videoId: 'dQw4w9WgXcQ',
        position: { period: 4, group: 12 }
    },
    35: {
        symbol: 'Br',
        name: '臭素',
        atomicWeight: '79.904',
        category: 'halogen',
        description: '臭素は常温で液体の数少ない元素の一つです。消毒剤や難燃剤として使用されます。',
        videoId: 'dQw4w9WgXcQ',
        position: { period: 4, group: 17 }
    },
    36: {
        symbol: 'Kr',
        name: 'クリプトン',
        atomicWeight: '83.798',
        category: 'noble-gas',
        description: 'クリプトンは希ガスで、高性能な照明や窓ガラスの断熱材として使用されます。',
        videoId: 'dQw4w9WgXcQ',
        position: { period: 4, group: 18 }
    },
    53: {
        symbol: 'I',
        name: 'ヨウ素',
        atomicWeight: '126.904',
        category: 'halogen',
        description: 'ヨウ素は甲状腺ホルモンの構成要素で、消毒剤としても使用されます。海藻に多く含まれています。',
        videoId: 'dQw4w9WgXcQ',
        position: { period: 5, group: 17 }
    },
    54: {
        symbol: 'Xe',
        name: 'キセノン',
        atomicWeight: '131.293',
        category: 'noble-gas',
        description: 'キセノンは希ガスで、高輝度ランプや麻酔薬として使用されます。宇宙船の推進剤にも使われます。',
        videoId: 'dQw4w9WgXcQ',
        position: { period: 5, group: 18 }
    },
    78: {
        symbol: 'Pt',
        name: 'プラチナ',
        atomicWeight: '195.084',
        category: 'transition-metal',
        description: 'プラチナは貴金属で、宝飾品や自動車の触媒として使用されます。化学的に非常に安定しています。',
        videoId: 'dQw4w9WgXcQ',
        position: { period: 6, group: 10 }
    },
    82: {
        symbol: 'Pb',
        name: '鉛',
        atomicWeight: '207.2',
        category: 'post-transition-metal',
        description: '鉛は重い金属で、放射線遮蔽や蓄電池に使用されます。毒性があるため使用が制限されています。',
        videoId: 'dQw4w9WgXcQ',
        position: { period: 6, group: 14 }
    },
    92: {
        symbol: 'U',
        name: 'ウラン',
        atomicWeight: '238.029',
        category: 'actinide',
        description: 'ウランは放射性元素で、原子力発電の燃料として使用されます。自然界で最も重い元素です。',
        videoId: 'dQw4w9WgXcQ',
        position: { period: 7, group: 3 }
    }
};

// 周期表のレイアウト情報
const periodicTableLayout = [
    // 1周期
    [1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 2],
    // 2周期
    [3, 4, null, null, null, null, null, null, null, null, null, null, 5, 6, 7, 8, 9, 10],
    // 3周期
    [11, 12, null, null, null, null, null, null, null, null, null, null, 13, 14, 15, 16, 17, 18],
    // 4周期
    [19, 20, 21, 22, null, null, null, 26, null, null, 29, 30, null, null, null, null, 35, 36],
    // 5周期
    [null, null, null, null, null, null, null, null, null, null, 47, null, null, null, null, null, 53, 54],
    // 6周期
    [null, null, null, null, null, null, null, null, null, 78, 79, null, null, null, 82, null, null, null],
    // 7周期
    [null, null, 92, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
];