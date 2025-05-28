from fastapi import APIRouter, Response
from app.utils.pdf_generator import generate_pdf_report

router = APIRouter()

@router.get("/report/pdf")
def download_pdf():
    pdf_path = "report.pdf"
    generate_pdf_report(pdf_path)
    with open(pdf_path, "rb") as f:
        content = f.read()
    return Response(content, media_type="application/pdf", headers={
        "Content-Disposition": f"attachment; filename={pdf_path}"
    })
