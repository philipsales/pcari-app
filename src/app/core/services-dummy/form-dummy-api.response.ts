import { InMemoryDbService } from 'angular-in-memory-web-api';
export class FormDummyApiResponse implements InMemoryDbService {

  createDb() {

    let forms = [
      { 
        id: 0, 
        name: "Breast Cancer Registry Template 1", 
        department: "General Surgery Department", 
        approval: "Pending", 
        status: "Not Active", 
        created_by: "Dr. Apple", 
        date_created: "10/10/2017", 
        is_deleted: "FALSE" 
      },
      { 
        id: 1, 
        name: "Breast Cancer Registry Template 2", 
        department: "General Surgery Department", 
        approval: "Approve", 
        status: "Active", 
        created_by: "Dr. Anthony", 
        date_created: "11/10/2017", 
        is_deleted: "FALSE" 
      }
    ];

    return {forms};
  }
}
