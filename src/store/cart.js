const state = {
  //商品列表
  shop_list: [{
    id: 11,
    name: '鱼香肉丝',
    price: 12,
  }, {
    id: 22,
    name: '宫保鸡丁',
    price: 14
  }, {
    id: 34,
    name: '土豆丝',
    price: 10
  }, {
    id: 47,
    name: '米饭',
    price: 2
  }],

  //添加到购物车的商品
  added: []
}

const getters = {
  shoplist: state => state.shop_list,

  cartProducts: state => {
    return state.added.map(({
      id,
      num
    }) => {
      let product = state.shop_list.find(n => n.id == id);
      return {
        ...product,
        num
      }
    })
  },

  totalPrice: (state, getters) => {
    let total = 0;
    getters.cartProducts.forEach(n => {
      total += n.price * n.num;
    })
    return total;
  },

  totalNum: (state, getters) => {
    let total = 0;
    getters.cartProducts.forEach(n => {
      total += n.num;
    })
    return total;
  }
}

const actions = {
  addToCart({
    commit
  }, product) {
    commit('add', {
      id: product.id
    })
  },
  clearAllCart({
    commit
  }) {
    commit('clearAll');
  },
  delProduct({
    commit
  }, product) {
    commit('del', product);
  }
}

const mutations = {
  add(state, {
    id
  }) {
    let record = state.added.find(n => n.id == id);
    if (!record) {
      state.added.push({
        id,
        num: 1
      })
    } else {
      record.num++
    }
  },

  clearAll(state) {
    state.added = [];
  },

  del(state, product) {
    state.added.forEach((n, i) => {
      if (n.id == product.id) {
        state.added.splice(i, 1)
      }
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
