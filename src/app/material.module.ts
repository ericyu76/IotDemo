import { NgModule, Input } from '@angular/core';

import { MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatTabsModule  } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule, MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatTabsModule],
  exports: [FormsModule, MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatTabsModule]
})
export class MaterialModule {}