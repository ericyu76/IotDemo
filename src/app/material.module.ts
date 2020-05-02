import { NgModule, Input } from '@angular/core';

import { MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule  } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule, MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule],
  exports: [FormsModule, MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule]
})
export class MaterialModule {}