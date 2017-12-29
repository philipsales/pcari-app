export class Form {
  id            : number;
  name          : string;
  department?   : string;
  approval?     : string;
  status?       : string;
  created_by?   : string;
  date_created? : Date;
  is_deleted?   : boolean;
  sections?     : Section[];

  constructor(
    name: string,
  ){
    this.name = name;
  }
}

export class Section {
  key         : string;
  name        : string;
  order?      : number;
  questions?  : Question[];

  constructor(
    key         : string,
    name        : string,
    order?      : number,	
    questions?  : Question[]
  ){
    this.key = key;
    this.name = name;
    this.order = order;
    this.questions= questions;
  }
}

export class Question {
  key                : string;
  label              : string;
  type               : string;
  value              : string;
  required           : boolean;
  order?             : number;
  options?                 : Option[];
  medical_library?         : string;
  medical_library_version? : string;
  medical_code?            : string;
  medical_name?            : string;
  medical_shortname?       : string;
  medical_description?     : string;

  constructor(
    key         : string,
    label       : string,
    type        : string,
    value       : string,
    required    : boolean,
    order       : number,	
    options     : Option[] 
  ){
    this.key = key;
    this.label = label;
    this.type = type;
    this.value = value;
    this.required = required;
    this.order = order;
    this.options = options;
  }
}

export class Option {
  key                : string;
  name               : string;
  type?              : string;
  order?             : number;
  medical_library?         : string;
  medical_library_version? : string;
  medical_code?            : string;
  medical_name?            : string;
  medical_shortname?       : string;
  medical_description?     : string;
}


export const forms: Form = 
    {
      id: 0, 
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
    };

