import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FoodProvider {
  request = "https://api.edamam.com/api/food-database/parser?ingr&app_id=f463fd9f&app_key=9f0e5fff47880724783c93cc49c2ab79";
  Food_Api = "https://api.nal.usda.gov/ndb/";
  Food_Api_Key = "KAYY1aohh6AbnbtBI2FCGftUdVsXzHcmlyMA5EBW";
  EdamamFood_Api = "https://api.edamam.com/api/food-database/parser";
  EdamamFood_Food_Api_Key = "9f0e5fff47880724783c93cc49c2ab79";
  EdamamFood_App_Id = "f463fd9f";

  constructor(public http: HttpClient) {

  }
  getFoodByName(name) {
    
    // return this.http.get(this.Food_Api+'search'+'?q='+name.target.value+'&format=json&It=f&api_key='+this.Food_Api_Key);
    return this.http.get(this.EdamamFood_Api+'?ingr='+name.target.value+'&app_id='+this.EdamamFood_App_Id+'&app_key='+this.EdamamFood_Food_Api_Key,{headers: {"Content-Type": "application/json", "Accept": "application/json"}});
  } 
  getFoodNutrients(ndbino) {
    
    return this.http.get(this.Food_Api+'reports'+'?ndbno='+ndbino+'&format=json&It=f&type=f&api_key='+this.Food_Api_Key);
    // return this.http.get(this.EdamamFood_Api+'?ingr='+name.target.value+'&app_id='+this.EdamamFood_App_Id+'&app_key='+this.EdamamFood_Food_Api_Key,{headers: {"Content-Type": "application/json", "Accept": "application/json"}});
  }

}
