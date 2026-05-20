---
title: Chapter1. Intro and Preliminaries
description: Monday & Wenesday 10am, GBR
---
<P style="color:grey;" align="right">
Given by: Dr. Hamid Sadeghian
</P>

## Geometric Jacobian
To express 
* end-effector linear velocity $\dot{p}_e = J_P(q)\dot{q}$
* angular velocity $\omega_e = J_O(q)\dot{q}$
* velocity 
$$
\begin{bmatrix}
\dot{p}_e \\
\omega_e
\end{bmatrix}
=
J(q)\dot{q}
$$
* Jacobian
$$
J =
\begin{bmatrix}
J_P \\
J_O
\end{bmatrix}
$$

as a function of joint velocities $\dot{q}$

The column of Jacobian $J_i$ represents:
> The effect on the end-effector velocity when the i th joint moves independently at a unit velocity
if a robot has n dof 
$$
J \in \mathbb{R}^{6 \times n}
$$

## Redundancy and optimization
Jacobian acts as a mapping from the space of joint velocities to the space of task velocities.
The optimal solution is given by 
$$
\dot{q} = W^{-1}J^T(JW^{-1}J^T)^{-1}v_c
$$
where
$$
J_W^\dagger
=
W^{-1}J^T
(JW^{-1}J^T)^{-1}
$$
Jacobian 的 weighted pseudoinverse(加权伪逆). W is the weight matrix, usually symmetric and positive definite.
> example:
$$
W=
\begin{bmatrix}
1 & 0 \\
0 & 10
\end{bmatrix}
$$
The second joint movement is more expensive.
### Why we need weighted pseudoinverse
for redundant robot $n>6$, joints are more than task domain, we have infinate $\dot{q}$ to represent a $v_e$, so we need to have the optimal from infinate solutins.
$$
\min_{\dot{q}}
\quad
\frac12 \dot{q}^T W \dot{q}
$$
If W = I, then it is the normal Moore-Penrose pseudoinverse:
$$
J^\dagger
=
J^T(JJ^T)^{-1}
$$
Weighted pseudoinverse can be understand as 
> Which should move less
* joint close to limit
* joint energy cost is high
* joint has poor precision
* joint is not needed
Then the weight is higher, the system will use low cost joints for higher priority and dont use expensive joints.

$$
\min_{\dot{q}}

\frac12 \dot{q}^T W \dot{q}
$$
s.t.  optimal solution minimize the norm of joint velocities
$$
J\dot{q}=v_e
$$

$$
\dot{q} = v_eJ^{\dagger}
$$

it is from constrained optimization, it is weighted least norm solution。
$$
\dot{q}
=
W^{-1}J^T
(JW^{-1}J^T)^{-1}
v_e
$$
### Null space control
if $\dot{q}^*$ is a solution, $\dot{q}^*+ P\dot{q_0}$ is also a solution, thus the general solution will be
$$
\dot{q} = J^{\dagger}v_e + P\dot{q}_0
$$
where P is the projection matrix to given by $P = (I-J^{\dagger}J)$ The inverse kinematic solution to follow a given task space trajectory is generalized to $\dot{q} = J^{\dagger}(\dot{x}_d + Ke)+(I_n-J^{\dagger}J)\dot{q}_0$, where $e = x_d - x$. The null-space velocity vector $\dot{q}_0$ can be used to minimize some objective function w(q) by choosing
$$
\dot{q}_0
=
k_0
\left(
\frac{\partial w(q)}{\partial q}
\right)^T
$$
where $w(q)$ is objective function and gradient pointing to the fastest growing direction.

**Main task** is $\dot{q} = J^{\dagger}(\dot{x}_d + Ke)$ which helps the end-effector follows the desired trajectory. e is the desired pose. Ke is the feedback corrrection, pulls the robot back to the desired trajectory.

**Null-space motion** $(I_n-J^{\dagger}J)\dot{q}_0$ is satisfied and is not influenving the end-effector. Which keeps the joint motions that not influcing the main task. Why? Because 
$$
J(I_n-J^\dagger J)=0
$$

**objective functions**
* The manipulability measure, $w(q) = \sqrt{\det(J(q)J^T(q)}$
* The distance from mechanical joint limits, $q_i$ is current joint angle,$\bar{q}_i$ is joint range
$$
w(q)
=
-
\frac{1}{2n}
\sum_{i=1}^{n}
\left(
\frac{q_i-\bar q_i}
{q_{iM}-q_{im}}
\right)^2
$$
let joint stay in rhe middle, not close to joint limits. System is maximize w(q)
* The distance from an obstacle, defined as,
$$
w(q)
=
\min_{p,o}
|p(q)-o|
$$
system will increase the distance from obstacle.

