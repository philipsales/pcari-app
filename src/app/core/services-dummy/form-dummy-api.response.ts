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
          key: '32423de449-efdf-6162-88ed-3d6c743423c', 
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
                    key: '32xse449-efdf-6162-88ed-3d6c7442343c', 
                    name: "male"
                  },
                  {
                    key: '332aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "female"
                  }
                ] 
              },
              { 
                key: '43de449-efdf-6162-88ed-23423234', 
                label: 'What is your vital status', 
                type:  'dropdown', 
                value: '', 
                required: true, 
                order:  1,
                options: [
                  {
                    key: 'aqeaa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "married"
                  },
                  {
                    key: 'axxeaa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "single"
                  }
                ] 
              },
          ]
        },
        {
          key: '43ede449-efdf-6162-88ed-3d6c743423c', 
          name: "Family Health Illness History",
          order: 1,
          questions: [
              { 
                key: '43ede449-efdf-6162-88ed-3d6c744f8c', 
                label: 'What is your Family History of Disease', 
                type:   'checkbox', 
                value:  'value', 
                required: false, 
                order:  0,
                options: [
                  {
                    key: 'bxseeaa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Diabetes"
                  },
                  {
                    key: 'xseeawaa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Hypertension"
                  }
                ] 
              },
          ]
        },

      ]
    },
    {
      id: 1342, 
      name: "Cancer Registry Template 2", 
      department: "Obstetric Surgery Department", 
      approval: "Pending", 
      status: "Not Active", 
      created_by: "Dr. Apple", 
      is_deleted: false,
      sections: [
        {
          key: '32423de449-efdf-6162-88ed-3d6c743423c', 
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
                    key: '32xse449-efdf-6162-88ed-3d6c7442343c', 
                    name: "male"
                  },
                  {
                    key: '332aa449-efdf-6162-88ed-3d6c7442343c', 
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
                    key: 'aqeaa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "married"
                  },
                  {
                    key: 'axxeaa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "single"
                  }
                ] 
              },
          ]
        },
        {
          key: '43ede449-efdf-6162-88ed-3d6c743423c', 
          name: "Family Health Illness History",
          order: 1,
          questions: [
              { 
                key: '43ede449-efdf-6162-88ed-3d6c744f8c', 
                label: 'What is your Family Disease', 
                type:   'checkbox', 
                value:  'value', 
                required: false, 
                order:  0,
                options: [
                  {
                    key: 'bxseeaa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Diabetes"
                  },
                  {
                    key: 'xseeawaa449-efdf-6162-88ed-3d6c7442343c', 
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
