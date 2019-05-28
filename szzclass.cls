\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{szzclass}[2019/05/17 SZZ class]
\LoadClass{article}
\RequirePackage{todonotes}
\RequirePackage[parfill]{parskip}


% Hlavička
\newcommand{\subject}[1]{\def\thesubject{#1}}
\newcommand{\code}[1]{\def\thecode{#1}}
\newcommand{\topic}[1]{\def\thetopic{#1}}

\AtBeginDocument{
  \@ifundefined{thesubject}{}{
  \begin{center}
  \Large \textbf{\thesubject~--~\thecode}\\
  \Large \thetopic
  \end{center}
  }
}

