import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl } from '@angular/forms';

//import { Question, Form, Section } from './form-question.model';
import { Question, Form, Section } from 'app/core/models';
import { forms } from './form-question.model';

import { NotificationsService } from 'angular2-notifications';
import { FormQuestionService } from './form-question.service';
import { DragulaService } from 'ng2-dragula';


@Component({
  selector: 'question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: [
  './question-detail.component.css', 
  './question-detail-dragula.component.css'
  ]
})
export class QuestionDetailComponent implements OnInit{
  @Input() selectedQuestions: Question[];

  private questionFormGroup: FormGroup;
  private myGroup: FormGroup;

  private questions: Question[];

  private errors: any = {};
  private has_errors = false;
  private hide_key = true ;
  private is_processing = false;

  private questionTypes: any[];

  private optionsArray: Array<any> = []; 
  private newOptions: any = {};

  private optionsValue: Array<any> = [];



  constructor(
    private _notificationsService: NotificationsService,
    private fb: FormBuilder,
    private questionService: FormQuestionService,
    private dragulaService: DragulaService
  ) 
  {		
      this.createForm();

      this.questionTypes = [ 
        { "value": "textbox",     "label": "text" },
        { "value": "textarea",    "label": "paragraph" },
        { "value": "dropdown",    "label": "dropdown" },
        { "value": "checkbox",    "label": "checkbox" },
        { "value": "radiobutton", "label": "radio" },
        { "value": "datepicker",  "label": "date" }
      ];


      dragulaService.drop.subscribe((value) => {
        console.log(`drop: ${value[0]}`);
      });

  }



  ngOnInit() {

    this.questions = this.selectedQuestions;

    this.setQuestions(this.questions);

    this.ngInitForm();
  }

  ngInitForm() {
    this.secretLairs.push(this.createQuestion());
  }

  createForm() {

    this.questionFormGroup = this.fb.group({
      name: '',
      secretLairs: this.fb.array([])
    });

  }


  setQuestions(questions: Question[]){
    const questionFGs = questions.map(question => this.fb.group(question));
    const questionFormArray = this.fb.array(questionFGs);
    this.questionFormGroup.setControl('secretLairs', questionFormArray);
  }

  get secretLairs(): FormArray {
      return this.questionFormGroup.get('secretLairs') as FormArray;
  };

  //TODO: Refractor
  createQuestion(): FormGroup {

    let order = this.secretLairs.controls.length + 1;

    let key = this.setHashKey();

    return this.fb.group(new Question(key,'','','',false,order,[]));
  }

  onAddQuestion() {
    this.secretLairs.push(this.createQuestion());
  }

  onDeleteQuestion(index:number) {
    this.secretLairs.removeAt(index);
  }

  //TODO: Refractor
  onCloneQuestion(question: FormGroup, index:number){


    let key = this.setHashKey();

    let questionClone = new Question(
       key,
       question.controls.label.value,
       question.controls.type.value,
       question.controls.value.value,
       question.controls.required.value,
       index+1,
       question.controls.options.value
    );

    //this.secretLairs.push(this.fb.group(questionClone));
    this.secretLairs.insert(index+1,this.fb.group(questionClone));

  }


  setHashKey(): string {
    let max = 111111;
    let min = 1111;
    return ''+ Math.floor(Math.random() * (max - min  + 1)) + min;
  }

  onAddSection() {
  }


  onSaveClick(input_question: Question){

    this.errors = {};
    this.has_errors = false;
    this.is_processing = true;

    this.questionService
        .create(input_question)
        .subscribe( created_question => {
          this.is_processing = false;
          console.warn(created_question, 'AYUS');

          this._notificationsService.success(
            'New Question : ' + input_question.label,
            'Successfully Created.',
              {
                  timeOut: 10000,
                  showProgressBar: true,
                  pauseOnHover: false,
                  clickToClose: false,
              }
            )
          },
          errors  => {
            this.errors = errors;
            this.has_errors = true;
            this.is_processing = false;
            console.warn('ERROR');
            throw errors;
          });
  }//--onSaveClick

  onAddOption(){
    this.optionsArray.push(this.newOptions);
    this.newOptions = {}; 
  }

  private text: string[]=[];
  private texts: string="";

  private options: Array<any> = [];



  valueChange(value,index,e){

   console.log('--index--',index);
   console.log('--value--',value);

   let newOption = {};

   newOption['index'] = index;
   newOption['value'] = value;

   console.log('--before.options.length--',this.options.length);

   if(this.options.length == 0){
     this.options.push(newOption);
     console.log('--insert 0--');
   } 
   else {
     this.options = this.options.filter(option => option.index !== index);
     this.options.push(newOption);
     console.log('--insert 1--');
   }

   console.log('--after.options.length--',this.options.length);

   console.log('-this.options--', this.options);

    this.onTextOptions();
  }

  onDeleteOption(value,index){
    this.options = this.options.filter(option => option.index !== index );

    this.optionsArray.splice(index,1);

    this.options.forEach((item,index) => {
       item.index = index;
    });
    this.onTextOptions();

    console.log('-this.options--', this.options);
    console.log('-this.texts--', this.texts);
    console.log('-this.formGroup--', this.secretLairs);

    console.log('length--',this.options.length);
    
  }

  onTextOptions(){
     this.texts = Array.prototype.map.call(this.options, function(item){
       return item.value;
     }).join("|");

     this.questionFormGroup.get('secretLairs').value[0].options = this.texts;
  }


}
