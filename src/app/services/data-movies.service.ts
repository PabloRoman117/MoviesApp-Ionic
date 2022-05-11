import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cast, ResultCredits, ResultDetails, ResultTMDB } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';


const {URL, API_KEY} = environment

@Injectable({
  providedIn: 'root'
})
export class DataMoviesService {

  constructor(private http: HttpClient) { }

  private execQuery<T>(query: string) {

    query = URL + query;

    query += `&api_key=${API_KEY}&language=es`;
    // console.log(query);

    return this.http.get<T>(query);

  }


  getDiscover () {

    const fechaActual = new Date();
    const ultimoDia = new Date(fechaActual.getFullYear(), fechaActual.getMonth()+1, 0 ).getDate();
    const mes = fechaActual.getMonth()+1;
    let  mesString;

    //Crear String en el formato yyyy-mm-dd
    if(mes < 10){
      mesString = '0' + mes;
    }else {
      mesString = mes;
    }

  const fechInicio = `${fechaActual.getFullYear()}-${mesString}-01`
  const fechaFin = `${fechaActual.getFullYear()}-${mesString}-${ultimoDia}`

    return this.execQuery<ResultTMDB>(`/discover/movie?primary_release_date.gte=${fechInicio}&primary_release_date.lte=${fechaFin}`)
    // return this.http.get<ResultTMDB>(`${URL}/discover/movie/?api_key=${API_KEY}&language=es&primary_release_date.gte=2022-03-01&primary_release_date.lte=2022-03-31`);
  }

  getPopularity(){
    return this.execQuery<ResultTMDB>(`/discover/movie?sort_by=popularity.desc`)
  }

  getDetails(id: number){
    return this.execQuery<ResultDetails>(`/movie/${id}?a=1`);
  }
  getCredits(id: number){
    return this.execQuery<ResultCredits>(`/movie/${id}/credits?a=1`);
  }

  
}

