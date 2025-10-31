// 画像と確率（%）を設定
const images = [
    { src: "../images/preparing0.gif", probability: 80 },
    { src: "../images/preparing1.gif", probability: 20 },
    ];

// 合計確率（100でなくてもOK）を計算
const total = images.reduce((sum, img) => sum + img.probability, 0);

// ランダム値を生成
const rand = Math.random() * total;
let cumulative = 0;
let selected;

// 累積確率で判定
for (const img of images) {
    cumulative += img.probability;
    if (rand < cumulative) {
        selected = img.src;
        break;
    }
}

// 画像を表示
document.getElementById("randomImage").src = selected;
