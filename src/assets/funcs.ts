import axios from 'axios';
export function GetData() {
    axios({
        method: 'get',
        url: 'http://127.0.0.1:8080/ping',
      })
        .then(function (response) {
            console.log(response)
        });
}