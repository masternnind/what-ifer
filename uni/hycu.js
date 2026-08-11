window.HYCU_DATA = {
    id: "hycu",
    name: "한양사이버대학교",
    maxGpa: "4.5",
    totalGraduationCredits: 140,
    
    // PDF 기반 100% 공식 부/복수전공 가능 학과 명단
    colleges: {
        "공과대학": [
            "건축도시공학과", "국방융합기술학과", "기계제어공학과", "반도체시스템공학과", 
            "스마트배터리공학과", "자동차IT융합공학과", "전기전자공학과", "컴퓨터공학과"
        ],
        "융합경영대학": [
            "관광항공경영학과", "응용소프트웨어공학과", "경영정보·AI비즈니스학과", "경제금융자산관리학과", 
            "광고미디어학과", "글로벌경영학과", "마케팅학과", "부동산학과", "생산·물류·유통학과", 
            "재무·회계·세무학과", "호텔외식경영학과"
        ],
        "인문사회대학": [
            "교육공학과", "군경상담학과", "미술치료학과", "법·공무행정학과", "보건행정학과", 
            "사회복지학과", "상담심리학과", "아동학과", "영어학과", "일본어학과", 
            "청소년상담학과", "한국어교육·문화콘텐츠학과"
        ],
        "디자인학부": [
            "건축공간디자인학과", "뉴미디어디자인학과", "시각디자인학과", "예술문화디자인학과", "AI산업디자인학과"
        ]
    },

    // 2026 교육과정 최신 개설 교과목 DB
    courses: {
        "건축도시공학과": [
            { name: "건축학개론", credits: 3 }, { name: "도시및지역경제", credits: 3 }, { name: "건축3D모델링", credits: 3 },
            { name: "도시계획", credits: 3 }, { name: "도시설계론", credits: 3 }, { name: "건축계획", credits: 3 },
            { name: "건축재료", credits: 3 }, { name: "단지계획및개발", credits: 3 }, { name: "건축구법", credits: 3 },
            { name: "도시건축과BIM", credits: 3 }, { name: "건축도시방재", credits: 3 }, { name: "토지이용계획", credits: 3 },
            { name: "도시계량분석", credits: 3 }, { name: "건축구조역학", credits: 3 }, { name: "건축시공", credits: 3 },
            { name: "스마트건설경영", credits: 3 }, { name: "공정원가통합관리", credits: 3 }, { name: "GIS개론및활용", credits: 3 },
            { name: "건축설비", credits: 3 }, { name: "도시재생", credits: 3 }, { name: "지구단위계획의이해", credits: 3 },
            { name: "철근콘크리트구조설계", credits: 3 }, { name: "디지털생산관리및자동화", credits: 3 }, { name: "건설프로젝트금융", credits: 3 },
            { name: "친환경건축기술", credits: 3 }, { name: "국토및지역계획", credits: 3 }, { name: "도시주택경제론", credits: 3 },
            { name: "강구조설계", credits: 3 }, { name: "건축법규", credits: 3 }, { name: "교통계획", credits: 3 },
            { name: "BIM통합설계프로젝트1", credits: 3 }, { name: "넥스트시티", credits: 3 }, { name: "도시경관계획", credits: 3 },
            { name: "건설계약및클레임", credits: 3 }, { name: "스마트교통시스템", credits: 3 }, { name: "건축설계실무", credits: 3 },
            { name: "건설자산관리BIM", credits: 3 }, { name: "졸업프로젝트(졸업필수)", credits: 2 }
        ],
        "건축공간디자인학과": [
            { name: "디지털조형연습", credits: 4 }, { name: "드로잉과창의계발", credits: 3 }, { name: "일러스트레이터실습", credits: 3 },
            { name: "사진과여행", credits: 3 }, { name: "디지털포토그래피", credits: 3 }, { name: "아이디어발상과표현", credits: 3 },
            { name: "캐드실습", credits: 3 }, { name: "레이아웃", credits: 3 }, { name: "색채실습", credits: 3 },
            { name: "가상현실스튜디오", credits: 3 }, { name: "가구디자인스튜디오", credits: 3 }, { name: "공간조형과드로잉", credits: 3 },
            { name: "공간디자인론", credits: 3 }, { name: "디자인조사방법", credits: 3 }, { name: "건축학개론", credits: 3 },
            { name: "디자인사", credits: 3 }, { name: "실내디자인", credits: 4 }, { name: "색채심리학", credits: 3 },
            { name: "건축구법", credits: 3 }, { name: "생활공예디자인", credits: 3 }, { name: "AI디자인", credits: 3 },
            { name: "인포메이션디자인", credits: 3 }, { name: "디스플레이", credits: 3 }, { name: "건축디자인", credits: 3 },
            { name: "환경·공공디자인", credits: 4 }, { name: "전시디자인스튜디오", credits: 4 }, { name: "홈데코레이션", credits: 3 },
            { name: "3D프린팅&모델링", credits: 3 }, { name: "창의벤처디자인", credits: 3 }, { name: "공간디자인프로그래밍", credits: 3 },
            { name: "한국건축과공간문화", credits: 3 }, { name: "근현대공간디자인의이해", credits: 3 }, { name: "철근콘크리트구조설계", credits: 3 },
            { name: "브랜드전략과디자인", credits: 3 }, { name: "라이프스타일디자인", credits: 3 }, { name: "디자인과마케팅", credits: 3 },
            { name: "디자인졸업프로젝트(건축공간)", credits: 2 }, { name: "도시계획", credits: 3 }, { name: "친환경건축기술", credits: 3 },
            { name: "포트폴리오디자인", credits: 3 }, { name: "공공디자인", credits: 3 }, { name: "4차산업디자인", credits: 4 },
            { name: "브랜드경험과디자인", credits: 3 }
        ],
        "일반/교양": [
            { name: "대학글쓰기", credits: 2 }, { name: "컴퓨터활용실습", credits: 2 }, { name: "기초영어", credits: 2 },
            { name: "현대사회와윤리", credits: 3 }, { name: "경영학개론", credits: 3 }
        ]
    }
};
