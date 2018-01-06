import { InMemoryDbService } from 'angular-in-memory-web-api';
export class CaseDummyApiResponse implements InMemoryDbService {

  createDb() {

    let cases = [
      { 
        id: 0, 
        case_nbr: "1", 
        diagnosis: "Breast Cancer", 
        date_created: "10-10-2017", 
        date_updated: "", 
        is_deleted: false 
      },
      { 
        id: 0, 
        case_nbr: "2", 
        diagnosis: "Breast Cancer", 
        date_created: "10-10-2017", 
        date_updated: "", 
        is_deleted: false 
      }
    ];

    return {cases};
  }
}
