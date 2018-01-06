export const tumorRegistryTemplate = 
    {
      id: 9342, 
      name: "GS1 Tumor Registry v.1", 
      organization: "University of the Philippines - Philippine General Hospital", 
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
                label: 'Number of Primaries', 
                type: 'radiobutton', 
                value: '', 
                required: false, 
                order:  1,
                options: [
                  {
                    key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "1",
                    order:  1
                  },
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "2",
                    order:  2
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "3",
                    order:  3
                  }
                ] 
              },
              { 
                key: 'bfdf-6162-88ed-3d6c7442343c', 
                label: 'Primary Sites', 
                type: 'checkbox', 
                value: '', 
                required: false, 
                order:  2,
                options: [
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Lip and Oral Cavity",
                    order: 1
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Oropharynx",
                    order: 2
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Nasopharynx",
                    order: 2
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Hypopharynx",
                    order: 1
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Larynx",
                    order: 2
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Nasal Cavity",
                    order: 2
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Paranasal Sinus",
                    order: 1
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Salivary Gland",
                    order: 2
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Thyroid",
                    order: 2
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Eye",
                    order: 1
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Esophagus GE junction",
                    order: 2
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Stomach",
                    order: 2
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Small Intestine",
                    order: 2
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Appendix",
                    order: 1
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Colon",
                    order: 2
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Rectum",
                    order: 2
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Anus",
                    order: 1
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Liver",
                    order: 2
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Bile Ducts",
                    order: 2
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Gallbladder",
                    order: 1
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Ampulla of Vater",
                    order: 2
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Pancreas",
                    order: 2
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Lung",
                    order: 1
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Pleura",
                    order: 2
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Thymus",
                    order: 2
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Skin",
                    order: 2
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Breast",
                    order: 1
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Vulva",
                    order: 2
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Vagina",
                    order: 2
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Cervix",
                    order: 1
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Uterus",
                    order: 2
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Ovary",
                    order: 2
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Fallopian Tube",
                    order: 1
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Gestational tropho",
                    order: 2
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Penis",
                    order: 2
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Prostate",
                    order: 1
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Kidney",
                    order: 2
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Renal Pelvis/Ureter",
                    order: 2
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Urinary Bladder",
                    order: 2
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Urethra",
                    order: 1
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Adrenal",
                    order: 2
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Lymph/Lyphoma",
                    order: 2
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Blood/Leukemia",
                    order: 1
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "PlasmaC/Myeloma",
                    order: 2
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Soft Tissue/Sarcoma",
                    order: 2
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Brain",
                    order: 1
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Spinal Cord",
                    order: 2
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Unknown Primary",
                    order: 2
                  },
                  {
                    key: 'a449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Other",
                    order: 1
                  }
                ] 
              }
          ]
        },
        {
          key: 'bx49-efdf-6162-88ed-3d6c743423c', 
          name: "Primary Site 01",
          order: 0,
          questions: [
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Organ Site', 
                type:  'textbox', 
                value: '', 
                required: false, 
                order:  1,
                options: []
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'International Classificaiton of Disease (ICD)', 
                type:  'textbox', 
                value: '', 
                required: false, 
                order:  1,
                options: []
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Histology Type', 
                type:  'textbox', 
                value: '', 
                required: false, 
                order:  1,
                options: []
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Date of Diagnosis', 
                type:  'datepicker', 
                value: '', 
                required: false, 
                order:  1,
                options: []
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Laterality', 
                type:  'radiobutton', 
                value: '', 
                required: false, 
                order:  1,
                options: [
                  {
                    key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Right",
                    order:  1
                  },
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Left",
                    order:  2
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Bilateral",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Not Applicable",
                    order:  3
                  }
                ] 
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'General Stage of Registration', 
                type:  'radiobutton', 
                value: '', 
                required: false, 
                order:  1,
                options: [
                  {
                    key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Newly diagnosed",
                    order:  1
                  },
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Recurrent",
                    order:  2
                  }
                ] 
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Most Valid Basis of Diagnosis', 
                type:  'radiobutton', 
                value: '', 
                required: false, 
                order:  1,
                options: [
                  {
                    key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Clinical Investigation",
                    order:  1
                  },
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Clinical Only",
                    order:  2
                  },
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Specific Tumor Marker",
                    order:  2
                  },
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Cytology or Hematology",
                    order:  2
                  },
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Histology of Metastasis",
                    order:  2
                  },
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Histology of Primary",
                    order:  2
                  },
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Unknown",
                    order:  2
                  }
                ] 
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Clinical Stage', 
                type:  'textbox', 
                value: '', 
                required: false, 
                order:  1,
                options: []
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Clinical Stage - Staging System', 
                type:  'textbox', 
                value: '', 
                required: false, 
                order:  1,
                options: []
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Pathology Stage', 
                type:  'textbox', 
                value: '', 
                required: false, 
                order:  1,
                options: []
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Pathology Stage - Staging System', 
                type:  'textbox', 
                value: '', 
                required: false, 
                order:  1,
                options: []
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'T', 
                type:  'textbox', 
                value: '', 
                required: false, 
                order:  1,
                options: []
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'N', 
                type:  'textbox', 
                value: '', 
                required: false, 
                order:  1,
                options: []
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'M', 
                type:  'textbox', 
                value: '', 
                required: false, 
                order:  1,
                options: []
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'General Stage', 
                type:  'radiobutton', 
                value: '', 
                required: false, 
                order:  1,
                options: [
                  {
                    key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "In-situ",
                    order:  1
                  },
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Localized",
                    order:  2
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Regional Nodes",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Direct Extention + Regional Nodes",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Distant Metastasis",
                    order:  3
                  }
                ]
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Treatment Recieved from Another Hospital', 
                type:  'checkbox', 
                value: '', 
                required: false, 
                order:  1,
                options: [
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Surgery",
                    order:  2
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Chemotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "RadioActiveIodine",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Hormonal",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Immunotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "ChemoRadiotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Targeted Cell Treatment",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Cryotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Palliative Treatment",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Others",
                    order:  3
                  }
                ]
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Planned Primary Treatment Type', 
                type:  'radiobutton', 
                value: '', 
                required: false, 
                order:  1,
                options: [
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Surgery",
                    order:  2
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Chemotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "RadioActiveIodine",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Hormonal",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Immunotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "ChemoRadiotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Targeted Cell Treatment",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Cryotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Palliative Treatment",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Others",
                    order:  3
                  }
                ]
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Planned Adjuvant/Additional Type', 
                type:  'checkbox', 
                value: '', 
                required: false, 
                order:  1,
                options: [
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Surgery",
                    order:  2
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Chemotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "RadioActiveIodine",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Hormonal",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Immunotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "ChemoRadiotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Targeted Cell Treatment",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Cryotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Palliative Treatment",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Others",
                    order:  3
                  }
                ]
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Planned Treatment Intent', 
                type:  'radiobutton', 
                value: '', 
                required: false, 
                order:  1,
                options: [
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Surgery",
                    order:  2
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Chemotheraphy",
                    order:  3
                  }
                ]
              }
            ]
        },

        //PRIMARY SITE 02

        {
          key: 'bx49-efdf-6162-88ed-3d6c743423c', 
          name: "Primary Site 02",
          order: 0,
          questions: [
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Organ Site', 
                type:  'textbox', 
                value: '', 
                required: false, 
                order:  1,
                options: []
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'International Classificaiton of Disease (ICD)', 
                type:  'textbox', 
                value: '', 
                required: false, 
                order:  1,
                options: []
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Histology Type', 
                type:  'textbox', 
                value: '', 
                required: false, 
                order:  1,
                options: []
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Date of Diagnosis', 
                type:  'datepicker', 
                value: '', 
                required: false, 
                order:  1,
                options: []
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Laterality', 
                type:  'radiobutton', 
                value: '', 
                required: false, 
                order:  1,
                options: [
                  {
                    key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Right",
                    order:  1
                  },
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Left",
                    order:  2
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Bilateral",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Not Applicable",
                    order:  3
                  }
                ] 
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'General Stage of Registration', 
                type:  'radiobutton', 
                value: '', 
                required: false, 
                order:  1,
                options: [
                  {
                    key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Newly diagnosed",
                    order:  1
                  },
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Recurrent",
                    order:  2
                  }
                ] 
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Most Valid Basis of Diagnosis', 
                type:  'radiobutton', 
                value: '', 
                required: false, 
                order:  1,
                options: [
                  {
                    key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Clinical Investigation",
                    order:  1
                  },
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Clinical Only",
                    order:  2
                  },
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Specific Tumor Marker",
                    order:  2
                  },
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Cytology or Hematology",
                    order:  2
                  },
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Histology of Metastasis",
                    order:  2
                  },
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Histology of Primary",
                    order:  2
                  },
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Unknown",
                    order:  2
                  }
                ] 
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Clinical Stage', 
                type:  'textbox', 
                value: '', 
                required: false, 
                order:  1,
                options: []
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Clinical Stage - Staging System', 
                type:  'textbox', 
                value: '', 
                required: false, 
                order:  1,
                options: []
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Pathology Stage', 
                type:  'textbox', 
                value: '', 
                required: false, 
                order:  1,
                options: []
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Pathology Stage - Staging System', 
                type:  'textbox', 
                value: '', 
                required: false, 
                order:  1,
                options: []
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'T', 
                type:  'textbox', 
                value: '', 
                required: false, 
                order:  1,
                options: []
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'N', 
                type:  'textbox', 
                value: '', 
                required: false, 
                order:  1,
                options: []
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'M', 
                type:  'textbox', 
                value: '', 
                required: false, 
                order:  1,
                options: []
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'General Stage', 
                type:  'radiobutton', 
                value: '', 
                required: false, 
                order:  1,
                options: [
                  {
                    key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "In-situ",
                    order:  1
                  },
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Localized",
                    order:  2
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Regional Nodes",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Direct Extention + Regional Nodes",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Distant Metastasis",
                    order:  3
                  }
                ]
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Treatment Recieved from Another Hospital', 
                type:  'checkbox', 
                value: '', 
                required: false, 
                order:  1,
                options: [
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Surgery",
                    order:  2
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Chemotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "RadioActiveIodine",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Hormonal",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Immunotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "ChemoRadiotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Targeted Cell Treatment",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Cryotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Palliative Treatment",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Others",
                    order:  3
                  }
                ]
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Planned Primary Treatment Type', 
                type:  'radiobutton', 
                value: '', 
                required: false, 
                order:  1,
                options: [
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Surgery",
                    order:  2
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Chemotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "RadioActiveIodine",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Hormonal",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Immunotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "ChemoRadiotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Targeted Cell Treatment",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Cryotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Palliative Treatment",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Others",
                    order:  3
                  }
                ]
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Planned Adjuvant/Additional Type', 
                type:  'checkbox', 
                value: '', 
                required: false, 
                order:  1,
                options: [
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Surgery",
                    order:  2
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Chemotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "RadioActiveIodine",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Hormonal",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Immunotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "ChemoRadiotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Targeted Cell Treatment",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Cryotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Palliative Treatment",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Others",
                    order:  3
                  }
                ]
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Planned Treatment Intent', 
                type:  'radiobutton', 
                value: '', 
                required: false, 
                order:  1,
                options: [
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Surgery",
                    order:  2
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Chemotheraphy",
                    order:  3
                  }
                ]
              }
            ]
        },

        //PRIMARY SITE 03

        {
          key: 'bx49-efdf-6162-88ed-3d6c743423c', 
          name: "Primary Site 03",
          order: 0,
          questions: [
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Organ Site', 
                type:  'textbox', 
                value: '', 
                required: false, 
                order:  1,
                options: []
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'International Classificaiton of Disease (ICD)', 
                type:  'textbox', 
                value: '', 
                required: false, 
                order:  1,
                options: []
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Histology Type', 
                type:  'textbox', 
                value: '', 
                required: false, 
                order:  1,
                options: []
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Date of Diagnosis', 
                type:  'datepicker', 
                value: '', 
                required: false, 
                order:  1,
                options: []
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Laterality', 
                type:  'radiobutton', 
                value: '', 
                required: false, 
                order:  1,
                options: [
                  {
                    key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Right",
                    order:  1
                  },
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Left",
                    order:  2
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Bilateral",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Not Applicable",
                    order:  3
                  }
                ] 
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'General Stage of Registration', 
                type:  'radiobutton', 
                value: '', 
                required: false, 
                order:  1,
                options: [
                  {
                    key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Newly diagnosed",
                    order:  1
                  },
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Recurrent",
                    order:  2
                  }
                ] 
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Most Valid Basis of Diagnosis', 
                type:  'radiobutton', 
                value: '', 
                required: false, 
                order:  1,
                options: [
                  {
                    key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Clinical Investigation",
                    order:  1
                  },
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Clinical Only",
                    order:  2
                  },
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Specific Tumor Marker",
                    order:  2
                  },
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Cytology or Hematology",
                    order:  2
                  },
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Histology of Metastasis",
                    order:  2
                  },
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Histology of Primary",
                    order:  2
                  },
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Unknown",
                    order:  2
                  }
                ] 
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Clinical Stage', 
                type:  'textbox', 
                value: '', 
                required: false, 
                order:  1,
                options: []
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Clinical Stage - Staging System', 
                type:  'textbox', 
                value: '', 
                required: false, 
                order:  1,
                options: []
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Pathology Stage', 
                type:  'textbox', 
                value: '', 
                required: false, 
                order:  1,
                options: []
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Pathology Stage - Staging System', 
                type:  'textbox', 
                value: '', 
                required: false, 
                order:  1,
                options: []
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'T', 
                type:  'textbox', 
                value: '', 
                required: false, 
                order:  1,
                options: []
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'N', 
                type:  'textbox', 
                value: '', 
                required: false, 
                order:  1,
                options: []
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'M', 
                type:  'textbox', 
                value: '', 
                required: false, 
                order:  1,
                options: []
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'General Stage', 
                type:  'radiobutton', 
                value: '', 
                required: false, 
                order:  1,
                options: [
                  {
                    key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "In-situ",
                    order:  1
                  },
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Localized",
                    order:  2
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Regional Nodes",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Direct Extention + Regional Nodes",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Distant Metastasis",
                    order:  3
                  }
                ]
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Treatment Recieved from Another Hospital', 
                type:  'checkbox', 
                value: '', 
                required: false, 
                order:  1,
                options: [
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Surgery",
                    order:  2
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Chemotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "RadioActiveIodine",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Hormonal",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Immunotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "ChemoRadiotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Targeted Cell Treatment",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Cryotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Palliative Treatment",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Others",
                    order:  3
                  }
                ]
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Planned Primary Treatment Type', 
                type:  'radiobutton', 
                value: '', 
                required: false, 
                order:  1,
                options: [
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Surgery",
                    order:  2
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Chemotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "RadioActiveIodine",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Hormonal",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Immunotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "ChemoRadiotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Targeted Cell Treatment",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Cryotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Palliative Treatment",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Others",
                    order:  3
                  }
                ]
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Planned Adjuvant/Additional Type', 
                type:  'checkbox', 
                value: '', 
                required: false, 
                order:  1,
                options: [
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Surgery",
                    order:  2
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Chemotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "RadioActiveIodine",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Hormonal",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Immunotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "ChemoRadiotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Targeted Cell Treatment",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Cryotheraphy",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Palliative Treatment",
                    order:  3
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Others",
                    order:  3
                  }
                ]
              },
              { 
                key: 'afdf-6162-88ed-3d6c7442343c', 
                label: 'Planned Treatment Intent', 
                type:  'radiobutton', 
                value: '', 
                required: false, 
                order:  1,
                options: [
                  {
                    key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Surgery",
                    order:  2
                  },
                  {
                    key: 'c32aa449-efdf-6162-88ed-3d6c7442343c', 
                    name: "Chemotheraphy",
                    order:  3
                  }
                ]
              }
            ]
        },

        {
          key: 'cx49-efdf-6162-88ed-3d6c743423c', 
          name: "Surgery",
          order: 0,
          questions: [
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Date of Surgery', 
              type: 'datepicker', 
              value: '', 
              required: false, 
              order:  1,
              options: [] 
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Procedure Done', 
              type: 'textbox', 
              value: '', 
              required: false, 
              order:  1,
              options: [] 
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Outcome', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Improved",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Not Improved",
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
              label: 'Morbidity', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Yes",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "No",
                  order:  2
                }
              ] 
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Morbidity List', 
              type: 'textarea', 
              value: '', 
              required: false, 
              order:  1,
              options: [] 
            }
          ]
        },



        {
          key: 'fx49-efdf-6162-88ed-3d6c743423c', 
          name: "Chemotheraphy for Treatment",
          order: 0,
          questions: [
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Date start', 
              type: 'datepicker', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Date end', 
              type: 'datepicker', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Intent', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Neoadjuvant",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Adjuvant",
                  order:  2
                }
              ] 
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Completed', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Yes",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "No",
                  order:  2
                }
              ] 
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Reasons for Non-completion', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Poor response",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Complications",
                  order:  2
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Socioeconomic",
                  order:  2
                }
              ] 
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Outcome', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Complete response",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Partial response",
                  order:  2
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Stable disease",
                  order:  2
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Progression",
                  order:  2
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Death",
                  order:  2
                }
              ] 
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Morbidity', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Yes",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "No",
                  order:  2
                }
              ] 
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Morbidity Grading', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Gr III",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Gr IV",
                  order:  2
                }
              ] 
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Morbidity List', 
              type: 'textarea', 
              value: '', 
              required: false, 
              order:  1,
              options: [] 
            }
          ]
        },
        


        {
          key: 'fx49-efdf-6162-88ed-3d6c743423c', 
          name: "Chemotheraphy for Metastatic Disease",
          order: 0,
          questions: [
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Date start', 
              type: 'datepicker', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Outcome', 
              type: 'textarea', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Morbidity', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Yes",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "No",
                  order:  2
                }
              ] 
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Morbidity Grading', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Gr III",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Gr IV",
                  order:  2
                }
              ] 
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Morbidity List', 
              type: 'textarea', 
              value: '', 
              required: false, 
              order:  1,
              options: [] 
            }
          ]
        },



        {
          key: 'fx49-efdf-6162-88ed-3d6c743423c', 
          name: "Radiotheraphy",
          order: 0,
          questions: [
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Date start', 
              type: 'datepicker', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Date end', 
              type: 'datepicker', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Intent', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Neoadjuvant",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Adjuvant",
                  order:  2
                }
              ] 
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Completed', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Yes",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "No",
                  order:  2
                }
              ] 
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Reasons for Non-completion', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Poor response",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Complications",
                  order:  2
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Socioeconomic",
                  order:  2
                }
              ] 
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Outcome', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Complete response",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Partial response",
                  order:  2
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Stable disease",
                  order:  2
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Progression",
                  order:  2
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Death",
                  order:  2
                }
              ] 
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Morbidity', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Yes",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "No",
                  order:  2
                }
              ] 
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Morbidity Grading', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Gr III",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Gr IV",
                  order:  2
                }
              ] 
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Morbidity List', 
              type: 'textarea', 
              value: '', 
              required: false, 
              order:  1,
              options: [] 
            }
          ]
        },


        {
          key: 'fx49-efdf-6162-88ed-3d6c743423c', 
          name: "RadioActive Iodine Theraphy",
          order: 0,
          questions: [
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Date start', 
              type: 'datepicker', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Intent', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Adjuvant",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Palliative",
                  order:  2
                }
              ] 
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Morbidity', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Yes",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "No",
                  order:  2
                }
              ] 
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Morbidity List', 
              type: 'textarea', 
              value: '', 
              required: false, 
              order:  1,
              options: [] 
            }
          ]
        },


        {
          key: 'fx49-efdf-6162-88ed-3d6c743423c', 
          name: "Immunotheraphy",
          order: 0,
          questions: [
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Date start', 
              type: 'datepicker', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Outcome', 
              type: 'textarea', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Morbidity', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Yes",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "No",
                  order:  2
                }
              ] 
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Morbidity Grading', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Gr III",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Gr IV",
                  order:  2
                }
              ] 
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Morbidity List', 
              type: 'textarea', 
              value: '', 
              required: false, 
              order:  1,
              options: [] 
            }
          ]
        },


        {
          key: 'fx49-efdf-6162-88ed-3d6c743423c', 
          name: "Targeted Cell Theraphy",
          order: 0,
          questions: [
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Date start', 
              type: 'datepicker', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Outcome', 
              type: 'textarea', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Morbidity', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Yes",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "No",
                  order:  2
                }
              ] 
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Morbidity Grading', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Gr III",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Gr IV",
                  order:  2
                }
              ] 
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Morbidity List', 
              type: 'textarea', 
              value: '', 
              required: false, 
              order:  1,
              options: [] 
            }
          ]
        },


        {
          key: 'fx49-efdf-6162-88ed-3d6c743423c', 
          name: "Pain Management",
          order: 0,
          questions: [
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Date start', 
              type: 'datepicker', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Type of Treatment', 
              type: 'textarea', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Morbidity', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Yes",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "No",
                  order:  2
                }
              ] 
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Morbidity List', 
              type: 'textarea', 
              value: '', 
              required: false, 
              order:  1,
              options: [] 
            }
          ]
        },

        {
          key: 'fx49-efdf-6162-88ed-3d6c743423c', 
          name: "Other Treatment",
          order: 0,
          questions: [
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Treatment Name', 
              type: 'textbox', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Date start', 
              type: 'datepicker', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Type of Treatment', 
              type: 'textarea', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Morbidity', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Yes",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "No",
                  order:  2
                }
              ] 
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Morbidity List', 
              type: 'textarea', 
              value: '', 
              required: false, 
              order:  1,
              options: [] 
            }
          ]
        },


        {
          key: 'fx49-efdf-6162-88ed-3d6c743423c', 
          name: "Other Treatment",
          order: 0,
          questions: [
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Treatment Name', 
              type: 'textbox', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Date start', 
              type: 'datepicker', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Type of Treatment', 
              type: 'textarea', 
              value: '', 
              required: false, 
              order:  1,
              options: []
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Morbidity', 
              type: 'radiobutton', 
              value: '', 
              required: false, 
              order:  1,
              options: [
                {
                  key: 'a32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "Yes",
                  order:  1
                },
                {
                  key: 'b32aa449-efdf-6162-88ed-3d6c7442343c', 
                  name: "No",
                  order:  2
                }
              ] 
            },
            { 
              key: 'afdf-6162-88ed-3d6c7442343c', 
              label: 'Morbidity List', 
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
