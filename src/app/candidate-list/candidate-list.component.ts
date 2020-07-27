import { Component, OnInit } from '@angular/core';
import { CandidateInfoService } from '../services/candidate-info.service';
import { Candidate } from '../models/candidate';
@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css'],
})
export class CandidateListComponent implements OnInit {
  candidateList :any[] // 查到整筆
  candidate: Candidate;  // 單筆物件
  cols: any[];
  displayDialog: boolean;
  constructor(private candidateService: CandidateInfoService) { }

  ngOnInit(): void {
    this.getAllCandidates();
    this.cols = [
      { field: 'caseCode', header: '序號' },
      { field: 'caseName', header: '事項' },
      { field: 'caseUserName', header: '姓名' },
      { field: 'description', header: '描述' }
    ];
  }
  // 查詢
  getAllCandidates() {
    this.candidateService.getAllCandidates().subscribe(
      data => {
        this.candidateList = data.data;
      }
    );
  }
  // 編輯所選的物件
  selectCandidate(candidate: Candidate) {
    this.candidate = Object.assign({}, candidate);
    console.log(this.candidate);
  }
  // 新增一筆
  addNewCandidate() {
    this.displayDialog = true;
    this.candidate = new Candidate();
  }
  // 關窗後清空值
  closeDialogForm() {
    this.candidate = null;
    this.displayDialog = false;
  }
  // 存檔分 (新增 修改)
  saveCandidate(candidate: Candidate) {
    const candidateFilterdList = this.candidateList.filter(c => c.newsId === candidate.newsId);
    console.log('回傳主黨的物建');
    console.log(candidate);
    if (this.displayDialog) {
      console.log('新增');
      this.candidateList.push(candidate);
    }
    else {
      console.log('修改');
      candidateFilterdList[this.candidateList.indexOf(this.candidate)] = candidate;
      candidateFilterdList[0].caseCode = candidate.caseCode;
      candidateFilterdList[0].caseName = candidate.caseName;
      candidateFilterdList[0].caseUserName = candidate.caseUserName;
      candidateFilterdList[0].description = candidate.description;
    }
    this.candidate = null;
    this.displayDialog = false;
  }
  // 刪除
  deleteCandidate(candidate: Candidate) {
    let index = this.candidateList.indexOf(candidate);
    this.candidateList = this.candidateList.filter((val, i) => i !== index);
    this.candidate = null;
  }
}
