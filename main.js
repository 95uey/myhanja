
const hanjaDataBeginner = [
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

const hanjaDataIntermediate = [
    { hanja: '家', eum: '가', tteut: '집' },
    { hanja: '間', eum: '간', tteut: '사이' },
    { hanja: '感', eum: '감', tteut: '느끼다' },
    { hanja: '江', eum: '강', tteut: '강' },
    { hanja: '開', eum: '개', tteut: '열다' },
    { hanja: '客', eum: '객', tteut: '손님' },
    { hanja: '去', eum: '거', tteut: '가다' },
    { hanja: '建', eum: '건', tteut: '세우다' },
    { hanja: '格', eum: '격', tteut: '격식' },
    { hanja: '見', eum: '견', tteut: '보다' },
    { hanja: '決', eum: '결', tteut: '결단하다' },
    { hanja: '京', eum: '경', tteut: '서울' },
    { hanja: '計', eum: '계', tteut: '세다' },
    { hanja: '古', eum: '고', tteut: '옛' },
    { hanja: '工', eum: '공', tteut: '장인' },
    { hanja: '敎', eum: '교', tteut: '가르치다' },
    { hanja: '交', eum: '교', tteut: '사귀다' },
    { hanja: '軍', eum: '군', tteut: '군사' },
    { hanja: '近', eum: '근', tteut: '가깝다' },
    { hanja: '給', eum: '급', tteut: '주다' },
    { hanja: '記', eum: '기', tteut: '기록하다' },
    { hanja: '技', eum: '기', tteut: '재주' },
    { hanja: '南', eum: '남', tteut: '남녘' },
    { hanja: '內', eum: '내', tteut: '안' },
    { hanja: '女', eum: '녀', tteut: '여자' },
    { hanja: '年', eum: '년', tteut: '해' },
    { hanja: '念', eum: '념', tteut: '생각' },
    { hanja: '農', eum: '농', tteut: '농사' },
    { hanja: '能', eum: '능', tteut: '능하다' },
    { hanja: '答', eum: '답', tteut: '대답하다' },
    { hanja: '代', eum: '대', tteut: '대신' },
    { hanja: '道', eum: '도', tteut: '길' },
    { hanja: '讀', eum: '독', tteut: '읽다' },
    { hanja: '動', eum: '동', tteut: '움직이다' },
    { hanja: '得', eum: '득', tteut: '얻다' },
    { hanja: '理', eum: '리', tteut: '이치' },
    { hanja: '利', eum: '리', tteut: '이롭다' },
    { hanja: '林', eum: '림', tteut: '수풀' },
    { hanja: '萬', eum: '만', tteut: '일만' },
    { hanja: '面', eum: '면', tteut: '얼굴' },
    { hanja: '命', eum: '명', tteut: '목숨' },
    { hanja: '問', eum: '문', tteut: '묻다' },
    { hanja: '物', eum: '물', tteut: '물건' },
    { hanja: '米', eum: '미', tteut: '쌀' },
    { hanja: '美', eum: '미', tteut: '아름답다' },
    { hanja: '反', eum: '반', tteut: '돌이키다' },
    { hanja: '發', eum: '발', tteut: '쏘다' },
    { hanja: '方', eum: '방', tteut: '모' },
    { hanja: '法', eum: '법', tteut: '법' },
    { hanja: '病', eum: '병', tteut: '질병' },
    { hanja: '報', eum: '보', tteut: '갚다' },
    { hanja: '福', eum: '복', tteut: '복' },
    { hanja: '本', eum: '본', tteut: '근본' },
    { hanja: '不', eum: '불', tteut: '아니다' },
    { hanja: '事', eum: '사', tteut: '일' },
    { hanja: '用', eum: '용', tteut: '쓰다' },
    { hanja: '思', eum: '사', tteut: '생각하다' },
    { hanja: '社', eum: '사', tteut: '모이다' },
    { hanja: '色', eum: '색', tteut: '빛' },
    { hanja: '生', eum: '생', tteut: '나다' },
    { hanja: '西', eum: '서', tteut: '서녘' },
    { hanja: '席', eum: '석', tteut: '자리' },
    { hanja: '線', eum: '선', tteut: '줄' },
    { hanja: '成', eum: '성', tteut: '이루다' },
    { hanja: '世', eum: '세', tteut: '세상' },
    { hanja: '消', eum: '소', tteut: '사라지다' },
    { hanja: '速', eum: '속', tteut: '빠르다' },
    { hanja: '送', eum: '송', tteut: '보내다' },
    { hanja: '習', eum: '습', tteut: '익히다' },
    { hanja: '勝', eum: '승', tteut: '이기다' },
    { hanja: '市', eum: '시', tteut: '시장' },
    { hanja: '室', eum: '실', tteut: '집' },
    { hanja: '心', eum: '심', tteut: '마음' },
    { hanja: '安', eum: '안', tteut: '편안하다' },
    { hanja: '夜', eum: '야', tteut: '밤' },
    { hanja: '語', eum: '어', tteut: '말' },
    { hanja: '言', eum: '언', tteut: '말씀' },
    { hanja: '業', eum: '업', tteut: '업' },
    { hanja: '然', eum: '연', tteut: '그러하다' },
    { hanja: '熱', eum: '열', tteut: '덥다' },
    { hanja: '愛', eum: '애', tteut: '사랑' },
    { hanja: '溫', eum: '온', tteut: '따뜻하다' },
    { hanja: '完', eum: '완', tteut: '완전하다' },
    { hanja: '外', eum: '외', tteut: '밖' },
    { hanja: '要', eum: '요', tteut: '구하다' },
    { hanja: '浴', eum: '욕', tteut: '목욕하다' },
    { hanja: '勇', eum: '용', tteut: '날래다' },
    { hanja: '友', eum: '우', tteut: '벗' },
    { hanja: '運', eum: '운', tteut: '옮기다' },
    { hanja: '員', eum: '원', tteut: '인원' },
    { hanja: '院', eum: '원', tteut: '집' },
    { hanja: '園', eum: '원', tteut: '동산' },
    { hanja: '遠', eum: '원', tteut: '멀다' },
    { hanja: '位', eum: '위', tteut: '자리' },
    { hanja: '有', eum: '유', tteut: '있다' },
    { hanja: '肉', eum: '육', tteut: '고기' },
    { hanja: '銀', eum: '은', tteut: '은' },
    { hanja: '音', eum: '음', tteut: '소리' },
    { hanja: '意', eum: '의', tteut: '뜻' },
    { hanja: '醫', eum: '의', tteut: '의원' },
    { hanja: '衣', eum: '의', tteut: '옷' },
    { hanja: '議', eum: '의', tteut: '의논하다' },
    { hanja: '自', eum: '자', tteut: '스스로' },
    { hanja: '作', eum: '작', tteut: '짓다' },
    { hanja: '長', eum: '장', tteut: '어른' },
    { hanja: '才', eum: '재', tteut: '재주' },
    { hanja: '電', eum: '전', tteut: '번개' },
    { hanja: '店', eum: '점', tteut: '가게' },
    { hanja: '情', eum: '정', tteut: '뜻' },
    { hanja: '定', eum: '정', tteut: '정하다' },
    { hanja: '弟', eum: '제', tteut: '아우' },
    { hanja: '朝', eum: '조', tteut: '아침' },
    { hanja: '族', eum: '족', tteut: '겨레' },
    { hanja: '終', eum: '종', tteut: '마치다' },
    { hanja: '主', eum: '주', tteut: '주인' },
    { hanja: '住', eum: '주', tteut: '살다' },
    { hanja: '知', eum: '지', tteut: '알다' },
    { hanja: '直', eum: '직', tteut: '곧다' },
    { hanja: '進', eum: '진', tteut: '나아가다' },
    { hanja: '車', eum: '차', tteut: '수레' },
    { hanja: '參', eum: '참', tteut: '참여하다' },
    { hanja: '窓', eum: '창', tteut: '창' },
    { hanja: '體', eum: '체', tteut: '몸' },
    { hanja: '初', eum: '초', tteut: '처음' },
    { hanja: '村', eum: '촌', tteut: '마을' },
    { hanja: '通', eum: '통', tteut: '통하다' },
    { hanja: '特', eum: '특', tteut: '특별하다' },
    { hanja: '敗', eum: '패', tteut: '지다' },
    { hanja: '便', eum: '편', tteut: '편하다' },
    { hanja: '平', eum: '평', tteut: '평평하다' },
    { hanja: '風', eum: '풍', tteut: '바람' },
    { hanja: '漢', eum: '한', tteut: '한수' },
    { hanja: '海', eum: '해', tteut: '바다' },
    { hanja: '解', eum: '해', tteut: '풀다' },
    { hanja: '活', eum: '활', tteut: '살다' },
    { hanja: '孝', eum: '효', tteut: '효도' },
    { hanja: '兄', eum: '형', tteut: '형' },
    { hanja: '畫', eum: '화', tteut: '그림' },
    { hanja: '歡', eum: '환', tteut: '기쁘다' },
];

const hanjaDataAdvanced = [
    { hanja: '價', eum: '가', tteut: '값' },
    { hanja: '歌', eum: '가', tteut: '노래' },
    { hanja: '各', eum: '각', tteut: '각각' },
    { hanja: '角', eum: '각', tteut: '뿔' },
    { hanja: '看', eum: '간', tteut: '보다' },
    { hanja: '割', eum: '할', tteut: '베다' },
    { hanja: '感', eum: '감', tteut: '느낄' },
    { hanja: '減', eum: '감', tteut: '덜다' },
    { hanja: '講', eum: '강', tteut: '외다' },
    { hanja: '改', eum: '개', tteut: '고치다' },
    { hanja: '個', eum: '개', tteut: '낱' },
    { hanja: '客', eum: '객', tteut: '손' },
    { hanja: '去', eum: '거', tteut: '갈' },
    { hanja: '健', eum: '건', tteut: '굳셀' },
    { hanja: '格', eum: '격', tteut: '격' },
    { hanja: '擊', eum: '격', tteut: '칠' },
    { hanja: '犬', eum: '견', tteut: '개' },
    { hanja: '結', eum: '결', tteut: '맺다' },
    { hanja: '競', eum: '경', tteut: '다툴' },
    { hanja: '景', eum: '경', tteut: '볕' },
    { hanja: '輕', eum: '경', tteut: '가벼울' },
    { hanja: '慶', eum: '경', tteut: '경사' },
    { hanja: '季', eum: '계', tteut: '계절' },
    { hanja: '苦', eum: '고', tteut: '쓸' },
    { hanja: '曲', eum: '곡', tteut: '굽을' },
    { hanja: '功', eum: '공', tteut: '공' },
    { hanja: '過', eum: '과', tteut: '지날' },
    { hanja: '關', eum: '관', tteut: '빗장' },
    { hanja: '觀', eum: '관', tteut: '볼' },
    { hanja: '光', eum: '광', tteut: '빛' },
    { hanja: '掛', eum: '괘', tteut: '걸다' },
    { hanja: '具', eum: '구', tteut: '갖출' },
    { hanja: '求', eum: '구', tteut: '구할' },
    { hanja: '區', eum: '구', tteut: '구역' },
    { hanja: '舊', eum: '구', tteut: '옛' },
    { hanja: '句', eum: '구', tteut: '글귀' },
    { hanja: '救', eum: '구', tteut: '구원할' },
    { hanja: '球', eum: '구', tteut: '공' },
    { hanja: '君', eum: '군', tteut: '임금' },
    { hanja: '郡', eum: '군', tteut: '고을' },
    { hanja: '宮', eum: '궁', tteut: '집' },
    { hanja: '卷', eum: '권', tteut: '책' },
    { hanja: '貴', eum: '귀', tteut: '귀할' },
    { hanja: '均', eum: '균', tteut: '고를' },
    { hanja: '根', eum: '근', tteut: '뿌리' },
    { hanja: '急', eum: '급', tteut: '급할' },
    { hanja: '級', eum: '급', tteut: '등급' },
    { hanja: '機', eum: '기', tteut: '틀' },
    { hanja: '技', eum: '기', tteut: '재주' },
    { hanja: '旣', eum: '기', tteut: '이미' },
    { hanja: '寄', eum: '기', tteut: '부칠' },
    { hanja: '期', eum: '기', tteut: '기약할' },
    { hanja: '氣', eum: '기', tteut: '기운' },
    { hanja: '暖', eum: '난', tteut: '따뜻할' },
    { hanja: '難', eum: '난', tteut: '어려울' },
    { hanja: '諾', eum: '낙', tteut: '허락할' },
    { hanja: '單', eum: '단', tteut: '홑' },
    { hanja: '談', eum: '담', tteut: '말씀' },
    { hanja: '堂', eum: '당', tteut: '집' },
    { hanja: '對', eum: '대', tteut: '대할' },
    { hanja: '德', eum: '덕', tteut: '덕' },
    { hanja: '到', eum: '도', tteut: '이를' },
    { hanja: '徒', eum: '도', tteut: '무리' },
    { hanja: '島', eum: '도', tteut: '섬' },
    { hanja: '都', eum: '도', tteut: '도읍' },
    { hanja: '獨', eum: '독', tteut: '홀로' },
    { hanja: '督', eum: '독', tteut: '살펴볼' },
    { hanja: '童', eum: '동', tteut: '아이' },
    { hanja: '登', eum: '등', tteut: '오를' },
    { hanja: '等', eum: '등', tteut: '가지런할' },
    { hanja: '落', eum: '락', tteut: '떨어질' },
    { hanja: '良', eum: '량', tteut: '어질' },
    { hanja: '兩', eum: '량', tteut: '두' },
    { hanja: '旅', eum: '려', tteut: '나그네' },
    { hanja: '力', eum: '력', tteut: '힘' },
    { hanja: '曆', eum: '력', tteut: '책력' },
    { hanja: '連', eum: '련', tteut: '잇닿을' },
    { hanja: '練', eum: '련', tteut: '익힐' },
    { hanja: '領', eum: '령', tteut: '거느릴' },
    { hanja: '禮', eum: '례', tteut: '예도' },
    { hanja: '勞', eum: '로', tteut: '일할' },
    { hanja: '路', eum: '로', tteut: '길' },
    { hanja: '綠', eum: '록', tteut: '푸를' },
    { hanja: '論', eum: '론', tteut: '말할' },
    { hanja: '料', eum: '료', tteut: '헤아릴' },
    { hanja: '類', eum: '류', tteut: '무리' },
    { hanja: '陸', eum: '륙', tteut: '뭍' },
    { hanja: '律', eum: '률', tteut: '법' },
    { hanja: '率', eum: '률', tteut: '거느릴' },
    { hanja: '末', eum: '말', tteut: '끝' },
    { hanja: '忙', eum: '망', tteut: '바쁠' },
    { hanja: '妹', eum: '매', tteut: '누이' },
    { hanja: '脈', eum: '맥', tteut: '줄기' },
    { hanja: '免', eum: '면', tteut: '면할' },
    { hanja: '毛', eum: '모', tteut: '털' },
    { hanja: '務', eum: '무', tteut: '힘쓸' },
    { hanja: '貿', eum: '무', tteut: '바꿀' },
    { hanja: '墨', eum: '묵', tteut: '먹' },
    { hanja: '務', eum: '무', tteut: '일' },
    { hanja: '未', eum: '미', tteut: '아닐' },
    { hanja: '米', eum: '미', tteut: '쌀' },
    { hanja: '密', eum: '밀', tteut: '빽빽할' },
    { hanja: '泊', eum: '박', tteut: '배댈' },
    { hanja: '半', eum: '반', tteut: '절반' },
    { hanja: '倍', eum: '배', tteut: '곱' },
    { hanja: '犯', eum: '범', tteut: '범할' },
    { hanja: '壁', eum: '벽', tteut: '벽' },
    { hanja: '變', eum: '변', tteut: '변할' },
    { hanja: '別', eum: '별', tteut: '나눌' },
    { hanja: '補', eum: '보', tteut: '기울' },
    { hanja: '步', eum: '보', tteut: '걸음' },
    { hanja: '保', eum: '보', tteut: '지킬' },
    { hanja: '富', eum: '부', tteut: '가멸' },
    { hanja: '夫', eum: '부', tteut: '지아비' },
    { hanja: '婦', eum: '부', tteut: '며느리' },
    { hanja: '附', eum: '부', tteut: '붙을' },
    { hanja: '悲', eum: '비', tteut: '슬플' },
    { hanja: '備', eum: '비', tteut: '갖출' },
    { hanja: '貧', eum: '빈', tteut: '가난할' },
    { hanja: '士', eum: '사', tteut: '선비' },
    { hanja: '絲', eum: '사', tteut: '실' },
    { hanja: '寺', eum: '사', tteut: '절' },
    { hanja: '謝', eum: '사', tteut: '사례할' },
    { hanja: '森', eum: '삼', tteut: '수풀' },
    { hanja: '賞', eum: '상', tteut: '상줄' },
    { hanja: '箱', eum: '상', tteut: '상자' },
    { hanja: '雙', eum: '쌍', tteut: '쌍' },
    { hanja: '城', eum: '성', tteut: '성' },
    { hanja: '星', eum: '성', tteut: '별' },
    { hanja: '聖', eum: '성', tteut: '성인' },
    { hanja: '孫', eum: '손', tteut: '손자' },
    { hanja: '宿', eum: '숙', tteut: '잘' },
    { hanja: '順', eum: '순', tteut: '순할' },
    { hanja: '術', eum: '술', tteut: '꾀' },
    { hanja: '拾', eum: '습', tteut: '주울' },
    { hanja: '詩', eum: '시', tteut: '시' },
    { hanja: '式', eum: '식', tteut: '법' },
    { hanja: '植', eum: '식', tteut: '심을' },
    { hanja: '識', eum: '식', tteut: '알' },
    { hanja: '神', eum: '신', tteut: '귀신' },
    { hanja: '申', eum: '신', tteut: '펼' },
    { hanja: '失', eum: '실', tteut: '잃을' },
    { hanja: '實', eum: '실', tteut: '열매' },
    { hanja: '深', eum: '심', tteut: '깊을' },
    { hanja: '我', eum: '아', tteut: '나' },
    { hanja: '惡', eum: '악', tteut: '악할' },
    { hanja: '顔', eum: '안', tteut: '얼굴' },
    { hanja: '暗', eum: '암', tteut: '어두울' },
    { hanja: '壓', eum: '압', tteut: '누를' },
    { hanja: '藥', eum: '약', tteut: '약' },
    { hanja: '羊', eum: '양', tteut: '양' },
    { hanja: '養', eum: '양', tteut: '기를' },
    { hanja: '億', eum: '억', tteut: '억' },
    { hanja: '易', eum: '역', tteut: '바꿀' },
    { hanja: '逆', eum: '역', tteut: '거스를' },
    { hanja: '硏', eum: '연', tteut: '갈' },
    { hanja: '鹽', eum: '염', tteut: '소금' },
    { hanja: '榮', eum: '영', tteut: '영화' },
    { hanja: '豫', eum: '예', tteut: '미리' },
    { hanja: '誤', eum: '오', tteut: '그르칠' },
    { hanja: '玉', eum: '옥', tteut: '구슬' },
    { hanja: '浴', eum: '욕', tteut: '목욕할' },
    { hanja: '欲', eum: '욕', tteut: '하고자할' },
    { hanja: '雲', eum: '운', tteut: '구름' },
    { hanja: '慰', eum: '위', tteut: '위로할' },
    { hanja: '危', eum: '위', tteut: '위태할' },
    { hanja: '圍', eum: '위', tteut: '에워쌀' },
    { hanja: '衛', eum: '위', tteut: '지킬' },
    { hanja: '乳', eum: '유', tteut: '젖' },
    { hanja: '油', eum: '유', tteut: '기름' },
    { hanja: '遺', eum: '유', tteut: '남길' },
    { hanja: '恩', eum: '은', tteut: '은혜' },
    { hanja: '引', eum: '인', tteut: '끌' },
    { hanja: '忍', eum: '인', tteut: '참을' },
    { hanja: '認', eum: '인', tteut: '알' },
    { hanja: '任', eum: '임', tteut: '맡길' },
    { hanja: '姉', eum: '자', tteut: '손윗누이' },
    { hanja: '慈', eum: '자', tteut: '사랑' },
    { hanja: '孫', eum: '손', tteut: '손자' },
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

    correctCountEl.textContent = `맞음: ${correctCount}`;
    incorrectCountEl.textContent = `틀림: ${incorrectCount}`;
}

// Function to load Hanja data based on level
function loadHanjaData(level) {
    let dataToLoad;
    switch (level) {
        case 'beginner':
            dataToLoad = hanjaDataBeginner;
            break;
        case 'intermediate':
            dataToLoad = hanjaDataIntermediate;
            break;
        case 'advanced':
            dataToLoad = hanjaDataAdvanced;
            break;
        default:
            dataToLoad = hanjaDataBeginner; // Default to beginner
    }

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
