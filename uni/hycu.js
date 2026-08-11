/**
 * 한양사이버대학교 (HYCU) 정보 정의 파일
 * 위치: uni/hycu.js
 */
window.HYCU_DATA = {
    id: "hycu",
    name: "한양사이버대학교",
    totalGraduationCredits: 140,
    
    // 과목 데이터베이스
    courses: {
        "건축도시공학과": [
            { name: "건축재료", credits: 3 },
            { name: "건축시공", credits: 3 },
            { name: "건축구조역학", credits: 3 },
            { name: "BIM통합설계프로젝트1(PBL)", credits: 3 },
            { name: "도시주택경제론", credits: 3 },
            { name: "철근콘크리트구조설계", credits: 3 },
            { name: "건축설계실무", credits: 3 },
            { name: "건설계약및클레임", credits: 3 },
            { name: "건축도시방재", credits: 3 },
            { name: "넥스트시티", credits: 3 },
            { name: "졸업프로젝트(졸업필수)", credits: 2 },
            { name: "도시계획", credits: 3, isCommon: true },
            { name: "건축구법", credits: 3, isCommon: true },
            { name: "친환경건축기술", credits: 3, isCommon: true }
        ],
        "건축공간디자인학과": [
            { name: "일러스트레이터실습", credits: 3 },
            { name: "공간디자인론", credits: 3 },
            { name: "건축디자인", credits: 3 },
            { name: "건축디자인프로그래밍", credits: 3 },
            { name: "라이프스타일디자인", credits: 3 },
            { name: "디자인졸업프로젝트(졸업필수)", credits: 2 },
            { name: "도시계획", credits: 3, isCommon: true },
            { name: "건축구법", credits: 3, isCommon: true },
            { name: "친환경건축기술", credits: 3, isCommon: true }
        ],
        "일반/교양": [
            { name: "대학글쓰기", credits: 2 },
            { name: "컴퓨터활용실습", credits: 2 },
            { name: "기초영어", credits: 2 },
            { name: "현대사회와윤리", credits: 3 },
            { name: "경영학개론", credits: 3 }
        ]
    },

    // 전적대 인정 학점 매트릭스
    transferMatrix: {
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
    }
};
