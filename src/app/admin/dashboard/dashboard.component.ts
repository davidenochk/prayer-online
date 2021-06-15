import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GroupsService } from 'src/app/public/groups/groups.service';
import { POST_STATUS } from 'src/app/public/post.model';
import { PostService } from 'src/app/public/post/post.service';
import { BaseComponent } from 'src/app/shared/base/base.component';
import { GROUP_STATUS } from 'src/app/_models/group.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  totalGroups = 0;
  totalRequests = 0;
  totalOpenRequests = 0;
  totalAnsweredRequests = 0;

  constructor(
    private groupsService: GroupsService,
    private requestService: PostService
  ) {
  }

  ngOnInit(): void {
    this.requestService.getRequests().subscribe((res) => {
      this.totalRequests = res.filter(
        (r) => r.post_status != POST_STATUS.POST_DELETED
      ).length;
      this.totalOpenRequests = res.filter(
        (r) => !r.isAnswered && r.post_status != POST_STATUS.POST_DELETED
      ).length;
      this.totalAnsweredRequests = res.filter(
        (r) => r.isAnswered && r.post_status != POST_STATUS.POST_DELETED
      ).length;
    });

    this.groupsService.getRequests().subscribe((res) => {
      this.totalGroups = res.filter(
        (r) => r.group_status !== GROUP_STATUS.DELETED
      ).length;
    });
  }
}
