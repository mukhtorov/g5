const obj = {
  id: 1,
  categoria: 'yangi',
  orderId: 1234,
  time: Date.now(),
  total: '40000',
};

const list = {
  yangi: [obj, obj],
  qabulqilingan: [obj],
  yopilgan: [obj, obj, obj],
};

// console.log(Object.entries(obj));

Object.entries(list).map(([key, value]) => {
  //   console.log(key);
  //   console.log(value);
  value.map((item) => {
    console.log(item.categoria);
  });
});
