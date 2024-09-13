# SafeNav - Navigate Fearlessly

## Description
SafeNav is an innovative platform designed to enhance women's safety, particularly when traveling alone at night. It provides safe route navigation by leveraging real-time data and crowd-sourced information. Our aim is to mitigate risks and offer peace of mind by guiding users through safer paths, sharing live locations, sending emergency alerts, and providing additional features to handle any unexpected safety situations through a web-based solution

**Navigate Fearlessly** with SafeNav and take control of your safety.

## Features
- **Safest Route Navigation**: Provides the safest route between two locations based on real-time data, user feedback, and safety factors.
- **Live Location Sharing & Emergency Alerts**: Automatically share your live location with trusted contacts and send emergency messages in case of danger.
- **Emergency Button**: Send an SOS message to the nearest police station and trusted contacts with your live location.
- **Wake Word Detection**: Use voice-activated features to initiate safety actions without unlocking your phone.
- **Safe Places Navigation**: Discover nearby safe spaces like hospitals, police stations, or women-only accommodations.
- **Voice Recording**: Record audio in threatening situations for future use or immediate help.
- **Siren Alarm**: Activate a loud siren to attract attention and deter potential threats.
- **Incident Reporting**: Report incidents of harassment or other dangers directly through the app.
- **Route Safety Feedback**: Share and view feedback on the safety of routes from other users.
- **Fake Call Feature**: Trigger a fake call to simulate talking to someone important in case you feel threatened.

## Webpages
![SafeNav Screenshot](assets/safenav_screenshot.png)

## Installation
To run SafeNav locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/talesoverfables/SafeNav.git
   ```
2. Navigate to the project directory:
   ```bash
   cd SafeNav
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
## Usage
- Open the web app and enter your start and destination points.
- The app will show the safest route based on safety ratings, nearby facilities, and other data points.
- Use the various features like Live Location Sharing, Emergency Alerts, and Incident Reporting directly from the app.

## Data and Safety Scoring
SafeNav uses a combination of the following attributes for safety scoring:
- Street Name
- Coordinates
- Safety Rating
- Number of Crimes
- Street Type
- Traffic Level
- Lighting Quality
- CCTV Coverage
- Distance to Nearest Police Station (km)
- Pedestrian Activity
- Nearby Public Spaces
- Crime Severity Index
- Police Patrolling Frequency
- Most Common Crime Types
