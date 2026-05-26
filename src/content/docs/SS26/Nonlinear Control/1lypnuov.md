---
title: Chap. 2. Lyapunov for Nonlinear System
description: Course contents from page 22 to ...
---
## Two Methods of Lyapunov for Nonlinear Systems
### 1. First/indirect method
Let $\boldsymbol{x}^*$ be an equilibrium of
$$
\dot{\boldsymbol{x}} = \boldsymbol{f}(\boldsymbol{x}), \quad \boldsymbol{x} \in \mathcal{X} \subseteq \mathbb{R}^n
$$
and $\boldsymbol{f} : \mathcal{X} \rightarrow \mathbb{R}^n$ twice continuously differentiable in an environment of $\boldsymbol{x}^*$. The linearization
$$
\Delta \dot{\boldsymbol{x}} = \boldsymbol{A}\Delta \boldsymbol{x}, \quad \boldsymbol{A} = \left. \frac{\partial \boldsymbol{f}(\boldsymbol{x})}{\partial \boldsymbol{x}} \right|_{\boldsymbol{x}^*} \tag{2.16}
$$
with $\Delta \boldsymbol{x} = \boldsymbol{x} - \boldsymbol{x}^*$, is a local approximation of the dynamics of the nonlinear system. $\sigma(\boldsymbol{A})$ denotes the spectrum of the matrix $\boldsymbol{A}$ (the entirety of all eigenvalues) and $\lambda_i(\boldsymbol{A})$ denotes a single eigenvalue.
The equilibrium $\boldsymbol{x}^*$ is
* **asymptotically stable** if $\sigma(\boldsymbol{A}) \in \mathbb{C}^-$,
* **unstable** if at least one eigenvalue $\lambda_i(\boldsymbol{A}) \in \mathbb{C}^+$.
* If at least one eigenvalue lies on the imaginary axis (while the others are in $\mathbb{C}^-$), the equilibrium is called **"non-hyperbolic"** and no direct stability statement is possible.

>* Example:
> Nonlinear System
> $\dot{x} = x(1-x)$
> two Equilibrium Points:
> $x^*_1 = 0 \quad x^*_2 = 1$
> let $f(x) = x - x^2$, find the deriviate 
$$
A = \frac{\partial f(x)}{\partial x} = 1 - 2x
$$
1. Substitute $x^*_1 = 0$ in to the derivative formula.
eigenvalue is 1 $\in \mathbb{C}^+$, so this equilibrium point is unstable.
2. Substitute $x^*_2 = 1$ in to the derivative formula.
eigenvalue is $\lambda = -1<0$, so it is asymptotically stable.

if eigenvalue $\lambda = 0$ lies on the imaginary axis, the
equilibrium is called “non-hyperbolic” and no direct stability statement is possible.

### 2. Second/direct method
Let $\boldsymbol{x}^*$ be an equilibrium of
$$
\dot{\boldsymbol{x}} = \boldsymbol{f}(\boldsymbol{x}), \quad \boldsymbol{x} \in \mathcal{X} \subseteq \mathbb{R}^n.
$$
Let $V : D \rightarrow \mathbb{R}$, $D \subseteq \mathcal{X}$, be a continuously differentiable function with $V(\boldsymbol{x}^*) = V^*$ such that

$$
\begin{aligned}
\text{(i)} \quad & V(\boldsymbol{x}) > V^* \quad \text{on} \quad D \setminus \{\boldsymbol{x}^*\},\\
\text{(ii)} \quad & \dot{V}(\boldsymbol{x}) = \frac{\partial V(\boldsymbol{x})}{\partial \boldsymbol{x}}\boldsymbol{f}(\boldsymbol{x}) \leq 0 \quad \text{on} \quad D.
\end{aligned}
$$

Then $V(\boldsymbol{x})$ is called a Lyapunov function and the equilibrium $\boldsymbol{x}^*$ is *stable* (in the sense of Lyapunov).
If, in addition,
$$
\dot{V}(\boldsymbol{x}) < 0 \quad \text{on} \quad D \setminus \{\boldsymbol{x}^*\}, \tag{2.19}
$$
then $\boldsymbol{x}^*$ is *asymptotically stable*.

#### 1. Condition (i) — $V(\boldsymbol{x})$ is Positive Definite
* **Academic English Expression:** > $V(\boldsymbol{x})$ is **locally positive definite**. (Or: $V(\boldsymbol{x})$ is strictly positive for all non-zero states in the neighborhood of $\boldsymbol{x}^*$).
* **Standard Sentence for Papers:** "The candidate Lyapunov function $V(\boldsymbol{x})$ must be zero at the equilibrium point $\boldsymbol{x}^*$ and strictly positive everywhere else in the domain $D \setminus \{\boldsymbol{x}^*\}$."

#### 2. Condition (ii) — $\dot{V}(\boldsymbol{x})$ is Negative Semi-Definite
* **Academic English Expression:** > The time derivative $\dot{V}(\boldsymbol{x})$ is **negative semi-definite** along the system trajectories.
* **Standard Sentence for Papers:** "The time derivative of $V(\boldsymbol{x})$ along the system trajectories is non-positive ($\dot{V}(\boldsymbol{x}) \leq 0$), which implies that the system's total energy is non-increasing over time, guaranteeing Lyapunov stability."

#### 3. Additional Condition — $\dot{V}(\boldsymbol{x})$ is Negative Definite (for Asymptotic Stability)
* **Academic English Expression:** > The time derivative $\dot{V}(\boldsymbol{x})$ is **strictly negative definite**.
* **Standard Sentence for Papers:** "If, in addition, the time derivative $\dot{V}(\boldsymbol{x})$ is strictly negative ($\dot{V}(\boldsymbol{x}) < 0$) for all $\boldsymbol{x} \in D \setminus \{\boldsymbol{x}^*\}$, the system energy strictly dissipates, ensuring that the equilibrium $\boldsymbol{x}^*$ is asymptotically stable."

---

### Summary of Core Terminology

| Mathematical Property | Academic Terminology | Chinese Translation |
| :--- | :--- | :--- |
| $V(\boldsymbol{x}) > 0$ | **Positive definite** | 正定 |
| $V(\boldsymbol{x}) \geq 0$ | **Positive semi-definite** | 半正定 |
| $\dot{V}(\boldsymbol{x}) \leq 0$ | **Negative semi-definite** | 半负定 |
| $\dot{V}(\boldsymbol{x}) < 0$ | **Negative definite** | 负定 |

**Domain of attraction** A Lyapunov function $V(\boldsymbol{x})$ provides an estimate of the domain of attraction of $\boldsymbol{x}^*$. Let
$$
\mathcal{X}_V = \{\boldsymbol{x} \in \mathcal{X} \mid V(\boldsymbol{x}) > V^*\} \cup \boldsymbol{x}^* \tag{2.20}
$$
and
$$
\mathcal{X}_{\dot{V}} = \{\boldsymbol{x} \in \mathcal{X} \mid \dot{V}(\boldsymbol{x}) < 0\} \cup \boldsymbol{x}^* . \tag{2.21}
$$
We consider the *level sets* of $V(\boldsymbol{x})$
$$
\Omega_c := \{\boldsymbol{x} \in \mathcal{X} \mid V^* \leq V(\boldsymbol{x}) \leq c\}. \tag{2.22}
$$

Let $\bar{c}$ be the value of $V(\boldsymbol{x})$ on the largest *closed* and *bounded* (i.e., *compact*) level set $\Omega_{\bar{c}}$, which is completely contained in $\mathcal{X}_V \cap \mathcal{X}_{\dot{V}}$. Then all trajectories that start in $\Omega_{\bar{c}}$ remain in $\Omega_{\bar{c}}$ and approach $\boldsymbol{x}^*$ asymptotically for $t \rightarrow \infty$. $\Omega_{\bar{c}}$ is an estimate of the domain of attraction of $\boldsymbol{x}^*$.

### Explanation:
* $\boldsymbol{x}^*$ is an isolated equilibrium, there is no other point s.t. $\dot{\boldsymbol{x}} = \mathbf{0}$ in $\Omega_{\bar{c}}$.
* In $\Omega_{\bar{c}}$, except for $\boldsymbol{x}^*$, $\dot{V}(\boldsymbol{x}) = \frac{\partial V(\boldsymbol{x})}{\partial \boldsymbol{x}}\dot{\boldsymbol{x}} < 0$ holds, and hence $\frac{\partial V(\boldsymbol{x})}{\partial \boldsymbol{x}} \neq \mathbf{0}^T$. $\Rightarrow$ There are no further stationary points of $V(\boldsymbol{x})$.
* $\Rightarrow$ Every point in $\Omega_{\bar{c}}$ is "transient" ($\dot{\boldsymbol{x}} \neq \mathbf{0}$) and $V(\boldsymbol{x})$ decreases strictly: $\dot{V}(\boldsymbol{x}) < 0$.
* $\Rightarrow$ As $V(\boldsymbol{x})$ is bounded from below by $V^* = V(\boldsymbol{x}^*)$, every trajectory which starts in $\Omega_{\bar{c}}$ must end asymptotically in $\boldsymbol{x}^*$.

Remark 2.1. The quadratic Lyapunov function $V(\Delta \boldsymbol{x}) = \frac{1}{2}\Delta \boldsymbol{x}^T \boldsymbol{P} \Delta \boldsymbol{x}$, where $\boldsymbol{P} = \boldsymbol{P}^T > 0$ is the solution of a Lyapunov equation (2.14) and the state matrix $\boldsymbol{A}$ represents the linearization according to (2.16), serves also as a Lyapunov function for the nonlinear system $\dot{\boldsymbol{x}} = \boldsymbol{f}(\boldsymbol{x})$ –- in a region around the equilibrium $\boldsymbol{x}^*$, where the linearization is a sufficiently good approximation of the nonlinear system. This can be seen as follows. We consider w.l.o.g. $\boldsymbol{x}^* = \mathbf{0}$ and write the differential equation as
$$
\dot{\boldsymbol{x}} = \underbrace{\boldsymbol{f}(\boldsymbol{x}^*)}_{=\mathbf{0}} + \boldsymbol{A}\boldsymbol{x} + \boldsymbol{r}(\boldsymbol{x}),
$$
where $\boldsymbol{r}(\boldsymbol{x})$ represents a residual term of order $\mathcal{O}(\|\boldsymbol{x}\|^2)$. Express now the time derivative of the quadratic Lyapunov function:
$$
\begin{aligned}
\dot{V} &= \frac{1}{2}\boldsymbol{x}^T \boldsymbol{P} (\boldsymbol{A}\boldsymbol{x} + \boldsymbol{r}(\boldsymbol{x})) + \frac{1}{2}(\boldsymbol{x}^T \boldsymbol{A}^T + \boldsymbol{r}^T(\boldsymbol{x}))\boldsymbol{P}\boldsymbol{x} \\
&= \frac{1}{2}\boldsymbol{x}^T \underbrace{(\boldsymbol{P}\boldsymbol{A} + \boldsymbol{A}^T \boldsymbol{P})}_{=-\frac{1}{2}\boldsymbol{x}^T \boldsymbol{Q}\boldsymbol{x}, \quad \boldsymbol{Q}>0} \boldsymbol{x} + \underbrace{\boldsymbol{x}^T \boldsymbol{P}\boldsymbol{r}(\boldsymbol{x})}_{\text{perturbation}}.
\end{aligned}
$$

As long as the quadratic first term dominates the second non-quadratic perturbation term, $V(\boldsymbol{x})$ is a Lyapunov function for the nonlinear system.

**Control Lyapunov Functions** While Lyapunov functions were defined for autonomous systems, the concept of *Control Lyapunov Functions* (CLFs) for input-affine systems takes into account rendering the time derivative $\dot{V}(\boldsymbol{x})$ negative by means of the control input. For the discussion of CLFs, we assume that the input-affine system (2.23) has an equilibrium $(\boldsymbol{x}^*, \boldsymbol{u}^*) = (\mathbf{0}, \mathbf{0})$, which implies $\boldsymbol{f}(\mathbf{0}) = \mathbf{0}$. Note that this can always be achieved by a simple coordinate shift $(\boldsymbol{x}, \boldsymbol{u}) \mapsto (\boldsymbol{x} - \boldsymbol{x}^*, \boldsymbol{u} - \boldsymbol{u}^*)$.

**Definition 2.3 (Control Lyapunov Function, CLF).** A scalar function $V : \mathcal{X} \rightarrow \mathbb{R}$ is a *Control Lyapunov Function* (CLF) for the system (2.23) with equilibrium $(\boldsymbol{x}^*, \boldsymbol{u}^*) = (\mathbf{0}, \mathbf{0})$ if the following implication holds for $\boldsymbol{x} \neq \mathbf{0}$:
$$
\frac{\partial V}{\partial \boldsymbol{x}}\boldsymbol{G}(\boldsymbol{x}) = \mathbf{0} \quad \Rightarrow \quad \frac{\partial V}{\partial \boldsymbol{x}}\boldsymbol{f}(\boldsymbol{x}) < 0. \tag{2.27}
$$
In words: *Whenever the decrease of $V(\boldsymbol{x})$ cannot be induced by the control input (through the vector field $\boldsymbol{G}\boldsymbol{u}$), $V(\boldsymbol{x})$ must decrease due to the drift term $\boldsymbol{f}(\boldsymbol{x})$.*

> **Input Affine System**
> $\dot{\boldsymbol{x}} = \boldsymbol{f}(\boldsymbol{x}) + \boldsymbol{G}(\boldsymbol{x})\boldsymbol{u}$
> * $f(x)$ is the drift term. The inherent tendency of a system to move when left unctrolled and to its own devicces.
> * $G(x)u$ is the control term. How the controller u apply weights to the system.

$$
\dot{V} = \frac{\partial V}{\partial \boldsymbol{x}}\dot{\boldsymbol{x}} = \underbrace{\frac{\partial V}{\partial \boldsymbol{x}}\boldsymbol{f}(\boldsymbol{x})}_{a(\boldsymbol{x})} + \underbrace{\frac{\partial V}{\partial \boldsymbol{x}}\boldsymbol{G}(\boldsymbol{x})}_{\boldsymbol{b}^T(\boldsymbol{x})}\boldsymbol{u} = a(\boldsymbol{x}) + \boldsymbol{b}^T(\boldsymbol{x})\boldsymbol{u}
$$

如果Controller失灵了，需要能够通过系统惯性降下来。可以通过设计信号u，把整体的 $\dot{V}$ 降下来，能够做到这一点的$V(x)$就叫CLF。如果找到了CLF，就需要算出来u。

**Sontag's Formula** Once a CLF $V(\boldsymbol{x})$ according to the previous definition is found, an asymptotically stabilizing feedback control law can be constructed, the so-called *Sontag's formula*. Define
$$
a(\boldsymbol{x}) := \frac{\partial V(\boldsymbol{x})}{\partial \boldsymbol{x}}\boldsymbol{f}(\boldsymbol{x}) \quad \text{and} \quad \boldsymbol{b}(\boldsymbol{x}) := \left(\frac{\partial V(\boldsymbol{x})}{\partial \boldsymbol{x}}\boldsymbol{G}(\boldsymbol{x})\right)^T. \tag{2.28}
$$
Recall that $a(\boldsymbol{x}) < 0$ must hold whenever $\boldsymbol{b}(\boldsymbol{x}) = \mathbf{0}$ for $\boldsymbol{x} \neq \mathbf{0}$. Sontag's formula is then given by
$$
\boldsymbol{u}_S(\boldsymbol{x}) = \begin{cases} 
-\boldsymbol{b}(\boldsymbol{x})\frac{a(\boldsymbol{x}) + \sqrt{a^2(\boldsymbol{x}) + (\boldsymbol{b}^T(\boldsymbol{x})\boldsymbol{b}(\boldsymbol{x}))^2}}{\boldsymbol{b}^T(\boldsymbol{x})\boldsymbol{b}(\boldsymbol{x})}, & \boldsymbol{b}(\boldsymbol{x}) \neq \mathbf{0}, \\ 
\mathbf{0}, & \boldsymbol{b}(\boldsymbol{x}) = \mathbf{0}. 
\end{cases} \tag{2.29}
$$
The control law has an interpretation in terms of optimal control, as it minimizes a certain cost functional.
* 平滑性（Small Control Property）: 随着状态x越来越接近远点，算出来的控制量$u_s$会丝滑的减小到0，不会产生剧烈的震荡或突变。
* 当 $b(x) = 0$ 时，没有输入，输出为0,系统靠天然drift。
* 当 $\boldsymbol{b}(\boldsymbol{x}) \neq \mathbf{0}$ 时， 根号可以用最省力的方式抵消掉不稳定的趋势，让 $\dot{V}<0$。