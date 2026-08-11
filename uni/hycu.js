/**
 * 한양사이버대학교(HYCU) 전용 통합 설정 및 학사 DB
 */
const HYCU_CONFIG = {
    // 1. 학교 기본 메타 정보
    univName: "한양사이버대학교",
    univLogoEmoji: "🏛️",
    maxGpa: 4.5,                // 평점 만점 (4.5 또는 4.3)
    graduationCredits: 140,     // 졸업에 필요한 총 학점

    // 2. 입학 구분 및 기본 인정 학점 옵션
    admissionTypes: [
        { value: "freshman", label: "1학년 신입학", defaultCredits: 0 },
        { value: "transfer_2", label: "2학년 편입학 (35학점 인정)", defaultCredits: 35 },
        { value: "transfer_3", label: "3학년 편입학 (70학점 인정)", defaultCredits: 70 }
    ],

  // 3. 학과 목록 (단대별/학부별 정밀 분류)
    departmentGroups: [
        {
            groupName: "공과대학",
            departments: [
                { value: "건축도시공학과", label: "건축도시공학과" },
                { value: "국방융합기술학과", label: "국방융합기술학과" },
                { value: "기계제어공학과", label: "기계제어공학과" },
                { value: "반도체공학과(계약학과)", label: "반도체공학과(계약학과)" },
                { value: "반도체시스템공학과", label: "반도체시스템공학과" },
                { value: "스마트배터리공학과", label: "스마트배터리공학과" },
                { value: "자동차IT융합공학과", label: "자동차IT융합공학과" },
                { value: "전기전자공학과", label: "전기전자공학과" },
                { value: "정보시스템통신공학과", label: "정보시스템통신공학과" },
                { value: "컴퓨터공학과", label: "컴퓨터공학과" },
                { value: "항공운항·관광항공서비스학과", label: "항공운항·관광항공서비스학과" },
                { value: "해킹보안학과", label: "해킹보안학과" },
                { value: "AI응용소프트웨어공학과", label: "AI응용소프트웨어공학과" }
            ]
        },
        {
            groupName: "융합경영대학",
            departments: [
                { value: "경영정보·AI비즈니스학과", label: "경영정보·AI비즈니스학과" },
                { value: "경제금융자산관리학과", label: "경제금융자산관리학과" },
                { value: "광고미디어학과", label: "광고미디어학과" },
                { value: "글로벌경영학과", label: "글로벌경영학과" },
                { value: "마케팅학과", label: "마케팅학과" },
                { value: "부동산학과", label: "부동산학과" },
                { value: "생산물류유통학과", label: "생산물류유통학과" },
                { value: "재무·회계·세무학과", label: "재무·회계·세무학과" },
                { value: "호텔외식경영학과", label: "호텔외식경영학과" }
            ]
        },
        {
            groupName: "인문사회대학",
            departments: [
                { value: "교육공학과", label: "교육공학과" },
                { value: "군경상담학과", label: "군경상담학과" },
                { value: "노인복지요양학과", label: "노인복지요양학과" },
                { value: "미술치료학과", label: "미술치료학과" },
                { value: "법·공무행정학과", label: "법·공무행정학과" },
                { value: "보건행정학과", label: "보건행정학과" },
                { value: "사회복지학과", label: "사회복지학과" },
                { value: "상담심리학과", label: "상담심리학과" },
                { value: "실버산업학과", label: "실버산업학과" },
                { value: "아동학과", label: "아동학과" },
                { value: "영어학과", label: "영어학과" },
                { value: "일본어학과", label: "일본어학과" },
                { value: "청소년상담학과", label: "청소년상담학과" },
                { value: "한국어교육·문화콘텐츠학과", label: "한국어교육·문화콘텐츠학과" }
            ]
        },
        {
            groupName: "디자인학부",
            departments: [
                { value: "건축공간디자인학과", label: "건축공간디자인학과" },
                { value: "뉴미디어디자인학과", label: "뉴미디어디자인학과" },
                { value: "시각디자인학과", label: "시각디자인학과" },
                { value: "예술문화디자인학과", label: "예술문화디자인학과" },
                { value: "AI산업디자인학과", label: "AI산업디자인학과" }
            ]
        },
        {
            groupName: "AI융합자유전공학부 / 공유전공학부",
            departments: [
                { value: "공유가치플랫폼전공", label: "공유가치플랫폼전공" },
                { value: "산업공학전공", label: "산업공학전공" },
                { value: "심리학전공", label: "심리학전공" },
                { value: "취·창업브릿지전공", label: "취·창업브릿지전공" }
            ]
        }
    ],

    // 4. 편입학 구분별 전적대학 인정 학점 매트릭스
    transferCreditMatrix: {
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
    },

    // 5. 학과별 교육과정 개설 과목 DB
    courseDatabase: {
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
    }
};
