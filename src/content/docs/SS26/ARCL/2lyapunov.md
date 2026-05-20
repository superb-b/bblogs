---
title: Chapter2. lyapunov theorem
date: May 11
description: Monday & Wenesday 10am, GBR
---
<P style="color:grey;" align="right">
Given by: Dr. Hamid Sadeghian
</P>

# Lyapunov theorem
### Asymp. stability with n.s.d function for non-autonomous sys.
* For **autonomous systems**, by LaSalle lemma it is possible to show asymptotic stability for s.p.d Lyapunov functions.
* For **non-autonomous systems**, use Barbalat lemma.
> If the differentiable function $f(t)$ has a finite limit as $t\rightarrow\infty$, and if $\dot{f}$ is [*uniformly continous*](#uniformly-continuity), then $\dot{f}(t)\rightarrow 0$ as $t\rightarrow\infty$

uniformly continuity:
a function $g(t)$ is said to be uniformly continous on $[0,\infty)$ if 
$$
\forall R>0,\ \exists \eta(R)>0,
\ \forall t_1\ge0,\ \forall t\ge0,
\ |t-t_1|<\eta
\Rightarrow
|g(t)-g(t_1)|<R
$$
, which means **as long as the input change is sufficiently small,
the output change will necessarily be small(globally).** For differentiable function to be uniformly continous is that *its derivative be bounded*.
