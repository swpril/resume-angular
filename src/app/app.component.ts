import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  personalInfoFormGroup: FormGroup;
  experienceInfoFormGroup: FormGroup;
  projectsFormGroup: FormGroup;
  educationFormGroup: FormGroup;
  miscFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.personalInfoFormGroup = this.formBuilder.group({
      name: [null, Validators.required],
      email: [
        null,
        Validators.compose([Validators.required, Validators.email])
      ],
      phone: [null, Validators.required],
      linkedin: [null, Validators.required],
      github: [null, Validators.required],
      skills: [null, Validators.required]
    });

    this.experienceInfoFormGroup = this.formBuilder.group({
      exp1_org: [null, Validators.required],
      exp1_dur: [null, Validators.required],
      exp1_desc: [null, Validators.required],
      exp2_org: [null, Validators.required],
      exp2_dur: [null, Validators.required],
      exp2_desc: [null, Validators.required]
    });

    this.projectsFormGroup = this.formBuilder.group({
      proj1_title: [null, Validators.required],
      proj1_link: [null, Validators.required],
      proj1_desc: [null, Validators.required],
      proj2_title: [null, Validators.required],
      proj2_link: [null, Validators.required],
      proj2_desc: [null, Validators.required]
    });

    this.educationFormGroup = this.formBuilder.group({
      edu1_school: [null, Validators.required],
      edu1_year: [null, Validators.required],
      edu1_qualification: [null, Validators.required],
      edu1_desc: [null, Validators.required],
      edu2_school: [null, Validators.required],
      edu2_year: [null, Validators.required],
      edu2_qualification: [null, Validators.required],
      edu2_desc: [null, Validators.required]
    });

    this.miscFormGroup = this.formBuilder.group({
      extra_1: [null, Validators.required],
      extra_2: [null, Validators.required],
      extra_3: [null, Validators.required],
      extra_4: [null, Validators.required],
      extra_5: [null, Validators.required]
    });
  }
}
