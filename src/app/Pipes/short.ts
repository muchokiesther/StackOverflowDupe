import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name:'short'
})
export class ShortPipe implements PipeTransform{

transform(value:string , limit:number){
   if (value.length<limit){
        return value
   }
   return value.slice(0,limit)+'...'
}


}