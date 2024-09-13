import random
import pandas as pd

# Generate dataset
num_streets = 1200
streets_data = []

for i in range(num_streets):
    # Generate random latitude and longitude coordinates (for streets in India)
    latitude = random.uniform(8.0, 37.0)  # India's approximate latitudinal range
    longitude = random.uniform(68.0, 97.0)  # India's approximate longitudinal range
    
    # Generate random safety rating (1-5)
    safety_rating = random.randint(1, 5)
    
    # Generate number of crimes based on safety rating (fewer crimes in higher-rated streets)
    if safety_rating == 1:
        num_crimes = random.randint(50, 200)
    elif safety_rating == 2:
        num_crimes = random.randint(30, 100)
    elif safety_rating == 3:
        num_crimes = random.randint(10, 50)
    elif safety_rating == 4:
        num_crimes = random.randint(5, 30)
    else:
        num_crimes = random.randint(0, 10)
    
    # Append data to list
    streets_data.append([f"Street_{i+1}", latitude, longitude, safety_rating, num_crimes])

# Create a DataFrame
df = pd.DataFrame(streets_data, columns=["Street Name", "Latitude", "Longitude", "Safety Rating", "Number of Crimes"])

# Save dataset to CSV
df.to_csv("indian_streets_safety_data.csv", index=False)

print("Dataset created successfully.")
