import axios from 'axios';

const url = 'http://api.douban.com/v2/movie/in_theaters'; // 正在热映
const urlW = 'http://api.douban.com/v2/movie/coming_soon'; // 即将上映
const urlNew = 'http://api.douban.com/v2/movie/us_box'; // 北美票房榜

const services = {};

services.getMovies = (cb) => {
  axios.get(url).then((res) => {
    // console.log(res)
    cb(res)
  }).catch((err)=>{
    console.log(err)
  })
}

services.getMWill = (cb) => {
  axios.get(urlW).then((resWill) => {
    // console.log(resWill)
    cb(resWill)
  }).catch((err)=>{
    console.log(err)
  })
}

services.getNewM = (cb) =>{
  axios.get(urlNew).then((resN)=>{
    // console.log(resN)
    cb(resN)
  }).catch((err)=>{
    console.log(err)
  })
}

export default services;
