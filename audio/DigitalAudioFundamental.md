# Digital Audio fundamental
## Sound
소리란 공기압의 주기적인 변화로 이루어져있다. 흔히 아래와 같은 형태의 그래프로 나타내어진다.
![img](https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Wave_sine.svg/1920px-Wave_sine.svg.png)

출처 : [Pure tone@Wikipedia](https://en.wikipedia.org/wiki/Pure_tone)

Y축의 0의 값을 주변 공기의 평균적인 기압이다. 진폭은 기압의 변화폭을 의미하며 주기는 기압의 변화 주파수의 역수이다. 진폭은 소리의 크기와 관계있으며 주파수는 소리의 높낮이와 관계있다.

위 그래프와 같이 가장 단순한 형태를 가지는 소리를 '순음(Pure tone)'이라고 한다.

[OscillatorNode를 이용한 순음 출력 WebApp](https://webaudioapi.com/samples/oscillator/)

반대로 여러 주파수 성분이 섞인 음은 '복합음(Complex sound)'라 하여 일상 생활의 대부분의 소리가 해당한다.
## Representation of audio system
### dB?
B(Bell)은 전화기의 발명가 그레이엄 벨의 Bell 연구소에서 상대 단위로 B를 사용한 것에서 유래한다.

사회에서 일반적으로 소리의 크기를 나타낼 때 사용하는 dB는 사실 후술할 dBSPL의 약어로 절대단위이다. 그러나 공학에서 B는 기준점이 없는 한 의미가 없는 상대 단위이다.

두 전력 값을 ![P_1](https://latex.codecogs.com/svg.latex?P_1), ![P_2](https://latex.codecogs.com/svg.latex?P_2)라 할 때, B는 아래와 같은 형식으로 표현된다.

![L_{B}=\log_{10}\frac{P_1}{P_0}](https://latex.codecogs.com/svg.latex?L_{B}=\log_{10}\frac{P_1}{P_0})

계산이 편하도록 양 변에 10을 곱해 dB 단위를 정의한다.

![L_{dB}=10\log_{10}\frac{P_1}{P_0}](https://latex.codecogs.com/svg.latex?L_{dB}=10\log_{10}\frac{P_1}{P_0})

즉 ![L_{b}=\log_{10}\frac{P_1}{P_0}](https://latex.codecogs.com/svg.latex?10dB=1B) 이다.

오디오 분야에서는 전력, 음압(dBSPL), 게인(Gain), 감쇄(Attenuation), 잡음비(SNR), 다이나믹 레인지(Dynamic range)등 상대적인 크기를 간단하게 표현할 수 있어 널리 쓰이고 있다.

### dBFS
### LKFS
### Dynamic range
## Convert sound to signal
### Microphone
### Speaker
## Digital audio
### Sampling
### Compression
### Decompression
## Web audio
### History of web audio
### 