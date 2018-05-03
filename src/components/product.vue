<template>
  <div class="product">
      <h4>商品信息</h4>
      <el-table :data="shoplist" stripe>
        <el-table-column label="id" prop="id"></el-table-column>
        <el-table-column label="名称" prop="name"></el-table-column>
        <el-table-column label="价格" prop="price"></el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button @click.native.prevent="addToCart(shoplist[scope.$index])">加入购物车</el-button>
            </template>
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "product",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["shoplist"])
  },
  methods: {
    ...mapActions(["addToCart"])
  }
};
</script>

<style>

</style>
