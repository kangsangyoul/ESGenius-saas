import torch
import pandas as pd
from torch.utils.data import DataLoader, TensorDataset
from app.ml_models.autoencoder import Autoencoder

def train_model(csv_path='sample_data/sensor_sample.csv', model_path='autoencoder.pt'):
    df = pd.read_csv(csv_path)
    features = df.select_dtypes(include=['float64', 'int64']).values
    features = torch.tensor(features, dtype=torch.float32)

    model = Autoencoder(features.shape[1])
    criterion = torch.nn.MSELoss()
    optimizer = torch.optim.Adam(model.parameters(), lr=0.01)
    loader = DataLoader(TensorDataset(features), batch_size=16, shuffle=True)

    for epoch in range(20):
        for batch in loader:
            inputs = batch[0]
            outputs = model(inputs)
            loss = criterion(outputs, inputs)
            optimizer.zero_grad()
            loss.backward()
            optimizer.step()
    torch.save(model.state_dict(), model_path)
