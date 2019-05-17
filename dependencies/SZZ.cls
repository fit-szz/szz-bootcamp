\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{SZZ}

\LoadClass[a4paper,9pt]{article}

\RequirePackage{polyglossia}
\setdefaultlanguage{czech}

\RequirePackage{hyperref}
\RequirePackage{graphicx}
\RequirePackage{hyperref}

\RequirePackage[margin=3cm]{geometry}


\newif\if@questiondefined
\DeclareRobustCommand{\question}[1]{
  \def\thequestion{#1}
  \@questiondefinedtrue
}

\newif\if@codedefined
\DeclareRobustCommand{\code}[1]{
  \def\thecode{#1}
  \@codedefinedtrue
}

\newif\if@subjectdefined
\DeclareRobustCommand{\subject}[1]{
  \def\thesubject{#1}
  \@subjectdefinedtrue
}

\AtBeginDocument{
  \begin{center}
  \huge\textbf{\thecode}
  \noindent\rule{\textwidth}{0.2pt}
  \Large{\thequestion}
  \noindent\rule{\textwidth}{0.2pt}
  \url{https://courses.fit.cvut.cz/BI-\thesubject/}
  \end{center}
}


% % Barvičky
% \RequirePackage{color,soul}
% \RequirePackage[many]{tcolorbox}
% \definecolor{red}{HTML}{ff6f8a}
% \definecolor{orange}{HTML}{FF9900}
% \definecolor{green}{HTML}{98CC70}
% \definecolor{blue}{HTML}{00B0F0}


% \newcommand{\orange}[1]{{\setlength{\fboxsep}{1.5pt}\colorbox{orange}{#1}}}
% \newcommand{\red}[1]{{\setlength{\fboxsep}{1.5pt}\colorbox{red}{#1}}}
% \newcommand{\blue}[1]{{\setlength{\fboxsep}{1.5pt}\colorbox{blue}{#1}}}
% \newcommand{\markup}[1]{\blue{#1}}