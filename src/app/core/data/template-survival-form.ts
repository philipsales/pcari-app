export const survivalDataTemplate = 
    {
      id: 412432342, 
      name: "GS1 Survival Data Registry v.1", 
      department: "General Surgery Department", 
      type: "Patient Repository", 
      approval: "Approved", 
      status: "Primary", 
      created_by: "Dr. Apple", 
      is_deleted: false,
      sections: [

        {
          key: 'ax49-efdf-6162-88ed-3d6c743423c', 
          name: "Overview",
          order: 0,
          questions: [
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Primary Organ Site', 
              type: 'textbox', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Primary Treatment Received', 
              type: 'textbox', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Primary Treatment Date', 
              type: 'datepicker', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            }
          ]
        },

        {
          key: 'ax49-efdf-6162-88ed-3d6c743423c', 
          name: "Recurrence Data",
          order: 0,
          questions: [
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Date of Recurrence', 
              type: 'datepicker', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Nature of Recurrence', 
              type: 'textarea', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            }
          ]
        },

        {
          key: 'ax49-efdf-6162-88ed-3d6c743423c', 
          name: "Survival Mortality Data",
          order: 0,
          questions: [

            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Year 1 - Date of Recurrence', 
              type: 'datepicker', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Year 1 - Status', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Alive, without disease",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Alive, with Disease",
                  order:  2
                },
                {
                  key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Dead",
                  order:  3
                }
              ] 
            },

            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Year 2 - Date of Recurrence', 
              type: 'datepicker', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Year 2 - Status', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Alive, without disease",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Alive, with Disease",
                  order:  2
                },
                {
                  key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Dead",
                  order:  3
                }
              ] 
            },

            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Year 3 - Date of Recurrence', 
              type: 'datepicker', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Year 3 - Status', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Alive, without disease",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Alive, with Disease",
                  order:  2
                },
                {
                  key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Dead",
                  order:  3
                }
              ] 
            },

            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Year 4 - Date of Recurrence', 
              type: 'datepicker', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Year 4 - Status', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Alive, without disease",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Alive, with Disease",
                  order:  2
                },
                {
                  key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Dead",
                  order:  3
                }
              ] 
            },

            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Year 5 - Date of Recurrence', 
              type: 'datepicker', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Year 5 - Status', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Alive, without disease",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Alive, with Disease",
                  order:  2
                },
                {
                  key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Dead",
                  order:  3
                }
              ] 
            },

            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Date of Last Followup', 
              type: 'datepicker', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Year 1 - Status', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Alive, without disease",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Alive, with Disease",
                  order:  2
                },
                {
                  key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Dead",
                  order:  3
                }
              ] 
            },

            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Date of Death', 
              type: 'datepicker', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Cause of Death', 
              type: 'textbox', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'International Classificaiton of Disease (ICD) for Cause of Death', 
              type: 'textarea', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            }
          ]
        }
      ]
    };
