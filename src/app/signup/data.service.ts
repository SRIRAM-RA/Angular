
import data from '../json/data.json';

export class DataService {

  data =[{}]


  getdata(){
    return this.data;
  }

  updatejson(userdetails: any){
    this.data.push(JSON.stringify(userdetails))
    console.log(this.data)
    console.log(data)
    data.push(userdetails)
  }

}
