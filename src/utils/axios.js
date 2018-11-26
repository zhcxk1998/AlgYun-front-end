import axios from 'axios';

export default function (url) {
  // let get = async function (url) {
  //     let res = await axios.get(url);
  //     return res;
  // };
  // // console.log(get(url))
  // var data;
  // get(url).then(item => {
  //         return item;
  //     }
  // );
  // console.log(get(url))
  var a = axios.get(url).then(i => {
    return i
  });
  console.log(a)
  return 1;
}
