default_deps=szzclass.cls | build

all: bi-proposal bi-proposal2 bi-aag bi-wsi-si-14

bi-proposal: build/bi-proposal.pdf

build/bi-proposal.pdf: topics/bi-proposal/bi-proposal.tex topics/bi-proposal/to_include.tex $(default_deps)
	xelatex -output-directory=build topics/bi-proposal/bi-proposal.tex

bi-proposal2: build/bi-proposal2.pdf

build/bi-proposal2.pdf: topics/bi-proposal2/bi-proposal2.tex topics/bi-proposal2/to_include.tex $(default_deps)
	xelatex -output-directory=build topics/bi-proposal2/bi-proposal2.tex

bi-aag: build/bi-aag.pdf

build/bi-aag.pdf: topics/bi-spol-1/bi-aag.tex $(default_deps)
	xelatex -output-directory=build topics/bi-spol-1/bi-aag.tex

bi-wsi-si-14: build/bi-wsi-si-14.pdf

build/bi-wsi-si-14.pdf: topics/bi-wsi-si-14/bi-wsi-si-14.tex $(default_deps)
	xelatex -output-directory=build topics/bi-wsi-si-14/bi-wsi-si-14.tex

build:
	mkdir build

clean:
	rm -rf build
