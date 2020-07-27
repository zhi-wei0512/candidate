import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Candidate } from '../models/candidate';
import { CandidateInfoService } from '../services/candidate-info.service';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.css']
})
export class CandidateDetailComponent implements OnInit {
  @Input() candidate: Candidate;
  @Output() saveCandidateEvent = new EventEmitter<Candidate>();
  @Output() closeDialogEvent = new EventEmitter();
  constructor(private candidateService: CandidateInfoService) { }
  display: boolean;
  ngOnInit() {
    this.display = true;
  }
  // 存檔時回傳資料給主檔
  saveCandidateInfo() {
    this.saveCandidateEvent.emit(this.candidate);
  }
  // 關窗
  closeFormDialog() {
    this.display = false;
    this.closeDialogEvent.emit();
  }

  //接API 儲存
  save() {
    ;
    this.candidateService.saveCandidate(this.candidate).subscribe(
      data => {
        if (data.success) {
          console.log(data);
          this.display = false;
          this.saveCandidateEvent.emit(this.candidate);
        }
      }
    );
  }
}
