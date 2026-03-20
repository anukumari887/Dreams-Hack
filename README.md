# PRISM -- Predictive Risk & Income Shield for Mobility Workers

## Overview

**PRISM** is an AI-powered parametric insurance platform designed to
protect **gig delivery workers** from income loss caused by external
disruptions such as:

-   Weather conditions
-   Air pollution
-   Curfews
-   Natural calamities

Unlike traditional insurance systems that react only **after a
disruption occurs**, PRISM predicts risks **before they happen** and
proactively protects worker income.

------------------------------------------------------------------------

## Core Idea

Most parametric insurance systems trigger payouts **after a disruption
occurs**.

PRISM introduces a **Predictive Income Protection System** that:

1.  Predicts disruption risks in advance
2.  Activates adaptive insurance coverage
3.  Sends early alerts to workers
4.  Automatically compensates income loss if disruption happens

This ensures **financial stability for gig workers during unexpected
events.**

------------------------------------------------------------------------

## Key Innovation Features

### 1. Hyper-Local Disruption Engine

PRISM analyzes multiple data sources to detect disruption risks at a
**micro-zone level instead of city-level forecasting**.

Data sources include: - Weather conditions - Air pollution levels -
Traffic congestion - Historical disruption zones

This enables **accurate local risk predictions**.

------------------------------------------------------------------------

### 2. Income Prediction AI

An AI model predicts the **expected daily earnings** of each delivery
worker based on historical activity.

Compensation formula:

Expected Income − Actual Income = Compensation

This ensures **fair and personalized payouts**.

------------------------------------------------------------------------

### 3. Worker Digital Twin

Each worker has an **AI-generated digital profile** that learns:

-   Work hours
-   Preferred delivery zones
-   Disruption exposure
-   Earning patterns

This helps with:

-   Risk prediction
-   Premium calculation
-   Fraud detection

------------------------------------------------------------------------

### 4. Disruption Forecast Alerts

PRISM provides **early disruption alerts** allowing workers to:

-   Adjust work schedules
-   Avoid high-risk zones
-   Plan deliveries better

------------------------------------------------------------------------

### 5. Intelligent Fraud Detection

To prevent fraudulent claims, PRISM verifies:

-   Worker location
-   Weather validation
-   Duplicate claim detection
-   Worker activity analysis

------------------------------------------------------------------------

## Demo Flow

1.  Worker registers on the platform
2.  AI generates the worker risk profile
3.  System predicts an upcoming disruption (e.g., heavy rain)
4.  Worker receives a **risk alert notification**
5.  Disruption is simulated
6.  Worker income drops due to disruption
7.  AI calculates compensation
8.  Instant payout is triggered automatically

------------------------------------------------------------------------

## Technology Stack

### Frontend

-   React / Next.js
-   HTML
-   CSS
-   JavaScript

### Backend

-   FastAPI (Python)
-   REST APIs
-   SOAP APIs
-   React Native
-   Expogo Development Server

### AI / Machine Learning

-   Python
-   Scikit-learn
-   Pandas
-   Prophet

### Database

-   PostgreSQL

------------------------------------------------------------------------

## External APIs

PRISM integrates multiple real-time APIs:

-   Weather API
-   Air Quality API
-   Map API
-   Mock Delivery Platform API
-   Natural Calamity Alerts
-   Government Alert Systems

------------------------------------------------------------------------

## Dashboards

### Worker Dashboard

Workers can monitor:

-   Weekly insurance coverage
-   Protected income
-   Risk alerts
-   Claim status

### Admin Dashboard

Admins can monitor:

-   Active workers
-   Risk heatmaps
-   Predicted disruptions
-   Total payouts
-   Fraud alerts

------------------------------------------------------------------------

## Branding

**Product Name:** PRISM

**Full Form:**\
Predictive Risk & Income Shield for Mobility Workers

**Tagline:**\
*Insurance that protects your income before the storm hits.*
*PRISM minimizes loss, does not eliminates it.*

------------------------------------------------------------------------

## Future Enhancements

-   Mobile application for gig workers
-   Real-time payout integrations
-   Blockchain-based claim transparency
-   Advanced AI risk forecasting
-   Integration with delivery platforms (Swiggy, Zomato, Uber Eats)

------------------------------------------------------------------------



------------------------------------------------------------------------

## 👤 User Persona

### Delivery Worker Persona

**Name:** Arjun Kumar  
**Age:** 26  
**Location:** Urban city (e.g., Vadodara)  
**Occupation:** Food Delivery Partner (Swiggy/Zomato)

###  Working Hours
Arjun works around **8–10 hours per day**, mainly during:
- Lunch hours (12 PM – 3 PM)  
- Evening/Night peak (6 PM – 10 PM)  

###  Earning Pattern
- **Earning per day:** ₹500 – ₹850  
- **Average weekly earning:** ₹3,500 – ₹5,000  

###  Issues Faced During Delivery (Natural Problems Only)

1. **Heavy Rain**
   - Reduces delivery speed  
   - Increases risk of accidents  
   - Fewer orders during extreme conditions  

2. **Extreme Heat**
   - Causes dehydration and fatigue  
   - Reduces working efficiency  

3. **Air Pollution**
   - Long exposure leads to breathing issues  
   - Affects stamina over time  

4. **Flooding / Waterlogging**
   - Roads become unsafe or inaccessible  
   - Delays or cancels deliveries  

5. **Natural Calamities (Storms, Cyclones, etc.)**
   - Work completely stops  
   - No income during such events  

###  Behavior & Needs
- Prefers working in safe weather conditions  
- Avoids going out during extreme situations  
- Needs **income stability during natural disruptions**  
- Would benefit from **early warnings and compensation support**



------------------------------------------------------------------------

------------------------------------------------------------------------

##  Adversarial Defense & Anti-Spoofing Strategy

To address **GPS failures, spoofing, and unreliable location data**, PRISM implements a **Multi-Signal Trust & Verification Engine** that ensures secure and accurate claim validation.

###  Core Idea: Trust Score (0–100)

Instead of relying on a single data source (GPS), PRISM evaluates **multiple independent signals** to generate a **Trust Score** for every claim.

This ensures:
- High reliability  
- Fraud resistance  
- Real-world robustness  

---

###  1. Behavioral AI Verification

PRISM builds a **digital behavior profile (Worker Digital Twin)** using:

- Historical working hours  
- Movement patterns  
- Delivery activity trends  

~ The system checks:
“Is this behavior normal for this worker?”

If significant deviation is detected → **Trust Score decreases**

---

###  2. Sensor Fusion Validation (Beyond GPS)

To handle **GPS spoofing**, PRISM uses:

- Accelerometer  
- Device motion data  

~ Logic:
- Real-world delivery → irregular movement (stops, turns, speed changes)  
- Spoofed GPS → smooth or inconsistent movement  

Mismatch between GPS and sensor signals →  **Flagged as suspicious**

---

###  3. Environmental & API Cross-Verification

PRISM cross-checks claims using:

- Weather API  
- Air Quality API  
- Disaster alerts  

~ Example:
- Worker claims heavy rain disruption  
- But API shows clear weather  

→ Trust Score decreases

---

###  4. Crowd-Based Anomaly Detection

PRISM validates claims using **nearby worker data**:

~ Logic:
- Multiple workers in same zone  
- Only one reports disruption  

→ Potential anomaly → Trust Score decreases  

---

###  5. Network Consistency Check

To improve reliability, PRISM also validates:

- Network signal patterns  
- Region/IP consistency  

~ Example:
- GPS says “remote flood zone”  
- But network conditions are stable  

→ Suspicious activity detected

---

###  Trust Score Decision System

- **80 – 100:**  Approved (Valid Claim)  
- **50 – 80:**  Needs Review  
- **Below 50:**  Rejected (High Risk of Fraud)  

---

###  Why This Matters

This system ensures:

- Protection against **GPS spoofing attacks**  
- Reliable operation even during **GPS failure scenarios**  
- Fair compensation using **multi-source validation**  
- Scalable fraud detection using AI

- “We moved from GPS-based verification to a multi-signal trust-based system that uses behavioral AI, sensor validation, and crowd intelligence to prevent spoofing.”

## License

This project is created for **innovation, research, and hackathon
demonstration purposes.**

