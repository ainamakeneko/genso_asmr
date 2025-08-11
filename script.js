// DOM要素の取得
const periodicTableElement = document.getElementById('periodicTable');
const elementDetailsElement = document.getElementById('elementDetails');
const closeBtn = document.getElementById('closeBtn');

// 周期表の生成
function createPeriodicTable() {
    periodicTableLayout.forEach((period, periodIndex) => {
        period.forEach((atomicNumber, groupIndex) => {
            const elementDiv = document.createElement('div');
            
            if (atomicNumber === null) {
                // 空のセル
                elementDiv.className = 'element empty';
            } else if (elementsData[atomicNumber]) {
                // 元素のセル
                const element = elementsData[atomicNumber];
                elementDiv.className = `element ${element.category}`;
                elementDiv.innerHTML = `
                    <div class="element-number">${atomicNumber}</div>
                    <div class="element-symbol">${element.symbol}</div>
                    <div class="element-name">${element.name}</div>
                `;
                
                // クリックイベントの追加
                elementDiv.addEventListener('click', () => showElementDetails(atomicNumber));
            } else {
                // データがない元素
                elementDiv.className = 'element empty';
            }
            
            periodicTableElement.appendChild(elementDiv);
        });
    });
}

// 元素詳細の表示
function showElementDetails(atomicNumber) {
    const element = elementsData[atomicNumber];
    if (!element) return;
    
    // 詳細情報の更新
    document.getElementById('elementSymbol').textContent = element.symbol;
    document.getElementById('elementName').textContent = element.name;
    document.getElementById('atomicNumber').textContent = atomicNumber;
    document.getElementById('atomicWeight').textContent = element.atomicWeight;
    document.getElementById('category').textContent = getCategoryName(element.category);
    document.getElementById('elementDescription').textContent = element.description;
    
    // ASMR動画の表示
    const videoContainer = document.getElementById('videoContainer');
    if (element.videoId) {
        videoContainer.innerHTML = `
            <iframe 
                src="https://www.youtube.com/embed/${element.videoId}" 
                title="${element.name} ASMR動画"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        `;
    } else {
        videoContainer.innerHTML = `
            <div class="video-placeholder">
                ${element.name}のASMR動画は準備中です
            </div>
        `;
    }
    
    // モーダルの表示
    elementDetailsElement.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// 元素詳細の非表示
function hideElementDetails() {
    elementDetailsElement.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // 動画の停止（iframe を削除）
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.innerHTML = '';
}

// カテゴリ名の日本語変換
function getCategoryName(category) {
    const categoryNames = {
        'alkali-metal': 'アルカリ金属',
        'alkaline-earth-metal': 'アルカリ土類金属',
        'transition-metal': '遷移金属',
        'post-transition-metal': '典型金属',
        'metalloid': '半金属',
        'nonmetal': '非金属',
        'halogen': 'ハロゲン',
        'noble-gas': '希ガス',
        'lanthanide': 'ランタノイド',
        'actinide': 'アクチノイド'
    };
    return categoryNames[category] || category;
}

// イベントリスナーの設定
closeBtn.addEventListener('click', hideElementDetails);

// モーダル外クリックで閉じる
elementDetailsElement.addEventListener('click', (e) => {
    if (e.target === elementDetailsElement) {
        hideElementDetails();
    }
});

// ESCキーで閉じる
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && elementDetailsElement.style.display === 'flex') {
        hideElementDetails();
    }
});

// 検索とフィルター機能
function filterElements() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;
    
    const elements = document.querySelectorAll('.element:not(.empty)');
    
    elements.forEach(element => {
        const elementData = getElementDataFromElement(element);
        if (!elementData) return;
        
        const matchesSearch = elementData.name.toLowerCase().includes(searchTerm) || 
                            elementData.symbol.toLowerCase().includes(searchTerm);
        const matchesCategory = !categoryFilter || elementData.category === categoryFilter;
        
        if (matchesSearch && matchesCategory) {
            element.style.display = 'flex';
            element.style.opacity = '1';
        } else {
            element.style.opacity = '0.3';
            element.style.pointerEvents = 'none';
        }
    });
}

function getElementDataFromElement(elementDiv) {
    const symbolElement = elementDiv.querySelector('.element-symbol');
    if (!symbolElement) return null;
    
    const symbol = symbolElement.textContent;
    return Object.values(elementsData).find(element => element.symbol === symbol);
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('categoryFilter').value = '';
    filterElements();
}

// ページ読み込み時に周期表を生成
document.addEventListener('DOMContentLoaded', () => {
    createPeriodicTable();
    
    // 検索とフィルターのイベントリスナー
    document.getElementById('searchInput').addEventListener('input', filterElements);
    document.getElementById('categoryFilter').addEventListener('change', filterElements);
    document.getElementById('clearSearch').addEventListener('click', clearSearch);
});

// レスポンシブ対応：画面サイズに応じて周期表のレイアウトを調整
function adjustTableLayout() {
    const table = document.getElementById('periodicTable');
    if (window.innerWidth <= 768) {
        table.style.gridTemplateColumns = 'repeat(9, 1fr)';
    } else {
        table.style.gridTemplateColumns = 'repeat(18, 1fr)';
    }
}

window.addEventListener('resize', adjustTableLayout);
window.addEventListener('load', adjustTableLayout);