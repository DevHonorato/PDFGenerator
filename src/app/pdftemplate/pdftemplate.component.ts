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
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "10 Months", "Valor": "$2000" },
    { "Tipo": "SEO Prata", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "18 Months", "Valor": "$5000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Prata", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Ouro", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Prata", "Site": "www.site.com", "Tempo": "9 Months", "Valor": "$1800" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "6 Months", "Valor": "$2000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "7 Months", "Valor": "$1000" },
    { "Tipo": "SEO Ouro", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "3 Months", "Valor": "$5000" },
    { "Tipo": "SEO Prata", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "5 Months", "Valor": "$100" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "4 Months", "Valor": "$1000" },
    { "Tipo": "SEO Prata", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "7 Months", "Valor": "$1800" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "6 Months", "Valor": "$1000" },
    { "Tipo": "SEO Prata", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1800" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "5 Months", "Valor": "$100" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$5000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "7 Months", "Valor": "$1800" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "6 Months", "Valor": "$1000" },
    { "Tipo": "SEO Prata", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "1 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "2 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Ouro", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "3 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "4 Months", "Valor": "$1800" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$1000" },
    { "Tipo": "SEO Bronze", "Site": "www.site.com", "Tempo": "5 Months", "Valor": "$1800" },
    { "Tipo": "SEO Prata", "Site": "www.site.com", "Tempo": "8 Months", "Valor": "$5000" }
  ]

  ngOnInit(): void {
  }

}
