export const survivalDataTemplate = 
    {
      id: 412432342, 
      name: "GS1 Survival Data Form v.1", 
      organization: "University of the Philippines - Philippine General Hospital", 
      department: "General Surgery Department", 
      type: "Patient Repository", 
      approval: "Approved", 
      status: "Primary", 
      created_by: "Dr. Apple", 
      is_deleted: false,
      sections: [
        {
          key: 'ax49-efdf-6162-88ed-3d6c743423c1', 
          name: "Overview",
          order: 0,
          questions: [
            { 
              key: 'afdf-6162-88ed-3d6c7442343cx1', 
              label: 'Primary Organ Site', 
              type: 'textbox', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343cx2', 
              label: 'Primary Treatment Received', 
              type: 'textbox', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343cx3', 
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
          key: 'ax49-efdf-6162-88ed-3d6c743423c2', 
          name: "Recurrence Data",
          order: 0,
          questions: [
            { 
              key: 'afdf-6162-88ed-3d6c7442343cxx1', 
              label: 'Date of Recurrence', 
              type: 'datepicker', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343cxx2', 
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
          key: 'ax49-efdf-6162-88ed-3d6c743423c3', 
          name: "Survival Mortality Data",
          order: 0,
          questions: [

            { 
              key: 'afdf-6162-88ed-3d6c7442343ca1', 
              label: 'Year 1 - Date of Recurrence', 
              type: 'datepicker', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343ca2', 
              label: 'Year 1 - Status', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343cra1', 
                  name: "Alive, without disease",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343cra2', 
                  name: "Alive, with Disease",
                  order:  2
                },
                {
                  key: 'c32aa449-efdf-6162-88ed-3d6c7442343cra3', 
                  name: "Dead",
                  order:  3
                }
              ] 
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343ca3', 
              label: 'Year 2 - Date of Recurrence', 
              type: 'datepicker', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343ca4', 
              label: 'Year 2 - Status', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343cr41', 
                  name: "Alive, without disease",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343cr42', 
                  name: "Alive, with Disease",
                  order:  2
                },
                {
                  key: 'c32aa449-efdf-6162-88ed-3d6c7442343cr43', 
                  name: "Dead",
                  order:  3
                }
              ] 
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343ca5', 
              label: 'Year 3 - Date of Recurrence', 
              type: 'datepicker', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343ca6', 
              label: 'Year 3 - Status', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343c61', 
                  name: "Alive, without disease",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343cr62', 
                  name: "Alive, with Disease",
                  order:  2
                },
                {
                  key: 'c32aa449-efdf-6162-88ed-3d6c7442343cr63', 
                  name: "Dead",
                  order:  3
                }
              ] 
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343ca7', 
              label: 'Year 4 - Date of Recurrence', 
              type: 'datepicker', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343ca8', 
              label: 'Year 4 - Status', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343cr81', 
                  name: "Alive, without disease",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343cr82', 
                  name: "Alive, with Disease",
                  order:  2
                },
                {
                  key: 'c32aa449-efdf-6162-88ed-3d6c7442343cr83', 
                  name: "Dead",
                  order:  3
                }
              ] 
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343ca9', 
              label: 'Year 5 - Date of Recurrence', 
              type: 'datepicker', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343ca10', 
              label: 'Year 5 - Status', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343cr01', 
                  name: "Alive, without disease",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343cr02', 
                  name: "Alive, with Disease",
                  order:  2
                },
                {
                  key: 'c32aa449-efdf-6162-88ed-3d6c7442343cr03', 
                  name: "Dead",
                  order:  3
                }
              ] 
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343ca11', 
              label: 'Date of Last Followup', 
              type: 'datepicker', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343ca12', 
              label: 'Year 1 - Status', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343cr21', 
                  name: "Alive, without disease",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343cr22', 
                  name: "Alive, with Disease",
                  order:  2
                },
                {
                  key: 'c32aa449-efdf-6162-88ed-3d6c7442343cr23', 
                  name: "Dead",
                  order:  3
                }
              ] 
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343ca13', 
              label: 'Date of Death', 
              type: 'datepicker', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343ca14', 
              label: 'Cause of Death', 
              type: 'textbox', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343ca15', 
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
