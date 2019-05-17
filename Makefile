default_deps=szzclass.cls | build

all: BI-PROPOSAL BI-PROPOSAL2

BI-PROPOSAL: build/bi-proposal.pdf

build/bi-proposal.pdf: topics/BI-PROPOSAL/bi-proposal.tex topics/BI-PROPOSAL/to_include.tex $(default_deps)
	xelatex -output-directory=build topics/BI-PROPOSAL/bi-proposal.tex

BI-PROPOSAL2: build/bi-proposal2.pdf

build/bi-proposal2.pdf: topics/BI-PROPOSAL2/bi-proposal2.tex topics/BI-PROPOSAL2/to_include.tex $(default_deps)
	xelatex -output-directory=build topics/BI-PROPOSAL2/bi-proposal2.tex

build:
	mkdir build

clean:
	rm -rf build
