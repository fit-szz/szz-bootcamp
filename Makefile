default_deps=dependencies/* szzclass.cls | build

# The wildcard function call expands the argument the same way as the shell
# does. The patsubst function replaces `topics/bi-something` with
# `build/bi-something.pdf`.
all: $(patsubst topics/%,build/%.pdf,$(wildcard topics/bi-*))

# This is an implicit rule for all the subjects:
# - `%` in the prerequisites matches with as many characters as needed (the
# subject name)
# - `$*` in the recipe expands to what was matched with %
# Unfortunately, the `topics/%/*` wildcard isn't recursive, so if you change
# something in a subdirectory of a subject (an image for example), you'll have
# to recompile (the solution is to not use subdirectories).
build/%.pdf: topics/%/* $(default_deps)
	xelatex -shell-escape -output-directory=build topics/$*/$*.tex
	xelatex -shell-escape -output-directory=build topics/$*/$*.tex

build:
	mkdir build

clean:
	rm -rf build
