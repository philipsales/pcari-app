export const mendelimsTemplate = 
  {
      id: 412328432242, 
      name: "Mendelims Specimen Form v.1", 
      organization: "University of the Philippines - Diliman", 
      department: "Institute of Biology", 
      type: "Biobanking Repository", 
      approval: "Approved", 
      status: "Primary", 
      created_by: "Dr. Michael", 
      is_deleted: false,
      sections: [
        {
          key: 'fdf-6162-88ed-3d6c743423c1', 
          name: "Patient Details",
          order: 0,
          questions: [
            { 
              key: 'fdf-6162-88ed-3d6c743421111', 
              label: 'Gender', 
              type: 'dropdown', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'fdf-6162-88ed-3d6c7434211112222', 
                  name: "Male",
                  order:  1
                },
                {
                  key: 'fdf-6162-88ed-3d6c7434211112223', 
                  name: "Female",
                  order:  2
                },
                {
                  key: 'fdf-6162-88ed-3d6c7434211112224', 
                  name: "Undefined",
                  order:  3
                }
              ] 
            },
            { 
              key: 'fdf-6162-88ed-3d6c74342111199999', 
              label: 'Ethinicity', 
              type: 'dropdown', 
              value: '', 
              required: false, 
              order:  2,
              options: [
                {
                  key: 'fdf-6162-88ed-3d6c74342111122288882', 
                  name: "Non-Hispanic/Non-Latino",
                  order:  1
                },
                {
                  key: 'fdf-6162-88ed-3d6c74342111122288883', 
                  name: "Hispanic/Latino",
                  order:  2
                },
                {
                  key: 'fdf-6162-88ed-3d6c74342111122288884', 
                  name: "Undefined",
                  order:  3
                }
              ] 
            },
            { 
              key: 'fdf-6162-88ed-3d6c743421111999998888', 
              label: 'Race', 
              type: 'dropdown', 
              value: '', 
              required: false, 
              order:  3,
              options: [
                {
                  key: 'fdf-6162-88ed-3d6c7434211112228888211111', 
                  name: "White",
                  order:  1
                },
                {
                  key: 'fdf-6162-88ed-3d6c7434211112228888211112', 
                  name: "Black",
                  order:  2
                },
                {
                  key: 'fdf-6162-88ed-3d6c7434211112228888211113', 
                  name: "Asian",
                  order:  3
                },
                {
                  key: 'fdf-6162-88ed-3d6c7434211112228888211114', 
                  name: "American Indian",
                  order:  4
                },
                {
                  key: 'fdf-6162-88ed-3d6c7434211112228888211115', 
                  name: "Pacific Islander",
                  order:  5
                },
                {
                  key: 'fdf-6162-88ed-3d6c7434211112228888211116', 
                  name: "Undefined",
                  order:  6
                }
              ] 
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343cx2', 
              label: 'PHI Notes', 
              type: 'textbox', 
              value: '', 
              required: false, 
              order:  4,
              options: []
            }
          ]
        },
        {
          key: 'fdf-6162-88ed-3d6c743423c211132132', 
          name: "Sample Acquisition",
          order: 1,
          questions: [
            { 
              key: 'afdf-6162-88ed-3d6c7442343cx99999999', 
              label: 'Colllection date', 
              type: 'datepicker', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343cx99999998', 
              label: 'Clinic from', 
              type: 'dropdown', 
              value: '', 
              required: false, 
              order:  2,
              options: [
                {
                  key: 'fdf-6162-88ed-3d6c74323412312t0946', 
                  name: "Default Clinic",
                  order:  1
                },
                {
                  key: 'fdf-6162-88ed-3d6c74323412312t0947', 
                  name: "Outside Laboratory",
                  order:  2
                }
              ]
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343cxaeaew33418', 
              label: 'Consent Protocol', 
              type: 'dropdown', 
              value: '', 
              required: false, 
              order:  3,
              options: [
                {
                  key: 'fdf-6162-88ed-3d6c7432492304901', 
                  name: "Triple Negative Breast Cancer",
                  order:  1
                },
                { key: 'fdf-6162-88ed-3d6c7432492304901', 
                  name: "Upper Gastro Intestinal Carcinoma",
                  order:  2
                }
              ]
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343cxaeaew33418', 
              label: 'Comments', 
              type: 'textarea', 
              value: '', 
              required: false, 
              order:  3,
              options: []
            }
          ]
        },
        {
          key: 'fdf-6162-88ed-3d6c743423c3', 
          name: "Physical Sample",
          order: 2,
          questions: [
            { 
              key: 'afdf-6162-88ed-3d6c7aaa312334xw3341', 
              label: 'Barcode', 
              type: 'textbox', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7aaa312334xw3342', 
              label: 'Sample Site - L/R', 
              type: 'dropdown', 
              value: '', 
              required: false, 
              order:  2,
              options: [
                {
                  key: 'fdf-6162-88ed-3d6c743249231', 
                  name: "Breast",
                  order:  1
                },
                {
                  key: 'fdf-6162-88ed-3d6c743249232', 
                  name: "Thyroid",
                  order:  2
                }
              ]
            },
            { 
              key: 'afdf-6162-88ed-3d6c7aaa312334xw3343', 
              label: 'Container', 
              type: 'textarea', 
              value: '', 
              required: false, 
              order:  3,
              options: [
                {
                  key: 'fdf-6162-88ed-3d6c7423j1', 
                  name: "Vial",
                  order:  1
                },
                {
                  key: 'fdf-6162-88ed-3d6c7423j2', 
                  name: "Block",
                  order:  2
                }
              ]
            },
            { 
              key: 'afdf-6162-88ed-3d6c7aaa312334xw3344', 
              label: 'Comments', 
              type: 'textarea', 
              value: '', 
              required: false, 
              order:  4,
              options: []
            }
          ]
        },
        {
          key: 'fdf-6162-88ed-3d6c743423c4', 
          name: "Storage Location",
          order: 3,
          questions: [
            { 
              key: 'afdf-6162-88ed-3d6c7aaa3123aw3344x1', 
              label: 'Container Type', 
              type: 'dropdown', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'fdf-6162-88ed-3d6c7423j12342', 
                  name: "Rack",
                  order:  1
                },
                {
                  key: 'fdf-6162-88ed-3d6c7423j12343', 
                  name: "Box",
                  order:  2
                },
                {
                  key: 'fdf-6162-88ed-3d6c7423j12344', 
                  name: "Shelf",
                  order:  3
                }
              ]
            },
            { 
              key: 'afdf-6162-88ed-3d6c7aaa3123aw3344x2', 
              label: 'Room/Freezer', 
              type: 'dropdown', 
              value: '', 
              required: false, 
              order:  2,
              options: [
                {
                  key: 'fdf-6162-88ed-3d6c7423j12342aai3', 
                  name: "Lux/ABL (ABSA)",
                  order:  1
                },
                {
                  key: 'fdf-6162-88ed-3d6c7423j12342aai4', 
                  name: "Room",
                  order:  2
                },
                {
                  key: 'fdf-6162-88ed-3d6c7423j12342aai5', 
                  name: "CCSSR_1130",
                  order:  3
                }
              ]
            }
          ]
        }
      ]
  };
