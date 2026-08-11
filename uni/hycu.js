/**
 * 한양사이버대학교(HYCU) 전용 학사 DB 및 기준 정보
 */

// 1. 학과별 2026 교육과정 교과목 DB
const HYCU_COURSE_DATABASE = {
    "건축도시공학과": [
        { name: "건축학개론", credits: 3 },
        { name: "도시및지역경제", credits: 3 },
        { name: "건축3D모델링", credits: 3 },
        { name: "도시계획", credits: 3 },
        { name: "도시설계론", credits: 3 },
        { name: "건축계획", credits: 3 },
        { name: "건축재료", credits: 3 },
        { name: "단지계획및개발", credits: 3 },
        { name: "건축구법", credits: 3 },
        { name: "도시건축과BIM", credits: 3 },
        { name: "건축도시방재", credits: 3 },
        { name: "토지이용계획", credits: 3 },
        { name: "도시계량분석", credits: 3 },
        { name: "건축구조역학", credits: 3 },
        { name: "건축시공", credits: 3 },
        { name: "스마트건설경영", credits: 3 },
        { name: "공정원가통합관리", credits: 3 },
        { name: "GIS개론및활용", credits: 3 },
        { name: "건축설비", credits: 3 },
        { name: "도시재생", credits: 3 },
        { name: "지구단위계획의이해", credits: 3 },
        { name: "철근콘크리트구조설계", credits: 3 },
        { name: "디지털생산관리및자동화", credits: 3 },
        { name: "건설프로젝트금융", credits: 3 },
        { name: "친환경건축기술", credits: 3 },
        { name: "국토및지역계획", credits: 3 },
        { name: "도시주택경제론", credits: 3 },
        { name: "강구조설계", credits: 3 },
        { name: "건축법규", credits: 3 },
        { name: "교통계획", credits: 3 },
        { name: "BIM통합설계프로젝트1", credits: 3 },
        { name: "넥스트시티", credits: 3 },
        { name: "도시경관계획", credits: 3 },
        { name: "건설계약및클레임", credits: 3 },
        { name: "스마트교통시스템", credits: 3 },
        { name: "건축설계실무", credits: 3 },
        { name: "건설자산관리BIM", credits: 3 },
        { name: "졸업프로젝트(졸업필수)", credits: 2 }
    ],
    "건축공간디자인학과": [
        { name: "디지털조형연습", credits: 4 },
        { name: "드로잉과창의계발", credits: 3 },
        { name: "일러스트레이터실습", credits: 3 },
        { name: "사진과여행", credits: 3 },
        { name: "디지털포토그래피", credits: 3 },
        { name: "아이디어발상과표현", credits: 3 },
        { name: "캐드실습", credits: 3 },
        { name: "레이아웃", credits: 3 },
        { name: "색채실습", credits: 3 },
        { name: "가상현실스튜디오", credits: 3 },
        { name: "가구디자인스튜디오", credits: 3 },
        { name: "공간조형과드로잉", credits: 3 },
        { name: "공간디자인론", credits: 3 },
        { name: "디자인조사방법", credits: 3 },
        { name: "건축학개론", credits: 3 },
        { name: "디자인사", credits: 3 },
        { name: "실내디자인", credits: 4 },
        { name: "색채심리학", credits: 3 },
        { name: "건축구법", credits: 3 },
        { name: "생활공예디자인", credits: 3 },
        { name: "AI디자인", credits: 3 },
        { name: "인포메이션디자인", credits: 3 },
        { name: "디스플레이", credits: 3 },
        { name: "건축디자인", credits: 3 },
        { name: "환경·공공디자인", credits: 4 },
        { name: "전시디자인스튜디오", credits: 4 },
        { name: "홈데코레이션", credits: 3 },
        { name: "3D프린팅&모델링", credits: 3 },
        { name: "창의벤처디자인", credits: 3 },
        { name: "공간디자인프로그래밍", credits: 3 },
        { name: "한국건축과공간문화", credits: 3 },
        { name: "근현대공간디자인의이해", credits: 3 },
        { name: "철근콘크리트구조설계", credits: 3 },
        { name: "브랜드전략과디자인", credits: 3 },
        { name: "라이프스타일디자인", credits: 3 },
        { name: "디자인과마케팅", credits: 3 },
        { name: "디자인졸업프로젝트(건축공간)", credits: 2 },
        { name: "도시계획", credits: 3 },
        { name: "친환경건축기술", credits: 3 },
        { name: "포트폴리오디자인", credits: 3 },
        { name: "공공디자인", credits: 3 },
        { name: "4차산업디자인", credits: 4 },
        { name: "브랜드경험과디자인", credits: 3 }
    ],
    "일반/교양": [
        { name: "대학글쓰기", credits: 2 },
        { name: "컴퓨터활용실습", credits: 2 },
        { name: "기초영어", credits: 2 },
        { name: "현대사회와윤리", credits: 3 },
        { name: "경영학개론", credits: 3 }
    ]
};

// 2. 편입학 구분별 전적대학 인정 학점 매트릭스
const HYCU_TRANSFER_CREDIT_MATRIX = {
    'transfer_2': {
        'same': { lib: 18, maj: 12, gen: 5, total: 35 },
        'similar': { lib: 24, maj: 6, gen: 5, total: 35 },
        'other': { lib: 24, maj: 0, gen: 11, total: 35 }
    },
    'transfer_3': {
        'same': { lib: 36, maj: 24, gen: 10, total: 70 },
        'similar': { lib: 48, maj: 12, gen: 10, total: 70 },
        'other': { lib: 48, maj: 0, gen: 22, total: 70 }
    },
    'freshman': {
        'same': { lib: 0, maj: 0, gen: 0, total: 0 },
        'similar': { lib: 0, maj: 0, gen: 0, total: 0 },
        'other': { lib: 0, maj: 0, gen: 0, total: 0 }
    }
};
