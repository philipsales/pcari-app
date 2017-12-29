import { InMemoryDbService } from 'angular-in-memory-web-api';
export class FormDummyApiResponse implements InMemoryDbService {

  createDb() {

  let forms = [
    {
      id: 2342, 
      name: "Cancer Registry Template 1", 
      department: "General Surgery Department", 
      approval: "Pending", 
      status: "Not Active", 
      created_by: "Dr. Apple", 
      is_deleted: false,
      sections: [
        {
          key: "key1",
          name: "Demographic History",
          order: 0,
          questions: [
              { 
                key: '43ede449-efdf-6162-88ed-3d6c7442343c', 
                label: 'What is your gender', 
                type: 'radiobutton', 
                value: 'value', 
                required: true, 
                order:  0,
                options: [
                  {
                    key: '123123',
                    name: "male"
                  },
                  {
                    key: '1231323',
                    name: "female"
                  }
                ] 
              },
              { 
                key: '43ede449-efdf-6162-88ed-23423234', 
                label: 'What is your civil status', 
                type:  'dropdown', 
                value: '', 
                required: true, 
                order:  1,
                options: [
                  {
                    key: '234ll23',
                    name: "married"
                  },
                  {
                    key: '23424',
                    name: "single"
                  }
                ] 
              },
          ]
        },
        {
          key: "key2",
          name: "Family Health Illness History",
          order: 1,
          questions: [
              { 
              key: '43ede449-efdf-6162-88ed-3d6c744f8c', 
                label: 'Family History of Disease', 
                type:   'checkbox', 
                value:  'value', 
                required: false, 
                order:  0,
                options: [
                  {
                    key: '8584343',
                    name: "Diabetes"
                  },
                  {
                    key: '341223',
                    name: "Hypertension"
                  }
                ] 
              },
          ]
        },

      ]
    },
    {
      id: 2342, 
      name: "Cancer Registry Template 2", 
      department: "Obstetric Department", 
      approval: "Pending", 
      status: "Not Active", 
      created_by: "Dr. Apple", 
      is_deleted: false,
      sections: [
        {
          key: "key1",
          name: "Demographic History",
          order: 0,
          questions: [
              { 
                key: '43ede449-efdf-6162-88ed-3d6c7442343c', 
                label: 'What is your gender', 
                type: 'radiobutton', 
                value: 'value', 
                required: true, 
                order:  0,
                options: [
                  {
                    key: '123123',
                    name: "male"
                  },
                  {
                    key: '1231323',
                    name: "female"
                  }
                ] 
              },
              { 
                key: '43ede449-efdf-6162-88ed-23423234', 
                label: 'What is your civil status', 
                type:  'dropdown', 
                value: '', 
                required: true, 
                order:  1,
                options: [
                  {
                    key: '234ll23',
                    name: "married"
                  },
                  {
                    key: '23424',
                    name: "single"
                  }
                ] 
              },
          ]
        },
        {
          key: "key2",
          name: "Family Health Illness History",
          order: 1,
          questions: [
              { 
              key: '43ede449-efdf-6162-88ed-3d6c744f8c', 
                label: 'Family History of Disease', 
                type:   'checkbox', 
                value:  'value', 
                required: false, 
                order:  0,
                options: [
                  {
                    key: '8584343',
                    name: "Diabetes"
                  },
                  {
                    key: '341223',
                    name: "Hypertension"
                  }
                ] 
              },
          ]
        },

      ]
    }
  ]

    return {forms};
  }
}
