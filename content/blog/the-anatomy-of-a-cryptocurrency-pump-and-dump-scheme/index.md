---
title: The Anatomy of a Cryptocurrency Pump-and-Dump Scheme
date: "2021-08-24T12:00:00.121Z"
---

Professors from the world leading universities (**Harvard**, **Imperial College London**, etc.) show in this article that it's easy for everyone to make **60% profit** during **2.5 months** conservatively.

They use PumpOlymp [historical market data](https://pumpolymp.com/analytics/all-pumps) recorded during pumps:

> Starting June 2018, PumpOlymp has been gleaning pump-and-dump events organized on Telegram.  **Using their API, we acquire an initial list of historical pump-and-dump activities** over the period of June 17, 2018 and February 26, 2019. For each listed pump-and-dump event, the data set contains the pumped coin, the target exchange, the organizing Telegram channel, the coin announcement time, plus the price and volume data on the tick-by-tick level from coin announcement up to 15 minutes afterwards.
>
> <cite>J. Xu and B. Livshits, “The anatomy of a cryptocurrency pump-and-dumpscheme,” 2019, page 6.</cite>

They also make sure the data is valid:

> To validate the incoming data from PumpOlymp, we **conduct an independent manual search** for pump-and-dump channels. We are not able to add new channels to the existing channel list from PumpOlymp, and we are not aware of any other, more comprehensive pump-and-dump channel list. Therefore, we believe the channel list from PumpOlymp is a good starting point.
>
> <cite>J. Xu and B. Livshits, “The anatomy of a cryptocurrency pump-and-dumpscheme,” 2019, page 6.</cite>

Then, they build machine learning models based on that data:

> We test both **classification and logit regression models** for the prediction exercise. Specifically, for the classification model, we choose random forest (RF) with stratified sampling; for the logit regression model, we apply generalized linear model (GLM).
>
> <cite>J. Xu and B. Livshits, “The anatomy of a cryptocurrency pump-and-dumpscheme,” 2019, page 11.</cite>

The authors conclude:

> Out-of-sample tests show that a return of as high as **60%** over two and half months can be **consistently** exploited even under **conservative** assumptions.
>
> <cite>J. Xu and B. Livshits, “The anatomy of a cryptocurrency pump-and-dumpscheme,” 2019, page 15.</cite>

Although, the researchers recognize potential legal implications of organizing pump and dump schemes. They hope their reseach will increase awereness of crypto market manipulation among traders, which will lead to more sustainability in the cryptocurrency markets.

The referenced article: <a href="https://arxiv.org/abs/1811.10109" target="_blank" rel="noopener noreferrer">J. Xu and B. Livshits, “The anatomy of a cryptocurrency pump-and-dumpscheme,” 2019</a>