---
title: Chapter3. Motion Control
description: Monday & Wenesday 10am, GBR
---
<P style="color:grey;" align="right">
Given by: Dr. Hamid Sadeghian
</P>

## Motion Control of Robot Manipulators
* **Kinematic control**: providing reference trajectory in the joint space from the task space and follow independently by each motor
* **Dynamic control**: calculate the command torque from the task directly and apply to joint motors  simulatenously

Task specification $\rightarrow$ end-effector motion and forces $\rightarrow$ operational space.

Control actions $\rightarrow$ joint actuator generalized forces $\rightarrow$ joint space.

### Operational space control
Formulation inverse kinematics is embedded into the feedback control loop. Its advantage lies in its ability to act directly on errors in workspace variables.

### Joint space control
Manipulator inverse kinematics is solved to transform the motion requirements $x_d$ from the operational space into the corresponding motion $q_d$ in the joint space. Then, a joint space control control scheme is designed that allows the actual motion q to track the reference input.

# Basic methods
Robot dynamics: 
$$
M(q)\ddot{q} + C(q,\dot{q})\dot{q} + F\dot{q} + g(q) = \tau
$$
## PD+gravity Control
**constant** desired configuration $q_d$. The following coontroller brings the system to the desired posture:
$$
\begin{align*}
\tau &= g(q) + K_P\tilde{q} - K_D\dot{q}\\
\tilde{q} &= q_d - q
\end{align*}
$$
The closed-loop(time independent) dynamics is:
$$
M(q)\ddot{q} + C(q,\dot{q})\dot{q} + F\dot{q}  = K_P\tilde{q} - K_D\dot{q}
$$
## Inverse Dynamic Control
