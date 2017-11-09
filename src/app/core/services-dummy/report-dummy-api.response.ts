import { InMemoryDbService } from 'angular-in-memory-web-api';

export class ReportDummyApiResponse implements InMemoryDbService {

  createDb() {

    let reports = [
      { 
        id: 0, 
        name: "Breast Cancer Stats - 1st Qtr 2017", 
        date_created: "10-10-2017", 
        date_duration_start: "01-01-2017", 
        date_duration_end: "03-30-2017", 
        created_by: "Dr. Anthony" 
      },
      { 
        id: 1, 
        name: "Breast Cancer Stats - 2nd Qtr 2017", 
        date_created: "11-10-2017", 
        date_duration_start: "04-01-2017", 
        date_duration_end: "06-30-2017", 
        created_by: "Dr. Anthony" 
      }
    ];

    return { reports };
  }
}
