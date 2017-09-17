import axios from 'axios';

const url = 'https://m.douban.com/rexxar/api/v2/recommend_feed?loc_id=108288';

const services = {};

services.getData = (cb) => {
  axios.get(url)
  .then((res) => {
    // console.log(res.data)
    cb(res.data)
  }).catch((err) => {
    console.log(err)
  })
}

export default services;
