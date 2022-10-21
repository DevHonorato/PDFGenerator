import { Component } from '@angular/core';


declare var html2pdf: () => any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PDFGenerator';
  viewer = false;


  async downloadTemplate(tipo: string) {

    switch (tipo) {
      case 'pdf':
        await this.f_geraPdf('PDFTemplate', 'Template PDF');
        break;
      case 'base64':
        await this.f_geraBase64('PDFTemplate');
        break;
      default:
        console.log("Tipo não cadastrado")
        break;
    }

  }

  async f_geraPdf(elementId: any, nomePDF: any) {

    var worker = html2pdf();

    var opt = {
      margin: 14,
      pagebreak: { mode: "avoid-all" },
      image: { type: "jpeg", quality: 1 },
      enableLinks: false,
      html2canvas: {
        useCORS: true,
        letterRendering: true,
        scale: 2
      },
      jsPDF: { orientation: 'portrait' }
    }

    var timeInMs = new Date().toLocaleString();

    await worker.set(opt).from(document.getElementById(elementId)).toPdf().get('pdf').then(function (pdf: any) {
      var totalPages = pdf.internal.getNumberOfPages();
      for (var i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        pdf.setFontSize(8);
        pdf.setTextColor(0);
        pdf.text('Página ' + i + ' de ' + totalPages, (pdf.internal.pageSize.getWidth() / 1.172), (pdf.internal.pageSize.getHeight() - 8));
        pdf.text(timeInMs, (pdf.internal.pageSize.getWidth() / 15.12), (pdf.internal.pageSize.getHeight() - 8));
        // console.log("pdf.internal.pageSize.getWidth()",pdf.internal.pageSize.getWidth())
        // console.log("pdf.internal.pageSize.getHeight()",pdf.internal.pageSize.getHeight())
      }
    }).save(nomePDF + ".pdf");

  }

  async f_geraBase64(elementId: any) {

    var worker = html2pdf();

    var opt = {
      margin: 14,
      pagebreak: { mode: "avoid-all" },
      image: { type: "jpeg", quality: 1 },
      enableLinks: false,
      html2canvas: {
        useCORS: true,
        letterRendering: true,
        scale: 2
      },
      jsPDF: { orientation: 'portrait' }
    }

    let jsonPdf = await worker.set(opt).from(document.getElementById(elementId)).outputPdf();

    var encoded = btoa(jsonPdf);
    console.log(encoded);

    return encoded;

  }


  viewerPDF() {
    let template = document.getElementById('viewerPDF');

    switch (this.viewer) {
      case true:
        template!.setAttribute("style", "display: none");
        this.viewer = false;
        break;
      case false:
        template!.setAttribute("style", "display: block");
        this.viewer = true;
        break;
      default:
        template!.setAttribute("style", "display: none");
        this.viewer = false;
        break;
    }
  }
}
