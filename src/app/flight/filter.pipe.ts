import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'filterPipe'
})

export class FilterPipe implements PipeTransform{

    transform(value, searchItem){
        return value.filter((search)=>{
            if(search.airline.toLowerCase().indexOf(searchItem.toLowerCase()) > -1){
                return true
            }
            if(search.flight_number.toLowerCase().indexOf(searchItem.toLowerCase()) > -1){
                return true
            }
            if(search.transaction.toLowerCase().indexOf(searchItem.toLowerCase()) > -1){
                return true
            }
            
        })
    }
}