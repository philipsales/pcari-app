import { InMemoryDbService } from 'angular-in-memory-web-api';
export class FormDummyApiResponse implements InMemoryDbService {

  createDb() {

  /*
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
 */

  let forms = [
    {
      id: 0, 
      name: "Cancer Registry Template 1", 
      department: "General Surgery Department", 
      approval: "Pending", 
      status: "Not Active", 
      created_by: "Dr. Apple", 
      date_created: "10/10/2017", 
      is_deleted: false,
      sections: [
        {
          key: "key1",
          name: "Surgery History Section",
          order: 1,
          questions: [
              { 
                key: 'key2', 
                label: 'Last hospitallization', 
                type: 'password', 
                value:'value', 
                required: true, 
                order:  1,
                options:  [] 
              },
              { 
                key: 'key22', 
                label: 'Faternity history', 
                type: 'password', 
                value:'value', 
                required: true, 
                order:  1,
                options:  [] 
              }
          ]
        },
        {
          key: "key2",
          name: "History Section",
          order: 1,
          questions: []
        },
      ]
    },
    {
      id: 1, 
      name: "Thyroid Cancer Registry Template 2", 
      department: "General Surgery Department", 
      approval: "Approve", 
      status: "Active", 
      created_by: "Dr. Anthony", 
      date_created: "11/10/2017", 
      is_deleted: false, 
      sections: [
        {
          key: "key3",
          name: "Family History",
          order: 1,
          questions: [
              { 
                key: 'key2', 
                label: 'Present of Family Ilness', 
                type: 'password', 
                value:'value', 
                required: true, 
                order:  1,
                options:  [] 
              },
              { 
                key: 'key33', 
                label: 'Present of Family Cancer', 
                type: 'password', 
                value:'value', 
                required: true, 
                order:  1,
                options:  [] 
              },
              { 
                key: 'key333', 
                label: 'Present of Family Cancer', 
                type: 'password', 
                value:'value', 
                required: true, 
                order:  1,
                options:  [] 
              }
          ]
        },
        {
          key: "key4",
          name: "Treatment",
          order: 1,
          questions: [
              { 
                key: 'key2', 
                label: 'Last Cancer Treatment', 
                type: 'password', 
                value:'value', 
                required: true, 
                order:  1,
                options:  [] 
              },
              { 
                key: 'key2', 
                label: 'Last Brain Surgery Treatment', 
                type: 'password', 
                value:'value', 
                required: true, 
                order:  1,
                options:  [] 
              }
          ]
        },
      ]
    }
  ]

  return {forms};
  }
}
