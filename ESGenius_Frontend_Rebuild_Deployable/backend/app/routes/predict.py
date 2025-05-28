from fastapi import APIRouter
from datetime import datetime, timedelta
import random

router = APIRouter()

@router.get("/predict")
def get_prediction():
    result = {
        "equipment_id": "INV_01",
        "expected_failure_date": (datetime.now() + timedelta(days=random.randint(2, 10))).strftime('%Y-%m-%d'),
        "anomaly_score": round(random.uniform(0.01, 0.95), 3),
        "confidence": round(random.uniform(85.0, 98.0), 2)
    }
    return result
