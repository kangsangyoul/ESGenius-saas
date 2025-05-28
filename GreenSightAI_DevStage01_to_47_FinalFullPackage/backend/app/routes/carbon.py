from fastapi import APIRouter, Body

router = APIRouter()

EMISSION_FACTORS = {
    "solar": 0.03,
    "wind": 0.02,
    "diesel": 0.7
}

@router.post("/carbon/calculate")
def calculate_carbon(data: dict = Body(...)):
    equipment_type = data.get("type", "solar")
    runtime = float(data.get("runtime", 0))  # in hours
    output = float(data.get("output", 0))    # in kW

    factor = EMISSION_FACTORS.get(equipment_type, 0.03)
    emission = round(runtime * output * factor, 2)

    return {
        "equipment_type": equipment_type,
        "runtime_hours": runtime,
        "output_kw": output,
        "emission_kgco2": emission
    }
