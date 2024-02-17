import tensorflow as tf
from tensorflow.keras.datasets import fashion_mnist
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense
import numpy as np
from PIL import Image

# Function to preprocess the input image
def preprocess_image(image_path):
    img = Image.open(image_path).convert('L')  # Convert to grayscale
    img = img.resize((28, 28))  # Resize to 28x28 pixels
    img_array = np.array(img) / 255.0  # Normalize pixel values
    img_array = img_array.reshape(1, 28, 28, 1)  # Reshape for model input
    return img_array

# Define the categories
categories = {
    0: 'T-shirt/top',
    1: 'Trouser',
    2: 'Pullover',
    3: 'Dress',
    4: 'Coat',
    5: 'Sandal',
    6: 'Shirt',
    7: 'Sneaker',
    8: 'Bag',
    9: 'Ankle boot'
}

# Load the trained model
model = tf.keras.models.load_model('fashion_model_v2.keras')

# Load and preprocess the image
image_path = 'image.jpg'
image = preprocess_image(image_path)

# Make predictions
predictions = model.predict(image)
predicted_class = np.argmax(predictions)

# Print the predicted category
print(f'The predicted category is: {categories[predicted_class]}')
