<template>
    <el-card class="card">
  <div slot="header">
    <el-button class = "card-button" type="primary" plain>{{cardName}}</el-button>
  </div>
    <el-table :row-class-name="tableRowClassName"
      :data="tableContent"
      style="width: 100%">
       <el-table-column v-if="cardName=='온나라'" label="결재대기중인 공문">
      <el-table-column width = "80%"
        prop="date"
        label="날짜">
      </el-table-column>
      <el-table-column 
        prop="title"
        label="제목">
      </el-table-column>
       </el-table-column>
       <el-table-column v-else-if="cardName=='메일'" label="열람하지 않은 메일">
      <el-table-column width = "80%"
        prop="date"
        label="날짜">
      </el-table-column>
      <el-table-column 
        prop="title"
        label="제목">
      </el-table-column>
       </el-table-column>
       <el-table-column v-else-if="cardName=='일정'" label="오늘 일정">
      <el-table-column width = "80%"
        prop="date"
        label="시간">
      </el-table-column>
      <el-table-column 
        prop="title"
        label="할 일">
      </el-table-column>
       </el-table-column>
       <el-table-column v-else label="내가 추가한 바로가기" 
        prop="title">
      </el-table-column>
      
      
    </el-table>
    <el-button type="primary" v-if="cardName=='메일'" class = "card-bottom-button">메일 작성하기</el-button>
    <el-button type="primary" v-else-if="cardName=='일정'" class = "card-bottom-button">새 일정 만들기</el-button>
    <el-button type="primary" v-else-if="cardName=='바로가기'" class = "card-bottom-button">바로가기 추가하기</el-button>

    </el-card>

</template>
<script>
export default {
  name: "Card",
  props: ["cardName", "tableContent"],
  methods: {
    tableRowClassName({ row, rowIndex }) {
      return "card-table-row";
    }
  }
};
</script>
<style lang = "sass">
    .card
        width: calc(100% / 4 - 50px)
        margin: 25px
        min-width: 350px
        overflow-y: auto !important
        .card-button
            width: 100%
        .card-table-row
          &:hover
            cursor: pointer
        .card-bottom-button
          width: 100%
          margin-top: 10px
</style>
