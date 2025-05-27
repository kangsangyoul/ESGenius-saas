import torch
import pandas as pd
from app.ml_models.autoencoder import Autoencoder

def predict_anomaly(csv_path='sample_data/sensor_sample.csv', model_path='autoencoder.pt'):
    df = pd.read_csv(csv_path)
    features = df.select_dtypes(include=['float64', 'int64']).values
    features = torch.tensor(features, dtype=torch.float32)

    model = Autoencoder(features.shape[1])
    model.load_state_dict(torch.load(model_path))
    model.eval()

    with torch.no_grad():
        outputs = model(features)
        loss = torch.mean((outputs - features)**2, dim=1)
        scores = loss.numpy()

    return [{"row": i, "anomaly_score": round(score, 4)} for i, score in enumerate(scores)]
