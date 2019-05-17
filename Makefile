default_deps=szzclass.cls | build

all: BI-PROPOSAL

BI-PROPOSAL: build/bi-proposal.pdf

build/bi-proposal.pdf: topics/BI-PROPOSAL/bi-proposal.tex topics/BI-PROPOSAL/to_include.tex $(default_deps)
	xelatex -output-directory=build topics/BI-PROPOSAL/bi-proposal.tex

build:
	mkdir build

clean:
	rm -rf build
