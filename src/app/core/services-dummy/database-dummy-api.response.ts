import { InMemoryDbService } from 'angular-in-memory-web-api';
export class DatabaseDummyApiResponse implements InMemoryDbService {

  createDb() {

    let databases = [
      { 
        id: 0, 
        name: "September backup", 
        date_created: "10-10-2017", 
        date_duration_start: "09-01-2017", 
        date_duration_end: "09-30-2017", 
        created_by: "Dr. Anthony" 
      },
      { 
        id: 1, 
        name: "October backup", 
        date_created: "11-10-2017", 
        date_duration_start: "10-01-2017", 
        date_duration_end: "10-30-2017", 
        created_by: "Dr. Anthony" 
      },
      { 
        id: 2, 
        name: "Novmeber backup", 
        date_created: "12-10-2017", 
        date_duration_start: "11-10-2017", 
        date_duration_end: "11-30-2017", 
        created_by: "Dr. Anthony" 
      }
    ];

    return {databases};
  }
}
