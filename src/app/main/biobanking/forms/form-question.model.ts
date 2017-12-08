export class Department {
  id = 0;
  name = '';
  sections: Section[];
}

export class Section {
  key         : string;
  name        : string;
  order?      : number;
  questions:  Question[];
}

export class Question {
  key         : string;
  label       : string;
  type        : string;
  value       : string;
  required?    : boolean;
  order?       : number;
  options?    : string[];
}

export const departments: Department[] = [
  {
    id: 1,
    name: "Surgery Department",
    sections: [
      {
        key: "key1",
        name: "History Section",
        order: 1,
        questions: [
            { 
              key: 'key2', 
              label: 'Maternity history', 
              type: 'password', 
              value:'value', 
              required: true, 
              order:  1
            }
        ]
      },
      {
        key: "key2",
        name: "History Section",
        order: 1,
        questions: [
            { 
              key: 'key2', 
              label: 'Last hospitallization', 
              type: 'password', 
              value:'value', 
              required: true, 
              order:  1
            },
            { 
              key: 'key22', 
              label: 'Faternity history', 
              type: 'password', 
              value:'value', 
              required: true, 
              order:  1
            }
        ]
      },
    ]
  },
  {
    id: 2,
    name: "Obstetrics Department",
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
              order:  1
            },
            { 
              key: 'key33', 
              label: 'Present of Family Cancer', 
              type: 'password', 
              value:'value', 
              required: true, 
              order:  1
            },
            { 
              key: 'key333', 
              label: 'Present of Family Cancer', 
              type: 'password', 
              value:'value', 
              required: true, 
              order:  1
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
              order:  1
            },
            { 
              key: 'key2', 
              label: 'Last Brain Surgery Treatment', 
              type: 'password', 
              value:'value', 
              required: true, 
              order:  1
            }
        ]
      },
    ]
  }
];

