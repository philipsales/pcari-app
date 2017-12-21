export class Form {
  id            : number;
  name          : string;
  department?   : string;
  status?       : string;
  created_by?   : string;
  is_deleted?   : boolean;
  sections      : Section[];
}

export class Section {
  key         : string;
  name        : string;
  order?      : number;
  questions?  :  Question[];

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
  key         : string;
  label       : string;
  type        : string;
  value       : string;
  required    : boolean;
  order       : number;
  options?    : string[];

  constructor(
    key         : string,
    label       : string,
    type        : string,
    value       : string,
    required    : boolean,
    order       : number,	
    options     : string[] 
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

export const forms: Form[] = [
  {
    id: 1,
    name: "Surgery Template",
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
    id: 2,
    name: "Obstetrics Template",
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
];

