# Blood Cell Classification using EfficientNetB3

This project implements a **deep learning-based blood cell classification model** that accurately classifies blood cells into six different types using images from a publicly available dataset. The model leverages **EfficientNetB3** as a feature extractor and fine-tunes it for precise classification.

---

## Features

- **Dataset Handling & Preprocessing**
  - Reads images and labels from structured dataset folders.
  - Splits dataset into **train, validation, and test** sets.
  - Normalizes images and prepares batches using `ImageDataGenerator`.

- **Model Architecture**
  - Uses **EfficientNetB3** pretrained on ImageNet as base.
  - Adds **Batch Normalization**, **Dense layers** with **L1/L2 regularization**, and **Dropout** for robust training.
  - Outputs predictions for **6 blood cell classes** using softmax activation.

- **Training & Evaluation**
  - Monitors **training and validation accuracy/loss**.
  - Generates **confusion matrix** and **classification report** for detailed performance analysis.
  - Achieves **>99% accuracy** across training, validation, and test datasets.

- **Visualization**
  - Plots **sample images** from the dataset with labels.
  - Displays **training history** of loss and accuracy.
  - Confusion matrix highlights per-class performance.

---

## Blood Cell Classes

1. Basophil  
2. Eosinophil  
3. Erythroblast  
4. Lymphocyte  
5. Monocyte  
6. Platelet  

---

## Dependencies

- Python 3.x
- TensorFlow / Keras
- OpenCV
- NumPy, Pandas, Matplotlib, Seaborn
- scikit-learn
- PIL / Pillow

---

## Usage

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd blood-cell-classification
   
## Results

Achieves >99% accuracy on train, validation, and test sets.

Includes confusion matrix and classification report for detailed performance metrics.

Training history visualized for accuracy and loss over epochs.
