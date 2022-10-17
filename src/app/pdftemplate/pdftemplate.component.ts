import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdftemplate',
  templateUrl: './pdftemplate.component.html',
  styleUrls: ['./pdftemplate.component.css']
})
export class PDFTemplateComponent implements OnInit {

  constructor() { }

  date = new Date().toLocaleString().slice(0, 10);
  hour = new Date().toLocaleString().slice(10);

  array: any[] = [
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Prata", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Prata", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Ouro", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Prata", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Ouro", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Prata", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Prata", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Prata", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Prata", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Prata", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" }
  ]

  ngOnInit(): void {
  }

}
