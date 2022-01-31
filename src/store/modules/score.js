// 액션 타입 (문자열)
const CHECK_CORRECT = "score/CHECK_CORRECT";
const NEXT_PAGE = "score/NEXT_PAGE";
const RESET = "score/RESET";

// 액션 생성 함수
export function check({ isCorrect }) {
  return {
    type: CHECK_CORRECT,
    payload: {
      isCorrect,
    },
  };
}

export function next() {
  return {
    type: NEXT_PAGE,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}

// 초기 상태
const initialState = {
  score: 0,
  page: 0,
  quizs: [
    {
      q: "대한민국의 수도는?",
      img: "/city/korea.jpg",
      a: [
        {
          text: "서울",
          isCorrect: true,
        },
        {
          text: "인천",
          isCorrect: false,
        },
        {
          text: "부산",
          isCorrect: false,
        },
      ],
    },
    {
      q: "미국의 수도는?",
      img: "/city/usa.jpg",
      a: [
        {
          text: "뉴욕",
          isCorrect: false,
        },
        {
          text: "워싱턴 D.C",
          isCorrect: true,
        },
        {
          text: "샌프란시스코",
          isCorrect: false,
        },
      ],
    },
  ],
};

// 리듀서
export default function score(state = initialState, action) {
  switch (action.type) {
    case CHECK_CORRECT:
      return {
        ...state,
        score: action.payload.isCorrect ? state.score + 10 : state.score,
      };
    case NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    case RESET:
      return {
        ...state,
        score: 0,
        page: 0,
      };
    default:
      return state;
  }
}
