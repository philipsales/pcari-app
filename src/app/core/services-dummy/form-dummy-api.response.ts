import { InMemoryDbService } from 'angular-in-memory-web-api';
export class FormDummyApiResponse implements InMemoryDbService {

  createDb() {

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
          name: "Demographic History",
          order: 1,
          questions: [
              { 
                key: 'key2', 
                label: 'What is your gender', 
                type: 'dropdown', 
                value: 'value', 
                required: true, 
                order:  1,
                options: [
                  {
                    id: 123123,
                    name: "male"
                  },
                  {
                    id: 1231323,
                    name: "female"
                  }
                ] 
              },
              { 
                key: 'key333',
                label: 'What is your civil status', 
                type:  'dropdown', 
                value: '', 
                required: true, 
                order:  2,
                options: [
                  {
                    id: 23,
                    name: "married"
                  },
                  {
                    id: 12,
                    name: "single"
                  }
                ] 
              },
          ]
        },
        {
          key: "key2",
          name: "Family Health Illness History",
          order: 2,
          questions: [
              { 
                key: 'key1122', 
                label: 'Family History of Disease', 
                type:   'checkbox', 
                value:  'value', 
                required: true, 
                order:  1,
                options: [
                  {
                    id: 8584,
                    name: "Diabetes"
                  },
                  {
                    id: 1223,
                    name: "Hypertension"
                  }
                ] 
              },
          ]
        },

      ]
    },
    {
      id: 1, 
      name: "Cancer Registry Template 2", 
      department: "Obstetric Surgery Department", 
      approval: "Pending", 
      status: "Not Active", 
      created_by: "Dr. Apple", 
      date_created: "10/10/2017", 
      is_deleted: false,
      sections: [
        {
          key: "key1",
          name: "Demographic History",
          order: 1,
          questions: [
              { 
                key: 'key333',
                label: 'What is your civil status', 
                type:  'dropdown', 
                value: '', 
                required: true, 
                order:  2,
                options: [
                  {
                    id: 23,
                    name: "married"
                  },
                  {
                    id: 12,
                    name: "single"
                  }
                ] 
              },
          ]
        },
        {
          key: "key2",
          name: "Family Health Illness History",
          order: 2,
          questions: [
              { 
                key: 'key1122', 
                label: 'Family History of Disease', 
                type:   'checkbox', 
                value:  'value', 
                required: true, 
                order:  1,
                options: [
                  {
                    id: 8584,
                    name: "Diabetes"
                  },
                  {
                    id: 1223,
                    name: "Hypertension"
                  }
                ] 
              },
            ]
          }
      ]
    }
  ]

    return {forms};
  }
}
