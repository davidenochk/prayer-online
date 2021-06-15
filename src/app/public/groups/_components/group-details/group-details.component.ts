import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UUID } from 'angular2-uuid';
import { delay, distinct } from 'rxjs/operators';
import { MessagesService } from 'src/app/shared/messages/messages.service';
import { Group } from 'src/app/_models/group.model';
import { GroupsService } from '../../groups.service';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss'],
})
export class GroupDetailsComponent implements OnInit {
  groupDetailsForm: FormGroup;

  public get gf() {
    return this.groupDetailsForm.controls;
  }

  constructor(
    private fb: FormBuilder,
    private _service: GroupsService,
    private message: MessagesService,
    private matDilogRef: MatDialogRef<GroupDetailsComponent>
  ) {
    this.newGroup();
    this.groupDetailsForm = this.fb.group({
      name: [null, [Validators.required]],
      other: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.newGroup();
    this.groupDetailsForm.valueChanges
    .pipe(delay(500), distinct()  )
    .subscribe(value => {
      this.group = {
        ...this.group,
        ...value
      }
    })
  }

  group: Group = {};
  onClickPostGroup() {
    console.log(this.group);
    const _group = {
      ...this.group,
      ...this.groupDetailsForm.value,
    };
    this._service.createGroup(_group).then(() => {
      this.message.showMessage('Created successfully');
      this.newGroup();
      this.groupDetailsForm.controls.name.setValue("");
      this.groupDetailsForm.controls.other.setValue("");
      this.matDilogRef.close(_group);
    });
  }

  newGroup() {
    this.group = {
      ...{},
      id: UUID.UUID(),
      name: '',
      other: ''
    };
  }
}
