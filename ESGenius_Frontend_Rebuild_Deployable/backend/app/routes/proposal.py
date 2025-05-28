from fastapi import APIRouter, Response
from app.utils.generate_proposal import generate_proposal

router = APIRouter()

@router.get("/proposal/pdf")
def generate_proposal_pdf():
    filepath = "proposal_report.pdf"
    generate_proposal(filepath)
    with open(filepath, "rb") as f:
        return Response(f.read(), media_type="application/pdf", headers={
            "Content-Disposition": f"attachment; filename={filepath}"
        })
