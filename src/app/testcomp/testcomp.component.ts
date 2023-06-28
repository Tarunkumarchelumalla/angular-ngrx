import { Component } from '@angular/core';

@Component({
  selector: 'test-comp',
  templateUrl: './testcomp.component.html',
})
export class TestCompComponent {
  formData: any = {};

  saveData() {
    // Create a document with the form data
    const documentData = `
      Name: ${this.formData.name}
      Email: ${this.formData.email}
      Message: ${this.formData.message}
    `;

    // You can do something with the documentData here, like displaying it or saving it to a file

    // Reset the form after saving the data
    this.formData = {};
  }
}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
