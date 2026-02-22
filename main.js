
const hanjaData100 = [
    { hanja: '一', eum: '일', tteut: '하나' },
    { hanja: '二', eum: '이', tteut: '둘' },
    { hanja: '三', eum: '삼', tteut: '셋' },
    { hanja: '四', eum: '사', tteut: '넷' },
    { hanja: '五', eum: '오', tteut: '다섯' },
    { hanja: '六', eum: '육', tteut: '여섯' },
    { hanja: '七', eum: '칠', tteut: '일곱' },
    { hanja: '八', eum: '팔', tteut: '여덟' },
    { hanja: '九', eum: '구', tteut: '아홉' },
    { hanja: '十', eum: '십', tteut: '열' },
    { hanja: '百', eum: '백', tteut: '일백' },
    { hanja: '千', eum: '천', tteut: '일천' },
    { hanja: '萬', eum: '만', tteut: '일만' },
    { hanja: '日', eum: '일', tteut: '날' },
    { hanja: '月', eum: '월', tteut: '달' },
    { hanja: '火', eum: '화', tteut: '불' },
    { hanja: '水', eum: '수', tteut: '물' },
    { hanja: '木', eum: '목', tteut: '나무' },
    { hanja: '金', eum: '금', tteut: '쇠' },
    { hanja: '土', eum: '토', tteut: '흙' },
    { hanja: '王', eum: '왕', tteut: '임금' },
    { hanja: '人', eum: '인', tteut: '사람' },
    { hanja: '天', eum: '천', tteut: '하늘' },
    { hanja: '父', eum: '부', tteut: '아버지' },
    { hanja: '母', eum: '모', tteut: '어머니' },
    { hanja: '生', eum: '생', tteut: '날' },
    { hanja: '學', eum: '학', tteut: '배우다' },
    { hanja: '校', eum: '교', tteut: '학교' },
    { hanja: '大', eum: '대', tteut: '크다' },
    { hanja: '中', eum: '중', tteut: '가운데' },
    { hanja: '小', eum: '소', tteut: '작다' },
    { hanja: '上', eum: '상', tteut: '위' },
    { hanja: '下', eum: '하', tteut: '아래' },
    { hanja: '前', eum: '전', tteut: '앞' },
    { hanja: '後', eum: '후', tteut: '뒤' },
    { hanja: '左', eum: '좌', tteut: '왼쪽' },
    { hanja: '右', eum: '우', tteut: '오른쪽' },
    { hanja: '東', eum: '동', tteut: '동쪽' },
    { hanja: '西', eum: '서', tteut: '서쪽' },
    { hanja: '南', eum: '남', tteut: '남쪽' },
    { hanja: '北', eum: '북', tteut: '북쪽' },
    { hanja: '門', eum: '문', tteut: '문' },
    { hanja: '戶', eum: '호', tteut: '지게' },
    { hanja: '犬', eum: '견', tteut: '개' },
    { hanja: '牛', eum: '우', tteut: '소' },
    { hanja: '馬', eum: '마', tteut: '말' },
    { hanja: '魚', eum: '어', tteut: '고기' },
    { hanja: '鳥', eum: '조', tteut: '새' },
    { hanja: '山', eum: '산', tteut: '뫼' },
    { hanja: '川', eum: '천', tteut: '내' },
    { hanja: '江', eum: '강', tteut: '강' },
    { hanja: '海', eum: '해', tteut: '바다' },
    { hanja: '田', eum: '전', tteut: '밭' },
    { hanja: '林', eum: '림', tteut: '수풀' },
    { hanja: '森', eum: '삼', tteut: '빽빽할' },
    { hanja: '石', eum: '석', tteut: '돌' },
    { hanja: '竹', eum: '죽', tteut: '대나무' },
    { hanja: '草', eum: '초', tteut: '풀' },
    { hanja: '花', eum: '화', tteut: '꽃' },
    { hanja: '白', eum: '백', tteut: '흰' },
    { hanja: '靑', eum: '청', tteut: '푸른' },
    { hanja: '赤', eum: '적', tteut: '붉은' },
    { hanja: '黃', eum: '황', tteut: '누런' },
    { hanja: '黑', eum: '흑', tteut: '검은' },
    { hanja: '春', eum: '춘', tteut: '봄' },
    { hanja: '夏', eum: '하', tteut: '여름' },
    { hanja: '秋', eum: '추', tteut: '가을' },
    { hanja: '冬', eum: '동', tteut: '겨울' },
    { hanja: '見', eum: '견', tteut: '보다' },
    { hanja: '食', eum: '식', tteut: '먹다' },
    { hanja: '言', eum: '언', tteut: '말씀' },
    { hanja: '行', eum: '행', tteut: '다니다' },
    { hanja: '出', eum: '출', tteut: '나다' },
    { hanja: '入', eum: '입', tteut: '들다' },
    { hanja: '坐', eum: '좌', tteut: '앉다' },
    { hanja: '立', eum: '립', tteut: '서다' },
    { hanja: '口', eum: '구', tteut: '입' },
    { hanja: '手', eum: '수', tteut: '손' },
    { hanja: '足', eum: '족', tteut: '발' },
    { hanja: '目', eum: '목', tteut: '눈' },
    { hanja: '耳', eum: '이', tteut: '귀' },
    { hanja: '心', eum: '심', tteut: '마음' },
    { hanja: '力', eum: '력', tteut: '힘' },
    { hanja: '氣', eum: '기', tteut: '기운' },
    { hanja: '身', eum: '신', tteut: '몸' },
    { hanja: '字', eum: '자', tteut: '글자' },
    { hanja: '文', eum: '문', tteut: '글월' },
    { hanja: '書', eum: '서', tteut: '글' },
    { hanja: '名', eum: '명', tteut: '이름' },
    { hanja: '正', eum: '정', tteut: '바르다' },
    { hanja: '長', eum: '장', tteut: '길다' },
    { hanja: '短', eum: '단', tteut: '짧다' },
    { hanja: '高', eum: '고', tteut: '높다' },
    { hanja: '低', eum: '저', tteut: '낮다' },
    { hanja: '新', eum: '신', tteut: '새롭다' },
    { hanja: '古', eum: '고', tteut: '옛' },
    { hanja: '多', eum: '다', tteut: '많다' },
    { hanja: '少', eum: '소', tteut: '적다' },
    { hanja: '國', eum: '국', tteut: '나라' },
    { hanja: '民', eum: '민', tteut: '백성' },
];

// --- Web Component for Hanja Card ---
class HanjaCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        if (this.shadowRoot.innerHTML) {
            return;
        }

        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'hanja-card');

        const hanja = document.createElement('p');
        hanja.setAttribute('class', 'hanja');
        hanja.textContent = this.getAttribute('hanja');

        const detailsWrapper = document.createElement('div');
        detailsWrapper.setAttribute('class', 'details-wrapper hidden');

        const details = document.createElement('p');
        details.setAttribute('class', 'details');
        details.textContent = `${this.getAttribute('tteut')} / ${this.getAttribute('eum')}`;

        const checkButtons = document.createElement('div');
        checkButtons.setAttribute('class', 'check-buttons');

        const correctButton = document.createElement('button');
        correctButton.textContent = 'O';
        const incorrectButton = document.createElement('button');
        incorrectButton.textContent = 'X';

        checkButtons.appendChild(correctButton);
        checkButtons.appendChild(incorrectButton);

        detailsWrapper.appendChild(details);
        detailsWrapper.appendChild(checkButtons);

        const style = document.createElement('style');
        style.textContent = `
            .hanja-card {
                background-color: #fff;
                border-radius: 12px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                padding: 20px;
                text-align: center;
                transition: transform 0.2s, box-shadow 0.2s;
                cursor: pointer;
                border: 2px solid transparent;
            }
            .hanja-card:hover {
                transform: translateY(-4px);
                box-shadow: 0 8px 24px rgba(0,0,0,0.15);
            }
            .hanja {
                font-family: 'Noto Serif KR', serif;
                font-size: 3rem;
                margin: 0 0 10px 0;
            }
            .details-wrapper.hidden {
                display: none;
            }
            .details {
                font-size: 1.2rem;
                color: #666;
                margin: 0 0 15px 0;
            }
            .check-buttons {
                display: flex;
                justify-content: center;
                gap: 10px;
            }
            .check-buttons button {
                font-size: 1.2rem;
                font-weight: bold;
                border: none;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                cursor: pointer;
                transition: background-color 0.2s;
            }
            .check-buttons button:nth-child(1) {
                background-color: #e0f2f1; 
                color: #00796b;
            }
            .check-buttons button:nth-child(2) {
                background-color: #ffebee; 
                color: #c62828;
            }
            .hanja-card.correct {
                border-color: #4caf50;
            }
             .hanja-card.incorrect {
                border-color: #f44336;
            }
        `;

        wrapper.addEventListener('click', () => {
            detailsWrapper.classList.toggle('hidden');
        });

        correctButton.addEventListener('click', (e) => {
            e.stopPropagation();
            wrapper.classList.add('correct');
            wrapper.classList.remove('incorrect');
            detailsWrapper.classList.add('hidden');
            this.dispatchEvent(new CustomEvent('card-updated', { bubbles: true }));
        });

        incorrectButton.addEventListener('click', (e) => {
            e.stopPropagation();
            wrapper.classList.add('incorrect');
            wrapper.classList.remove('correct');
            detailsWrapper.classList.add('hidden');
            this.dispatchEvent(new CustomEvent('card-updated', { bubbles: true }));
        });

        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(wrapper);
        wrapper.appendChild(hanja);
        wrapper.appendChild(detailsWrapper);
    }
}

customElements.define('hanja-card', HanjaCard);

// --- App Initialization & Main Logic ---

// Get DOM Elements
const hanjaGrid = document.getElementById('hanja-grid');
const levelSelector = document.getElementById('level-selector');
const resetButton = document.getElementById('reset-button');
const totalCountEl = document.getElementById('total-count');
const correctCountEl = document.getElementById('correct-count');
const incorrectCountEl = document.getElementById('incorrect-count');

// Function to update progress display
function updateProgress() {
    const allCards = document.querySelectorAll('hanja-card');
    let correctCount = 0;
    let incorrectCount = 0;

    allCards.forEach(card => {
        const cardShadowRoot = card.shadowRoot;
        const wrapper = cardShadowRoot.querySelector('.hanja-card');
        if (wrapper.classList.contains('correct')) {
            correctCount++;
        } else if (wrapper.classList.contains('incorrect')) {
            incorrectCount++;
        }
    });

    correctCountEl.textContent = correctCount;
    incorrectCountEl.textContent = incorrectCount;
}

// Function to load Hanja data based on level
function loadHanjaData(level) {
    // For now, only 100-character data is available.
    // We will use this data regardless of the selected level.
    const dataToLoad = hanjaData100; 

    // Clear existing grid
    hanjaGrid.innerHTML = '';

    // Populate grid with new data
    dataToLoad.forEach(item => {
        const hanjaCard = document.createElement('hanja-card');
        hanjaCard.setAttribute('hanja', item.hanja);
        hanjaCard.setAttribute('eum', item.eum);
        hanjaCard.setAttribute('tteut', item.tteut);
        hanjaGrid.appendChild(hanjaCard);
    });

    // Update counts
    totalCountEl.textContent = `전체: ${dataToLoad.length}`;
    updateProgress();
}

// --- Event Listeners ---

// Level selection
levelSelector.addEventListener('change', (e) => {
    const selectedLevel = e.target.value;
    loadHanjaData(selectedLevel);
});

// Reset button
resetButton.addEventListener('click', () => {
    const allCards = document.querySelectorAll('hanja-card');
    allCards.forEach(card => {
        const cardShadowRoot = card.shadowRoot;
        const wrapper = cardShadowRoot.querySelector('.hanja-card');
        wrapper.classList.remove('correct', 'incorrect');
    });
    updateProgress(); // Update counts after reset
});

// Card state updates
document.addEventListener('card-updated', () => {
    updateProgress();
});


// --- Initial Load ---
loadHanjaData(levelSelector.value); // Load the default level on startup
