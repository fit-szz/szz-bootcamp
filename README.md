# SSZ

## Jak přidat otázku
*nazev-predmetu nahradit za kód předmětu malými písmeny*

1) Do .md souboru zapsat, kterou otázku zpracováváte.
2) Zdrojáky hodit do adresáře topics/nazev-otazky. Hlavní tex soubor by se měl jmenovat `nazev-predmetu.tex`.
3) Do Makefile udělat nový záznamy podle vzoru:

```
nazev-predmetu: build/nazev-predmetu.pdf

build/nazev-predmetu.pdf: /*... zdrojové soubory ...*/ $(default_deps)
	xelatex -output-directory=build topics/nazev-predmetu/nazev-predmetu.tex
```
4) do pravidla `all:` v Makefile přidat pravidlo `nazev-predmetu`.
