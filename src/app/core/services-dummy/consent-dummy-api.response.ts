import { InMemoryDbService } from 'angular-in-memory-web-api';
export class ConsentDummyApiResponse implements InMemoryDbService {

  createDb() {

    let consents = [
      { 
        id: 0, 
        name: "Admission Consent", 
        number: "Form 123", 
        description: "Consent for admission", 
        date_created: "10-10-2017", 
        is_deleted: "TRUE" 
      },
      { 
        id: 1, 
        name: "Registry Storage Consent", 
        number: "Form 31", 
        description: "Consent for registry registration", 
        date_created: "10-10-2017", 
        is_deleted: "TRUE" 
      }
    ];

    return {consents};
  }
}
