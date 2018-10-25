<template>
  <DefaultLayout>
    <Card v-for="(card, index) in cards" v-bind:key="index" :cardName = "card.cardName" :tableContent = "card.tableContent"/>

  </DefaultLayout>
</template>

<script>
// @ is an alias to /src
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Card from "@/components/Card/Card.vue";
export default {
  name: "home",
  components: {
    DefaultLayout,
    Card
  },
  data() {
    return {
      cards: [
        {
          cardName: "온나라",
          tableContent: [
            {
              date: "10-18",
              title: "장병 SW 역량 강화 교육 지시"
            },
            {
              date: "10-17",
              title: "사격 훈련 계획 시달"
            },
            {
              date: "10-17",
              title: "정보통신발전사업 소요 제기 지시"
            },
            {
              date: "10-16",
              title: "2018 정보통신장비 교체사업 관련"
            },
            {
              date: "10-16",
              title: "인사명령 의뢰"
            },
            {
              date: "10-16",
              title: "파견 명령 18-9호 시달"
            },
            {
              date: "10-15",
              title: "당직 명령 18-20호 시달"
            },
            {
              date: "10-15",
              title: "종이컵 및 350종 품목 구매 결과"
            },
            {
              date: "10-14",
              title: "10월 사이버침해 보고서 시달"
            },
            {
              date: "10-13",
              title: "IPS 도입 안 점검사항"
            },
            {
              date: "10-13",
              title: "시설대대 요청사항"
            },
            {
              date: "10-13",
              title: "국방망 IP 신규 요청"
            },
            {
              date: "10-13",
              title: "10월 진급명령"
            },
            {
              date: "10-13",
              title: "10월 진급명령"
            },
            {
              date: "10-13",
              title: "10월 진급명령"
            },
            {
              date: "10-13",
              title: "10월 진급명령"
            },
            {
              date: "10-13",
              title: "신상조사 의뢰"
            },
            {
              date: "10-13",
              title: "상용정보통신장비 관련 조치방안 논의"
            }
          ]
        },
        {
          cardName: "메일",
          tableContent: [
            {
              date: "10-23",
              title: "사랑드림 아파트 관련 문의"
            },
            {
              date: "10-23",
              title: "금일 사단 공지사항입니다."
            },
            {
              date: "10-23",
              title: "대대장님 지시사항 (10.23)"
            },
            {
              date: "10-23",
              title: "대대장님 지시사항 (10.22)"
            },
            {
              date: "10-23",
              title: "주임원사 전파사항 (10.22)"
            }
          ]
        },
        {
          cardName: "일정",
          tableContent: [
            {
              date: "09:30",
              title: "대대장 주관 간담회"
            },
            {
              date: "12:00",
              title: "근무지원대대 정보통신장비 지원"
            }
          ]
        },
        {
          cardName: "바로가기",
          tableContent: [
            {
              title: "피복관리체계"
            },
            {
              title: "국방일보"
            },
            {
              title: "해군포털"
            },
            {
              title: "전장무기관리체계"
            },
            {
              title: "급여포털"
            },
            {
              title: "국방부 > 인사명령"
            },
            {
              title: "해군 1함대사령부"
            },
            {
              title: "해군 1함대 지휘통신대대"
            },
            {
              title: "해군 1함대 지휘통신대대 > 칭찬게시판"
            },
            {
              title: "피복관리체계"
            }
          ]
        }
      ]
    };
  }
};
</script>
