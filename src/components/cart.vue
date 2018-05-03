<template>
  <div>
      <h4>已选商品</h4>
      <el-table :data="cartProducts">
          <el-table-column label="id" prop="id"></el-table-column>
          <el-table-column label="名称" prop="name"></el-table-column>
          <el-table-column label="价格" prop="price"></el-table-column>
          <el-table-column label="数量" prop="num"></el-table-column>
          <el-table-column label="操作">
              <template slot-scope="cart_scope">
                  <el-button @click="delProduct(cartProducts[cart_scope.$index])">删除</el-button>
              </template>
          </el-table-column>
      </el-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "cart",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cartProducts"])
  },
  methods: {
    ...mapActions(["delProduct"])
  }
};
</script>

<style>

</style>
