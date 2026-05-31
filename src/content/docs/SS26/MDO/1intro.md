---
title: Introduction
---


* A problem statement is the concise description of an optimization task:

$$
\begin{aligned}
\min_{\boldsymbol{x}} \quad & f(\boldsymbol{x}) \\
\text{subject to} \quad & \boldsymbol{h}(\boldsymbol{x}) = \mathbf{0} \\
& \boldsymbol{g}(\boldsymbol{x}) \leq \mathbf{0} \\
& \boldsymbol{x}_l \leq \boldsymbol{x} \leq \boldsymbol{x}_u
\end{aligned}
$$

* $\boldsymbol{x}$ : vector of design variables
* $f(\boldsymbol{x})$ : objective function
* $\boldsymbol{h}(\boldsymbol{x})$ : equality constraint functions
* $\boldsymbol{g}(\boldsymbol{x})$ : inequality constraint functions
* $\boldsymbol{x}_l, \boldsymbol{x}_u$ : lower and upper bounds, define design space

## MDO
