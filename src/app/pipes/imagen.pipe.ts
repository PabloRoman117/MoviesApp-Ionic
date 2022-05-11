import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';


const URL_PATH = environment.URL_PATH;

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, size: string ='w500'): string {
    if(!img){
      return ;
    }

    const urlImg = `${URL_PATH}/${size}${img}`;
    return urlImg;
  }

}
