import Vue from "vue";
import Vuex from "vuex";
import shortid from "shortid";
import sampleNote from "@/assets/sampleNote";

Vue.use(Vuex);

export default new Vuex.Store({
  mutations: {
    setUsername(state, user) {
      state.username = user.name;
    },
    selectNoteIndex(state, index) {
      state.activeNoteIndex = index;
    },
    editNote(state, content) {
      state.notes[state.activeNoteIndex].content = content;
    },
    makeNote(state) {
      state.notes = [
        ...state.notes,
        {
          content: "<h1>새 노트</h1><p>내용을 넣어주세요.</p>",
          id: shortid.generate()
        }
      ];
    },
    setCalendar(state, calendar) {
      state.calendar = calendar;
      console.log(calendar);
    },
    handleCollapse(state, collapsed){
      state.isCollapse = collapsed
    }
  },
  actions: {
    SET_USERNAME: ({ commit }, payload) => {
      commit("setUsername", payload);
    }
  },
  state: {
    isCollapse: false,
    username: "상사 홍길동",
    calendar: {},
    activeNoteIndex: 0,
    notes: [
      {
        ...sampleNote
      },
      {
        content:
          "<h1>김사과라마바사fkweanfweaewafewafweafhewaoifhewaoi</h1><p>테스팅</p>",
        id: shortid.generate()
      }
    ],
    chat: {
      rooms: [
        {
          name: "지휘통신대대 채팅방",
          participants: [
            "대위 김영희",
            "중사 김철수",
            "상사 홍길동",
            "소령 김영철"
          ],
          messages: [
            {
              sender: "소령 김영철",
              content:
                "오늘 점심에 정신전력교육이 예정되어 있습니다. 대대 총원 참고하시어 참석하시기 바랍니다.",
              notMe: true,
              id: shortid.generate()
            }
          ],
          id: 1
        },
        {
          name: "함대사령부 소대장, 중대장, 대대장, 지휘관",
          participants: [
            "대령 김정통",
            "대령 박전산",
            "소장 이정통",
            "대령 우전산",
            "상사 홍길동"
          ],
          messages: [
            {
              sender: "대령 김정통",
              content: "오늘 점심 어디서 먹을까요?",
              notMe: true,
              id: shortid.generate()
            },
            {
              sender: "소장 이정통",
              content: "오늘은 복지 건물 가서 먹죠",
              notMe: true,
              id: shortid.generate()
            },
            {
              sender: "대령 우전산",
              content: "좋아요!",
              notMe: true,
              id: shortid.generate()
            },
            {
              sender: "상사 홍길동",
              content: "저는 전산장비 가지러 가서 혼자 밥 먹고 오겠습니다.",
              notMe: false,
              id: shortid.generate()
            },
            {
              sender: "대령 김정통",
              content: "그래요 홍길동 상사. 우리는 미리 시켜놓을까요?",
              notMe: true,
              id: shortid.generate()
            },

            {
              sender: "소장 이정통",
              content: "복지 전화번호 알려주시면 가능하죠",
              notMe: true,
              id: shortid.generate()
            },
            {
              sender: "대령 우전산",
              content: "033-539-9887이에요.",
              notMe: true,
              id: shortid.generate()
            },
            {
              sender: "소장 이정통",
              content: "그럼 제가 시킬게요",
              notMe: true,
              id: shortid.generate()
            },
            {
              sender: "대령 우전산",
              content: "감사합니다",
              notMe: true,
              id: shortid.generate()
            },
            {
              sender: "소장 이정통",
              content: "근데 메뉴는 어떻게 하실 건가요?",
              notMe: true,
              id: shortid.generate()
            },
            {
              sender: "대령 우전산",
              content: "저는 아무거나 좋습니다.",
              notMe: true,
              id: shortid.generate()
            },
            {
              sender: "대령 김정통",
              content: "저도 아무거나 시켜주세요~",
              notMe: true,
              id: shortid.generate()
            }
          ],
          id: 2
        },
        {
          name: "부 220기 단체 채팅",
          participants: [
            "중사 이중사",
            "중사 이전산",
            "중사 김전산",
            "중사 박전산",
            "상사 홍길동"
          ],
          messages: [
            {
              sender: "중사 박전산",
              content: "길동이만 상사 달았네...",
              notMe: true,
              id: shortid.generate()
            },
            {
              sender: "상사 홍길동",
              content: "ㅎㅎ 너희들도 곧 진급할거야.",
              notMe: false,
              id: shortid.generate()
            }
          ],
          id: 3
        },
        {
          name: "정보통신중대 공지",
          participants: [
            "상병 문혁주",
            "중사 김정통",
            "상사 박전산",
            "상사 김통신",
            "하사 이전산",
            "대위 조전산",
            "중위 최전산"
          ],
          messages: [
            {
              sender: "상사 홍길동",
              content: "11월에 해킹방어대회 나갈사람?",
              notMe: false,
              id: shortid.generate()
            },
            {
              sender: "중사 김정통",
              content: "저 생각해볼게요.",
              notMe: true,
              id: shortid.generate()
            },
            {
              sender: "상사 박전산",
              content: "저는 그때 바빠서 못 나갈 거 같네요. 내년에도 있겠죠?",
              notMe: true,
              id: shortid.generate()
            },
            {
              sender: "중사 김정통",
              content: "네 자주 하더라고요",
              notMe: true,
              id: shortid.generate()
            }
          ],
          id: 4
        },
        {
          name: "1함대 기타 동아리",
          participants: [
            "상병 박기타",
            "상사 김기타",
            "이병 이기타",
            "상사 홍길동"
          ],
          messages: [
            {
              sender: "상병 박기타",
              content: "저희 언제 모여서 연습 할까요?",
              notMe: true,
              id: shortid.generate()
            },
            {
              sender: "이병 박기타",
              content: "저는 오후 6시쯤이 괜찮습니다.",
              notMe: true,
              id: shortid.generate()
            }
          ],
          id: 5
        },
        {
          name: "전산병 모임",
          participants: [
            "병장 김전산",
            "상병 이전산",
            "일병 박전산",
            "이병 최전산",
            "상병 최정통",
            "병장 조정통",
            "일병 유정통",
            "상사 홍길동"
          ],
          messages: [
            {
              sender: "병장 조정통",
              content: `우리 다음주에 만나기로 한 거 알지? 
            
            다음주에 외출 같이 나가서 치킨 먹고 들어오면 스트레스 딱 풀리겠다!`,
              notMe: true,
              id: shortid.generate()
            },
            {
              sender: "상사 홍길동",
              content: "잘 갔다와라~",
              notMe: false,
              id: shortid.generate()
            }
          ],
          id: 6
        }
      ]
    }
  }
});
