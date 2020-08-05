new Vue({
  el: '#app',
  data: {
    products: [
      {
        id: 1586934917210,
        unit: '串',
        category: '寒性水果',
        title: '北蕉',
        origin_price: 100,
        price: 90,
        description: '是台灣傳統栽培種，由大陸的華南引進，已有250年栽培歷史，分布全省各重要蕉區，是台灣外銷的主要品種。',
        content: '產地：台灣。重量：每串大約 2 斤(5 ~ 7 根)。',
        is_enabled: 1,
        imageUrl: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 1196934917910,
        unit: '盒',
        category: '熱性水果',
        title: '美國加州櫻桃',
        origin_price: 1400,
        description: '顆顆圓實飽滿又juicy，皮薄、籽小、超多汁，每顆都跟十元硬幣一樣大，猶如櫻桃界中的水蜜桃，鮮紅飽滿，酸甜多汁',
        content: '產地：美國加州。重量：每盒 3 公斤。',
        price: 899,
        is_enabled: 0,
        imageUrl: 'https://images.unsplash.com/photo-1528821154947-1aa3d1b74941?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      },
      {
        id: 1196964578910,
        unit: '顆',
        category: '溫性水果',
        title: '美國華盛頓五爪蘋果',
        origin_price: 100,
        description: '五爪蘋果(RED DELICIOUS) 是眾多蘋果種類之中最容易被認出來的品種之一，果實形狀上大下小，蒂端部及果頂有五個明顯隆起狀，樣子有如五個爪子，台灣以「五爪」稱呼，香港則取其英文音譯叫「地厘蛇果」，簡稱「蛇果」，其果實深紅，體積大，大陸稱它「紅元帥」。',
        content: '產地：美國華盛。重量：每顆約 350 ~ 450 公克。',
        price: 50,
        is_enabled: 0,
        imageUrl: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },
    ],
    species: [
      {val:"1",title:'寒性水果'},
      {val:"2",title:'熱性水果'},
      {val:"3",title:'溫性水果'},
    ],
    tempData: {},
  },
  methods: {
    // 判斷開啟的 Modal
    openModal(action, item) {
      switch (action) {
        case 'add':
          this.tempData = {};
          // Modal Title
          this.tempData.clickStatus = '新增資料';
          $('#addModifyModal').modal('show');
          break;
        case 'edit':
          this.tempData = Object.assign({}, item);
          // Modal Title
          this.tempData.clickStatus = '編輯資料';
          $('#addModifyModal').modal('show');
          break;
        case 'delete':
          this.tempData = Object.assign({}, item);
          // Modal Title
          this.tempData.clickStatus = '刪除資料';
          $('#delModal').modal('show');
          break;
        default:
          break;
      }
    },
    // 假如有 id 就編輯，否則新增
    updateData() {
      if (this.tempData.id) {
        const id = this.tempData.id;
        this.products.forEach((item, i) => {
          if (item.id === id) {
            this.products[i] = this.tempData;
          }
        });
      } else {
        // Unix Timestamp
        const id = new Date().getTime();
        this.tempData.id = id;
        this.products.push(this.tempData);
      }
      // 清空暫存，關閉 Modal
      this.tempData = {};
      $('#addModifyModal').modal('hide');
    },
    delData() {
      if (this.tempData.id) {
        const id = this.tempData.id;
        this.products.forEach((item, i) => {
          if (item.id === id) {
            this.products.splice(i, 1);
            this.tempData = {};
          }
        });
      }
      $('#delModal').modal('hide');
    },
  },
});