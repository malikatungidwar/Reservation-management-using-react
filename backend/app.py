# from flask import Flask, request, jsonify
# from sklearn.linear_model import LinearRegression
# import numpy as np
# import pandas as pd

# app = Flask(__name__)

# # Sample data (you can replace this with your actual data)
# # This data includes last week's sales, event day, and sales amount
# data = {
#     "last_week_sales": [100, 150, 200, 250, 300, 120, 180],
#     "event_day": [0, 1, 0, 1, 0, 0, 1],  # 1 if event day, 0 otherwise
#     "day_of_week": [1, 2, 3, 4, 5, 6, 7],  # Monday=1, Tuesday=2, ..., Sunday=7
#     "sales": [110, 160, 210, 275, 290, 130, 200]
# }

# # Convert data to DataFrame for training
# df = pd.DataFrame(data)

# # Create and train the Linear Regression model
# X = df[["last_week_sales", "event_day", "day_of_week"]]
# y = df["sales"]
# model = LinearRegression()
# model.fit(X, y)

# @app.route('/predict', methods=['POST'])
# def predict_sales():
#     try:
#         # Get the input data from the request
#         input_data = request.json
#         last_week_sales = input_data["last_week_sales"]
#         event_day = input_data["event_day"]
#         day_of_week = input_data["day_of_week"]

#         # Prepare the input for prediction
#         input_features = np.array([[last_week_sales, event_day, day_of_week]])

#         # Make prediction using the trained model
#         predicted_sales = model.predict(input_features)

#         # Return the predicted sales
#         return jsonify({"predicted_sales": predicted_sales[0]})
    
#     except Exception as e:
#         return jsonify({"error": str(e)}), 400

# if __name__ == '__main__':
#     app.run(debug=True)
