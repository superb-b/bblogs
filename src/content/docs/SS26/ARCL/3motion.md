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
u &= g(q) + K_P\tilde{q} - K_D\dot{q}\\
\tilde{q} &= q_d - q
\end{align*}
$$
The closed-loop(time independent) dynamics is:
$$
M(q)\ddot{q} + C(q,\dot{q})\dot{q} + F\dot{q}  = K_P\tilde{q} - K_D\dot{q}
$$

不管控制律，在不通电时($\tau = 0$)而且没有摩擦阻尼($F=0$)时，作为独立的物理系统，总共的机械能是

$$
E = \text{动能} + \text{势能} = \frac{1}{2}\dot{q}^T B(q)\dot{q} + P(q)
$$

$$V(\dot{q}, \tilde{q}) = \underbrace{\frac{1}{2}\dot{q}^T B(q)\dot{q}}_{\text{真实的物理动能}} + \underbrace{\frac{1}{2}\tilde{q}^T K_P \tilde{q}}_{\text{人为注入的虚拟人工势能}}$$

* 第一项（动能项）：衡量系统关节在运动时的能量，只要机械臂在晃动（$\dot{q} \neq 0$），这一项就大于 0。
* 第二项（人工势能项）：我们在每个关节上都虚拟地绑上了一根胡克定律弹簧，弹簧的刚度系数就是控制器里的比例增益 $K_P$。当机械臂偏离期望位置时（$\tilde{q} \neq 0$），这根虚拟弹簧就会蓄积能量（$\frac{1}{2}\tilde{q}^T K_P \tilde{q} > 0$）。

$$\frac{d}{dt} \left( \frac{1}{2}\dot{q}^T B(q)\dot{q} \right) = \underbrace{\frac{1}{2}\ddot{q}^T B(q)\dot{q}}_{\text{对第一项求导}} + \underbrace{\frac{1}{2}\dot{q}^T \dot{B}(q)\dot{q}}_{\text{对中间项求导}} + \underbrace{\frac{1}{2}\dot{q}^T B(q)\ddot{q}}_{\text{对第三项求导}}$$


$$\dot{V} = \dot{q}^T (K_P \tilde{q} - K_D \dot{q} - C(q,\dot{q})\dot{q} - F\dot{q}) + \frac{1}{2}\dot{q}^T \dot{B}(q)\dot{q} - \dot{q}^T K_P \tilde{q}$$

$-\dot{q}^T C(q,\dot{q})\dot{q} + \frac{1}{2}\dot{q}^T \dot{B}(q)\dot{q} = \dot{q}^T \left( \frac{1}{2}\dot{B} - C \right) \dot{q}$。
在机器人动力学中，有一个著名的反对称物理定理：矩阵 $\dot{B}(q) - 2C(q,\dot{q})$ 是一个反对称矩阵。这意味着对任意向量 $\dot{q}$，$\dot{q}^T \left( \frac{1}{2}\dot{B} - C \right) \dot{q} \equiv 0$ 严格恒等于 0！

$$\dot{V} = -\dot{q}^T (F + K_D)\dot{q}$$
阻尼一直在吸能，这一项是严格负半定（s.n.d）的。如果机械臂还没回到目标点（$\tilde{q} \neq 0$），但是它在某一瞬间由于某种原因停住不动了（$\dot{q} = 0$），那么代入上式就会得到 $\dot{V} = 0$。根据最普通的李雅普诺夫第二方法，我们只能证明系统是稳定的（不会发散），但无法证明它一定会收敛到目标点（渐近稳定）。因为从数学上看，系统可能会卡在某个 $\dot{q}=0$ 但 $\tilde{q} \neq 0$ 的非目标位置。

如果系统想在某个非目标点永远停住（$\dot{q}=0$ 且 $\ddot{q}=0$），物理学和控制器不允许：因为只要位置没对准（$\tilde{q} \neq 0$），虚拟弹簧势能就会爆发，产生一个不为 0 的控制扭矩 $\tau = K_P \tilde{q}$ 把系统重新推开！唯有当系统精确到达目标点（$\tilde{q}=0$ 且 $\dot{q}=0$）时，控制力才为 0，系统才能稳稳地停住。

$\dot{V}=0$ 内部包含的最大不变集只有一个孤立的点，那就是原点。根据 LaSalle 不变原理，机械臂系统在 PD 控制器的驱使下，其状态轨迹最终必然会渐近收敛到位置误差为 0、速度为 0 的唯一终点。

## Inverse Dynamic Control

机械臂之所以难控制，是因为它具有高度非线性的动态特性（例如关节动起来时的向心力/哥氏力 $C(q, \dot{q})\dot{q}$ 以及随姿态变化的重力项 $g(q)$）。计算力矩控制的核心思想是“精确反向补偿”：

$$
\tau = M(q) \left[ \ddot{q}_d + K_v \dot{\tilde{q}} + K_p \tilde{q} \right] + C(q,\dot{q})\dot{q} + g(q)
$$

控制器在计算电机的扭矩 $\tau$ 时，直接把非线性项 $C\dot{q}$ 和 $g(q)$ 计算出来并在反馈中加进去，从而在物理上抵消它们。接着，它利用惯性矩阵 $M(q)$ 的逆（乘以 $M(q)$），把原本复杂的机械臂动力学强行“解耦并线性化”成了一个完美的二阶线性系统：

$$
\ddot{\tilde{q}} + K_v \dot{\tilde{q}} + K_p \tilde{q} = 0 
$$

由于这个闭环误差动力学变成了全线性的，各关节之间不再互相干扰，我们可以非常简单地通过选择正定的对角矩阵 $K_p$ 和 $K_v$ 来决定系统收敛的快慢。

$V(\tilde{q}, \dot{\tilde{q}})$：

$$
V(\tilde{q}, \dot{\tilde{q}}) = \frac{1}{2} \begin{bmatrix} \tilde{q} \\ \dot{\tilde{q}} \end{bmatrix}^T \begin{bmatrix} K_p + \varepsilon K_v & \varepsilon I \\ \varepsilon I & I \end{bmatrix} \begin{bmatrix} \tilde{q} \\ \dot{\tilde{q}} \end{bmatrix} \tag{3.23}
$$

很多人第一眼看到这个函数会觉得莫名其妙：既然系统都已经被线性化了，为什么不用普通的能量形式 
$V = \frac{1}{2}\dot{\tilde{q}}^T\dot{\tilde{q}} + \frac{1}{2}\tilde{q}^T K_p \tilde{q}$，而要搞一个带 $\varepsilon$ 的交叉项矩阵呢？

* 普通能量形式的局限： 如果选普通的 $V = \frac{1}{2}\dot{\tilde{q}}^T\dot{\tilde{q}} + \frac{1}{2}\tilde{q}^T K_p \tilde{q}$，对时间求导后，由于 $\ddot{\tilde{q}} = -K_v\dot{\tilde{q}} - K_p\tilde{q}$，代入后会得到 $\dot{V} = -\dot{\tilde{q}}^T K_v \dot{\tilde{q}}$。这依然是负半定的（因为缺少 $-\tilde{q}^T \tilde{q}$ 项），我们又必须像前面一样动用 LaSalle 不变原理才能证明位置收敛。

* 带交叉项的二次型设计： 为了不使用 LaSalle，直接一步到位证明全局指数收敛（严格负定 $\dot{V} < 0$），控制理论学家设计了这个带有位置与速度交叉乘积项（即 $\varepsilon \tilde{q}^T \dot{\tilde{q}}$）的矩阵。

* 条件 $\lambda_{\min}\{K_v\} > \varepsilon > 0$ 的作用： 为了确保这个李雅普诺夫函数 $V$ 本身是严格正定的，中间的块矩阵必须满足正定条件。通过舒尔补（Schur Complement）可以很容易证出，只要 $\varepsilon$ 足够小（小于 $K_v$ 的最小特征值），这个矩阵就一定是正定的。当对这个带有交叉项的 $V$ 求导时，交叉项会释放出 $-\varepsilon \tilde{q}^T K_p \tilde{q}$ 这一项，从而让 $\dot{V}$ 中同时拥有 $-\dot{\tilde{q}}^T(\dots)\dot{\tilde{q}}$ 和 $-\tilde{q}^T(\dots)\tilde{q}$，直接构造出严格负定，省去了 LaSalle 原理的证明步骤！