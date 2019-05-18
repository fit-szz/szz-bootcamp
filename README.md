# SSZ

## Jak přidat otázku
*oznaceni-otazky nahradit za kód otázky malými písmeny*

1) Do .md souboru zapsat, kterou otázku zpracováváte.
2) Zdrojáky hodit do adresáře topics/oznaceni-otazky. Hlavní tex soubor by se měl jmenovat `oznaceni-otazky.tex`.
3) Do Makefile udělat nový záznamy podle vzoru:

```
oznaceni-otazky: build/oznaceni-otazky.pdf

build/oznaceni-otazky.pdf: /*... zdrojové soubory ...*/ $(default_deps)
	xelatex -output-directory=build topics/oznaceni-otazky/oznaceni-otazky.tex
```
4) do pravidla `all:` v Makefile přidat pravidlo `oznaceni-otazky`.
