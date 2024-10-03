 // src/app/data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private students = [
    { id: 1, name: 'John Doe', batchNumber: 101 },
    { id: 2, name: 'James Smith', batchNumber: 102 },
    { id: 3, name: 'Bob Johnson', batchNumber: 103 }
  ];

  private batches = [
    { id: 'B001', name: 'Batch 1' },
    { id: 'B002', name: 'Batch 2' },
    { id: 'B003', name: 'Batch 3' }
  ];

  getStudents() {
    return this.students;
  }

  getBatches() {
    return this.batches;
  }

  getStudentById(id: number) {
    return this.students.find(student => student.id === id);
  }

  getBatchById(id: string) {
    return this.batches.find(batch => batch.id === id);
  }
}
