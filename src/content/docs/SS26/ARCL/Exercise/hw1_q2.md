---
title: Homework 1 Problem 2
---
## Task a. torque dynamics
$$
\begin{align*}
M\ddot{q} + C\dot{q} + G(q) + K(q - \theta) &= 0 \quad \text{(1) link dynamic} \\
J_m\ddot{\theta} + B_m\dot{\theta} - K(q - \theta) &= \tau_m \quad \text{(2) motor dynamic}
\end{align*}
$$

The transmitted elastic torque:
$$
\tau_c = K(\theta - q)
$$
So we simplify this system to:
$$
\ddot{q} = M^{-1}(\tau_c - C\dot{q} - G(q))
$$
$$
\ddot{\theta} = J_m^{-1}(\tau_m - \tau_c - B_m\dot{\theta} )
$$
Compute the second derivative of $\tau_c$:

$\dot{\tau}_c = K(\dot{\theta} - \dot{q}) \quad$
$\ddot{\tau}_c = K(\ddot{\theta} - \ddot{q})$

$$
\ddot{\tau}_c = K \left[ J_m^{-1}(\tau_m - \tau_c - B_m\dot{\theta}) - M^{-1}(\tau_c - C\dot{q} - G(q)) \right]
$$
link-side motion appears in the torque dynamics:
$$
\ddot{\tau}_c + K(J_m^{-1} + M^{-1})\tau_c = K J_m^{-1}\tau_m - K J_m^{-1}B_m\dot{\theta} + K M^{-1}(C\dot{q} + G(q))
$$

## Task b. The influence of stiffness K from motor torque $\tau_m$ to elastic torque $\tau_c$ 
### 1. $K \rightarrow \infty$
$$
\ddot{\tau}_c + K(J_m^{-1} + M^{-1})\tau_c = K J_m^{-1}\tau_m - K J_m^{-1}B_m\dot{\theta} + K M^{-1}(C\dot{q} + G(q))
$$
so the function becomes:

$$
(J_m^{-1} + M^{-1})\tau_c = J_m^{-1}\tau_m - J_m^{-1}B_m\dot{\theta} + M^{-1}(C\dot{q} + G(q))
$$
at the same time, as there is no deformation, the movement of the motor and the link is completely synchronised $\theta = q, \dot{\theta} = \dot{q}, \ddot{\theta} = \ddot{q}$.

$$
(M\ddot{q} + J_m\ddot{\theta}) + C\dot{q} + B_m\dot{\theta} + G(q) = \tau_m
$$
$$
\mathbf{(M + J_m)\ddot{q} + (C + B_m)\dot{q} + G(q) = \tau_m}
$$

### 2. $K \rightarrow 0$
from the torque dynamics above, $K \rightarrow 0$, then 

$$
\ddot{\tau}_c = 0 \implies \tau_c = 0
$$
From the :

$$
\begin{align*}
M\ddot{q} + C\dot{q} + G(q)  &= 0 \quad \text{link side}\\
J_m\ddot{\theta} + B_m\dot{\theta} &= \tau_m \quad \text{motor side}
\end{align*}
$$

The motor and the connecting rod are completely decoupled. The torque cannot be transmitted to the connecting link side $(\tau_c = 0)$ because the intermediate medium is too soft. The connecting link will simply drop straight down under its own weight, whilst the motor spins idly at the other end.