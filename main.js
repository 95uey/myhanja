document.addEventListener('DOMContentLoaded', () => {
    const hanjaGrid = document.getElementById('hanja-grid');
    const levelSelector = document.getElementById('level-selector');
    const languageSelector = document.getElementById('language-selector');
    const resetButton = document.getElementById('reset-button');

    const totalCountEl = document.getElementById('total-count');
    const correctCountEl = document.getElementById('correct-count');
    const incorrectCountEl = document.getElementById('incorrect-count');

    let currentLevel = 'beginner';
    let currentLanguage = 'ko';
    let hanjaData = {};

    const translations = {
        ko: {
            app_title: '마이 한자', level_beginner: '초급', level_intermediate: '중급', level_advanced: '고급', 
            reset_button: '초기화', progress_total: '전체', progress_correct: 'O', progress_incorrect: 'X',
            footer_about_title: '마이 한자 (My Hanja) 소개',
            footer_about_p: `'마이 한자'는 사용자가 수준별(초급, 중급, 고급)로 한자를 쉽고 재미있게 학습할 수 있도록 돕는 웹 애플리케이션입니다. 각 한자 카드를 클릭하여 음과 뜻을 확인하고, O/X 버튼으로 스스로의 암기 현황을 체크하며 효과적인 반복 학습을 경험해 보세요.`,
            footer_privacy_title: '개인정보처리방침 (Privacy Policy)',
            footer_privacy_p: `본 사이트는 Google AdSense를 통해 광고를 표시하고 있습니다. Google AdSense는 사용자의 관심사에 기반한 광고를 제공하기 위해 쿠키를 사용할 수 있습니다. 본 사이트는 사용자의 어떠한 개인 정보(이름, 주소, 이메일 주소, 전화번호 등)도 직접적으로 수집하거나 저장하지 않습니다.`,
            footer_roadmap_title: '향후 업데이트 로드맵',
            footer_roadmap_p: `'마이 한자'는 이제 시작입니다. 사용자의 즐거운 한자 학습을 위해 다음과 같은 기능들을 준비하고 있습니다: 사자성어 퀴즈, 급수별 한자(8급~1급) 전체 수록, 고사성어 이야기, 단어 학습 기능 등.`,
        },
        en: {
            app_title: 'My Hanja', level_beginner: 'Beginner', level_intermediate: 'Intermediate', level_advanced: 'Advanced',
            reset_button: 'Reset', progress_total: 'Total', progress_correct: 'O', progress_incorrect: 'X',
            footer_about_title: 'About My Hanja',
            footer_about_p: `'My Hanja' is a web application that helps users learn Hanja (Chinese characters) in a fun and easy way, with levels for beginner, intermediate, and advanced learners. Click on each Hanja card to check its sound and meaning, and use the O/X buttons to track your memorization progress for effective repetitive learning.`,
            footer_privacy_title: 'Privacy Policy',
            footer_privacy_p: `This site displays ads through Google AdSense. Google AdSense may use cookies to serve ads based on your interests. This site does not directly collect or store any of your personal information (such as name, address, email address, or phone number).`,
            footer_roadmap_title: 'Future Update Roadmap',
            footer_roadmap_p: `'My Hanja' is just beginning. To make learning Hanja enjoyable for users, we are preparing the following features: four-character idiom quizzes, a complete collection of Hanja by certification level (Levels 8-1), stories behind classic idioms, vocabulary learning functions, and more.`,
        }
    };

    const allHanja = {
        beginner: [
            { hanja: '一', eum: '일', tteut: '하나', tteut_en: 'One', eum_en: 'il' }, { hanja: '二', eum: '이', tteut: '둘', tteut_en: 'Two', eum_en: 'i' },
            { hanja: '三', eum: '삼', tteut: '셋', tteut_en: 'Three', eum_en: 'sam' }, { hanja: '四', eum: '사', tteut: '넷', tteut_en: 'Four', eum_en: 'sa' },
            { hanja: '五', eum: '오', tteut: '다섯', tteut_en: 'Five', eum_en: 'o' }, { hanja: '六', eum: '육', tteut: '여섯', tteut_en: 'Six', eum_en: 'yuk' },
            { hanja: '七', eum: '칠', tteut: '일곱', tteut_en: 'Seven', eum_en: 'chil' }, { hanja: '八', eum: '팔', tteut: '여덟', tteut_en: 'Eight', eum_en: 'pal' },
            { hanja: '九', eum: '구', tteut: '아홉', tteut_en: 'Nine', eum_en: 'gu' }, { hanja: '十', eum: '십', tteut: '열', tteut_en: 'Ten', eum_en: 'sip' },
            { hanja: '百', eum: '백', tteut: '일백', tteut_en: 'Hundred', eum_en: 'baek' }, { hanja: '千', eum: '천', tteut: '일천', tteut_en: 'Thousand', eum_en: 'cheon' },
            { hanja: '萬', eum: '만', tteut: '일만', tteut_en: 'Ten Thousand', eum_en: 'man' }, { hanja: '年', eum: '년', tteut: '해', tteut_en: 'Year', eum_en: 'nyeon' },
            { hanja: '月', eum: '월', tteut: '달', tteut_en: 'Month', eum_en: 'wol' }, { hanja: '日', eum: '일', tteut: '날', tteut_en: 'Day', eum_en: 'il' },
            { hanja: '時', eum: '시', tteut: '때', tteut_en: 'Time/Hour', eum_en: 'si' }, { hanja: '分', eum: '분', tteut: '나누다', tteut_en: 'Minute/Part', eum_en: 'bun' },
            { hanja: '天', eum: '천', tteut: '하늘', tteut_en: 'Sky', eum_en: 'cheon' }, { hanja: '地', eum: '지', tteut: '땅', tteut_en: 'Earth', eum_en: 'ji' },
            { hanja: '山', eum: '산', tteut: '뫼', tteut_en: 'Mountain', eum_en: 'san' }, { hanja: '川', eum: '천', tteut: '내', tteut_en: 'River', eum_en: 'cheon' },
            { hanja: '水', eum: '수', tteut: '물', tteut_en: 'Water', eum_en: 'su' }, { hanja: '火', eum: '화', tteut: '불', tteut_en: 'Fire', eum_en: 'hwa' },
            { hanja: '木', eum: '목', tteut: '나무', tteut_en: 'Tree/Wood', eum_en: 'mok' }, { hanja: '金', eum: '금', tteut: '쇠/돈', tteut_en: 'Gold/Metal', eum_en: 'geum' },
            { hanja: '土', eum: '토', tteut: '흙', tteut_en: 'Soil', eum_en: 'to' }, { hanja: '風', eum: '풍', tteut: '바람', tteut_en: 'Wind', eum_en: 'pung' },
            { hanja: '雨', eum: '우', tteut: '비', tteut_en: 'Rain', eum_en: 'u' }, { hanja: '父', eum: '부', tteut: '아버지', tteut_en: 'Father', eum_en: 'bu' },
            { hanja: '母', eum: '모', tteut: '어머니', tteut_en: 'Mother', eum_en: 'mo' }, { hanja: '兄', eum: '형', tteut: '형', tteut_en: 'Older Brother', eum_en: 'hyeong' },
            { hanja: '弟', eum: '제', tteut: '아우', tteut_en: 'Younger Brother', eum_en: 'je' }, { hanja: '姉', eum: '자', tteut: '누나/언니', tteut_en: 'Older Sister', eum_en: 'ja' },
            { hanja: '妹', eum: '매', tteut: '누이', tteut_en: 'Younger Sister', eum_en: 'mae' }, { hanja: '子', eum: '자', tteut: '아들', tteut_en: 'Child/Son', eum_en: 'ja' },
            { hanja: '女', eum: '녀', tteut: '여자', tteut_en: 'Woman', eum_en: 'nyeo' }, { hanja: '男', eum: '남', tteut: '남자', tteut_en: 'Man', eum_en: 'nam' },
            { hanja: '家', eum: '가', tteut: '집', tteut_en: 'House', eum_en: 'ga' }, { hanja: '人', eum: '인', tteut: '사람', tteut_en: 'Person', eum_en: 'in' },
            { hanja: '王', eum: '왕', tteut: '임금', tteut_en: 'King', eum_en: 'wang' }, { hanja: '民', eum: '민', tteut: '백성', tteut_en: 'People', eum_en: 'min' },
            { hanja: '友', eum: '우', tteut: '벗', tteut_en: 'Friend', eum_en: 'u' }, { hanja: '身', eum: '신', tteut: '몸', tteut_en: 'Body', eum_en: 'sin' },
            { hanja: '心', eum: '심', tteut: '마음', tteut_en: 'Heart', eum_en: 'sim' }, { hanja: '手', eum: '수', tteut: '손', tteut_en: 'Hand', eum_en: 'su' },
            { hanja: '足', eum: '족', tteut: '발', tteut_en: 'Foot', eum_en: 'jok' }, { hanja: '目', eum: '목', tteut: '눈', tteut_en: 'Eye', eum_en: 'mok' },
            { hanja: '口', eum: '구', tteut: '입', tteut_en: 'Mouth', eum_en: 'gu' }, { hanja: '耳', eum: '이', tteut: '귀', tteut_en: 'Ear', eum_en: 'i' },
            { hanja: '東', eum: '동', tteut: '동녘', tteut_en: 'East', eum_en: 'dong' }, { hanja: '西', eum: '서', tteut: '서녘', tteut_en: 'West', eum_en: 'seo' },
            { hanja: '南', eum: '남', tteut: '남녘', tteut_en: 'South', eum_en: 'nam' }, { hanja: '北', eum: '북', tteut: '북녘', tteut_en: 'North', eum_en: 'buk' },
            { hanja: '上', eum: '상', tteut: '위', tteut_en: 'Up', eum_en: 'sang' }, { hanja: '中', eum: '중', tteut: '가운데', tteut_en: 'Middle', eum_en: 'jung' },
            { hanja: '下', eum: '하', tteut: '아래', tteut_en: 'Down', eum_en: 'ha' }, { hanja: '前', eum: '전', tteut: '앞', tteut_en: 'Front', eum_en: 'jeon' },
            { hanja: '後', eum: '후', tteut: '뒤', tteut_en: 'Back', eum_en: 'hu' }, { hanja: '左', eum: '좌', tteut: '왼', tteut_en: 'Left', eum_en: 'jwa' },
            { hanja: '右', eum: '우', tteut: '오른', tteut_en: 'Right', eum_en: 'u' }, { hanja: '外', eum: '외', tteut: '밖', tteut_en: 'Outside', eum_en: 'oe' },
            { hanja: '內', eum: '내', tteut: '안', tteut_en: 'Inside', eum_en: 'nae' }, { hanja: '學', eum: '학', tteut: '배우다', tteut_en: 'Learn', eum_en: 'hak' },
            { hanja: '校', eum: '교', tteut: '학교', tteut_en: 'School', eum_en: 'gyo' }, { hanja: '生', eum: '생', tteut: '날/살다', tteut_en: 'Life/Student', eum_en: 'saeng' },
            { hanja: '先', eum: '선', tteut: '먼저', tteut_en: 'First/Teacher', eum_en: 'seon' }, { hanja: '文', eum: '문', tteut: '글월', tteut_en: 'Writing', eum_en: 'mun' },
            { hanja: '字', eum: '자', tteut: '글자', tteut_en: 'Character', eum_en: 'ja' }, { hanja: '書', eum: '서', tteut: '쓰다', tteut_en: 'Write/Book', eum_en: 'seo' },
            { hanja: '問', eum: '문', tteut: '묻다', tteut_en: 'Ask', eum_en: 'mun' }, { hanja: '答', eum: '답', tteut: '대답하다', tteut_en: 'Answer', eum_en: 'dap' },
            { hanja: '大', eum: '대', tteut: '크다', tteut_en: 'Big', eum_en: 'dae' }, { hanja: '小', eum: '소', tteut: '작다', tteut_en: 'Small', eum_en: 'so' },
            { hanja: '多', eum: '다', tteut: '많다', tteut_en: 'Many', eum_en: 'da' }, { hanja: '少', eum: '소', tteut: '적다', tteut_en: 'Few', eum_en: 'so' },
            { hanja: '長', eum: '장', tteut: '길다/어른', tteut_en: 'Long/Chief', eum_en: 'jang' }, { hanja: '短', eum: '단', tteut: '짧다', tteut_en: 'Short', eum_en: 'dan' },
            { hanja: '高', eum: '고', tteut: '높다', tteut_en: 'High', eum_en: 'go' }, { hanja: '低', eum: '저', tteut: '낮다', tteut_en: 'Low', eum_en: 'jeo' },
            { hanja: '新', eum: '신', tteut: '새롭다', tteut_en: 'New', eum_en: 'sin' }, { hanja: '古', eum: '고', tteut: '옛', tteut_en: 'Old', eum_en: 'go' },
            { hanja: '正', eum: '정', tteut: '바르다', tteut_en: 'Correct', eum_en: 'jeong' }, { hanja: '安', eum: '안', tteut: '편안하다', tteut_en: 'Peaceful', eum_en: 'an' },
            { hanja: '入', eum: '입', tteut: '들다', tteut_en: 'Enter', eum_en: 'ip' }, { hanja: '出', eum: '출', tteut: '나다', tteut_en: 'Exit', eum_en: 'chul' },
            { hanja: '見', eum: '견', tteut: '보다', tteut_en: 'See', eum_en: 'gyeon' }, { hanja: '來', eum: '래', tteut: '오다', tteut_en: 'Come', eum_en: 'rae' },
            { hanja: '行', eum: '행', tteut: '다니다', tteut_en: 'Go/Do', eum_en: 'haeng' }, { hanja: '坐', eum: '좌', tteut: '앉다', tteut_en: 'Sit', eum_en: 'jwa' },
            { hanja: '食', eum: '식', tteut: '먹다', tteut_en: 'Eat/Food', eum_en: 'sik' }, { hanja: '言', eum: '언', tteut: '말하다', tteut_en: 'Speak', eum_en: 'eon' },
            { hanja: '國', eum: '국', tteut: '나라', tteut_en: 'Country', eum_en: 'guk' }, { hanja: '邑', eum: '읍', tteut: '고을', tteut_en: 'Town', eum_en: 'eup' },
            { hanja: '門', eum: '문', tteut: '문', tteut_en: 'Gate', eum_en: 'mun' }, { hanja: '戶', eum: '호', tteut: '지게', tteut_en: 'Household', eum_en: 'ho' },
        ],
        intermediate: [
            { hanja: '愛', eum: '애', tteut: '사랑', tteut_en: 'Love', eum_en: 'ae' }, { hanja: '惡', eum: '악', tteut: '악하다', tteut_en: 'Evil', eum_en: 'ak' },
            { hanja: '悲', eum: '비', tteut: '슬프다', tteut_en: 'Sad', eum_en: 'bi' }, { hanja: '喜', eum: '희', tteut: '기쁘다', tteut_en: 'Joy', eum_en: 'hui' },
            { hanja: '怒', eum: '노', tteut: '성내다', tteut_en: 'Anger', eum_en: 'no' }, { hanja: '樂', eum: '락', tteut: '즐거움', tteut_en: 'Pleasure', eum_en: 'rak' },
            { hanja: '苦', eum: '고', tteut: '쓰다', tteut_en: 'Bitter/Suffering', eum_en: 'go' }, { hanja: '善', eum: '선', tteut: '착하다', tteut_en: 'Good', eum_en: 'seon' },
            { hanja: '信', eum: '신', tteut: '믿다', tteut_en: 'Trust', eum_en: 'sin' }, { hanja: '念', eum: '념', tteut: '생각', tteut_en: 'Thought', eum_en: 'nyeom' },
            { hanja: '思', eum: '사', tteut: '생각하다', tteut_en: 'Think', eum_en: 'sa' }, { hanja: '知', eum: '지', tteut: '알다', tteut_en: 'Know', eum_en: 'ji' },
            { hanja: '理', eum: '리', tteut: '이치', tteut_en: 'Reason', eum_en: 'ri' }, { hanja: '道', eum: '도', tteut: '길', tteut_en: 'Way/Path', eum_en: 'do' },
            { hanja: '德', eum: '덕', tteut: '덕', tteut_en: 'Virtue', eum_en: 'deok' }, { hanja: '力', eum: '력', tteut: '힘', tteut_en: 'Power', eum_en: 'ryeok' },
            { hanja: '功', eum: '공', tteut: '공', tteut_en: 'Merit', eum_en: 'gong' }, { hanja: '名', eum: '명', tteut: '이름', tteut_en: 'Name', eum_en: 'myeong' },
            { hanja: '事', eum: '사', tteut: '일', tteut_en: 'Matter/Affair', eum_en: 'sa' }, { hanja: '業', eum: '업', tteut: '업', tteut_en: 'Business/Vocation', eum_en: 'eop' },
            { hanja: '者', eum: '자', tteut: '사람', tteut_en: 'Person (suffix)', eum_en: 'ja' }, { hanja: '農', eum: '농', tteut: '농사', tteut_en: 'Farming', eum_en: 'nong' },
            { hanja: '工', eum: '공', tteut: '장인', tteut_en: 'Craftsman', eum_en: 'gong' }, { hanja: '商', eum: '상', tteut: '장사', tteut_en: 'Commerce', eum_en: 'sang' },
            { hanja: '醫', eum: '의', tteut: '의원', tteut_en: 'Medicine', eum_en: 'ui' }, { hanja: '法', eum: '법', tteut: '법', tteut_en: 'Law', eum_en: 'beop' },
            { hanja: '政', eum: '정', tteut: '정사', tteut_en: 'Politics', eum_en: 'jeong' }, { hanja: '治', eum: '치', tteut: '다스리다', tteut_en: 'Govern', eum_en: 'chi' },
            { hanja: '軍', eum: '군', tteut: '군사', tteut_en: 'Military', eum_en: 'gun' }, { hanja: '戰', eum: '전', tteut: '싸움', tteut_en: 'War/Battle', eum_en: 'jeon' },
            { hanja: '勝', eum: '승', tteut: '이기다', tteut_en: 'Victory', eum_en: 'seung' }, { hanja: '敗', eum: '패', tteut: '지다', tteut_en: 'Defeat', eum_en: 'pae' },
            { hanja: '食', eum: '식', tteut: '밥', tteut_en: 'Food', eum_en: 'sik' }, { hanja: '衣', eum: '의', tteut: '옷', tteut_en: 'Clothing', eum_en: 'ui' },
            { hanja: '住', eum: '주', tteut: '살다', tteut_en: 'Reside', eum_en: 'ju' }, { hanja: '行', eum: '행', tteut: '가다', tteut_en: 'Go', eum_en: 'haeng' },
            { hanja: '色', eum: '색', tteut: '빛', tteut_en: 'Color', eum_en: 'saek' }, { hanja: '聲', eum: '성', tteut: '소리', tteut_en: 'Sound', eum_en: 'seong' },
            { hanja: '香', eum: '향', tteut: '향기', tteut_en: 'Scent', eum_en: 'hyang' }, { hanja: '味', eum: '미', tteut: '맛', tteut_en: 'Taste', eum_en: 'mi' },
            { hanja: '光', eum: '광', tteut: '빛', tteut_en: 'Light', eum_en: 'gwang' }, { hanja: '景', eum: '경', tteut: '볕', tteut_en: 'Scenery', eum_en: 'gyeong' },
            { hanja: '春', eum: '춘', tteut: '봄', tteut_en: 'Spring', eum_en: 'chun' }, { hanja: '夏', eum: '하', tteut: '여름', tteut_en: 'Summer', eum_en: 'ha' },
            { hanja: '秋', eum: '추', tteut: '가을', tteut_en: 'Autumn', eum_en: 'chu' }, { hanja: '冬', eum: '동', tteut: '겨울', tteut_en: 'Winter', eum_en: 'dong' },
            { hanja: '詩', eum: '시', tteut: '시', tteut_en: 'Poetry', eum_en: 'si' }, { hanja: '畫', eum: '화', tteut: '그림', tteut_en: 'Picture', eum_en: 'hwa' },
            { hanja: '歌', eum: '가', tteut: '노래', tteut_en: 'Song', eum_en: 'ga' }, { hanja: '舞', eum: '무', tteut: '춤', tteut_en: 'Dance', eum_en: 'mu' },
            { hanja: '讀', eum: '독', tteut: '읽다', tteut_en: 'Read', eum_en: 'dok' }, { hanja: '筆', eum: '필', tteut: '붓', tteut_en: 'Brush', eum_en: 'pil' },
            { hanja: '紙', eum: '지', tteut: '종이', tteut_en: 'Paper', eum_en: 'ji' }, { hanja: '勉', eum: '면', tteut: '힘쓰다', tteut_en: 'Strive', eum_en: 'myeon' },
            { hanja: '强', eum: '강', tteut: '강하다', tteut_en: 'Strong', eum_en: 'gang' }, { hanja: '弱', eum: '약', tteut: '약하다', tteut_en: 'Weak', eum_en: 'yak' },
            { hanja: '幸', eum: '행', tteut: '다행', tteut_en: 'Fortune', eum_en: 'haeng' }, { hanja: '福', eum: '복', tteut: '복', tteut_en: 'Blessing', eum_en: 'bok' },
            { hanja: '才', eum: '재', tteut: '재주', tteut_en: 'Talent', eum_en: 'jae' }, { hanja: '能', eum: '능', tteut: '능하다', tteut_en: 'Ability', eum_en: 'neung' },
            { hanja: '技', eum: '기', tteut: '재주', tteut_en: 'Skill', eum_en: 'gi' }, { hanja: '藝', eum: '예', tteut: '재주', tteut_en: 'Art', eum_en: 'ye' },
            { hanja: '體', eum: '체', tteut: '몸', tteut_en: 'Body', eum_en: 'che' }, { hanja: '育', eum: '육', tteut: '기르다', tteut_en: 'Nurture', eum_en: 'yuk' },
            { hanja: '敎', eum: '교', tteut: '가르치다', tteut_en: 'Teach', eum_en: 'gyo' }, { hanja: '室', eum: '실', tteut: '집', tteut_en: 'Room', eum_en: 'sil' },
            { hanja: '堂', eum: '당', tteut: '집', tteut_en: 'Hall', eum_en: 'dang' }, { hanja: '速', eum: '속', tteut: '빠르다', tteut_en: 'Fast', eum_en: 'sok' },
            { hanja: '晩', eum: '만', tteut: '늦다', tteut_en: 'Late', eum_en: 'man' }, { hanja: '近', eum: '근', tteut: '가깝다', tteut_en: 'Near', eum_en: 'geun' },
            { hanja: '遠', eum: '원', tteut: '멀다', tteut_en: 'Far', eum_en: 'won' }, { hanja: '輕', eum: '경', tteut: '가볍다', tteut_en: 'Light', eum_en: 'gyeong' },
            { hanja: '重', eum: '중', tteut: '무겁다', tteut_en: 'Heavy', eum_en: 'jung' }, { hanja: '死', eum: '사', tteut: '죽다', tteut_en: 'Death', eum_en: 'sa' },
            { hanja: '病', eum: '병', tteut: '병', tteut_en: 'Sickness', eum_en: 'byeong' }, { hanja: '藥', eum: '약', tteut: '약', tteut_en: 'Medicine', eum_en: 'yak' },
        ],
        advanced: [
            { hanja: '憲', eum: '헌', tteut: '법', tteut_en: 'Constitution', eum_en: 'heon' }, { hanja: '議', eum: '의', tteut: '논의하다', tteut_en: 'Discuss', eum_en: 'ui' },
            { hanja: '經', eum: '경', tteut: '지나다', tteut_en: 'Passage/Sutra', eum_en: 'gyeong' }, { hanja: '濟', eum: '제', tteut: '건너다', tteut_en: 'Economize', eum_en: 'je' },
            { hanja: '革', eum: '혁', tteut: '가죽/바꾸다', tteut_en: 'Revolution', eum_en: 'hyeok' }, { hanja: '命', eum: '명', tteut: '목숨', tteut_en: 'Destiny/Life', eum_en: 'myeong' },
            { hanja: '哲', eum: '철', tteut: '밝다', tteut_en: 'Philosophy', eum_en: 'cheol' }, { hanja: '學', eum: '학', tteut: '배우다', tteut_en: 'Study', eum_en: 'hak' },
            { hanja: '論', eum: '론', tteut: '논하다', tteut_en: 'Debate/Theory', eum_en: 'ron' }, { hanja: '理', eum: '리', tteut: '다스리다', tteut_en: 'Principle', eum_en: 'ri' },
            { hanja: '心', eum: '심', tteut: '마음', tteut_en: 'Mind', eum_en: 'sim' }, { hanja: '性', eum: '성', tteut: '성품', tteut_en: 'Nature/Gender', eum_en: 'seong' },
            { hanja: '宗', eum: '종', tteut: '마루', tteut_en: 'Ancestor/Religion', eum_en: 'jong' }, { hanja: '敎', eum: '교', tteut: '가르침', tteut_en: 'Religion/Teaching', eum_en: 'gyo' },
            { hanja: '史', eum: '사', tteut: '역사', tteut_en: 'History', eum_en: 'sa' }, { hanja: '官', eum: '관', tteut: '벼슬', tteut_en: 'Official', eum_en: 'gwan' },
            { hanja: '僚', eum: '료', tteut: '동료', tteut_en: 'Colleague', eum_en: 'ryo' }, { hanja: '資', eum: '자', tteut: '재물', tteut_en: 'Capital/Resource', eum_en: 'ja' },
            { hanja: '本', eum: '본', tteut: '근본', tteut_en: 'Origin/Book', eum_en: 'bon' }, { hanja: '株', eum: '주', tteut: '그루', tteut_en: 'Stock/Share', eum_en: 'ju' },
            { hanja: '債', eum: '채', tteut: '빚', tteut_en: 'Debt', eum_en: 'chae' }, { hanja: '券', eum: '권', tteut: '문서', tteut_en: 'Ticket/Bond', eum_en: 'gwon' },
            { hanja: '産', eum: '산', tteut: '낳다', tteut_en: 'Produce/Asset', eum_en: 'san' }, { hanja: '業', eum: '업', tteut: '일', tteut_en: 'Industry', eum_en: 'eop' },
            { hanja: '貿', eum: '무', tteut: '바꾸다', tteut_en: 'Trade', eum_en: 'mu' }, { hanja: '易', eum: '역', tteut: '바꾸다', tteut_en: 'Easy/Change', eum_en: 'yeok' },
            { hanja: '企', eum: '기', tteut: '꾀하다', tteut_en: 'Enterprise', eum_en: 'gi' }, { hanja: '劃', eum: '획', tteut: '긋다', tteut_en: 'Plan/Stroke', eum_en: 'hoek' },
            { hanja: '統', eum: '통', tteut: '거느리다', tteut_en: 'Unite/Govern', eum_en: 'tong' }, { hanja: '領', eum: '령', tteut: '거느리다', tteut_en: 'Territory', eum_en: 'ryeong' },
            { hanja: '域', eum: '역', tteut: '지경', tteut_en: 'Region', eum_en: 'yeok' }, { hanja: '環', eum: '환', tteut: '고리', tteut_en: 'Ring/Environment', eum_en: 'hwan' },
            { hanja: '境', eum: '경', tteut: '지경', tteut_en: 'Border/State', eum_en: 'gyeong' }, { hanja: '汚', eum: '오', tteut: '더럽다', tteut_en: 'Pollute', eum_en: 'o' },
            { hanja: '染', eum: '염', tteut: '물들이다', tteut_en: 'Dye/Contaminate', eum_en: 'yeom' }, { hanja: '宇', eum: '우', tteut: '집', tteut_en: 'Universe', eum_en: 'u' },
            { hanja: '宙', eum: '주', tteut: '집', tteut_en: 'Universe', eum_en: 'ju' }, { hanja: '詩', eum: '시', tteut: '시', tteut_en: 'Poem', eum_en: 'si' },
            { hanja: '律', eum: '율', tteut: '법', tteut_en: 'Law/Rhythm', eum_en: 'yul' }, { hanja: '美', eum: '미', tteut: '아름답다', tteut_en: 'Beauty', eum_en: 'mi' },
            { hanja: '醜', eum: '추', tteut: '더럽다', tteut_en: 'Ugly', eum_en: 'chu' }, { hanja: '展', eum: '전', tteut: '펴다', tteut_en: 'Exhibition', eum_en: 'jeon' },
            { hanja: '覽', eum: '람', tteut: '보다', tteut_en: 'View', eum_en: 'ram' }, { hanja: '劇', eum: '극', tteut: '심하다', tteut_en: 'Drama/Theater', eum_en: 'geuk' },
            { hanja: '舞', eum: '무', tteut: '춤추다', tteut_en: 'Dance', eum_en: 'mu' }, { hanja: '奏', eum: '주', tteut: '아뢰다', tteut_en: 'Perform Music', eum_en: 'ju' },
            { hanja: '響', eum: '향', tteut: '울리다', tteut_en: 'Echo/Sound', eum_en: 'hyang' }, { hanja: '腦', eum: '뇌', tteut: '뇌', tteut_en: 'Brain', eum_en: 'noe' },
            { hanja: '髓', eum: '수', tteut: '골수', tteut_en: 'Marrow', eum_en: 'su' },
        ]
    };

    function initializeHanjaData() {
        Object.keys(allHanja).forEach(level => {
            hanjaData[level] = allHanja[level].map(item => ({ ...item, status: 'unseen', flipped: false }));
        });
    }

    function updateLanguage(lang) {
        currentLanguage = lang;
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-translate-key]').forEach(element => {
            const key = element.getAttribute('data-translate-key');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        renderHanjaGrid(); 
        updateProgress(); 

        languageSelector.querySelectorAll('button').forEach(button => {
            button.classList.toggle('active', button.dataset.lang === lang);
        });
    }

    function renderHanjaGrid() {
        hanjaGrid.innerHTML = '';
        const currentHanjaList = hanjaData[currentLevel];

        if (!currentHanjaList) return;

        currentHanjaList.forEach((item) => {
            const card = document.createElement('div');
            card.className = `hanja-card ${item.status}`;
            if (item.flipped) card.classList.add('flipped');

            const tteutText = currentLanguage === 'en' ? item.tteut_en : item.tteut;
            const eumText = currentLanguage === 'en' ? `(${item.eum_en})` : `(${item.eum})`;

            card.innerHTML = `
                <div class="hanja-char">${item.hanja}</div>
                <div class="hanja-info">
                    <div class="hanja-details">
                        <span class="hanja-tteut">${tteutText}</span>
                        <span class="hanja-eum">${eumText}</span>
                    </div>
                    <div class="status-controls">
                        <button class="correct-btn">O</button>
                        <button class="incorrect-btn">X</button>
                    </div>
                </div>
            `;

            card.addEventListener('click', (e) => {
                if (e.target.closest('.status-controls')) return;
                item.flipped = !item.flipped;
                card.classList.toggle('flipped');
            });

            const handleStatusClick = (newStatus) => {
                if (item.status === newStatus) {
                    item.status = 'unseen';
                } else {
                    item.status = newStatus;
                }
                item.flipped = false;
                renderHanjaGrid(); // Re-render to apply all changes
            };

            card.querySelector('.correct-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                handleStatusClick('correct');
            });

            card.querySelector('.incorrect-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                handleStatusClick('incorrect');
            });

            hanjaGrid.appendChild(card);
        });
        updateProgress();
    }

    function updateProgress() {
        const currentHanjaList = hanjaData[currentLevel] || [];
        const total = currentHanjaList.length;
        const correct = currentHanjaList.filter(item => item.status === 'correct').length;
        const incorrect = currentHanjaList.filter(item => item.status === 'incorrect').length;

        const lang = currentLanguage;
        totalCountEl.textContent = `${translations[lang].progress_total}: ${total}`;
        correctCountEl.textContent = `${translations[lang].progress_correct}: ${correct}`;
        incorrectCountEl.textContent = `${translations[lang].progress_incorrect}: ${incorrect}`;
    }

    function resetLevel() {
        if (hanjaData[currentLevel]) {
            hanjaData[currentLevel].forEach(item => {
                 item.status = 'unseen';
                 item.flipped = false;
            });
            renderHanjaGrid();
        }
    }

    levelSelector.addEventListener('change', () => {
        currentLevel = levelSelector.value;
        renderHanjaGrid();
    });

    languageSelector.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.dataset.lang;
            if (lang !== currentLanguage) {
                updateLanguage(lang);
            }
        });
    });

    resetButton.addEventListener('click', resetLevel);

    // Initial Load
    initializeHanjaData();
    updateLanguage(currentLanguage);
});
